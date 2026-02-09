'use client';

import styled from 'styled-components';
import { Box } from '@/components/box';
import Link from 'next/link';
import { Button } from '@/components/button';
import { useTranslations, useLocale } from 'next-intl';
import { Footer } from '@/components/footer';

const Background = styled.div`
  border-radius: 10px;
`;

const Message = styled.div`
  padding: 20px;
  text-align: left;

  small {
    color: #ccc;
  }
`;

const Logo = () => (
  <img
    src="/logo.png"
    style={{
      display: 'block',
      width: '100%',
      maxWidth: '400px',
      margin: 'auto',
      marginBottom: '10px',
    }}
    alt="logo"
  />
);

export default function AboutPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Background>
      <Message>
        <Logo />

        <div>
          <Link href={`/${locale}/`}>
            <Button style={{ marginBottom: '10px' }}>{t('goBack')}</Button>
          </Link>
        </div>
        <Box>
          <h3 style={{ marginTop: 0 }}>Why this website exists</h3>
          It seems that every Reksio page has to cease to exist at some point.
          The first one was removed by Google. The second one first lost its
          domain (expired) to online casino, and later got completely removed by
          Odoo. I was able to create a new Odoo account with the old name, so
          that it is redirecting to this new website.
          <br />
          <br />
          This website aims not to share the fate of its predecessors:
          <ul>
            <li>
              The domain is registered for 9 years in advance{' '}
              <small>(until 2035-02-05)</small>
            </li>
            <li>
              It&apos;s hosted on Github Pages{' '}
              <small>(more stable than Blogger and Odoo like services)</small>
            </li>
            <li>
              Relies on it&apos;s own files hosting + archive.org mirrors{' '}
              <small>(instead of free cloud drives known to go down)</small>
            </li>
            <li>
              Admin is permanently online{' '}
              <small>(no contact with the admin was a recurring theme.)</small>
            </li>
            <li>
              Can be modified by other people than admin{' '}
              <small>(requires two trusted pull-request approvals)</small>
            </li>
            <li>
              It&apos;s{' '}
              <a href="https://github.com/ZagrajWReksia/ZagrajWReksia.github.io">
                open source
              </a>
            </li>
          </ul>
        </Box>
        <Box style={{ marginTop: '10px' }}>
          <h3 style={{ marginTop: 0 }}>ReksioEngine</h3>
          In addition to offering downloads like on the old websites, this
          website is also giving you the possibility of playing Reksio games
          entirely in web browser. Which is all made possible thanks to my
          project{' '}
          <a href="https://github.com/ReksioEngine/ReksioEngine">
            ReksioEngine
          </a>
          .
          <br />
          <br />
          <i>
            &quot;This project is an effort to reimplement the BlooMoo and
            Piklib engines, both used in the &quot;Przygody Reksia&quot; video
            game series. The goal is to enable the game to run directly in a web
            browser, utilizing its original assets and scripts. In addition to
            making the game accessible on modern platforms such as web browsers
            and mobile devices, the project also contributes to documenting and
            preserving the game engine and its custom scripting language,
            helping to understand and archive the inner workings of the
            technology behind the game.&quot;
          </i>
        </Box>
        <Box style={{ marginTop: '10px' }}>
          <h3 style={{ marginTop: 0 }}>Credits</h3>
          <div>
            <strong>Website:</strong>
          </div>
          <div>Code: Adikso</div>
          <div>Background: Paweł Wierzbicki</div>
          <div>Romanian translation: Serena</div>
          <div>Polish translation: Adikso</div>
          <div>English translation: Serena, Adikso</div>
          <div>Main series covers and booklet passwords: Ko-Ko-Kompan</div>
          <br />
          <div>
            <strong>Games collection:</strong>
          </div>
          <div>No-CD Patches: Dove6</div>
          <div>
            ISOs from collections of: Dove6, ReksioBlog, HeavenlyTape, Serena,
            KretonPodziemny
          </div>
          <div>City of Secrets 2 PC port: Dove6, Mysliwy112</div>
          <div>English translations: Serena</div>
          <div>Patched Polish games: Adikso, Dove6, Serena, Roostar</div>
          <div>Patched Romanian games: Serena</div>
          <br />
          <div>
            <strong>ReksioEngine:</strong>
          </div>
          <div>Main programmer: Adikso</div>
          <div>Programming help: Dove6, Yoshida</div>
          <div>Previous reverse engineering work: Dove6, Yoshida, Mysliwy112</div>
        </Box>
        <Box style={{ marginTop: '10px' }}>
          Public statistics of this website can be found{' '}
          <a href="https://cloud.umami.is/share/6VniumP7m3vxfcpt/zagrajwreksia.pl">
            here
          </a>
        </Box>
      </Message>

      <Footer />
    </Background>
  );
}
