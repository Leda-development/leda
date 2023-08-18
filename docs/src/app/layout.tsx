import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { BaseLayout } from './BaseLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Leda',
  description: 'React UI components library',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  return (
  <html lang="en">
    <body className={inter.className}>
      <div>
        <BaseLayout>
          {children}
        </BaseLayout>
      </div>
    </body>
  </html>
);};

export default RootLayout;
