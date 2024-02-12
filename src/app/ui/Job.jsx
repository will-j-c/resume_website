import { v4 as uuidv4 } from 'uuid';

export default function Job(props) {
  const { title, dates, where, description, bullets } = props.data;
  return (
    <div>
      <div className='flex flex-row justify-between content-center'>
        <h1 className='text-lightThemeSecondaryText font-extrabold text-xl'>
          {title}
        </h1>
        <h3>{dates}</h3>
      </div>
      <h3 className='mb-5'>{where}</h3>
      <p className='mb-5 text-lightThemeSecondaryText text-xs'>{description}</p>
      <ul className='text-lightThemePrimaryText text-xs list-disc px-5'>
        {bullets.map((bullet) => {
          return <li key={uuidv4()}>{bullet}</li>;
        })}
      </ul>
    </div>
  );
}
