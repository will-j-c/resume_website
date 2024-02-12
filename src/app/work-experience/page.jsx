'use client';

import RightCol from '@/app/ui/frames/RightCol';
import img from 'public/img_2.jpg';
import imgMob from 'public/img_2_mob.jpg';
import WorkExperience from '@/app/ui/WorkExperience';
import { useRef } from 'react';

// Work Experience Page
export default function Page() {
  const width = useRef(window.innerWidth);
  const mob = width.current < 768;
  return mob ? (
    <RightCol props={{ bgImg: imgMob, alt: 'Super trees at Gardens by the Bay' }}>
      <WorkExperience />
    </RightCol>
  ) : (
    <RightCol props={{ bgImg: img, alt: 'Super trees at Gardens by the Bay' }}>
      <WorkExperience />
    </RightCol>
  );
}
