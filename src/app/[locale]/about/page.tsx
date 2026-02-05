import { setRequestLocale } from 'next-intl/server';
import AboutPage from './about-client';
import { getAlternateLanguages } from '@/lib/metadata';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    alternates: {
      canonical: `https://zagrajwreksia.pl/${locale}/about/`,
      languages: getAlternateLanguages('/about/'),
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutPage />;
}
