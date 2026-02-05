'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';
import { FancyHeading } from '@/components/text';
import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import games, { Download, Language, Mirror } from '@/data/games';
import { Alert, HighlightBox } from '@/components/box';
import { event, trackUrl } from '@/lib/analytics';
import Flag from '@/components/flag';
import { discordInviteLink } from '@/constants';
import { locales } from '@/i18n/routing';

const Wrapper = styled.div`
  @media (max-width: 767px) {
    padding: 20px;
  }

  @media (min-width: 768px) {
    margin-top: 60px;
  }
`;

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
`;

const LanguageSelectorDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const LanguageOption = styled.button<{ $active: boolean }>`
  border: 2px solid
    ${(props) => (props.$active ? 'rgb(254,227,77)' : 'rgba(0,0,0,0)')};

  &:disabled {
    opacity: 0.8;
    filter: grayscale(1);
  }
`;

const DownloadOption = styled.div<{ $recommended?: boolean }>`
  padding: 15px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  ${({ $recommended }) => $recommended && 'border-left: 8px solid #fee34d;'}
  & + & {
    margin-top: 20px;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CompactLanguageSelector = styled.div`
  display: flex;
  gap: 4px;
  padding: 8px 12px;
  background-color: var(--container-background);
  border-radius: 10px;
`;

const FlagButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  opacity: ${(props) => (props.$active ? 1 : 0.6)};

  &:hover {
    opacity: 1;
  }
`;

const SmallDimmed = styled.small`
  color: rgb(186, 186, 186);

  a {
    color: rgb(186, 186, 186);
  }
`;

const DescriptionWrapper = styled.div`
  margin-bottom: 5px;
  line-height: 1.2;
`;

function DownloadsList({
  downloads,
  gameId,
  selectedLanguage,
  type,
}: {
  downloads: Download[];
  gameId: string;
  selectedLanguage: Language;
  type: string;
}) {
  const t = useTranslations();

  const onDownload = async (download: Download, mirror?: Mirror) => {
    if (type === 'game') {
      trackUrl('download', mirror?.url ?? download.url, {
        gameId: gameId,
        language: selectedLanguage?.langCode,
        downloadName: download.name,
        mirrorName: mirror?.name,
      });
    } else if (type === 'mod') {
      trackUrl('downloadMod', mirror?.url ?? download.url, {
        gameId: gameId,
        language: selectedLanguage?.langCode,
        downloadName: download.name,
        mirrorName: mirror?.name,
      });
    }
  };

  return downloads.map((download, index) => (
    <DownloadOption key={index} $recommended={download.recommended}>
      <div>
        {download.icon && <>{download.icon}&nbsp;</>}
        <a href={download.url} onClick={() => onDownload(download)}>
          <span>{t(download.name as string)}</span>
        </a>
        {download.size && <small>&nbsp;({download.size})</small>}
      </div>
      <DescriptionWrapper>
        <small style={{ whiteSpace: 'preserve-breaks' }}>
          {t(download.description as string)}
        </small>
      </DescriptionWrapper>
      {download.instructions
        ? download.instructions.map((instruction, idx) => {
            let html: string;
            if (typeof instruction === 'string') {
              html = t.raw(instruction) as string;
            } else {
              html = t.raw(instruction.key) as string;
              if (instruction.args) {
                for (const [key, value] of Object.entries(instruction.args)) {
                  const translatedValue = t.raw(value as string) as string;
                  html = html.replace(`{${key}}`, translatedValue);
                }
              }
            }
            return (
              <div key={idx}>
                <HighlightBox style={{ whiteSpace: 'preserve-breaks' }}>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </HighlightBox>
              </div>
            );
          })
        : null}

      {download.mirrors && (
        <SmallDimmed>
          {t('mirrors')}:&nbsp;
          {download.mirrors.map((mirror, idx) => (
            <span key={idx}>
              <a href={mirror.url} onClick={() => onDownload(download, mirror)}>
                {mirror.name}
              </a>
              {idx != download!.mirrors!.length - 1 && ', '}
            </span>
          ))}
        </SmallDimmed>
      )}
      {download.source && (
        <div>
          <SmallDimmed>
            {t('source')}:{' '}
            {download.sourceUrl ? (
              <a href={download.sourceUrl}>{download.source}</a>
            ) : (
              download.source
            )}
          </SmallDimmed>
        </div>
      )}
    </DownloadOption>
  ));
}

export default function GameDetailsPage({ gameId }: { gameId: string }) {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const game = games[gameId];
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    game?.languages?.find((lang) => lang.langCode === locale) ?? null
  );

  if (!game) {
    return <div>Game not found</div>;
  }

  const mods =
    game.mods && selectedLanguage
      ? game.mods
          .filter(
            (mod) =>
              !mod.languages ||
              mod.languages?.includes(selectedLanguage.langCode)
          )
          .map((mod) => mod.download)
      : [];

  return (
    <Wrapper>
      <TopBar>
        <Link href={`/${locale}/`}>
          <Button>{t('goBack')}</Button>
        </Link>
        <CompactLanguageSelector>
          {locales.map((code) => (
            <FlagButton
              key={code}
              $active={code === locale}
              onClick={() => {
                const segments = pathname.split('/');
                segments[1] = code;
                router.push(segments.join('/'));
              }}
            >
              <Flag code={code} />
            </FlagButton>
          ))}
        </CompactLanguageSelector>
      </TopBar>
      <GameDetailsContainer>
        <CoverSection>
          <GameCover src={game.coverImage} alt={`${game.title} cover`} />
        </CoverSection>

        <div>
          <DetailsSection>
            <FancyHeading text={t(game.title as string)} />

            <DetailsSectionDescription>
              <div style={{ marginBottom: '20px' }}>
                {t(game.description as string)}
              </div>
              <strong>{t('releaseDate')}:</strong> {game.year}
              <br />
            </DetailsSectionDescription>

            {game.instructions && (
              <div style={{ marginTop: '20px' }}>
                <FancyHeading size="medium" text={t('specialInstructions')} />
                {game.instructions.map((instruction, idx) => (
                  <div key={idx}>
                    {instruction.type === 'password' && (
                      <>
                        <div>{t('codeFromBooklet')}</div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: instruction.content,
                          }}
                        />
                      </>
                    )}
                    {instruction.type === 'alert' && (
                      <Alert
                        color="rgba(40, 119, 221, 0.54)"
                        style={{ marginBottom: '20px' }}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: t.raw(instruction.content as string) as string,
                          }}
                        />
                      </Alert>
                    )}
                  </div>
                ))}
              </div>
            )}

            <Alert style={{ marginBottom: '20px' }}>
              {t.rich('visitReksioDiscordForHelp', {
                link: (chunks) => (
                  <a href={discordInviteLink} onClick={() => event('join_discord')}>
                    {chunks}
                  </a>
                ),
                br: () => <br />,
              })}
            </Alert>

            <FancyHeading size="medium" text={t('chooseLanguageVersion')} />
            <LanguageSelectorDiv style={{ marginTop: '10px' }}>
              {game.languages
                .filter(
                  (language) => language.downloads.length > 0 || language.lost
                )
                .map((lang: Language) => (
                  <LanguageOption
                    key={lang.langCode}
                    $active={selectedLanguage?.langCode === lang.langCode}
                    onClick={() => setSelectedLanguage(lang)}
                  >
                    <Flag code={lang.langCode} gray={lang.lost} />{' '}
                    {t(`lang_${lang.langCode}` as string)}
                  </LanguageOption>
                ))}
            </LanguageSelectorDiv>

            {selectedLanguage && (
              <div>
                {selectedLanguage.lost && (
                  <div style={{ whiteSpace: 'preserve-breaks' }}>
                    {t('workingOnThisVersion')}
                  </div>
                )}
                <DownloadsList
                  type="game"
                  downloads={selectedLanguage.downloads}
                  selectedLanguage={selectedLanguage}
                  gameId={gameId}
                />
              </div>
            )}
          </DetailsSection>

          {selectedLanguage && mods.length > 0 && (
            <DetailsSection style={{ marginTop: '20px' }}>
              <FancyHeading size="medium" text={t('mods')} />
              <div style={{ marginBottom: '5px' }}>
                <small>{t('modsNotice')}</small>
              </div>

              <DownloadsList
                type="mod"
                downloads={mods}
                selectedLanguage={selectedLanguage}
                gameId={gameId}
              />
            </DetailsSection>
          )}
        </div>
      </GameDetailsContainer>
      <Footer />
    </Wrapper>
  );
}
