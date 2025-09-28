import './style.css';
import styled from "styled-components";
import {Link} from "react-router";
import {ReactNode} from "react";
import {FancyHeading, SubTitle} from "../../components/text.tsx";
import {Box} from "../../components/box.tsx";
import {LanguageSelector} from "../../components/language-selector.tsx";
import {Footer} from "../../components/footer.tsx";
import {Trans, useTranslation} from "react-i18next";
import {gamesByGroup, Index, Language} from "../game/games.ts"
import Flag from "../../components/flag.tsx";
import {event} from "../../analytics.ts";

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

    &:hover {
        scale: 1.1;
    }
`;

const CoverImage = styled.img`
    max-height: 300px;
    border-radius: 3%;
    width: 200px;
    height: 270px;
`;

const CoverImageWrapper = styled.div<{year: number}>`
    position: relative;
    &::after {
        content: "${props => props.year}";
        position: absolute;
        font-size: 10px;
        background: rgba(0, 0, 0, 1);
        padding: 1px 3px;
        border-radius: 5px;
        right: 5px;
        bottom: 10px;
    }
`

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
    year: number;
    className?: string;
    children?: ReactNode;
}

const Cover = ({src, year, className, children}: CoverProps) => (
    <CoverWrapper className={className}>
        <CoverImageWrapper year={year}>
            <CoverImage src={src} className={className}/>
        </CoverImageWrapper>
        <CoverTitle>{children}</CoverTitle>
    </CoverWrapper>
);

const GameEntry = ({id, game}: { id: string, game: Index }) => {
    const {t} = useTranslation();
    const playInBrowser = game.languages.some((language: Language) => language.downloads.some(download => download.name == 'playInBrowser'))

    return (
        <Link to={`/game/${id}`}>
            <Cover src={game.coverImage} year={game.year}>
                {t(game.title)}<br/>
                {game.languages.map((language: Language) => {
                    return <span><Flag code={language.langCode} gray={language.lost ?? false}/>{!language.official ? '*' : ''} </span>
                })}
                {playInBrowser && <div>🌐 {t('playInBrowser')}</div>}
            </Cover>
        </Link>
    )
}

const Logo = () => (
    <img
        src="/logo.png"
        style={{
            display: 'block',
            width: '100%',
            maxWidth: '350px',
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

const GameSection = ({title, subtitle, children, note, style}: GameSectionProps) => (
    <GameSectionContainer style={style}>
        {title && <FancyHeading text={title}/>}
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
        <CoverContainer>
            {children}
        </CoverContainer>
        {note && <div style={{marginTop: '30px', textAlign: 'center'}}>{note}</div>}
    </GameSectionContainer>
);

const PillRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
    gap: 5px;
`

const Pill = styled.a<{icon?: string}>`
    padding: 10px;
    border-radius: 10px;
    
    display: block;
    text-decoration: none;
    color: white;
    
    img {
        vertical-align: middle;
    }
    
    ${props => props.icon && `
        &::before {
          content: '';
          display: inline-block;
          vertical-align: middle;
        
          width: 16px;
          height: 16px;
          margin-right: 4px;
        
          background: url("${props.icon}") no-repeat center center;
          background-size: contain;
        }
    `}

    background: rgba(150, 150, 150, 0.15);
    transition: background 0.2s;
    &:hover {
        background: rgba(150, 150, 150, 0.35);
    }
`

function App() {
    const {t} = useTranslation();

    return (
        <Background>
            <Message>
                <Logo/>
                <LanguageSelector/>

                <br/><br/>

                <Box>
                    {t('mainAboutHello')}<br/>
                    <Link to="/about">{t('mainAboutReadMore')}</Link><br/>
                    <br/>
                    {t('mainAboutBoombit')}
                    <br/>
                    <br/>
                    {t('mainAboutMoreAboutGames')}
                    <br/>
                    <PillRow>
                        <Pill
                            icon="/hub-icon.png"
                            href="https://www.przygody-reksia.pl/"
                        >
                            <Trans i18nKey="reksiohubLink">
                                Przygody Reksia HUB <span className="flag:PL"></span> <span className="flag:GB"></span>
                            </Trans>
                        </Pill>
                        <Pill
                            icon="/reksiopedia-logo.png"
                            href="https://reksio.fandom.com/wiki/Reksio_Wiki"
                        >
                            <Trans i18nKey="reksiopediaLink">
                                Reksiopedia <span className="flag:PL"></span>
                            </Trans>
                        </Pill>
                        <Pill
                            icon="/discord-logo.svg"
                            href="https://discord.gg/sc5psH2cvR"
                            onClick={() => event('join_discord')}
                        >
                            Discord
                        </Pill>
                    </PillRow>
                </Box>
            </Message>

            <GameSection
                title={t('adventuresOfReksio')}
                note={'* ' + t('englishVersionIsFanMade')}
                subtitle={t('mainSeries')}
            >
                {gamesByGroup('main').map(([key, game]) => (
                    <GameEntry id={key} key={key} game={game}/>
                ))}
            </GameSection>

            <GameSection
                subtitle={t('extras')}
                style={{marginTop: '30px'}}
            >
                {gamesByGroup('extra').map(([key, game]) => (
                    <GameEntry id={key} key={key} game={game}/>
                ))}
            </GameSection>

            <GameSection
                subtitle={t('newSeries')}
                style={{marginTop: '30px'}}
            >
                {gamesByGroup('second').map(([key, game]) => (
                    <GameEntry id={key} key={key} game={game}/>
                ))}
            </GameSection>

            <GameSection
                title={t('educationalGames')}
                subtitle={t('forTheLittlestPlayers')}
                style={{marginTop: '100px', paddingBottom: '200px'}}
            >
                {gamesByGroup('educational').map(([key, game]) => (
                    <GameEntry id={key} key={key} game={game}/>
                ))}
            </GameSection>

            <Footer/>
        </Background>
    );
}

export default App;