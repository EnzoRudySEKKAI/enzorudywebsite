import { Building2 } from 'lucide-react';
import { SectionHeader } from '@/components/atoms';
import { ExperienceItem } from '@/components/molecules';
import { experiences } from '@/data';

export function ExperienceSection() {
  return (
    <div>
      <SectionHeader title="Experience" icon={Building2} />
      <div className="bg-github-card border border-github-border rounded-md p-6">
        {experiences.map((exp, index) => (
          <ExperienceItem key={exp.title + exp.period} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
}
