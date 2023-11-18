import NavButton from './NavButton';

export default function Navbar() {
  const titles = ['title', 'title2'];
  return (
    <div className='relative w-1/6 bg-white h-screen p-2'>
      <h1 className='text-black text-3xl text-bold font-bold mb-3'>
        Will Colgate
      </h1>
      <h5 className='text-black text-xs'>Head of Tax, Asia Pacific</h5>
      <h5 className='text-black text-xs'>Chartered Accountant</h5>
      <h5 className='text-black text-xs'>Aspiring Quant</h5>

      {titles.map((title) => {
        console.log(title);
        <NavButton title={title} />;
      })}

    </div>
  );
}
