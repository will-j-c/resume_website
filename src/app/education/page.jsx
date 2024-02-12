'use client';

import LeftCol from '@/app/ui/frames/LeftCol';
import img from 'public/img_3.jpg';
import imgMob from 'public/img_3_mob.jpg';
import Education from '@/app/ui/Education';
import { useEffect, useState } from 'react';

// Education page
export default function Page() {
  const [image, setImage] = useState();
  useEffect(() => {
    if (window.innerWidth < 768) {
      setImage(imgMob);
    } else {
      setImage(img);
    }
  }, []);
  return image ? (
    <LeftCol props={{ bgImg: image, alt: 'Singapore Nankin Street' }}>
      <Education />
    </LeftCol>
  ) : (
    <p>Loading</p>
  );
}
