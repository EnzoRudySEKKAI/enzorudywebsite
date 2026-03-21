import {
  Wrench,
  Clapperboard,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Heart,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/i18n";

interface NavItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  labelEn: string;
  labelZh: string;
}

const navItems: NavItem[] = [
  {
    id: "skills",
    icon: Wrench,
    labelEn: "Skills & Tools",
    labelZh: "技能与工具",
  },
  {
    id: "company-project",
    icon: Clapperboard,
    labelEn: "My company",
    labelZh: "我的公司",
  },
  {
    id: "experience",
    icon: Briefcase,
    labelEn: "Experience",
    labelZh: "工作经历",
  },
  {
    id: "education",
    icon: GraduationCap,
    labelEn: "Education",
    labelZh: "教育背景",
  },
  {
    id: "projects",
    icon: FolderOpen,
    labelEn: "Featured Projects",
    labelZh: "精选项目",
  },
  {
    id: "hobbies",
    icon: Heart,
    labelEn: "Hobbies & Interests",
    labelZh: "兴趣爱好",
  },
];

export function ResumeNavLinks() {
  const { language } = useLanguage();
  const isZh = language === "zh";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-1">
      <h3 className="text-xs font-semibold text-github-text-muted uppercase tracking-wider mb-2 px-1">
        {isZh ? "目录" : "Contents"}
      </h3>
      <nav className="space-y-0.5">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className="flex items-center gap-2 px-2 py-1.5 text-sm text-github-text-muted hover:text-github-accent hover:bg-github-card/50 rounded-md transition-all duration-200 group"
          >
            <item.icon className="w-4 h-4 flex-shrink-0" />
            <span className="flex-1 truncate">
              {isZh ? item.labelZh : item.labelEn}
            </span>
            <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        ))}
      </nav>
    </div>
  );
}
