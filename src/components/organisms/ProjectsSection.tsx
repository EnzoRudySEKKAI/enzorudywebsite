import { Layers } from 'lucide-react';
import { SectionHeader } from '@/components/atoms';
import { ProjectCard } from '@/components/molecules';
import { projects } from '@/data';

export function ProjectsSection() {
  return (
    <div>
      <SectionHeader title="Featured Projects" icon={Layers} />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
