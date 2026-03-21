import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
  ProfileSidebar,
  ReadmeCard,
  SkillsSection,
  ExperienceSection,
  EducationSection,
  ProjectsSection,
  HobbiesSection,
  CompanyProjectSection,
  LanguageToggle,
  ScrollProgressButton,
} from '@/components';
import { ScrollToTop } from '@/components/utils/ScrollToTop';
import { VemakinPage } from '@/pages';
import { LanguageProvider, useLanguage, enTranslations, zhTranslations } from '@/i18n';

function HomePage() {
  const { language } = useLanguage();
  const t = language === 'zh' ? zhTranslations : enTranslations;

  return (
    <div className="min-h-screen bg-github-bg">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <ProfileSidebar />

          {/* Main Content Area */}
          <div
            className="flex-1 min-w-0 space-y-6 opacity-0 animate-fade-in-right"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            {/* Language Toggle - Top right of content area */}
            <div className="flex justify-end">
              <LanguageToggle />
            </div>

            {/* README Card */}
            <ReadmeCard>
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {t.header.name}
                </h2>
                <div className="w-full h-px bg-github-border my-4" />
              </div>

              {/* Bio */}
              <BioSection />

              <div className="w-full h-px bg-github-border my-4" />

              {/* Skills Section */}
            <div id="skills">
              <SkillsSection />
            </div>
            </ReadmeCard>

            {/* Company Project Section */}
            <div id="company-project">
              <CompanyProjectSection />
            </div>

            {/* Experience */}
            <div id="experience">
              <ExperienceSection />
            </div>

            {/* Education */}
            <div id="education">
              <EducationSection />
            </div>

            {/* Featured Projects */}
            <div id="projects">
              <ProjectsSection />
            </div>

            {/* Hobbies & Interests */}
            <div id="hobbies">
              <HobbiesSection />
            </div>
          </div>
        </div>
      </main>

      {/* Scroll Progress Button */}
      <ScrollProgressButton />
    </div>
  );
}

function BioSection() {
  const { language } = useLanguage();
  const t = language === 'zh' ? zhTranslations : enTranslations;

  return (
    <div className="text-github-text mb-4 space-y-4">
      <p>{t.bio.intro}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-white font-semibold mb-2">{t.bio.technicalExpertise.title}</h3>
          <p className="text-sm">{t.bio.technicalExpertise.content}</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">{t.bio.coreStrengths.title}</h3>
          <p className="text-sm">{t.bio.coreStrengths.content}</p>
        </div>
      </div>
      
      <p>{t.bio.closing}</p>
    </div>
  );
}

// Language detector component - only runs on first mount
function LanguageDetector({ children }: { children: React.ReactNode }) {
  const { setLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    // Only run on first mount if no language is set
    const currentPath = location.pathname;
    const savedLang = localStorage.getItem('preferred-language') as 'en' | 'zh' | null;
    
    if (savedLang) {
      // Use saved preference
      setLanguage(savedLang);
      
      // Update URL to match saved preference without navigation
      if (savedLang === 'zh' && !currentPath.startsWith('/cn')) {
        window.history.replaceState({}, '', '/cn' + currentPath);
      } else if (savedLang === 'en' && currentPath.startsWith('/cn')) {
        window.history.replaceState({}, '', currentPath.replace('/cn', '') || '/');
      }
    } else {
      // Auto-detect on first visit
      const browserLang = navigator.language.toLowerCase();
      const isChinese = browserLang.startsWith('zh');
      
      if (isChinese) {
        setLanguage('zh');
        localStorage.setItem('preferred-language', 'zh');
        if (!currentPath.startsWith('/cn')) {
          window.history.replaceState({}, '', '/cn' + currentPath);
        }
      } else {
        setLanguage('en');
        localStorage.setItem('preferred-language', 'en');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run on mount

  return <>{children}</>;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cn" element={<HomePage />} />
        <Route path="/vemakin" element={<VemakinPage />} />
        <Route path="/cn/vemakin" element={<VemakinPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <LanguageDetector>
        <AppRoutes />
      </LanguageDetector>
    </LanguageProvider>
  );
}

export default App;
