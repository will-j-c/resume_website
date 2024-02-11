import Link from 'next/link';

export default function School(props) {
  const { qualification, institute, dates, where, link } = props.data;
  return (
    <div>
      <h1 className='text-lightThemeSecondaryText font-extrabold text-xl'>
        {qualification}
      </h1>
      <p className='text-lightThemePrimaryText'>
        <Link target='_blank' rel='noopener' href={link} className='hover:text-lightThemeSecondaryText'>
          {institute}
        </Link>
        , {where}
      </p>
      <p className='mb-5 text-lightThemePrimaryText'>{`${dates}`}</p>
    </div>
  );
}
