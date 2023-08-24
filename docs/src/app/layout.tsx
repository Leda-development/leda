import './globals.css';
import type { Metadata } from 'next';
import { BaseLayout } from './BaseLayout';
import { mainFont } from '@/utils/fonts';

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
    <body className={mainFont.className}>
      <div>
        <BaseLayout>
          {children}
        </BaseLayout>
      </div>
    </body>
  </html>
);

export default RootLayout;
