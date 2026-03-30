import { Eye, Download } from 'lucide-react';
import { ContactInfo, ResumeNavLinks } from '@/components/molecules';
import { useLanguage } from '@/i18n';

export function ProfileSidebar() {
  const { language } = useLanguage();
  const displayName = language === 'zh' ? 'Enzo Rudy SEKKAI (夏立)' : 'Enzo Rudy SEKKAI';

  return (
    <aside
      className="w-full lg:w-[296px] flex-shrink-0 opacity-0 animate-fade-in-left lg:sticky lg:top-8 lg:self-start"
      style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
    >
      <div className="relative">
        {/* Avatar & Name - Side by side on mobile, stacked on desktop */}
        <div className="flex flex-row items-center gap-4 mb-4 lg:flex-col lg:items-start">
          <div className="w-24 h-24 lg:w-[240px] lg:h-[240px] rounded-full overflow-hidden border-2 border-github-border bg-gradient-to-br from-github-card to-github-hover flex-shrink-0">
            <img
              src="/profile.jpg"
              alt={displayName}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-white mb-1">
              {displayName}
            </h1>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mb-6">
          <a
            href="/Enzo_Rudy_SEKKAI_Resume_Eng.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-github-btn-bg hover:bg-github-btn-hover border border-github-border rounded-md transition-colors duration-200"
          >
            <Eye className="w-4 h-4" />
            {language === 'zh' ? '查看简历' : 'View Resume'}
          </a>
          <a
            href="/Enzo_Rudy_SEKKAI_Resume_Eng.pdf"
            download
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-github-btn-bg hover:bg-github-btn-hover border border-github-border rounded-md transition-colors duration-200"
          >
            <Download className="w-4 h-4" />
            {language === 'zh' ? '下载简历' : 'Download Resume'}
          </a>
        </div>

        {/* Contact Info */}
        <ContactInfo />

        {/* Navigation Links */}
        <div className="mt-6 pt-6 border-t border-github-border">
          <ResumeNavLinks />
        </div>
      </div>
    </aside>
  );
}
