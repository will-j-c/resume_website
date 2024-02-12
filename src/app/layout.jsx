import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/ui/Navbar';
import MobileNavbar from '@/app/ui/MobileNavbar';

const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Will Colgate',
  description: 'A resume website for Will Colgate',
};

export default function RootLayout({ children }) {
  const time = new Date().getFullYear()
  return (
    <html lang='en'>
      <body className={`${plexMono.className} container mx-auto h-screen relative`}>
        <Navbar />
        <MobileNavbar />
        <main className='max-w-[1280px] mx-auto md:mt-10'>{children}</main>
        <footer className='mt-4 flex justify-center md:justify-end'>
          <div className='p-4'>
            <span className='text-xs text-lightThemeSecondaryText'>
              {`© ${time} William Colgate. All Rights Reserved.`}
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
