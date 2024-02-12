import { arr } from '@/app/lib/skills';
import { IconContext } from 'react-icons';

// Define a compare function
function compareByName(a, b) {
  return a.name.localeCompare(b.name);
}

export default function Skills() {
  const sorted_arr = arr.sort(compareByName);
  const techs = sorted_arr.filter((item) => item.type === 'technology');
  const skills = sorted_arr.filter((item) => item.type === 'tax');
  return (
    <div className='flex flex-col md:flex-row text-lightThemePrimaryText dark:text-darkThemePrimaryText text-xs gap-5 text-center md:text-left'>
      <div className='basis-1/2'>
        <h1 className='text-lightThemeSecondaryText font-extrabold text-xl mb-5 dark:text-darkThemeSecondaryText'>
          Professional Skills
        </h1>
        <ul>
          {skills.map((skill) => {
            return (
              <li key={skill.uniqueId} className='my-2 text-xs md:text-sm'>
                {skill.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='basis-1/2'>
        <h1 className='text-lightThemeSecondaryText font-extrabold mb-5 dark:text-darkThemeSecondaryText text-sm md:text-lg'>
          Technology Skills
        </h1>
        <ul>
          {techs.map((tech) => {
            return (
              <li
                key={tech.uniqueId}
                className='flex flex-row gap-2 items-center justify-center md:justify-start my-1 text-xs md:text-sm'
              >
                <IconContext.Provider
                  value={{
                    size: '20',
                    className:
                      'text-lightThemePrimaryText dark:text-darkThemePrimaryText dark:hover:text-darkThemeSecondaryText hover:text-lightThemeSecondaryText text-opacity-30 dark:text-darkThemeSecondaryText',
                  }}
                >
                  {tech.icon}
                </IconContext.Provider>
                <div>{tech.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
