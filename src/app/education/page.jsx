'use client';

import LeftCol from '@/app/ui/frames/LeftCol';
import img from 'public/img_3.jpg';
import imgMob from 'public/img_3_mob.jpg';
import Education from '@/app/ui/Education';
import { useRef } from 'react';

// Education page
export default function Page() {
  const width = useRef(window.innerWidth);
  const mob = width.current < 768;
  return mob ? (
    <LeftCol props={{ bgImg: imgMob, alt: 'Singapore Nankin Street' }}>
      <Education />
    </LeftCol>
  ) : (
    <LeftCol props={{ bgImg: img, alt: 'Singapore Nankin Street' }}>
      <Education />
    </LeftCol>
  );
}
