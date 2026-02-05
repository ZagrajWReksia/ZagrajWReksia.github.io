import { setRequestLocale } from 'next-intl/server';
import GameDetailsPage from './game-client';
import games from '@/data/games';
import { routing } from '@/i18n/routing';
import { getAlternateLanguages } from '@/lib/metadata';
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

  return {
    alternates: {
      canonical: `https://zagrajwreksia.pl/${locale}/game/${gameId}/`,
      languages: getAlternateLanguages(`/game/${gameId}/`),
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
