import games from '@/data/games';
import LegacyRedirect from '@/components/legacy-redirect';

export function generateStaticParams() {
  const params = [];
  for (const gameId of Object.keys(games)) {
    const game = games[gameId as keyof typeof games];
    for (const lang of game.languages) {
      params.push({ gameId: `${gameId}-${lang.langCode}` });
    }
  }
  return params;
}

export default async function Page({
  params,
}: {
  params: Promise<{ gameId: string }>;
}) {
  const { gameId } = await params;
  return <LegacyRedirect path={`/play/${gameId}`} />;
}
