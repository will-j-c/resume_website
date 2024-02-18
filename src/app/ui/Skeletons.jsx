const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function LargePhotoSkeleton() {
    return <div className='md:basis-5/12 relative mb-5 md:mb-0 bg-orange-600 h-20'></div>;
  }

export function MobilePhotoSkeleton() {
    return <div className='md:basis-5/12 relative mb-5 md:mb-0 bg-orange-600 h-20'></div>;
  }