import Script from 'next/script';
import './preflight.css';
import './globals.css';
import type { Metadata } from 'next';
import { BaseLayout } from './BaseLayout';
import { mainFont } from '@/fonts';

export const metadata: Metadata = {
  title: 'Leda',
  description: 'React UI components library',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode,
}) => (
  <html lang="en">
    <body className={`${mainFont.className} bg-white`}>
      <div className="mx-auto max-w-7xl">
        <BaseLayout>
          {children}
        </BaseLayout>
      </div>
      {process.env.MODE === 'prod' && (
        <>
          <Script src="/metrica.js" />
          {/* eslint-disable-next-line */}
          <noscript><div><img src="https://mc.yandex.ru/watch/95108082" style={{ position: 'absolute', left: '-9999px' }} alt="" /></div></noscript>
        </>
      )}
    </body>
  </html>
);

export default RootLayout;
