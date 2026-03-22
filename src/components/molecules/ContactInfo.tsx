import { Building2, MapPin, Linkedin, Mail } from "lucide-react";
import { useShanghaiTime } from "@/hooks";
import { Clock } from "lucide-react";
import { useLanguage, enTranslations, zhTranslations } from "@/i18n";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export function ContactInfo() {
  const shanghaiTime = useShanghaiTime();
  const { language } = useLanguage();
  const location = language === "zh" ? "中国上海" : "Shanghai, China";
  const t = language === "zh" ? zhTranslations.vemakin : enTranslations.vemakin;

  return (
    <div className="space-y-2 text-sm">
      <div className="flex items-center gap-2 text-github-text-muted">
        <Building2 className="w-4 h-4" />
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://vemakin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-github-accent transition-colors"
            >
              Vemakin
              <span className="text-github-accent cursor-help ml-1">*</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            {t.vpnTooltip}
          </TooltipContent>
        </Tooltip>
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
          href="https://linkedin.com/in/enzo-rudy-sekkai"
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
