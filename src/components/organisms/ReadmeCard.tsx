import { FileCode } from 'lucide-react';

interface ReadmeCardProps {
  children: React.ReactNode;
  className?: string;
}

export function ReadmeCard({ children, className = '' }: ReadmeCardProps) {
  return (
    <div className={`bg-github-card border border-github-border rounded-md overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-github-bg/50 border-b border-github-border">
        <div className="flex items-center gap-2 text-sm text-github-text-muted">
          <FileCode className="w-4 h-4" />
          <span>README.md</span>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">{children}</div>
    </div>
  );
}
