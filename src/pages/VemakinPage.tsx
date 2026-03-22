import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Film,
  Clapperboard,
  Package,
  FileText,
  CheckSquare,
  Route,
  Cloud,
  Database,
  Code2,
  Server,
  Shield,
  Zap,
  GitBranch,
  Lock,
  Layers,
  Cpu,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/atoms";
import { LanguageToggle, ScrollProgressButton } from "@/components/molecules";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { enTranslations, zhTranslations, useLanguage } from "@/i18n";

function TechSection({
  title,
  easySummary,
  icon: Icon,
  defaultOpen = false,
  children,
}: {
  title: string;
  easySummary: string;
  icon: React.ComponentType<{ className?: string }>;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-github-card border border-github-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 p-5 text-left hover:bg-github-bg/30 transition-colors"
      >
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-github-hover to-github-border flex items-center justify-center flex-shrink-0 mt-0.5">
          <Icon className="w-5 h-5 text-github-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {open ? (
              <ChevronDown className="w-5 h-5 text-github-text-muted flex-shrink-0" />
            ) : (
              <ChevronRight className="w-5 h-5 text-github-text-muted flex-shrink-0" />
            )}
          </div>
          <p className="text-sm text-github-text-muted mt-1">{easySummary}</p>
        </div>
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-github-border/50">
          <div className="pt-4 space-y-6">{children}</div>
        </div>
      )}
    </div>
  );
}

function SubSection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-github-accent flex-shrink-0" />
        {title}
      </h4>
      <p className="text-sm text-github-text-muted leading-relaxed pl-4">{content}</p>
    </div>
  );
}

