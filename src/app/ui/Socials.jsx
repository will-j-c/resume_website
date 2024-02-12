import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

export default function Socials() {
  return (
    <IconContext.Provider
      value={{
        size: '25',
        className:
          'text-lightThemePrimaryText dark:text-darkThemePrimaryText dark:hover:text-darkThemeSecondaryText hover:text-lightThemeSecondaryText dark:text-darkThemeSecondaryText text-opacity-30',
      }}
    >
      <a
        target='_blank'
        rel='noopener'
        href='https://www.linkedin.com/in/willcolgate/'
      >
        <FaLinkedinIn />
      </a>
      <a target='_blank' rel='noopener' href='https://github.com/will-j-c'>
        <FaGithub />
      </a>
    </IconContext.Provider>
  );
}
