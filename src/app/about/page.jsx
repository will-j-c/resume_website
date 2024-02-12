'use client';

import LeftCol from '@/app/ui/frames/LeftCol';
import img from 'public/img_1.jpg';
import imgMob from 'public/img_1_mob.jpg';
import About from '@/app/ui/About';
import { useEffect, useState } from 'react';

// About Me page
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
    <LeftCol props={{ bgImg: image, alt: 'MBS at night' }}>
      <About />
    </LeftCol>
  ) : (
   <p>Loading</p>
  );
}
