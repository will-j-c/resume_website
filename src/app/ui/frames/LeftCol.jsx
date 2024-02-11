import Image from 'next/image';

export default function LeftCol({ props, children }) {
  const { bgImg, alt } = props;
  return (
    <div className='flex flex-col-reverse md:flex-row max-w-[1110px] mx-auto md:h-4/5 gap-36'>
      <div className='md:basis-7/12'>{children}</div>
      <div className='md:basis-5/12 relative'>
        <Image src={bgImg} alt={alt} fill={true} />
      </div>
    </div>
  );
}
