import Job from '@/app/ui/Job';
import JobAccordianItem from '@/app/ui/JobAccordianItem';
import { arr } from '@/app/lib/jobs';
import { Accordion } from 'react-accessible-accordion';
import { useState } from 'react';

export default function WorkExperience() {
  const jobs = arr;
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <div className='flex h-full flex-col px-5 md:overflow-auto gap-5'>
    //   {jobs.map((job) => {
    //     return (
    //       <Job
    //         key={job.uniqueId}
    //         data={{
    //           title: job.title,
    //           dates: job.dates,
    //           where: job.where,
    //           description: job.description,
    //           bullets: job.bullets,
    //         }}
    //       />
    //     );
    //   })}
    // </div>
    <Accordion
      className='flex h-full flex-col px-5 md:overflow-auto gap-5'
      allowZeroExpanded={true}
    >
      {jobs.map((job) => {
        return (
          <JobAccordianItem
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
    </Accordion>
  );
}
