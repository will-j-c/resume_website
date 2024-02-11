'use client';

import ProjectCard from '@/app/ui/ProjectCard';
import { arr } from '@/app/lib/cards';

// Projects page
export default function Page() {
  const cards = arr;
  return (
    <div className='grid md:grid-cols-3 gap-5 px-5 md:px-0'>
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
              icons: card.icons,
            }}
          />
        );
      })}
    </div>
  );
}
