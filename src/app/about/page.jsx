import LeftCol from '@/app/ui/frames/LeftCol';
import img from 'public/img_1.jpg';
import imgMob from 'public/img_1_mob.jpg';
import About from '@/app/ui/About';

// About Me page
export default function Page() {
  
  return (
    <LeftCol props={{ bgImg: img, alt: 'MBS at night' }}>
      <About />
    </LeftCol>
  );
}
