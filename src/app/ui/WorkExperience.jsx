import JobAccordionItem from '@/app/ui/JobAccordionItem';
import { arr } from '@/app/lib/jobs';
import { Accordion } from 'react-accessible-accordion';

export default function WorkExperience() {
  const jobs = arr;
  return (
    <Accordion
      className='flex h-full flex-col px-5 md:overflow-auto gap-5'
      allowZeroExpanded={true}
    >
      {jobs.map((job) => {
        return (
          <JobAccordionItem
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
