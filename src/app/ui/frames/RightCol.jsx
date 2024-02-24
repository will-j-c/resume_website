import Image from 'next/image';

export default function RightCol({ props, children }) {
  const { bgImg, alt, bgImgMob } = props;
  return (
    <div className='flex flex-col md:flex-row max-w-[1110px] mx-auto md:h-4/5 md:gap-24'>
      <div className='md:basis-5/12 relative mb-5 md:mb-0'>
        <Image
          src={bgImg}
          alt={alt}
          priority={true}
          className='invisible h-0 md:visible md:h-fit'
        />
        <Image
          src={bgImgMob}
          alt={alt}
          priority={true}
          className='md:invisible md:h-0'
        />
      </div>
      <div className='md:basis-7/12'>{children}</div>
    </div>
  );
}
