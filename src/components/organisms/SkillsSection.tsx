import { Terminal } from 'lucide-react';
import { SectionHeader, SkillTag } from '@/components/atoms';
import { enTranslations, zhTranslations, useLanguage } from '@/i18n';
import { skills } from '@/data';

export function SkillsSection() {
  const { language } = useLanguage();
  const t = language === 'zh' ? zhTranslations : enTranslations;
  
  return (
    <>
      <SectionHeader title={t.sections.skills} icon={Terminal} />
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-sm text-github-text-muted mb-2">* {t.skills.backend}:</p>
          <div className="flex flex-wrap gap-2">
            {skills.backend.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-github-text-muted mb-2">* {t.skills.ai}:</p>
          <div className="flex flex-wrap gap-2">
            {skills.ai.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-github-text-muted mb-2">* {t.skills.frontend}:</p>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-github-text-muted mb-2">* {t.skills.database}:</p>
          <div className="flex flex-wrap gap-2">
            {skills.database.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-github-text-muted mb-2">* {t.skills.infrastructure}:</p>
          <div className="flex flex-wrap gap-2">
            {skills.infrastructure.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-github-text-muted mb-2">* {t.skills.softSkills}:</p>
          <div className="flex flex-wrap gap-2">
            {skills.softSkills.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-github-text-muted mb-2">* {t.skills.languages}:</p>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
