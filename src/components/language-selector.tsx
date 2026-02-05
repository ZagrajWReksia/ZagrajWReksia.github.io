'use client';

import styled from 'styled-components';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Flag from './flag';
import { locales } from '@/i18n/routing';

const FlagLink = styled.button`
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
`;

export const LanguageSelector = () => {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <b>{t('viewInOtherLanguages')}</b>
      <br />
      {locales.map((code) => (
        <FlagLink
          key={code}
          onClick={() => switchLocale(code)}
          style={{ opacity: code === locale ? 1 : 0.7 }}
        >
          <Flag code={code} />
          &nbsp;
        </FlagLink>
      ))}
    </div>
  );
};
