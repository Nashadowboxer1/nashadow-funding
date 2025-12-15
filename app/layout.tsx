import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Nashadow Credit & Funding Consulting',
  description:
    'Nashadow Credit & Funding Consulting provides thoughtful credit analysis, funding readiness, and ongoing advisory support.',
  metadataBase: new URL('https://www.nashadow.com'),
  openGraph: {
    title: 'Nashadow Credit & Funding Consulting',
    description:
      'Nashadow provides calm, process-driven guidance on credit analysis, funding readiness, and ongoing advisory support.',
    url: 'https://www.nashadow.com',
    siteName: 'Nashadow Credit & Funding Consulting',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-charcoal text-white antialiased">
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-charcoal via-graphite to-charcoal">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