export function VemakinPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = language === "zh" ? zhTranslations.vemakin : enTranslations.vemakin;
  const isZh = language === "zh";

  const features = [
    { icon: Clapperboard, ...t.features.projectManagement },
    { icon: Package, ...t.features.equipmentInventory },
    { icon: Film, ...t.features.shotManagement },
    { icon: FileText, ...t.features.notesSystem },
    { icon: CheckSquare, ...t.features.postProduction },
    { icon: Route, ...t.features.routePlanning },
  ];

  const frontendTech = isZh
    ? [
        { name: "React", version: "19.0.0", description: "UI框架，支持并发功能" },
        { name: "TypeScript", version: "5.8.2", description: "类型安全开发" },
        { name: "Vite", version: "6.2.0", description: "构建工具和开发服务器" },
        { name: "Tailwind CSS", version: "4.2.0", description: "实用优先的样式" },
        { name: "TanStack Query", version: "5.90.20", description: "服务器状态管理" },
        { name: "Zustand", version: "5.0.11", description: "客户端状态管理" },
      ]
    : [
        { name: "React", version: "19.0.0", description: "UI framework with concurrent features" },
        { name: "TypeScript", version: "5.8.2", description: "Type-safe development" },
        { name: "Vite", version: "6.2.0", description: "Build tool and dev server" },
        { name: "Tailwind CSS", version: "4.2.0", description: "Utility-first styling" },
        { name: "TanStack Query", version: "5.90.20", description: "Server state management" },
        { name: "Zustand", version: "5.0.11", description: "Client state management" },
      ];

  const backendTech = isZh
    ? [
        { name: "Go", version: "1.24.0", description: "后端语言" },
        { name: "Echo Framework", version: "v4.11.4", description: "Web框架" },
        { name: "PostgreSQL", version: "15+", description: "主数据库" },
        { name: "Firebase Admin", version: "v4.13.0", description: "服务端认证" },
        { name: "BigCache", version: "v1.2.1", description: "内存缓存" },
      ]
    : [
        { name: "Go", version: "1.24.0", description: "Backend language" },
        { name: "Echo Framework", version: "v4.11.4", description: "Web framework" },
        { name: "PostgreSQL", version: "15+", description: "Primary database" },
        { name: "Firebase Admin", version: "v4.13.0", description: "Server-side auth" },
        { name: "BigCache", version: "v1.2.1", description: "In-memory caching" },
      ];

  const infrastructure = isZh
    ? [
        { name: "Firebase Hosting", description: "静态网站托管" },
        { name: "Google Cloud Run", description: "容器部署" },
        { name: "Google Cloud SQL", description: "托管PostgreSQL" },
        { name: "Firebase Auth", description: "用户身份管理" },
        { name: "Google Routes API", description: "路线计算" },
      ]
    : [
        { name: "Firebase Hosting", description: "Static site hosting" },
        { name: "Google Cloud Run", description: "Container deployment" },
        { name: "Google Cloud SQL", description: "Managed PostgreSQL" },
        { name: "Firebase Auth", description: "User identity management" },
        { name: "Google Routes API", description: "Route calculation" },
      ];

  const td = t.technicalDeepDive;

  return (
    <div className="min-h-screen bg-github-bg">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Language Toggle */}
        <div className="flex justify-end mb-6">
          <LanguageToggle />
        </div>

        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(isZh ? "/cn" : "/")}
          className="mb-6 text-github-text hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.backToPortfolio}
        </Button>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-github-hover to-github-border flex items-center justify-center">
              <Film className="w-6 h-6 text-github-accent" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {t.title}
              </h1>
              <p className="text-xl text-github-accent">{t.subtitle}</p>
            </div>
          </div>

          <p className="text-lg text-github-text mb-6 max-w-4xl">
            {t.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() =>
                    window.open(
                      "https://vemakin.com",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  className="bg-github-accent hover:bg-github-accent/90 text-white"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {isZh ? "访问网站" : "Visit site"}
                  <span className="text-github-accent cursor-help ml-1">*</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                {t.vpnTooltip}
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <SectionHeader title={t.overview.title} icon={Film} />
          <div className="bg-github-card border border-github-border rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-github-bg/50 rounded-lg border border-github-border/50">
                <h3 className="text-white font-semibold mb-2">
                  {t.overview.problem.title}
                </h3>
                <p className="text-sm text-github-text-muted">
                  {t.overview.problem.content}
                </p>
              </div>
              <div className="p-4 bg-github-bg/50 rounded-lg border border-github-border/50">
                <h3 className="text-white font-semibold mb-2">
                  {t.overview.solution.title}
                </h3>
                <p className="text-sm text-github-text-muted">
                  {t.overview.solution.content}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <SectionHeader title={t.features.title} icon={Clapperboard} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-github-card border border-github-border rounded-xl p-5 hover:-translate-y-0.5 hover:border-github-accent/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-github-hover to-github-border flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-github-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-github-text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <SectionHeader title={t.architecture.title} icon={Server} />
          <div className="bg-github-card border border-github-border rounded-xl p-6">
            <p className="text-github-text mb-6">
              {t.architecture.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-github-bg/50 rounded-lg border border-github-border/50">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-5 h-5 text-github-accent" />
                  <h3 className="text-white font-semibold">
                    {t.architecture.clientLayer.title}
                  </h3>
                </div>
                <p className="text-sm text-github-text-muted">
                  {t.architecture.clientLayer.content}
                </p>
              </div>

              <div className="p-4 bg-github-bg/50 rounded-lg border border-github-border/50">
                <div className="flex items-center gap-2 mb-3">
                  <Server className="w-5 h-5 text-github-accent" />
                  <h3 className="text-white font-semibold">
                    {t.architecture.apiLayer.title}
                  </h3>
                </div>
                <p className="text-sm text-github-text-muted">
                  {t.architecture.apiLayer.content}
                </p>
              </div>

              <div className="p-4 bg-github-bg/50 rounded-lg border border-github-border/50">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="w-5 h-5 text-github-accent" />
                  <h3 className="text-white font-semibold">
                    {t.architecture.dataLayer.title}
                  </h3>
                </div>
                <p className="text-sm text-github-text-muted">
                  {t.architecture.dataLayer.content}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-12">
          <SectionHeader title={t.techStack.title} icon={Code2} />

          <div className="space-y-6">
            {/* Frontend */}
            <div className="bg-github-card border border-github-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                {t.techStack.frontend}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {frontendTech.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 bg-github-bg/50 rounded-lg border border-github-border/50"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-white font-medium">
                        {tech.name}
                      </span>
                      <span className="text-xs text-github-accent">
                        {tech.version}
                      </span>
                    </div>
                    <p className="text-xs text-github-text-muted">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-github-card border border-github-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                {t.techStack.backend}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {backendTech.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 bg-github-bg/50 rounded-lg border border-github-border/50"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-white font-medium">
                        {tech.name}
                      </span>
                      <span className="text-xs text-github-accent">
                        {tech.version}
                      </span>
                    </div>
                    <p className="text-xs text-github-text-muted">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Infrastructure */}
            <div className="bg-github-card border border-github-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                {t.techStack.infrastructure}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {infrastructure.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 bg-github-bg/50 rounded-lg border border-github-border/50"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Cloud className="w-4 h-4 text-github-accent" />
                      <span className="text-white font-medium">
                        {item.name}
                      </span>
                    </div>
                    <p className="text-xs text-github-text-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="mb-12">
          <SectionHeader title={t.security.title} icon={Shield} />
          <div className="bg-github-card border border-github-border rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-github-bg/50 rounded-lg border border-github-border/50">
                <h3 className="text-white font-semibold mb-2">
                  {t.security.firebaseAuth.title}
                </h3>
                <p className="text-sm text-github-text-muted">
                  {t.security.firebaseAuth.content}
                </p>
              </div>
              <div className="p-4 bg-github-bg/50 rounded-lg border border-github-border/50">
                <h3 className="text-white font-semibold mb-2">
                  {t.security.dataOwnership.title}
                </h3>
                <p className="text-sm text-github-text-muted">
                  {t.security.dataOwnership.content}
                </p>
              </div>
              <div className="p-4 bg-github-bg/50 rounded-lg border border-github-border/50">
                <h3 className="text-white font-semibold mb-2">
                  {t.security.corsProtection.title}
                </h3>
                <p className="text-sm text-github-text-muted">
                  {t.security.corsProtection.content}
                </p>
              </div>
              <div className="p-4 bg-github-bg/50 rounded-lg border border-github-border/50">
                <h3 className="text-white font-semibold mb-2">
                  {t.security.professionalSecurity.title}
                </h3>
                <p className="text-sm text-github-text-muted">
                  {t.security.professionalSecurity.content}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== TECHNICAL DEEP DIVE ==================== */}
        <section className="mb-12">
          <div className="mb-6">
            <SectionHeader title={td.title} icon={Cpu} />
            <p className="text-github-text-muted mt-2 text-sm">
              {td.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {/* Concurrency & Go Routines */}
            <TechSection
              title={td.concurrency.title}
              easySummary={td.concurrency.easySummary}
              icon={Zap}
              defaultOpen
            >
              <SubSection
                title={td.concurrency.sections.goroutines.title}
                content={td.concurrency.sections.goroutines.content}
              />
              <SubSection
                title={td.concurrency.sections.channels.title}
                content={td.concurrency.sections.channels.content}
              />
              <SubSection
                title={td.concurrency.sections.workerPool.title}
                content={td.concurrency.sections.workerPool.content}
              />
              <SubSection
                title={td.concurrency.sections.parallelism.title}
                content={td.concurrency.sections.parallelism.content}
              />
            </TechSection>

            {/* Security Deep Dive */}
            <TechSection
              title={td.securityDeepDive.title}
              easySummary={td.securityDeepDive.easySummary}
              icon={Lock}
            >
              <SubSection
                title={td.securityDeepDive.sections.owasp.title}
                content={td.securityDeepDive.sections.owasp.content}
              />
              <SubSection
                title={td.securityDeepDive.sections.csrf.title}
                content={td.securityDeepDive.sections.csrf.content}
              />
              <SubSection
                title={td.securityDeepDive.sections.sqlInjection.title}
                content={td.securityDeepDive.sections.sqlInjection.content}
              />
              <SubSection
                title={td.securityDeepDive.sections.xssPrevention.title}
                content={td.securityDeepDive.sections.xssPrevention.content}
              />
              <SubSection
                title={td.securityDeepDive.sections.tokenSecurity.title}
                content={td.securityDeepDive.sections.tokenSecurity.content}
              />
              <SubSection
                title={td.securityDeepDive.sections.rateLimiting.title}
                content={td.securityDeepDive.sections.rateLimiting.content}
              />
            </TechSection>

            {/* Database Optimization */}
            <TechSection
              title={td.databaseOptimization.title}
              easySummary={td.databaseOptimization.easySummary}
              icon={Database}
            >
              <SubSection
                title={td.databaseOptimization.sections.indexing.title}
                content={td.databaseOptimization.sections.indexing.content}
              />
              <SubSection
                title={td.databaseOptimization.sections.softDelete.title}
                content={td.databaseOptimization.sections.softDelete.content}
              />
              <SubSection
                title={td.databaseOptimization.sections.jsonb.title}
                content={td.databaseOptimization.sections.jsonb.content}
              />
              <SubSection
                title={td.databaseOptimization.sections.connectionPooling.title}
                content={td.databaseOptimization.sections.connectionPooling.content}
              />
              <SubSection
                title={td.databaseOptimization.sections.queryOptimization.title}
                content={td.databaseOptimization.sections.queryOptimization.content}
              />
            </TechSection>

            {/* APIs & Integrations */}
            <TechSection
              title={td.apis.title}
              easySummary={td.apis.easySummary}
              icon={GitBranch}
            >
              <SubSection
                title={td.apis.sections.googleRoutes.title}
                content={td.apis.sections.googleRoutes.content}
              />
              <SubSection
                title={td.apis.sections.googlePlaces.title}
                content={td.apis.sections.googlePlaces.content}
              />
              <SubSection
                title={td.apis.sections.firebaseAdmin.title}
                content={td.apis.sections.firebaseAdmin.content}
              />
              <SubSection
                title={td.apis.sections.bigCache.title}
                content={td.apis.sections.bigCache.content}
              />
              <SubSection
                title={td.apis.sections.mountLinks.title}
                content={td.apis.sections.mountLinks.content}
              />
            </TechSection>

            {/* Frontend Patterns */}
            <TechSection
              title={td.frontendPatterns.title}
              easySummary={td.frontendPatterns.easySummary}
              icon={Layers}
            >
              <SubSection
                title={td.frontendPatterns.sections.stateManagement.title}
                content={td.frontendPatterns.sections.stateManagement.content}
              />
              <SubSection
                title={td.frontendPatterns.sections.optimisticUpdates.title}
                content={td.frontendPatterns.sections.optimisticUpdates.content}
              />
              <SubSection
                title={td.frontendPatterns.sections.atomicDesign.title}
                content={td.frontendPatterns.sections.atomicDesign.content}
              />
              <SubSection
                title={td.frontendPatterns.sections.tanstackCaching.title}
                content={td.frontendPatterns.sections.tanstackCaching.content}
              />
            </TechSection>

            {/* Architecture Decisions */}
            <TechSection
              title={td.architectureDecisions.title}
              easySummary={td.architectureDecisions.easySummary}
              icon={Server}
            >
              <SubSection
                title={td.architectureDecisions.sections.whyGo.title}
                content={td.architectureDecisions.sections.whyGo.content}
              />
              <SubSection
                title={td.architectureDecisions.sections.whyCloudRun.title}
                content={td.architectureDecisions.sections.whyCloudRun.content}
              />
              <SubSection
                title={td.architectureDecisions.sections.whyFirebase.title}
                content={td.architectureDecisions.sections.whyFirebase.content}
              />
              <SubSection
                title={td.architectureDecisions.sections.repositoryPattern.title}
                content={td.architectureDecisions.sections.repositoryPattern.content}
              />
            </TechSection>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center py-8">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://vemakin.com",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="bg-github-accent hover:bg-github-accent/90 text-white"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                {t.cta}
                <span className="text-github-accent cursor-help ml-1">*</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              {t.vpnTooltip}
            </TooltipContent>
          </Tooltip>
        </section>
      </main>

      {/* Scroll Progress Button */}
      <ScrollProgressButton />
    </div>
  );
}
