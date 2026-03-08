import { Building2, MapPin, Link2, Linkedin, Mail } from 'lucide-react';
import { useShanghaiTime } from '@/hooks';
import { Clock } from 'lucide-react';

export function ContactInfo() {
  const shanghaiTime = useShanghaiTime();

  return (
    <div className="space-y-2 text-sm">
      <div className="flex items-center gap-2 text-github-text-muted">
        <Building2 className="w-4 h-4" />
        <span>Vemakin</span>
      </div>
      <div className="flex items-center gap-2 text-github-text-muted">
        <MapPin className="w-4 h-4" />
        <span>Shanghai, China</span>
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
