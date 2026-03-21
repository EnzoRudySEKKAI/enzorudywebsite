import { useEffect, useState, useCallback } from 'react';
import { ChevronUp } from 'lucide-react';

const SIZE = 56;
const STROKE_WIDTH = 8;
const INNER_RADIUS = 18;
const RADIUS = INNER_RADIUS + STROKE_WIDTH / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScrollProgressButton() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    const maxScroll = documentHeight - viewportHeight;
    const currentProgress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;

    setProgress(Math.min(100, Math.max(0, currentProgress)));
    setIsVisible(scrollY > maxScroll);
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const strokeDashoffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  if (!isVisible && progress === 0) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 group"
      style={{
        width: SIZE,
        height: SIZE,
      }}
      aria-label="Scroll to top"
    >
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
      >
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="#30363d"
          strokeWidth={STROKE_WIDTH}
          opacity={0.3}
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="#58a6ff"
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      
      <div 
        className="absolute inset-0 rounded-full bg-github-card border border-github-border 
                   group-hover:border-github-accent/50 group-hover:scale-105
                   transition-all duration-200 flex items-center justify-center"
      >
        <div className="flex flex-col items-center -mt-0.5">
          <ChevronUp className="w-4 h-4 text-github-accent" strokeWidth={2.5} />
          <ChevronUp className="w-4 h-4 text-github-accent -mt-2.5" strokeWidth={2.5} />
        </div>
      </div>
    </button>
  );
}
