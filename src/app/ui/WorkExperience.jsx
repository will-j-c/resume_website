import Job from '@/app/ui/Job';
import { arr } from '@/app/lib/jobs';

export default function WorkExperience() {
  const jobs = arr;
  console.log(jobs);
  return (
    <div className='flex h-full flex-col px-5 overflow-auto gap-5'>
      {jobs.map((job) => {
        return (
          <Job
            key={job.uniqueId}
            data={{
              title: job.title,
              dates: job.dates,
              where: job.where,
              description: job.description,
              bullets: job.bullets,
            }}
          />
        );
      })}
    </div>
  );
}
