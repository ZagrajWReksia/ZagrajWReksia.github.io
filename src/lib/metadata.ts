import { routing } from '@/i18n/routing';

export function getAlternateLanguages(path: string = '') {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = `https://zagrajwreksia.pl/${locale}${path}`;
  }
  languages['x-default'] = `https://zagrajwreksia.pl/en${path}`;
  return languages;
}
