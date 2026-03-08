import { Code2 } from 'lucide-react';
import { useInView } from '@/hooks';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, isInView } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`relative bg-github-card border border-github-border rounded-xl p-5 
                  hover:-translate-y-0.5 hover:shadow-glow 
                  transition-all duration-300 opacity-0 ${
                    isInView ? 'animate-fade-in-up' : ''
                  }`}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-github-hover to-github-border flex items-center justify-center">
          <Code2 className="w-5 h-5 text-github-accent" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-github-text-muted mb-4">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs text-github-text-muted">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
