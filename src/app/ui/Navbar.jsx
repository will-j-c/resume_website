'use client';

import NavLinks from '@/app/ui/Navlinks';
import Socials from '@/app/ui/Socials';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div className='bg-lightThemeSecondary dark:bg-darkThemeSecondary rounded-b-lg max-w-[1110px] mx-auto flex flex-row invisible md:visible h-0 md:h-[70px]'>
      <div className='w-full flex flex-row mx-10'>
        <div className='basis-3/4 flex flex-row content-center'>
          <NavLinks props={toggleOpen} />
        </div>
        <div className='basis-1/4 flex flex-row justify-center gap-5 my-auto'>
          <Socials />
        </div>
      </div>
    </div>
  );
}
