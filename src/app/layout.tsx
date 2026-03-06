import { Poppins, Volkhov } from 'next/font/google';
import './globals.scss';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });
const volkhov = Volkhov({ subsets: ['latin'], weight: ['700'], variable: '--font-volkhov' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${volkhov.variable}`}>
      <body>{children}</body>
    </html>
  );
}