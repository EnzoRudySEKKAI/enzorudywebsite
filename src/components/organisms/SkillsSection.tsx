import { Terminal } from 'lucide-react';
import { SectionHeader, SkillTag } from '@/components/atoms';
import { skills } from '@/data';

export function SkillsSection() {
  return (
    <>
      <SectionHeader title="Skills & Tools" icon={Terminal} />
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-sm text-github-text-muted mb-2">* Backend:</p>
          <div className="flex flex-wrap gap-2">
            {skills.backend.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-github-text-muted mb-2">* Frontend:</p>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-github-text-muted mb-2">* Languages:</p>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-github-text-muted mb-2">* Soft Skills:</p>
          <div className="flex flex-wrap gap-2">
            {skills.softSkills.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
