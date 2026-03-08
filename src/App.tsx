import {
  ProfileSidebar,
  ReadmeCard,
  SkillsSection,
  ExperienceSection,
  EducationSection,
  ProjectsSection,
  HobbiesSection,
  Footer,
} from '@/components';

function App() {
  return (
    <div className="min-h-screen bg-github-bg">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <ProfileSidebar />

          {/* Main Content Area */}
          <div
            className="flex-1 min-w-0 space-y-6 opacity-0 animate-fade-in-right"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            {/* README Card */}
            <ReadmeCard>
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  <span className="text-github-text-muted">#</span> ENZO RUDY SEKKAI
                </h2>
                <div className="w-full h-px bg-github-border my-4" />
              </div>

              {/* Bio */}
              <p className="text-github-text mb-4">
                Full-stack Software Engineer with expertise in backend development using C#/.NET, 
                cloud infrastructure (Azure), and modern web technologies. A true jack of all trades 
                — I can learn, discover, and understand anything I set my mind to. My extremely strong 
                communication skills allow me to bridge the gap between technical and non-technical 
                teams, making complex concepts accessible to everyone. Passionate about building 
                scalable solutions, writing clean code, and continuously expanding my knowledge 
                across the entire technology stack. An AI enthusiast who leverages agentic coding 
                to boost productivity and build smarter solutions.
              </p>

              <div className="w-full h-px bg-github-border my-4" />

              {/* Skills Section */}
              <SkillsSection />
            </ReadmeCard>

            {/* Experience */}
            <ExperienceSection />

            {/* Education */}
            <EducationSection />

            {/* Featured Projects */}
            <ProjectsSection />

            {/* Hobbies & Interests */}
            <HobbiesSection />

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
