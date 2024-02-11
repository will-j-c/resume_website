import RightCol from '@/app/ui/frames/RightCol';
import img from 'public/img_2.jpg';
import WorkExperience from '@/app/ui/WorkExperience';

// Work Experience Page
export default function Page() {
  return (
    <RightCol props={{ bgImg: img, alt: 'Super trees at Gardens by the Bay' }}>
      <WorkExperience />
    </RightCol>
  );
}
