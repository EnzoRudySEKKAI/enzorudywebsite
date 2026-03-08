import { Button } from '@/components/ui/button';
import { ContactInfo } from '@/components/molecules';

export function ProfileSidebar() {
  return (
    <aside
      className="w-full lg:w-[296px] flex-shrink-0 opacity-0 animate-fade-in-left"
      style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
    >
      <div className="relative">
        {/* Avatar & Name - Side by side on mobile, stacked on desktop */}
        <div className="flex flex-row items-center gap-4 mb-4 lg:flex-col lg:items-start">
          <div className="w-24 h-24 lg:w-[240px] lg:h-[240px] rounded-full overflow-hidden border-2 border-github-border bg-gradient-to-br from-github-card to-github-hover flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="Enzo Rudy SEKKAI"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-white mb-1">
              Enzo Rudy SEKKAI
            </h1>
          </div>
        </div>

        <p className="text-github-text mb-4">
          Software Engineer | Building projects that solve real-world problems!!
        </p>

        {/* Action Buttons */}
        <div className="space-y-2 mb-6">
          <Button
            variant="outline"
            className="w-full bg-github-hover border-github-border text-github-text 
                       hover:bg-github-border hover:text-white transition-all duration-200"
          >
            Profile
          </Button>
        </div>

        {/* Contact Info */}
        <ContactInfo />
      </div>
    </aside>
  );
}
