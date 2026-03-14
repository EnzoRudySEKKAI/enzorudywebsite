import { GraduationCap } from 'lucide-react';
import { SectionHeader } from '@/components/atoms';
import { enTranslations, zhTranslations, useLanguage } from '@/i18n';

export function EducationSection() {
  const { language } = useLanguage();
  const t = language === 'zh' ? zhTranslations : enTranslations;

  return (
    <div>
      <SectionHeader title={t.sections.education} icon={GraduationCap} />
      <div className="space-y-4">
        {t.education.map((edu) => (
          <div
            key={edu.degree}
            className="relative bg-github-card border border-github-border rounded-xl p-5 hover:-translate-y-0.5 hover:border-github-accent/30 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
              <span className="text-sm text-github-accent">{edu.period}</span>
            </div>
            <p className="text-sm text-github-text-muted">{edu.school}</p>
            {edu.details && (
              <p className="text-sm text-github-text mt-2">{edu.details}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
