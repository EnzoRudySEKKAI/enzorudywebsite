import { Terminal, ChevronRight } from 'lucide-react';
import { SectionHeader } from '@/components/atoms';
import { enTranslations, zhTranslations, useLanguage } from '@/i18n';
import { skills } from '@/data';

interface SkillCategoryProps {
  label: string;
  skills: string[];
}

function SkillCategory({ label, skills: skillList }: SkillCategoryProps) {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium text-github-accent mb-2 flex items-center gap-2">
        <ChevronRight className="w-3 h-3" />
        {label}
      </h3>
      <p className="text-sm text-github-text leading-relaxed">
        {skillList.join(' • ')}
      </p>
    </div>
  );
}

export function SkillsSection() {
  const { language } = useLanguage();
  const t = language === 'zh' ? zhTranslations : enTranslations;
  
  return (
    <>
      <SectionHeader title={t.sections.skills} icon={Terminal} />
      <div className="space-y-1">
        <SkillCategory label={t.skills.backend} skills={skills.backend} />
        <SkillCategory label={t.skills.ai} skills={skills.ai} />
        <SkillCategory label={t.skills.frontend} skills={skills.frontend} />
        <SkillCategory label={t.skills.database} skills={skills.database} />
        <SkillCategory label={t.skills.infrastructure} skills={skills.infrastructure} />
        <SkillCategory label={t.skills.softSkills} skills={skills.softSkills} />
        <SkillCategory label={t.skills.languages} skills={skills.languages} />
      </div>
    </>
  );
}
