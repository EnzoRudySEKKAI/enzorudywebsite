import { useNavigate } from 'react-router-dom';
import { Building2, ExternalLink, Film, Clapperboard, Package, FileText, CheckSquare, Route } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/atoms';
import { enTranslations, zhTranslations, useLanguage } from '@/i18n';

export function CompanyProjectSection() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = language === 'zh' ? zhTranslations : enTranslations;

  const features = [
    { icon: Clapperboard, label: t.companyProject.features.projectManagement },
    { icon: Package, label: t.companyProject.features.equipmentInventory },
    { icon: Film, label: t.companyProject.features.shotManagement },
    { icon: FileText, label: t.companyProject.features.notesSystem },
    { icon: CheckSquare, label: t.companyProject.features.postProduction },
    { icon: Route, label: t.companyProject.features.routePlanning },
  ];

  const techStack = ['React 19', 'Go', 'TypeScript', 'PostgreSQL', 'Firebase', 'Google Cloud'];

  return (
    <div className="mb-8">
      <SectionHeader title={t.sections.companyProject} icon={Building2} />
      
      <div className="relative bg-github-card border border-github-border rounded-xl p-6 md:p-8 overflow-hidden">
        {/* Background gradient accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {t.companyProject.title}
            </h2>
            <p className="text-xl text-github-accent font-medium mb-4">
              {t.companyProject.subtitle}
            </p>
            <p className="text-github-text max-w-3xl">
              {t.companyProject.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-2 p-3 bg-github-bg/50 rounded-lg border border-github-border/50"
              >
                <feature.icon className="w-4 h-4 text-github-accent" />
                <span className="text-sm text-github-text">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <p className="text-sm text-github-text-muted mb-2">{t.companyProject.builtWith}</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-github-hover text-github-text rounded-full border border-github-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => navigate('/vemakin')}
              className="bg-github-accent hover:bg-github-accent/90 text-white"
            >
              {t.companyProject.moreInfo}
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('https://vemakin.web.app', '_blank', 'noopener,noreferrer')}
              className="border-github-border text-github-text hover:bg-github-hover"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              {t.companyProject.visitSite}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
