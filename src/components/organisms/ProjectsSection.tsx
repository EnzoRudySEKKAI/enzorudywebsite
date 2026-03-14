import { Layers, Code2 } from 'lucide-react';
import { SectionHeader } from '@/components/atoms';
import { enTranslations, zhTranslations, useLanguage } from '@/i18n';

export function ProjectsSection() {
  const { language } = useLanguage();
  const t = language === 'zh' ? zhTranslations : enTranslations;

  return (
    <div>
      <SectionHeader title={t.sections.projects} icon={Layers} />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {t.projects.map((project) => (
          <div
            key={project.name}
            className="relative bg-github-card border border-github-border rounded-xl p-5 hover:-translate-y-0.5 hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-github-hover to-github-border flex items-center justify-center">
                <Code2 className="w-5 h-5 text-github-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              </div>
            </div>

            <p className="text-sm text-github-text mb-4">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
