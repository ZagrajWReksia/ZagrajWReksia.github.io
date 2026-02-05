'use client';

import dynamic from 'next/dynamic';

const PlayerClient = dynamic(() => import('./player-client'), {
  ssr: false,
});

export default function PlayerWrapper({ gameId }: { gameId: string }) {
  return <PlayerClient gameId={gameId} />;
}
