import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './common.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Index from "./pages/player";
import {GameDetailsPage} from "./pages/game";
import App from "./pages/main";
import About from "./pages/about";
import './i18n';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/game/:gameId" element={<GameDetailsPage/>} />
                <Route path="/play/:game" element={<Index/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
