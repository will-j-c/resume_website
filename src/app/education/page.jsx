'use client';

import LeftCol from '@/app/ui/frames/LeftCol';
import img from '/public/img_3.jpg';
import imgMob from '/public/img_3_mob.jpg';
import Education from '@/app/ui/Education';
import { useEffect, useState } from 'react';

// Education page
export default function Page() {
  return (
    <LeftCol
      props={{ bgImg: img, bgImgMob: imgMob, alt: 'Singapore Nankin Street' }}
    >
      <Education />
    </LeftCol>
  );
}
