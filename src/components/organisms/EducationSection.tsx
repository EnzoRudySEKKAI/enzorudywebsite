import { GraduationCap } from 'lucide-react';
import { SectionHeader } from '@/components/atoms';
import { EducationItem } from '@/components/molecules';
import { education } from '@/data';

export function EducationSection() {
  return (
    <div>
      <SectionHeader title="Education" icon={GraduationCap} />
      <div className="bg-github-card border border-github-border rounded-md p-6">
        {education.map((edu, index) => (
          <EducationItem key={edu.degree} education={edu} index={index} />
        ))}
      </div>
    </div>
  );
}
