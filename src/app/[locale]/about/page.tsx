import { setRequestLocale } from 'next-intl/server';
import AboutPage from './about-client';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = `https://zagrajwreksia.pl/${loc}/about/`;
  }
  languages['x-default'] = `https://zagrajwreksia.pl/en/about/`;

  return {
    alternates: {
      canonical: `https://zagrajwreksia.pl/${locale}/about/`,
      languages,
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
