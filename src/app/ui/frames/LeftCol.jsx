import Image from 'next/image';

export default function LeftCol({ props, children }) {
  const { bgImg, alt } = props;
  return (
    <div className='flex flex-row max-w-[1110px] mx-auto h-4/5 gap-20'>
      <div className='basis-2/3'>{children}</div>
      <div className='basis-1/3 relative'>
          <Image src={bgImg} alt={alt} fill={true} />
      </div>
    </div>
  );
}
