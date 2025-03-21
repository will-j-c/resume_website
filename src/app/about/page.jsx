'use client';

import LeftCol from '@/app/ui/frames/LeftCol';
import img from '/public/img_1.jpg';
import imgMob from '/public/img_1_mob.jpg';
import About from '@/app/ui/About';

// About Me page
export default function Page() {
  return (
    <LeftCol props={{ bgImg: img, bgImgMob: imgMob, alt: 'MBS at night' }}>
      <About />
    </LeftCol>
  );
}
