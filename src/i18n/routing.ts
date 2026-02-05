import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'pl', 'ro'] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
});
