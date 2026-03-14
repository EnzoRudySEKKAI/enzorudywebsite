import { Building2, MapPin, Linkedin, Mail } from 'lucide-react';
import { useShanghaiTime } from '@/hooks';
import { Clock } from 'lucide-react';
import { useLanguage } from '@/i18n';

export function ContactInfo() {
  const shanghaiTime = useShanghaiTime();
  const { language } = useLanguage();
  const location = language === 'zh' ? '中国上海' : 'Shanghai, China';

  return (
    <div className="space-y-2 text-sm">
      <div className="flex items-center gap-2 text-github-text-muted">
        <Building2 className="w-4 h-4" />
        <a
          href="https://vemakin.web.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-github-accent transition-colors"
        >
          Vemakin
        </a>
      </div>
      <div className="flex items-center gap-2 text-github-text-muted">
        <MapPin className="w-4 h-4" />
        <span>{location}</span>
      </div>
      <div className="flex items-center gap-2 text-github-text-muted">
        <Clock className="w-4 h-4" />
        <span>{shanghaiTime}</span>
      </div>
      <div className="flex items-center gap-2 text-github-text-muted">
        <Linkedin className="w-4 h-4" />
        <a
          href="https://linkedin.com/in/enzorudysekkai"
          className="hover:text-github-accent transition-colors"
        >
          LinkedIn
        </a>
      </div>
      <div className="flex items-center gap-2 text-github-text-muted">
        <Mail className="w-4 h-4" />
        <a
          href="mailto:enzorudy.sekkai@icloud.com"
          className="hover:text-github-accent transition-colors"
        >
          enzorudy.sekkai@icloud.com
        </a>
      </div>
    </div>
  );
}
