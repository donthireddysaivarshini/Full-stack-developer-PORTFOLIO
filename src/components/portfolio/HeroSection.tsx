
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AnimatedTyping } from '@/components/portfolio/AnimatedTyping';
import { portfolioData } from '@/lib/portfolio-data';
import { Icons } from '@/components/portfolio/Icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown, Code, Database, Server, Terminal } from 'lucide-react';
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
        
        {/* Floating Icons */}
        <Icons.react className="absolute top-[15%] left-[10%] w-12 h-12 text-primary/20 animate-float opacity-50" style={{ animationDelay: '1s' }} />
        <Icons.python className="absolute top-[20%] right-[15%] w-10 h-10 text-primary/20 animate-float opacity-50" style={{ animationDelay: '3s' }}/>
        <Database className="absolute bottom-[25%] left-[20%] w-8 h-8 text-primary/20 animate-float opacity-50" style={{ animationDelay: '2s' }} />
        <Server className="absolute bottom-[20%] right-[10%] w-12 h-12 text-primary/20 animate-float opacity-50" style={{ animationDelay: '4s' }} />


        <div className="flex flex-col gap-6 text-center items-center">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter animate-in fade-in-up" style={{ transitionDelay: '0ms' }}>
            {portfolioData.name}
          </h1>
          <div className="text-xl md:text-2xl text-primary font-code h-8 animate-in fade-in-up flex items-center" style={{ transitionDelay: '200ms' }}>
            <span className="text-muted-foreground/50">{'{ '}</span>
            <AnimatedTyping strings={portfolioData.subtitles} />
            <span className="text-muted-foreground/50">{' }'}</span>
          </div>
          <p className="max-w-xl text-muted-foreground animate-in fade-in-up" style={{ transitionDelay: '400ms' }}>
            A versatile full stack developer with a passion for building robust and scalable applications from end-to-end.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in-up" style={{ transitionDelay: '600ms' }}>
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch <ArrowDown className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute top-0 left-1/2 w-[200%] h-full -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,hsl(var(--primary)/0.1),transparent)]"></div>
    </section>
  );
}
