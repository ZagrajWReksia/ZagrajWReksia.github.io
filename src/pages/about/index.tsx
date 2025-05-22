import './style.css';
import styled from "styled-components";
import {Box} from "../../components/box.tsx";
import {LanguageSelector} from "../../components/language-selector.tsx";

const Background = styled.div`
    border-radius: 10px;
`;

const Message = styled.div`
    padding: 20px;
    text-align: left;
`;

const Logo = () => (
    <img
        src="/logo.png"
        style={{
            display: 'block',
            width: '100%',
            maxWidth: '400px',
            margin: 'auto',
            marginBottom: '10px'
        }}
        alt="logo"
    />
);


function About() {
    return (
        <Background>
            <Message>
                <Logo />
                <LanguageSelector />

                <br /><br />

                <Box>
                    Witaj na zagrajwreksia.pl - stronie mającej na celu archiwizacje wszelkich możliwych gier o reksiu (i ich wersji), umożliwienie ich pobrania oraz zagrania w niektóre z nich bezpośrednio w przeglądarce (ReksioEngine).<br />
                    <a href="#">Przeczytaj więcej o projekcie</a><br />
                    <br />
                    Firmie BoomBit (AidemMedia) skończyła się licencja na wykorzystywanie postaci Reksia przez co nie są w stanie jej już sprzedawać i nie mają nic przeciwko pobieraniu gier.
                    <br />
                    <br />
                    Więcej informacji o grach z serii <b>Przygody Reksia</b> możesz znaleźć na: <br />
                    <a href="https://www.przygody-reksia.pl/">Przygody Reksia HUB</a> oraz na <a href="https://reksio.fandom.com/wiki/Reksio_Wiki">Reksiopedii</a>
                </Box>
            </Message>
        </Background>
    );
}

export default About;