import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, Locale } from '@/i18n/routing';
import { getAlternateLanguages } from '@/lib/metadata';
import StyledComponentsRegistry from '@/lib/registry';
import Script from 'next/script';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@/styles/flags.css';

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

  const baseUrl = 'https://zagrajwreksia.pl';

  return {
    title: {
      default: 'Zagraj w Reksia',
      template: '%s | Zagraj w Reksia',
    },
    description: t('siteDescription'),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: getAlternateLanguages(),
    },
    openGraph: {
      title: 'Zagraj w Reksia',
      description: t('siteDescription'),
      images: [`${baseUrl}/logo.png`],
      type: 'website',
      locale: locale === 'pl' ? 'pl_PL' : locale === 'ro' ? 'ro_RO' : 'en_GB',
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => (l === 'pl' ? 'pl_PL' : l === 'ro' ? 'ro_RO' : 'en_GB')),
    },
    twitter: {
      card: 'summary',
      title: 'Zagraj w Reksia',
      description: t('siteDescription'),
      images: [`${baseUrl}/logo.png`],
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
          id="process-before-send"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.processBeforeSend = function(type, payload) {
                var locales = ${JSON.stringify(routing.locales)};
                var url = new URL(payload.url);
                var parts = url.pathname.split('/').filter(Boolean);
                if (parts.length > 0 && locales.includes(parts[0])) {
                  parts.shift();
                  url.pathname = '/' + parts.join('/');
                  payload.url = url.toString();
                }
                return payload;
              };
            `,
          }}
        />
        <Script
          defer
          src="/a.js"
          data-website-id="884a9f2d-33cc-4afc-89aa-2996306a2248"
          data-before-send="processBeforeSend"
        />
      </body>
    </html>
  );
}
