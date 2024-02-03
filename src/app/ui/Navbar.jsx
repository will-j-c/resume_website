import NavLinks from '@/app/ui/Navlinks';

export default function Navbar() {
  return (
    <div className='bg-lightThemeSecondary h-[70px] rounded-b-lg max-w-[1110px] mx-auto flex flex-row'>
      <div className='w-full flex flex-row mx-10'>
        <div className='basis-3/4 flex flex-row content-center'>
          <NavLinks />
        </div>
        <div className='basis-1/4'></div>
      </div>
    </div>
  );
}
