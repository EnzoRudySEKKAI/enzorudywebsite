import { Cpu } from 'lucide-react';
import { SectionHeader } from '@/components/atoms';
import { HobbyCard } from '@/components/molecules';
import { hobbies } from '@/data';

export function HobbiesSection() {
  return (
    <div>
      <SectionHeader title="Hobbies & Interests" icon={Cpu} />
      <div className="bg-github-card border border-github-border rounded-md p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {hobbies.map((hobby) => (
            <HobbyCard
              key={hobby.name}
              name={hobby.name}
              description={hobby.description}
              icon={hobby.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
