import Image from 'next/image';

// Home page

export default function Page() {
  return (
    <div className='flex flex-col md:flex-row max-w-[1110px] mx-auto max-h-[75vh] gap-10 mt-5 md:mt-36'>
      <div className='basis-6/12 flex h-full flex-col justify-center md:pl-20 text-center md:text-left'>
        <h1 className='text-4xl text-lightThemePrimaryText mb-7 font-extrabold dark:text-darkThemePrimaryText'>
          Will Colgate.
        </h1>
        <div className='text-s text-lightThemeSecondaryText dark:text-darkThemeSecondaryText'>
          <p>Solidity Developer</p>
          <p>Quantitative Developer</p>
          <p>Chartered Accountant</p>
          <p>Chartered Tax Advisor</p>
          <p>Certificate in Quantitative Finance</p>

        </div>
      </div>
      <div className='basis-6/12 flex flex-col justify-center'>
        <div className='rounded-full relative overflow-hidden h-[175px] w-[175px] md:h-[350px] md:w-[350px] self-center'>
          <Image src='/profile.png' alt='Profile picture of Will' fill={true} priority={true} />
        </div>
      </div>
    </div>
  );
}
