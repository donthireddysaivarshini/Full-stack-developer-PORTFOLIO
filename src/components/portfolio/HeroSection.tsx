import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedTyping } from '@/components/portfolio/AnimatedTyping';
import { portfolioData } from '@/lib/portfolio-data';
import { Icons } from '@/components/portfolio/Icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown, Code, Database, Server, Terminal, BrainCircuit, GitMerge, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

const TechIcon = ({ icon: Icon, label, className }: { icon: React.ElementType, label: string, className?: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border">
      <Icon className={cn("w-6 h-6 text-primary", className)} />
    </div>
    <span className="text-xs text-muted-foreground">{label}</span>
  </div>
);

export function HeroSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-pic');

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="container relative z-10 grid items-center min-h-[calc(100vh-4rem)] py-20">
        
        {/* Floating Icons (Kept exactly as is per instructions) */}
        <div>
          <Icons.react className="absolute top-[15%] left-[10%] w-12 h-12 text-primary/20 animate-float opacity-50" style={{ animationDelay: '1s' }} />
          <Icons.python className="absolute top-[20%] right-[15%] w-10 h-10 text-primary/20 animate-float opacity-50" style={{ animationDelay: '3s' }}/>
          <Database className="absolute bottom-[25%] left-[20%] w-8 h-8 text-primary/20 animate-float opacity-50" style={{ animationDelay: '2s' }} />
          <Server className="absolute bottom-[20%] right-[10%] w-12 h-12 text-primary/20 animate-float opacity-50" style={{ animationDelay: '4s' }} />
          <BrainCircuit className="absolute top-[55%] left-[12%] w-10 h-10 text-primary/20 animate-float opacity-50" style={{ animationDelay: '5s' }} />
          <Icons.java className="absolute top-[40%] right-[8%] w-9 h-9 text-primary/20 animate-float opacity-50" style={{ animationDelay: '6s' }} />
          <Icons.github className="absolute bottom-[15%] left-[5%] w-10 h-10 text-primary/20 animate-float opacity-50" style={{ animationDelay: '7s' }} />
          <Icons.tailwind className="absolute top-[60%] right-[20%] w-11 h-11 text-primary/20 animate-float opacity-50" style={{ animationDelay: '1.5s' }} />
          <Icons.css className="absolute top-[75%] left-[15%] w-9 h-9 text-primary/20 animate-float opacity-50" style={{ animationDelay: '2.5s' }} />
          <Icons.streamlit className="absolute bottom-[40%] right-[25%] w-10 h-10 text-primary/20 animate-float opacity-50" style={{ animationDelay: '3.5s' }} />
          <Icons.selenium className="absolute top-[30%] left-[25%] w-10 h-10 text-primary/20 animate-float opacity-50" style={{ animationDelay: '4.5s' }} />
          <Icons.mongodb className="absolute bottom-[50%] left-[30%] w-12 h-12 text-primary/20 animate-float opacity-50" style={{ animationDelay: '5.5s' }} />
          <Icons.beautifulsoup className="absolute top-[70%] right-[5%] w-9 h-9 text-primary/20 animate-float opacity-50" style={{ animationDelay: '6.5s' }} />
        </div>

        <div className="flex flex-col gap-6 text-center items-center">
          {/* Changed Headline to match Business-First intent */}
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter animate-in fade-in-up max-w-3xl" style={{ transitionDelay: '0ms' }}>
            Building software that real businesses depend on.
          </h1>
          
          {/* Targeted stack strings inside the typing animation */}
          <div className="text-xl md:text-2xl text-foreground font-code h-8 animate-in fade-in-up flex items-center" style={{ transitionDelay: '200ms' }}>
            <span className="text-muted-foreground/50">{'{ '}</span>
            <AnimatedTyping strings={['Full Stack Engineer', 'React', 'Next.js', 'Django', 'TypeScript']} />
            <span className="text-muted-foreground/50">{' }'}</span>
          </div>

          {/* Revised single high-impact paragraph */}
          <p className="max-w-xl text-muted-foreground animate-in fade-in-up" style={{ transitionDelay: '400ms' }}>
            I design, build, and deploy production-ready web applications used by businesses across healthcare, ecommerce, education, and hospitality.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in-up" style={{ transitionDelay: '600ms' }}>
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch <ArrowDown className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center animate-in fade-in-up mt-4" style={{ transitionDelay: '800ms' }}>
            <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-foreground">
              <Icons.github className="h-7 w-7" />
            </a>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground">
              <Icons.linkedin className="h-7 w-7" />
            </a>
          </div>

          {/* Added Trust Bar Section right after Hero content */}
          <div className="w-full max-w-4xl mt-12 pt-8 border-t border-border/40 grid grid-cols-2 sm:grid-cols-5 gap-6 text-center animate-in fade-in-up" style={{ transitionDelay: '1000ms' }}>
            <div>
              <div className="text-2xl font-bold font-headline">10+</div>
              <div className="text-xs text-muted-foreground mt-1">Live Client Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-headline">9.1</div>
              <div className="text-xs text-muted-foreground mt-1">CGPA</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-headline">Top 117</div>
              <div className="text-xs text-muted-foreground mt-1">HSBC Finalist</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-headline">Production</div>
              <div className="text-xs text-muted-foreground mt-1">Deployments</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-2xl font-bold font-headline">Freelance</div>
              <div className="text-xs text-muted-foreground mt-1">Developer</div>
            </div>
          </div>

        </div>
      </div>
      <div aria-hidden="true" className="absolute top-0 left-1/2 w-[200%] h-full -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,hsl(var(--primary)/0.1),transparent)]"></div>
    </section>
  );
}