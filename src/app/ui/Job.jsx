import { v4 as uuidv4 } from 'uuid';

export default function Job(props) {
  const { title, dates, where, description, bullets } = props.data;
  return (
    <div>
      <div className='flex flex-row justify-between content-center'>
        <h1 className='text-lightThemeSecondaryText font-extrabold text-sm md:text-lg dark:text-darkThemeSecondaryText'>
          {title}
        </h1>
        <h3 className='text-lightThemePrimaryText dark:text-darkThemePrimaryText text-xs md:text-base'>{dates}</h3>
      </div>
      <h3 className='mb-5 text-lightThemePrimaryText dark:text-darkThemePrimaryText text-xs md:text-base'>{where}</h3>
      <p className='mb-5 text-lightThemeSecondaryText text-xs dark:text-darkThemeSecondaryText'>
        {description}
      </p>
      <ul className='text-lightThemePrimaryText text-xs list-disc px-5 dark:text-darkThemePrimaryText'>
        {bullets.map((bullet) => {
          return <li key={uuidv4()}>{bullet}</li>;
        })}
      </ul>
    </div>
  );
}
