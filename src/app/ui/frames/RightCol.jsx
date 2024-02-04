import Image from 'next/image';

export default function RightCol({ props, children }) {
  const { bgImg, alt } = props;
  return (
    <div className='flex flex-row max-w-[1110px] mx-auto h-4/5 gap-36'>
      <div className='basis-5/12 relative'>
        <Image src={bgImg} alt={alt} fill={true} />
      </div>
      <div className='basis-7/12'>{children}</div>
    </div>
  );
}
