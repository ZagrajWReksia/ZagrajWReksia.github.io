import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, Locale } from '@/i18n/routing';
import StyledComponentsRegistry from '@/lib/registry';
import Script from 'next/script';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@/styles/flags.css';

const localeToHreflang: Record<string, string> = {
  en: 'en',
  pl: 'pl',
  ro: 'ro',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[localeToHreflang[loc]] = `https://zagrajwreksia.pl/${loc}`;
  }
  languages['x-default'] = 'https://zagrajwreksia.pl/en';

  return {
    description: t('siteDescription'),
    alternates: {
      canonical: `https://zagrajwreksia.pl/${locale}`,
      languages,
    },
    openGraph: {
      description: t('siteDescription'),
      locale: locale === 'pl' ? 'pl_PL' : locale === 'ro' ? 'ro_RO' : 'en_GB',
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => (l === 'pl' ? 'pl_PL' : l === 'ro' ? 'ro_RO' : 'en_GB')),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '10px' }}>
              {children}
            </div>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
        <Script
          defer
          src="/a.js"
          data-website-id="884a9f2d-33cc-4afc-89aa-2996306a2248"
        />
      </body>
    </html>
  );
}
