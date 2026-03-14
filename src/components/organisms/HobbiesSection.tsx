import { Cpu, Globe, Film, Brain } from 'lucide-react';
import { SectionHeader } from '@/components/atoms';
import { enTranslations, zhTranslations, useLanguage } from '@/i18n';

export function HobbiesSection() {
  const { language } = useLanguage();
  const t = language === 'zh' ? zhTranslations : enTranslations;
  const icons = [Globe, Film, Brain];

  return (
    <div>
      <SectionHeader title={t.sections.hobbies} icon={Cpu} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {t.hobbies.map((hobby, index) => {
          const Icon = icons[index];
          return (
            <div
              key={hobby.name}
              className="bg-github-card border border-github-border rounded-xl p-5 hover:-translate-y-0.5 hover:border-github-accent/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-github-hover to-github-border flex items-center justify-center">
                  <Icon className="w-5 h-5 text-github-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white">{hobby.name}</h3>
              </div>
              <p className="text-sm text-github-text">{hobby.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
