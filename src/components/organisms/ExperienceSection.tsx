import { Building2 } from 'lucide-react';
import { SectionHeader } from '@/components/atoms';
import { enTranslations, zhTranslations, useLanguage } from '@/i18n';

export function ExperienceSection() {
  const { language } = useLanguage();
  const t = language === 'zh' ? zhTranslations : enTranslations;

  return (
    <div>
      <SectionHeader title={t.sections.experience} icon={Building2} />
      <div className="space-y-4">
        {t.experiences.map((exp) => (
          <div
            key={exp.title}
            className="relative bg-github-card border border-github-border rounded-xl p-5 hover:-translate-y-0.5 hover:border-github-accent/30 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
              <span className="text-sm text-github-accent">{exp.period}</span>
            </div>
            <p className="text-sm text-github-text-muted mb-3">{exp.company}</p>
            <p className="text-sm text-github-text">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
