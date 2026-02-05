'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';

function detectLocale(): string {
  if (typeof navigator === 'undefined') {
    return routing.defaultLocale;
  }

  const browserLanguages = navigator.languages || [navigator.language];

  for (const browserLang of browserLanguages) {
    const langCode = browserLang.split('-')[0].toLowerCase();

    if (routing.locales.includes(langCode as typeof routing.locales[number])) {
      return langCode;
    }
  }

  return routing.defaultLocale;
}

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const locale = detectLocale();
    router.replace(`/${locale}/`);
  }, [router]);

  return null;
}
