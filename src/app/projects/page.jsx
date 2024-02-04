'use client';

import ProjectCard from '@/app/ui/ProjectCard';
import { arr } from '@/app/lib/cards';

// Projects page
export default function Page() {
  const cards = arr;
  return (
    <div className='flex flex-row gap-5'>
      {cards.map((card) => {
        if (card.draft) {
          return;
        }
        return (
          <ProjectCard
            key={card.uniqueId}
            data={{
              title: card.title,
              description: card.description,
              applink: card.appLink,
              githubLink: card.githubLink,
            }}
          />
        );
      })}
    </div>
  );
}
