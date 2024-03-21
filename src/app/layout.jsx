import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/ui/Navbar';
import MobileNavbar from '@/app/ui/MobileNavbar';
import { Analytics } from '@vercel/analytics/react';

const font = Nunito_Sans({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Will Colgate',
  description: 'A resume website for Will Colgate',
};

export default function RootLayout({ children }) {

  const time = new Date().getFullYear();
  return (
    <html lang='en'>
      <body
        className={`${font.className} h-screen container mx-auto relative flex flex-col justify-between bg-lightThemePrimary dark:bg-darkThemePrimary`}
      >
        <div>
          <Navbar />
          <MobileNavbar />
          <main className='mx-auto md:mt-10'>{children}</main>
        </div>
        <footer className='mt-4 flex justify-center md:justify-end'>
          <div className='p-4'>
            <span className='text-xs text-lightThemeSecondaryText dark:text-darkThemeSecondaryText'>
              {`© ${time} William Colgate. All Rights Reserved.`}
            </span>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
