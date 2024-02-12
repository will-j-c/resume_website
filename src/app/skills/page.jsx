'use client';

import RightCol from '@/app/ui/frames/RightCol';
import img from 'public/img_4.jpg';
import imgMob from 'public/img_4_mob.jpg';
import Skills from '@/app/ui/Skills';
import { useRef } from 'react';

// Define a compare function
function compareByName(a, b) {
  return a.name.localeCompare(b.name);
}

// Skills page
export default function Page() {
  const width = useRef(window.innerWidth);
  const mob = width.current < 768;
  return mob ? (
    <RightCol
      props={{ bgImg: imgMob, alt: 'Cloud forests at Gardens by the Bay' }}
    >
      <Skills />
    </RightCol>
  ) : (
    <RightCol
      props={{ bgImg: img, alt: 'Cloud forests at Gardens by the Bay' }}
    >
      <Skills />
    </RightCol>
  );
}
