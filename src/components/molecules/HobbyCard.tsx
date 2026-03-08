interface HobbyCardProps {
  name: string;
  description: string;
  icon: React.ElementType;
}

export function HobbyCard({ name, description, icon: Icon }: HobbyCardProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-github-hover flex items-center justify-center">
        <Icon className="w-5 h-5 text-github-accent" />
      </div>
      <div>
        <p className="font-medium text-white">{name}</p>
        <p className="text-sm text-github-text-muted">{description}</p>
      </div>
    </div>
  );
}
