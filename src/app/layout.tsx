import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zagraj w Reksia',
  description: "Download and play games from the original Reksio's Adventures (Przygody Reksia) series",
  openGraph: {
    title: 'zagrajwreksia.pl',
    type: 'website',
    images: ['https://zagrajwreksia.pl/logo.png'],
    description: "Download and play games from the original Reksio's Adventures (Przygody Reksia) series",
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
