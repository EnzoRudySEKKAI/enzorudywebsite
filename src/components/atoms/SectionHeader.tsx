interface SectionHeaderProps {
  title: string;
  icon: React.ElementType;
}

export function SectionHeader({ title, icon: Icon }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2 pb-2 mb-4 border-b border-github-border">
      <Icon className="w-5 h-5 text-github-accent" />
      <h2 className="text-lg font-semibold text-white">{title}</h2>
    </div>
  );
}
