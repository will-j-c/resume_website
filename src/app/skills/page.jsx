'use client';

import RightCol from '@/app/ui/frames/RightCol';
import img from 'public/img_4.jpg';
import { arr } from '@/app/lib/skills';
import { IconContext } from 'react-icons';

// Define a compare function
function compareByName(a, b) {
  return a.name.localeCompare(b.name);
}

// Skills page
export default function Page() {
  const sorted_arr = arr.sort(compareByName);
  const techs = sorted_arr.filter((item) => item.type === 'technology');
  const skills = sorted_arr.filter((item) => item.type === 'tax');
  return (
    <RightCol
      props={{ bgImg: img, alt: 'Cloud forests at Gardens by the Bay' }}
    >
      <div className='flex flex-row text-lightThemePrimaryText'>
        <div className='basis-1/2'>
          <h1 className='text-lightThemeSecondaryText font-extrabold text-xl mb-5'>
            Professional Skills
          </h1>
          <ul>
            {skills.map((skill) => {
              return <li key={skill.uniqueId}>{skill.name}</li>;
            })}
          </ul>
        </div>
        <div className='basis-1/2'>
          <h1 className='text-lightThemeSecondaryText font-extrabold text-xl mb-5'>
            Technology Skills
          </h1>
          <ul>
            {techs.map((tech) => {
              return (
                <li
                  key={tech.uniqueId}
                  className='flex flex-row gap-2 items-center'
                >
                  <IconContext.Provider
                    value={{
                      size: '20',
                      className:
                        'text-lightThemePrimaryText hover:text-lightThemeSecondaryText text-opacity-30',
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
    </RightCol>
  );
}
