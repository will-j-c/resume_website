import LeftCol from '@/app/ui/frames/LeftCol';
import img from 'public/lily-banse-Rl6Xep37xS0-unsplash.jpg';
import Education from '@/app/ui/Education';

// Education page
export default function Page() {
  return (
    <LeftCol props={{ bgImg: img, alt: 'Singapore Nankin Street' }}>
      <Education />
    </LeftCol>
  );
}
