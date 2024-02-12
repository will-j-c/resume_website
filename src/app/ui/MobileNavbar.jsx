'use client';

import NavLinks from '@/app/ui/Navlinks';
import Socials from '@/app/ui/Socials';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { useState } from 'react';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div className='flex flex-col bg-lightThemeSecondary md:invisible visible md:h-0'>
      <div className='h-[70px] flex flex-row'>
        <div className='w-full flex flex-row mx-10 align-middle'>
          <div className='basis-3/4 flex flex-row my-auto'>
            <IconContext.Provider
              value={{
                size: '25',
                className:
                  'text-lightThemePrimaryText hover:text-lightThemeSecondaryText text-opacity-30',
              }}
            >
              <IoReorderThreeOutline onClick={toggleOpen} />
            </IconContext.Provider>
          </div>
          <div className='basis-1/4 flex flex-row justify-center gap-5 my-auto'>
            <Socials />
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className='flex flex-col items-center md:invisible md:h-0'>
          <NavLinks props={toggleOpen} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
