import { Terminal } from 'lucide-react';
import { SectionHeader, SkillTag } from '@/components/atoms';
import { enTranslations, zhTranslations, useLanguage } from '@/i18n';

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
            {['C', 'C#/.NET', 'Java', 'Python', 'Go', 'SQL'].map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-github-text-muted mb-2">* {t.skills.frontend}:</p>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'HTML', 'HTMX', 'PHP', 'CSS', 'VueJS'].map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-github-text-muted mb-2">* {t.skills.languages}:</p>
          <div className="flex flex-wrap gap-2">
            {(language === 'zh' 
              ? ['法语（母语）', '英语（流利，TOEIC 900/990）', '汉语HSK4']
              : ['French (Native)', 'English (Fluent, TOEIC 900/990)', 'Chinese HSK4']
            ).map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-github-text-muted mb-2">* {t.skills.softSkills}:</p>
          <div className="flex flex-wrap gap-2">
            {(language === 'zh'
              ? ['适应能力', '团队合作', '沟通技巧', '积极态度', '自我激励']
              : ['Adaptability', 'Teamwork', 'Communication', 'Positivity', 'Motivation']
            ).map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
