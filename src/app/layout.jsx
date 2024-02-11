import { Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/ui/Navbar';
import MobileNavbar from '@/app/ui/MobileNavbar';

// const inter = Inter({ subsets: ['latin'] });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Will Colgate',
  description: 'A resume website for Will Colgate',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${plexMono.className} container mx-auto h-screen`}>
        <Navbar />
        <MobileNavbar />
        <main className='max-w-[1280px] mt-10 mx-auto h-full'>{children}</main>
        <footer className='mt-4 flex justify-end'>
          <div className='p-4'>
            <span className='text-xs text-lightThemeSecondaryText'>
              © 2023 William Colgate. All Rights Reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
