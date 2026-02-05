import { setRequestLocale } from 'next-intl/server';
import GameDetailsPage from './game-client';
import games from '@/data/games';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';

export function generateStaticParams() {
  const params = [];
  for (const locale of routing.locales) {
    for (const gameId of Object.keys(games)) {
      params.push({ locale, gameId });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; gameId: string }>;
}): Promise<Metadata> {
  const { locale, gameId } = await params;

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `https://zagrajwreksia.pl/${loc}/game/${gameId}/`;
  }
  languages['x-default'] = `https://zagrajwreksia.pl/en/game/${gameId}/`;

  return {
    alternates: {
      canonical: `https://zagrajwreksia.pl/${locale}/game/${gameId}/`,
      languages,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; gameId: string }>;
}) {
  const { locale, gameId } = await params;
  setRequestLocale(locale);

  return <GameDetailsPage gameId={gameId} />;
}
