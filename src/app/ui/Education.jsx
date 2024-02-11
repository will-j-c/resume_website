import School from '@/app/ui/School';
import { arr } from '@/app/lib/schools';

export default function Education() {
  const schools = arr;
  return (
    <div className='flex h-full flex-col px-5 overflow-auto gap-5'>
      {schools.map((school) => {
        return (
          <School
            key={school.uniqueId}
            data={{
              qualification: school.qualification,
              dates: school.dates,
              where: school.where,
              institute: school.institute,
              link: school.link,
            }}
          />
        );
      })}
    </div>
  );
}
