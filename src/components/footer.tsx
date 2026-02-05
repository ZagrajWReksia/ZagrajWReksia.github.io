'use client';

import styled from 'styled-components';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 20px;
`;

export const Footer = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <FooterWrapper>
      <div>
        {t.rich('createdAndManagedBy', {
          link: (chunks) => <a href="https://adikso.net/about">{chunks}</a>,
        })}
      </div>
      <div>
        {t.rich('gamesCreatedBy', {
          link: (chunks) => (
            <a href="https://boombit.com/" rel="noreferrer">
              {chunks}
            </a>
          ),
        })}
      </div>
      <div>
        <a href="mailto:burektor@zagrajwreksia.pl">burektor@zagrajwreksia.pl</a>
      </div>
      <div>
        <Link href={`/${locale}/about`}>{t('credits')}</Link>
        &nbsp;|&nbsp;
        <a href="https://github.com/ZagrajWReksia/ZagrajWReksia.github.io">
          {t('sourceCode')}
        </a>
      </div>
    </FooterWrapper>
  );
};
