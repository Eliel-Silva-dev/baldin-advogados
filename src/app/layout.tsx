import type { Metadata } from 'next';

import { Poppins } from 'next/font/google';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import { Suspense } from 'react';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','600','700'],
});

export const metadata: Metadata = {
  title: 'Baldin Advogados | Hydrah Tec',
  description: 'Site do escritório de advocacia baldin',
  keywords:
    'Advogado campinas, escritório de advocacia, advogado trabalhista, advogado empresarial, advogado  imobiliário',
  icons: '/img/baldin_favicon.png',
  robots: 'index, follow',
  authors: [{ name: 'Eliel Silva', url: 'https://github.com/Eliel-Silva-dev' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <NavBar />
        <Suspense fallback={<div>Carregando dados da pagina...</div>}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
