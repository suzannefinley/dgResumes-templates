import { Geist, Geist_Mono } from 'next/font/google';

import '@/components/Footer';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* toast component must be placed within the layout before the children */}

        <Toaster />
        {children}

        <Footer />
      </body>
    </html>
  );
}
