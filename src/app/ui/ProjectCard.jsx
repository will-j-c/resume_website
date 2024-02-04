import { FaGithub } from 'react-icons/fa';
import { CiLink } from 'react-icons/ci';
import { IconContext } from 'react-icons';

export default function ProjectCard(props) {
  const { title, description, githubLink, appLink } = props.data;
  return (
    <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
        {title}
      </h5>
      <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
        {description}
      </p>
      <div className='flex flex-row justify-end gap-5'>
        <IconContext.Provider
          value={{
            size: '25',
            className:
              'text-lightThemePrimaryText hover:text-lightThemeSecondaryText text-opacity-30',
          }}
        >
          <a target='_blank' rel='noopener' href={appLink}>
            <CiLink />
          </a>
          <a target='_blank' rel='noopener' href={githubLink}>
            <FaGithub />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}
