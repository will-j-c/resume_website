import { v4 as uuidv4 } from 'uuid';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { IconContext } from 'react-icons';
import { useState } from 'react';

export default function JobAccordianItem(props) {
  const { title, dates, where, description, bullets, isOpen } = props.data;
  return (
    <AccordionItem className='border-solid border-2 border-lightThemePrimaryText/50 p-2 rounded-lg'>
      <AccordionItemHeading className='flex flex-row justify-between content-center'>
        <AccordionItemButton className='flex flex-row gap-5 items-start'>
          <IconContext.Provider
            value={{
              size: '30',
              className:
                'text-lightThemePrimaryText dark:text-darkThemePrimaryText dark:hover:text-darkThemeSecondaryText hover:text-lightThemeSecondaryText text-opacity-30 dark:text-darkThemeSecondaryText',
            }}
          >
            <AccordionItemState>
              {({ expanded }) =>
                expanded ? <IoIosArrowDown /> : <IoIosArrowForward />
              }
            </AccordionItemState>
          </IconContext.Provider>
          <div>
            <h1 className='text-lightThemeSecondaryText font-extrabold text-sm md:text-lg dark:text-darkThemeSecondaryText'>
              {title}
            </h1>
            <h3 className='text-lightThemePrimaryText dark:text-darkThemePrimaryText text-xs md:text-base'>
              {dates}
            </h3>
            <h3 className='mb-5 text-lightThemePrimaryText dark:text-darkThemePrimaryText text-xs md:text-base'>
              {where}
            </h3>
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>

      <AccordionItemPanel className='px-5'>
        <p className='mb-5 text-lightThemeSecondaryText text-xs dark:text-darkThemeSecondaryText'>
          {description}
        </p>
        <ul className='text-lightThemePrimaryText text-xs list-disc px-5 dark:text-darkThemePrimaryText'>
          {bullets.map((bullet) => {
            return <li key={uuidv4()}>{bullet}</li>;
          })}
        </ul>
      </AccordionItemPanel>
    </AccordionItem>
  );
}
