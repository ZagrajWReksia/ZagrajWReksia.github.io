import type { Metadata } from 'next';
import { getAlternateLanguages } from '@/lib/metadata';
import LegacyRedirect from '@/components/legacy-redirect';

const baseUrl = 'https://zagrajwreksia.pl';
const description = 'Download and play games from the original Reksio\'s Adventures (Przygody Reksia) series';

export const metadata: Metadata = {
  title: 'Zagraj w Reksia',
  description,
  alternates: {
    canonical: `${baseUrl}/pl/`,
    languages: getAlternateLanguages(),
  },
  openGraph: {
    title: 'Zagraj w Reksia',
    description,
    images: [`${baseUrl}/logo.png`],
    type: 'website',
    locale: 'pl_PL',
  },
  twitter: {
    card: 'summary',
    title: 'Zagraj w Reksia',
    description,
    images: [`${baseUrl}/logo.png`],
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
