export default function NavButton(props) {
  const { title } = props;
  console.log(title)
  return (
    <div className='w-full bg-white'>
      <p className='text-black'>{title}</p>
    </div>
  );
}
