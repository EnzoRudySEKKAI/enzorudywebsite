import { useInView } from '@/hooks';
import type { Education } from '@/types';

interface EducationItemProps {
  education: Education;
  index: number;
}

export function EducationItem({ education, index }: EducationItemProps) {
  const { ref, isInView } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`relative pl-6 pb-6 border-l border-github-border last:pb-0 opacity-0 ${
        isInView ? 'animate-fade-in-up' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-github-accent-green" />
      <h4 className="font-semibold text-white">{education.degree}</h4>
      <p className="text-sm text-github-accent">{education.school}</p>
      <p className="text-xs text-github-text-muted">{education.period}</p>
      {education.details && (
        <p className="text-sm text-github-text-muted mt-1">{education.details}</p>
      )}
    </div>
  );
}
