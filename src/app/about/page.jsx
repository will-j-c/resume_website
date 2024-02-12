'use client';

import LeftCol from '@/app/ui/frames/LeftCol';
import img from 'public/img_1.jpg';
import imgMob from 'public/img_1_mob.jpg';
import About from '@/app/ui/About';
import { useRef } from 'react';

// About Me page
export default function Page() {
  const width = useRef(window.innerWidth);
  const mob = width.current < 768;
  return mob ? (
    <LeftCol props={{ bgImg: imgMob, alt: 'MBS at night' }}>
      <About />
    </LeftCol>
  ) : (
    <LeftCol props={{ bgImg: img, alt: 'MBS at night' }}>
      <About />
    </LeftCol>
  );
}
