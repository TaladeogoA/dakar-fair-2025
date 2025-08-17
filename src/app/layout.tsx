import { I18nProvider } from '@/i18n/I18nProvider';
import type { Metadata } from "next";
import { Space_Grotesk, Work_Sans } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Dakar 2025',
  description: 'Pan-African Arts Renaissance',
};

const heading = Space_Grotesk({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
});

const body = Work_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${heading.variable} ${body.variable}`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}