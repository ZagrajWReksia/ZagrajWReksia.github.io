import {RefObject, useEffect, useRef} from 'react'
import {createGamePlayer, FileLoaders, GamePlayerInstance} from "reksioengine";
import styled from "styled-components";
import {FileDown, FileUp, Fullscreen} from "lucide-react";
import {Button} from "../../components/button.tsx";
import {Footer} from "../../components/footer.tsx";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Controls = styled.div`
    border-radius: 10px;
    display: flex;
    gap: 10px;
`

function Index() {
    const gameRef = useRef(null)
    const playerRef: RefObject<GamePlayerInstance | null> = useRef(null)

    useEffect(() => {
        if (gameRef.current === null) {
            return
        }

        const instance = createGamePlayer(gameRef.current, {
            fileLoader: new FileLoaders.ListingJSONUrlFileLoader('https://iso.zagrajwreksia.pl/game-assets/reksioiskarbpiratow/listing.json')
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
    }, [])

    return <Container>
        <a href="/"><Button style={{'marginBottom': '10px', textDecoration: 'none'}}>Powrót</Button></a>

        <div ref={gameRef}></div>
        <Controls>
            <Button><Fullscreen size={15}/> Fullscreen</Button>
            <Button><FileDown size={15} /> Download save file</Button>
            <Button><FileUp size={15} /> Load save file</Button>
        </Controls>

        <Footer/>
    </Container>
}

export default Index
