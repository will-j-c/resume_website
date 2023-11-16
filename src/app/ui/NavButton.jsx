export default function NavButton(props) {
  const { title } = props;
  return (
    <div class='w-full bg-white'>
      <p className='text-black'>{title}</p>
    </div>
  );
}
