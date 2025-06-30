import {RefObject, useEffect, useMemo, useRef, useState} from 'react'
import {createGamePlayer, FileLoaders, GamePlayerInstance, SaveFileManager} from "reksioengine";
import styled from "styled-components";
import {FileDown, FileUp, Fullscreen} from "lucide-react";
import {Button} from "../../components/button.tsx";
import {useNavigate, useParams} from "react-router";
import {useTranslation} from "react-i18next";
import {event} from "../../analytics.ts";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const GameContainer = styled.div`
    width: 800px;
    height: 600px;
    margin-bottom: 10px;
    
    &:fullscreen {
        display: flex;
        justify-content: center;
        align-items: normal;
    }

    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    font-family: sans-serif;
    font-size: 24px;
`

const Controls = styled.div`
    border-radius: 10px;
    display: flex;
    gap: 10px;
`

const Footer = styled.footer`
    text-align: center;
    padding: 20px;
`

interface Game {
    id: string;
    lang: string;
    listingUrl: string;
}

const games: Record<string, Game> = {
    "risp-ro": {
        id: 'risp',
        lang: 'ro',
        listingUrl: "https://iso.zagrajwreksia.pl/game-assets/risp-romanian/listing.json"
    },
    "risp-pl": {
        id: 'risp',
        lang: 'pl',
        listingUrl: "https://iso.zagrajwreksia.pl/game-assets/reksioiskarbpiratow/listing.json"
    }
}

function Index() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const gameRef = useRef(null)
    const playerRef: RefObject<GamePlayerInstance | null> = useRef(null)
    const [ready, setReady] = useState<boolean>(false)
    const playthroughId = useMemo(() => crypto.randomUUID(), [])

    const params = useParams() as { gameId: string };
    const gameId = params.gameId;
    const game = games[gameId];

    const onReady = async () => {
        if (gameRef.current === null || playerRef.current !== null) {
            return
        }
        setReady(true)
    }

    const migrateSaveFile = () => {
        const oldSaveFile = localStorage.getItem('saveFile')
        if (oldSaveFile !== null) {
            localStorage.setItem(`${game.id}-savefile`, oldSaveFile)
            localStorage.removeItem('saveFile')
        }
    }

    useEffect(() => {
        if (!ready) {
            return
        }

        migrateSaveFile()
        const instance = createGamePlayer(gameRef.current, {
            fileLoader: new FileLoaders.ListingJSONUrlFileLoader(game.listingUrl),
            saveFile: SaveFileManager.fromLocalStorage(`${game.id}-savefile`),
            onExit: () => document.exitFullscreen(),
            onSceneChange: (next, previous) => {
                event('player_scene_change', {
                    playthroughId,
                    game: game.id,
                    nextScene: next,
                    previousScene: previous
                })
            }
        })

        if (instance !== null) {
            instance.start()
            playerRef.current = instance

            event('player_started', {
                playthroughId,
                game: game.id
            })
        }

        return () => {
            if (playerRef.current) {
                playerRef.current?.destroy()
                playerRef.current = null
            }
        }
    }, [ready, playthroughId])

    const enterFullscreen = () => {
        if (!gameRef.current) {
            return
        }
        (gameRef.current as Element).requestFullscreen()
    }

    const exportSaveFile = () => {
        if (!playerRef.current) {
            return
        }

        const data = playerRef.current.exportSaveFile()
        const blob = new Blob([data], { type: 'text/plain' })
        const fileURL = URL.createObjectURL(blob)
        const downloadLink = document.createElement('a')
        downloadLink.href = fileURL
        downloadLink.download = `${playerRef.current.currentScene || 'SaveFile'}_${game.id.toUpperCase()}_${game.lang.toUpperCase()}_${new Date().toISOString()}.ini`
        downloadLink.click()
        URL.revokeObjectURL(fileURL)
    }

    const importSaveFile = () => {
        if (!playerRef.current) {
            return
        }

        const input = document.createElement('input')
        input.type = 'file'

        input.onchange = (event) => {
            const target = event.target as HTMLInputElement;
            if (target.files === null) {
                return
            }

            const file = target.files[0]
            const reader = new FileReader()
            reader.readAsText(file, 'UTF-8')
            reader.onload = (readerEvent) => {
                if (readerEvent.target !== null && typeof readerEvent.target.result === "string") {
                    playerRef.current?.importSaveFile(readerEvent.target.result)
                }
            }
        }

        input.click()
    }

    return <Container>
        <Button
            onClick={() => {navigate(-1)}}
            style={{marginBottom: '10px'}}
        >
            {t('goBack')}
        </Button>

        <GameContainer ref={gameRef} onClick={onReady}>
            {!ready && <div>{t('playerPressHereToStart')}</div>}
        </GameContainer>
        <Controls>
            <Button onClick={enterFullscreen}><Fullscreen size={15}/> {t('playerEnterFullscreen')}</Button>
            <Button
                onClick={exportSaveFile}
                disabled={!ready}
            >
                <FileDown size={15} /> {t('playerExportSaveFile')}
            </Button>
            <Button
                onClick={importSaveFile}
                disabled={!ready}
            >
                <FileUp size={15} /> {t('playerImportSaveFile')}
            </Button>
        </Controls>

        <Footer>
            Powered by <a href="https://github.com/ReksioEngine/ReksioEngine">ReksioEngine</a>
        </Footer>
    </Container>
}

export default Index
