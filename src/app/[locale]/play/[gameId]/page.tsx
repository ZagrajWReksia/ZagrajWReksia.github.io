import {getTranslations, setRequestLocale} from 'next-intl/server';
import { routing } from '@/i18n/routing';
import games from '@/data/games';
import PlayerWrapper from './player-wrapper';
import type {Metadata} from "next";
import {getAlternateLanguages} from "@/lib/metadata";
import {gamesData} from "@/data/games-players";

export function generateStaticParams() {
  const params = [];
  for (const locale of routing.locales) {
    for (const gameId of Object.keys(gamesData)) {
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
    const t = await getTranslations({ locale });

    const gamePlayerEntry = gamesData[gameId];
    const game = games[gamePlayerEntry.id];

    const title = game ? t(game.title as string) : gameId;
    const pageTitle = t('playOnlineTitle', { title, locale });
    const embedTitle = t('gameEmbedPlayOnlineTitle', { title, locale });
    const description = t('gameEmbedPlayOnlineDescription', { title, locale });

    const baseUrl = 'https://zagrajwreksia.pl';

    return {
        title: pageTitle,
        description,
        openGraph: {
            title: embedTitle,
            description,
            images: game ? [`${baseUrl}${game.coverImage}`] : [],
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title: embedTitle,
            description,
            images: game ? [`${baseUrl}${game.coverImage}`] : [],
        },
        alternates: {
            canonical: `https://zagrajwreksia.pl/${locale}/play/${gameId}/`,
            languages: getAlternateLanguages(`/play/${gameId}/`),
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
  return <PlayerWrapper gameId={gameId} />;
}
