import type { Metadata } from 'next';
import { getAlternateLanguages } from '@/lib/metadata';
import LegacyRedirect from '@/components/legacy-redirect';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://zagrajwreksia.pl/pl/',
    languages: getAlternateLanguages(),
  },
};

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/pl/" />
      <LegacyRedirect path="/" />
    </>
  );
}
