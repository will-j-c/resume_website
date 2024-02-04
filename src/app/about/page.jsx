import LeftCol from '@/app/ui/frames/LeftCol';
import img from 'public/keming-tan-hGgM1F_Mq6g-unsplash.jpg';
import About from '@/app/ui/About';

// About Me page
export default function Page() {
  return (
    <LeftCol props={{ bgImg: img, alt: 'MBS at night' }}>
      <About />
    </LeftCol>
  );
}
