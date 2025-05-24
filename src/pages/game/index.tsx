import styled from "styled-components";
import {Link, useParams} from "react-router";
import {useState} from "react";
import {FancyHeading} from "../../components/text.tsx";
import {Button} from "../../components/button.tsx";
import {Footer} from "../../components/footer.tsx";
import {useTranslation} from "react-i18next";
import games, { Language } from "./games.ts"
import i18next from "i18next";

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
    margin-bottom: 30px;
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

    a {
        text-decoration: none;
    }
`

export function GameDetailsPage() {
    const { t } = useTranslation();
    const params = useParams() as { gameId: string };
    const gameId = params.gameId;

    const game = games[gameId];
    const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(game?.languages?.find(lang => lang.langCode === i18next.resolvedLanguage) ?? null);

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
                                        <Link to={download.url}>
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
                                    {download.mirrors && (
                                        <small>
                                            {t('mirrors')}:&nbsp;
                                            {download.mirrors.map((mirror, idx) => (
                                                <span>
                                                    <a href={mirror.url}>{mirror.name}</a>{idx != download!.mirrors!.length - 1 && ', '}
                                                </span>
                                            ))}
                                        </small>
                                    )}
                                    {download.source && (
                                        <div>
                                            <small style={{color: "rgb(186, 186, 186)"}}>
                                                {t('source')}: {download.source}
                                            </small>
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