import { useInView } from '@/hooks';
import type { Experience } from '@/types';

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

export function ExperienceItem({ experience, index }: ExperienceItemProps) {
  const { ref, isInView } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`relative pl-6 pb-6 border-l border-github-border last:pb-0 opacity-0 ${
        isInView ? 'animate-fade-in-up' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-github-accent" />
      <h4 className="font-semibold text-white">{experience.title}</h4>
      <p className="text-sm text-github-accent">{experience.company}</p>
      <p className="text-xs text-github-text-muted mb-2">{experience.period}</p>
      <p className="text-sm text-github-text-muted">{experience.description}</p>
    </div>
  );
}
