'use client';

import { FaGithub } from 'react-icons/fa';
import { CiLink } from 'react-icons/ci';
import { IconContext } from 'react-icons';
import Link from 'next/link';

export default function ProjectCard(props) {
  const { title, description, githubLink, icons } = props.data;
  return (
    <div className='basis-1/3 p-5 border border-lightThemeSecondary rounded-lg shadow'>
      <h5 className='mb-2 text-2xl font-semibold tracking-tight text-lightThemePrimaryText'>
        {title}
      </h5>
      <p className='mb-3 font-normal text-lightThemeSecondaryText'>
        {description}
      </p>
      <div className='flex flex-row gap-2 mb-5'>
        <IconContext.Provider
          value={{
            size: '20',
            className:
              'text-lightThemePrimaryText hover:text-lightThemeSecondaryText text-opacity-30',
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
              'text-lightThemePrimaryText hover:text-lightThemeSecondaryText text-opacity-30',
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
  );
}
