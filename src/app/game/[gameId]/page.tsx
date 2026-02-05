import games from '@/data/games';
import LegacyRedirect from '@/components/legacy-redirect';

export function generateStaticParams() {
  return Object.keys(games).map((gameId) => ({ gameId }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ gameId: string }>;
}) {
  const { gameId } = await params;
  return <LegacyRedirect path={`/game/${gameId}`} />;
}
