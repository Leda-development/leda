import { Inter, Cousine } from 'next/font/google';
import localFont from 'next/font/local';

export const mainFont = Inter({ subsets: ['latin'] });

export const liveFont = Cousine({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const greekFont = localFont({
  src: './DIOGENES.woff',
  display: 'swap',
});
