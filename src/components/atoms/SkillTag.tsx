import { Badge } from '@/components/ui/badge';

interface SkillTagProps {
  label: string;
}

export function SkillTag({ label }: SkillTagProps) {
  return (
    <Badge
      variant="secondary"
      className="bg-[rgba(56,139,253,0.15)] text-github-accent 
                 transition-all duration-200 cursor-default border-0"
    >
      {label}
    </Badge>
  );
}
