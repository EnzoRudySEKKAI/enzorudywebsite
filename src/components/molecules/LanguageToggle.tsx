import { useNavigate, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/i18n';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (newLang: 'en' | 'zh') => {
    if (newLang === language) return;

    setLanguage(newLang);

    // Navigate to appropriate route with replace to avoid history stack
    const currentPath = location.pathname;
    let newPath: string;
    
    if (newLang === 'zh') {
      // Switch to Chinese - add /cn prefix
      if (currentPath === '/') {
        newPath = '/cn';
      } else {
        newPath = '/cn' + currentPath;
      }
    } else {
      // Switch to English - remove /cn prefix
      newPath = currentPath.replace(/^\/cn/, '') || '/';
    }

    // Use navigate with replace: true to update URL without adding to history
    // This keeps the URL in sync with the content language
    navigate(newPath, { replace: true });
  };

  return (
    <div className="flex items-center gap-2 bg-github-card border border-github-border rounded-lg px-3 py-2">
      <Globe className="w-4 h-4 text-github-text-muted" />
      <div className="flex items-center gap-1">
        <button
          onClick={() => handleLanguageChange('en')}
          className={`flex items-center gap-1 px-2 py-1 text-sm rounded transition-colors ${
            language === 'en'
              ? 'bg-github-accent text-white'
              : 'text-github-text hover:text-white'
          }`}
        >
          <span>🇬🇧</span>
          <span>EN</span>
        </button>
        <span className="text-github-border">|</span>
        <button
          onClick={() => handleLanguageChange('zh')}
          className={`flex items-center gap-1 px-2 py-1 text-sm rounded transition-colors ${
            language === 'zh'
              ? 'bg-github-accent text-white'
              : 'text-github-text hover:text-white'
          }`}
        >
          <span>🇨🇳</span>
          <span>中文</span>
        </button>
      </div>
    </div>
  );
}
