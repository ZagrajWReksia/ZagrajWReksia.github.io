import styled from "styled-components";
import {Link, useParams} from "react-router";
import {useState} from "react";
import {FancyHeading} from "../../components/text.tsx";
import {Button} from "../../components/button.tsx";
import {Footer} from "../../components/footer.tsx";
import {Trans, useTranslation} from "react-i18next";
import games, {Download, Language, Mirror} from "./games.ts"
import i18next from "i18next";
import {Alert} from "../../components/box.tsx";
import {event, trackUrl} from "../../analytics.ts";

const Wrapper = styled.div`
    @media (max-width: 767px) {
        padding: 20px;
    }

    @media (min-width: 768px) {
        margin-top: 60px;
    }
`

const GameDetailsContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        min-height: calc(100vh - 220px);
        justify-content: center;
    }
`;

const CoverSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;

    @media (max-width: 767px) {
        position: static;
        max-width: 100%;
    }
`;

const GameCover = styled.img`
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const DetailsSection = styled.div`
    flex: 2;
    background-color: var(--container-background);
    padding: 20px;
    border-radius: 10px;
    overflow: hidden;
    max-width: 700px;
`;

const DetailsSectionDescription = styled.div`
    margin-bottom: 20px;
    margin-top: 10px;
    white-space: preserve-breaks;
`

const LanguageSelector = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
`;

const LanguageOption = styled.button<{ active: boolean }>`
    border: 2px solid ${props => props.active ? 'rgb(254,227,77)' : 'rgba(0,0,0,0)'};
    
    &:disabled {
        opacity: 0.8;
        filter: grayscale(1);
    }
`;

const DownloadOption = styled.div`
    margin-top: 20px;
    padding: 15px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
`

const Source = styled.small`
    color: rgb(186, 186, 186);
    
    a {
        color: rgb(186, 186, 186);
    }
`

export function GameDetailsPage() {
    const { t } = useTranslation();
    const params = useParams() as { gameId: string };
    const gameId = params.gameId;

    const game = games[gameId];
    const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(game?.languages?.find(lang => lang.langCode === i18next.resolvedLanguage) ?? null);

    const onDownload = async (download: Download, mirror?: Mirror) => {
        trackUrl(mirror?.url ?? download.url, {
            gameId: gameId,
            language: selectedLanguage?.langCode,
            downloadName: download.name,
            mirrorName: mirror?.name,
        });
    }

    if (!game) {
        return <div>Game not found</div>;
    }

    return (
        <Wrapper>
            <div>
                <Link to="/">
                    <Button style={{'marginBottom': '10px', textDecoration: 'none'}}>
                        {t('goBack')}
                    </Button>
                </Link>
            </div>
            <GameDetailsContainer>
                <CoverSection>
                    <GameCover src={game.coverImage} alt={`${game.title} cover`}/>
                </CoverSection>

                <DetailsSection>
                    <FancyHeading text={t(game.title)}/>

                    <DetailsSectionDescription>
                        <div style={{marginBottom: '20px'}}>
                            {t(game.description)}
                        </div>
                        <strong>{t('releaseDate')}:</strong> {game.year}<br/>
                    </DetailsSectionDescription>

                    {game.instructions && (
                        <div style={{marginTop: '20px'}}>
                            <FancyHeading size="medium" text={t('specialInstructions')}/>
                            {game.instructions.map(instruction => (
                                <div>
                                    {instruction.type === 'password' && (
                                        <>
                                            <div>{t('codeFromBooklet')}</div>
                                            <div dangerouslySetInnerHTML={{ __html: instruction.content }}/>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    <Alert style={{marginBottom: '20px'}}>
                        <Trans i18nKey="visitReksioDiscordForHelp">
                            Need help with the game or installation? Join Reksio community on
                            <a
                                href="https://discord.gg/przygody-reksia"
                                onClick={() => event('join_discord')}
                            >
                                Discord
                            </a>
                        </Trans>
                    </Alert>

                    <FancyHeading size="medium" text={t('chooseLanguageVersion')}/>
                    <LanguageSelector style={{marginTop: '10px'}}>
                        {game.languages.filter(language => language.downloads.length > 0).map((lang: Language) => (
                            <LanguageOption
                                key={lang.langCode}
                                active={selectedLanguage?.langCode === lang.langCode}
                                onClick={() => setSelectedLanguage(lang)}
                            >
                                {lang.langIcon} {t(`lang_${lang.langCode}`)}
                            </LanguageOption>
                        ))}
                    </LanguageSelector>

                    {selectedLanguage && (
                        <div>
                            {selectedLanguage.downloads.map((download, index) => (
                                <DownloadOption key={index}>
                                    <div>
                                        {download.icon}&nbsp;
                                        <Link
                                            to={download.url}
                                            onClick={() => onDownload(download)}
                                        >
                                            <span>{t(download.name)}</span>
                                        </Link>
                                        {download.size && (
                                            <span>&nbsp;({download.size})</span>
                                        )}
                                    </div>
                                    <div>
                                        <small style={{whiteSpace: 'preserve-breaks'}}>
                                            {t(download.description)}
                                        </small>
                                    </div>
                                    {download.instructions ? (
                                        <div>
                                            <small style={{whiteSpace: 'preserve-breaks'}}>
                                                {typeof download.instructions === 'string' ? t(download.instructions) : t(download.instructions.key, download.instructions.args)}
                                            </small>
                                        </div>
                                    ) : <></>}

                                    {download.mirrors && (
                                        <small>
                                            {t('mirrors')}:&nbsp;
                                            {download.mirrors.map((mirror, idx) => (
                                                <span>
                                                    <a
                                                        href={mirror.url}
                                                        style={{color: '#fff'}}
                                                        onClick={() => onDownload(download, mirror)}
                                                    >{mirror.name}</a>{idx != download!.mirrors!.length - 1 && ', '}
                                                </span>
                                            ))}
                                        </small>
                                    )}
                                    {download.source && (
                                        <div>
                                            <Source>
                                                {t('source')}: {download.sourceUrl ? (
                                                    <a href={download.sourceUrl}>{download.source}</a>
                                                ) : download.source}
                                            </Source>
                                        </div>
                                    )}
                                </DownloadOption>
                            ))}
                        </div>
                    )}
                </DetailsSection>
            </GameDetailsContainer>
            <Footer/>
        </Wrapper>
    );
}