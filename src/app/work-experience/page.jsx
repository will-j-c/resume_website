'use client';

import RightCol from '@/app/ui/frames/RightCol';
import img from 'public/img_2.jpg';
import imgMob from 'public/img_2_mob.jpg';
import WorkExperience from '@/app/ui/WorkExperience';
import { useEffect, useState } from 'react';

// Work Experience Page
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
    <RightCol
      props={{ bgImg: image, alt: 'Super trees at Gardens by the Bay' }}
    >
      <WorkExperience />
    </RightCol>
  ) : (
    <p>Loading</p>
  );
}
