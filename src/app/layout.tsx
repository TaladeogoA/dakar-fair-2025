import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Dakar 2025',
  description: 'Pan-African Arts Renaissance',
};

const heading = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${body.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
