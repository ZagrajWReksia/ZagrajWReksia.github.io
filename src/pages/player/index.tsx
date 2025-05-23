import {RefObject, useEffect, useRef, useState} from 'react'
import {createGamePlayer, FileLoaders, GamePlayerInstance} from "reksioengine";
import styled from "styled-components";
import {Fullscreen} from "lucide-react";
import {Button} from "../../components/button.tsx";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";

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

function Index() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const gameRef = useRef(null)
    const playerRef: RefObject<GamePlayerInstance | null> = useRef(null)
    const [ready, setReady] = useState<boolean>(false)

    const onReady = async () => {
        if (gameRef.current === null || playerRef.current !== null) {
            return
        }
        setReady(true)
    }

    useEffect(() => {
        if (!ready) {
            return
        }

        const instance = createGamePlayer(gameRef.current, {
            fileLoader: new FileLoaders.ListingJSONUrlFileLoader('https://iso.zagrajwreksia.pl/game-assets/reksioiskarbpiratow/listing.json'),
            onExit: () => document.exitFullscreen()
        })

        if (instance !== null) {
            playerRef.current = instance
        }

        return () => {
            if (playerRef.current) {
                playerRef.current?.destroy()
                playerRef.current = null
            }
        }
    }, [ready])

    const enterFullscreen = () => {
        if (!gameRef.current) {
            return
        }
        (gameRef.current as Element).requestFullscreen()
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
            {/*<Button><FileDown size={15} /> Download save file</Button>*/}
            {/*<Button><FileUp size={15} /> Load save file</Button>*/}
        </Controls>

        <Footer>
            Powered by <a href="https://github.com/ReksioEngine/ReksioEngine">ReksioEngine</a>
        </Footer>
    </Container>
}

export default Index
