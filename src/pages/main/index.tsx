import './style.css';
import styled from "styled-components";
import {Link} from "react-router";
import { ReactNode } from "react";
import {FancyHeading, SubTitle} from "../../components/text.tsx";
import {Box} from "../../components/box.tsx";
import {LanguageSelector} from "../../components/language-selector.tsx";
import {Footer} from "../../components/footer.tsx";
import {Trans, useTranslation} from "react-i18next";

const CoverContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

const CoverWrapper = styled.div`
    background-color: var(--container-background);
    border-radius: 10px;
    width: 200px;

    transition: scale ease-in-out 100ms;
    &:not(.disabled):hover {
        scale: 1.1;
    }

    &.disabled {
        opacity: 0.5;
        filter: grayscale(0.5);
    }
`;

const CoverImage = styled.img`
    max-height: 300px;
    border-radius: 3%;
    width: 200px;
    height: 270px;
    object-fit: cover;
`;

const CoverTitle = styled.div`
    max-width: 200px;
    font-weight: bold;
    padding: 0 5px 5px;
    text-align: center;
`;

const Background = styled.div`
    border-radius: 10px;
`;

const Message = styled.div`
    padding: 20px;
    text-align: left;
`;

const GameSectionContainer = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;

interface CoverProps {
    src: string;
    className?: string;
    children?: ReactNode;
}

const Cover = ({ src, className, children }: CoverProps) => (
    <CoverWrapper className={className}>
        <CoverImage src={src} className={className} />
        <CoverTitle>{children}</CoverTitle>
    </CoverWrapper>
);

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

interface GameSectionProps {
    title?: string;
    subtitle?: string;
    children: ReactNode;
    note?: string;
    style?: React.CSSProperties;
}

const GameSection = ({ title, subtitle, children, note, style }: GameSectionProps) => (
    <GameSectionContainer style={style}>
        {title && <FancyHeading text={title} />}
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
        <CoverContainer>
            {children}
        </CoverContainer>
        {note && <div style={{ marginTop: '30px' }}>{note}</div>}
    </GameSectionContainer>
);

function App() {
    const { t } = useTranslation();

    return (
        <Background>
            <Message>
                <Logo />
                <LanguageSelector />

                <br /><br />

                <Box>
                    {t('mainAboutHello')}<br />
                    <Link to="/about">{t('mainAboutReadMore')}</Link><br />
                    <br />
                    {t('mainAboutBoombit')}
                    <br />
                    <br />
                    {t('mainAboutMoreAboutGames')}
                    <br />
                    <Trans i18nKey="mainAboutLinkAndLink">
                        <a href="https://www.przygody-reksia.pl/">Przygody Reksia HUB</a> oraz na <a href="https://reksio.fandom.com/wiki/Reksio_Wiki">Reksiopedii</a>
                    </Trans>
                </Box>
            </Message>

            <GameSection
                title={t('adventuresOfRex')}
                subtitle={t('mainSeries')}
            >
                <Link to="/game/skarbpiratow">
                    <Cover src="/covers/reksioiskarbpiratow.jpg">
                        {t('reksioAndPirates')}<br/>
                        🇵🇱 🇷🇴 🇷🇺 🇨🇿 🇭🇺 🇬🇧*<br/>
                        {t('playInBrowser')}
                    </Cover>
                </Link>
                <Link to="/game/ufo">
                    <Cover src="/covers/reksioiufo.jpg">
                        {t('reksioAndUFO')}<br/>
                        🇵🇱 🇷🇴 🇷🇺 🇨🇿 🇭🇺
                    </Cover>
                </Link>
                <Link to="/game/czarodzieje">
                    <Cover src="/covers/reksioiczarodzieje.jpg">
                        {t('reksioAndWizards')}<br/>
                        🇵🇱 🇷🇴 🇷🇺
                    </Cover>
                </Link>
                <Link to="/game/wehikul">
                    <Cover src="/covers/reksioiwehikulczasu.jpg">
                        {t('reksioAndTimeMachine')}<br/>
                        🇵🇱 🇷🇴 🇷🇺
                    </Cover>
                </Link>
                <Link to="/game/nemo">
                    <Cover src="/covers/reksioikapitannemo.jpg">
                        {t('reksioAndCaptainNemo')}<br/>
                        🇵🇱 🇷🇴 🇷🇺
                    </Cover>
                </Link>
            </GameSection>

            <GameSection
                subtitle={t('extras')}
                note={'* ' + t('englishVersionIsFanMade')}
                style={{ marginTop: '30px' }}
            >
                <Link to="/game/inaction">
                    <Cover src="/covers/reksioikreteswakcji.jpg">
                        {t('reksioAndKretesInAction')}<br/>
                        🇵🇱 🇷🇴 🇷🇺
                    </Cover>
                </Link>
                <Link to="/game/thirddimension">
                    <Cover src="/covers/reksioikretestajemnicatrzeciegowymiaru.jpg">
                        {t('reksioAndKretesTheSecret')}<br/>
                        🇵🇱 🇷🇴 🇷🇺
                    </Cover>
                </Link>
            </GameSection>

            <GameSection
                title={t('educationalGames')}
                subtitle={t('forVerySmallPlayers')}
                style={{ marginTop: '100px', paddingBottom: '200px' }}
            >
                <div>
                    <div style={{textAlign: 'center', marginBottom: '30px', fontWeight: 'bold'}}>
                        Work in progress
                    </div>
                    <div>
                        <img src="/cones.png" alt="cones"/>
                    </div>
                </div>
            </GameSection>

            <Footer/>
        </Background>
    );
}

export default App;