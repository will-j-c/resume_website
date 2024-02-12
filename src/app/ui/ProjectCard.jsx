'use client';

import { FaGithub } from 'react-icons/fa';
import { CiLink } from 'react-icons/ci';
import { IconContext } from 'react-icons';
import Link from 'next/link';

export default function ProjectCard(props) {
  const { title, description, githubLink, icons } = props.data;
  return (
    <div className='p-5 border border-lightThemeSecondary dark:border-darkThemeSecondary rounded-lg shadow h-80 flex flex-col justify-between'>
      <div>
        <h5 className='mb-2 text-md font-semibold tracking-tight text-lightThemePrimaryText dark:text-darkThemePrimaryText'>
          {title}
        </h5>
        <p className='mb-3 font-normal text-sm text-lightThemeSecondaryText dark:text-darkThemeSecondaryText'>
          {description}
        </p>
      </div>
      <div>
        <div className='flex flex-row gap-2 mb-5'>
          <IconContext.Provider
            value={{
              size: '20',
              className:
                'text-lightThemePrimaryText hover:text- dark:text-darkThemeSecondaryText text-opacity-30 dark:text-darkThemePrimaryText',
            }}
          >
            {icons.map((icon) => {
              return icon;
            })}
          </IconContext.Provider>
        </div>
        <div className='flex flex-row justify-end gap-5'>
          <IconContext.Provider
            value={{
              size: '25',
              className:
                'text-lightThemePrimaryText hover:text-lightThemeSecondaryText text-opacity-30 dark:text-darkThemePrimaryText dark:hover:text-darkThemeSecondaryText',
            }}
          >
            <Link target='_blank' rel='noopener' href={props.data.applink}>
              <CiLink />
            </Link>
            <Link target='_blank' rel='noopener' href={githubLink}>
              <FaGithub />
            </Link>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
