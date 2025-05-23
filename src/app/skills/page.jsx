'use client';

import RightCol from '@/app/ui/frames/RightCol';
import img from '/public/img_4.jpg';
import imgMob from '/public/img_4_mob.jpg';
import Skills from '@/app/ui/Skills';
import { useEffect, useState } from 'react';

// Define a compare function
function compareByName(a, b) {
  return a.name.localeCompare(b.name);
}

// Skills page
export default function Page() {
  return (
    <RightCol
      props={{
        bgImg: img,
        bgImgMob: imgMob,
        alt: 'Cloud forests at Gardens by the Bay',
      }}
    >
      <Skills />
    </RightCol>
  );
}
