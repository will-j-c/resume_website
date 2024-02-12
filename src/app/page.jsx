import Image from 'next/image';
import profileImg from 'public/profile.jpeg';
// Home page

export default function Page() {
  return (
    <div className='flex flex-col md:flex-row max-w-[1110px] mx-auto h-[75vh] gap-10 mt-5'>
      <div className='basis-6/12 flex h-full flex-col justify-center md:pl-20 text-center md:text-left'>
        <h1 className='text-4xl text-lightThemePrimaryText mb-7 font-extrabold'>
          Will Colgate.
        </h1>
        <div className='text-s text-lightThemeSecondaryText'>
          <p>Tax professional</p>
          <p>Chartered Accountant</p>
          <p>Chartered Tax Advisor</p>
          <p>Certificate in Quantitative Finance</p>
          <p>Developer</p>
          <p>Machine Learning Enthusiast</p>
          <p>Aspiring Quant</p>
        </div>
      </div>
      <div className='basis-6/12 flex flex-col justify-center'>
        <div className='rounded-full relative overflow-hidden h-[175px] w-[175px] md:h-[350px] md:w-[350px] self-center'>
          <Image src={profileImg} alt='Profile picture of Will' fill={true} priority={true} />
        </div>
      </div>
    </div>
  );
}
