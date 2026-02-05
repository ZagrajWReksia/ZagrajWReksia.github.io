import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import games from '@/data/games';
import PlayerWrapper from './player-wrapper';

export function generateStaticParams() {
  const params = [];
  for (const locale of routing.locales) {
    for (const gameId of Object.keys(games)) {
      const game = games[gameId as keyof typeof games];
      for (const lang of game.languages) {
        params.push({ locale, gameId: `${gameId}-${lang.langCode}` });
      }
    }
  }
  return params;
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; gameId: string }>;
}) {
  const { locale, gameId } = await params;
  setRequestLocale(locale);
  return <PlayerWrapper gameId={gameId} />;
}
