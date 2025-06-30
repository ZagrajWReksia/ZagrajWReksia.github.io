import {StrictMode, useEffect} from 'react'
import {createRoot} from 'react-dom/client'
import './common.css'
import {BrowserRouter, Route, Routes, useLocation} from "react-router";
import Index from "./pages/player";
import {GameDetailsPage} from "./pages/game";
import App from "./pages/main";
import About from "./pages/about";
import './i18n';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/game/:gameId" element={<GameDetailsPage/>} />
                <Route path="/play/:gameId" element={<Index/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
