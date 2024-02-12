import Link from 'next/link';

export default function School(props) {
  const { qualification, institute, dates, where, link } = props.data;
  return (
    <div>
      <h1 className='text-lightThemeSecondaryText dark:text-darkThemeSecondaryText font-extrabold text-sm md:text-lg'>
        {qualification}
      </h1>
      <p className='text-lightThemePrimaryText dark:text-darkThemePrimaryText text-xs md:text-base'>
        <Link target='_blank' rel='noopener' href={link} className='hover:text-lightThemeSecondaryText dark:hover:text-darkThemeSecondaryText'>
          {institute}
        </Link>
        , {where}
      </p>
      <p className='mb-5 text-lightThemePrimaryText dark:text-darkThemePrimaryText text-xs md:text-base'>{`${dates}`}</p>
    </div>
  );
}
