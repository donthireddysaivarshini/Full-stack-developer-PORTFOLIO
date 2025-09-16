import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AnimatedTyping } from '@/components/portfolio/AnimatedTyping';
import { portfolioData } from '@/lib/portfolio-data';
import { Icons } from '@/components/portfolio/Icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown, Code, Database, Server } from 'lucide-react';
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
      <div className="container relative z-10 grid md:grid-cols-2 items-center min-h-[calc(100vh-4rem)] py-20">
        <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            {portfolioData.name}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-code h-8">
            <AnimatedTyping strings={portfolioData.subtitles} />
          </p>
          <p className="max-w-xl text-muted-foreground">
            A versatile full stack developer with a passion for building robust and scalable applications from end-to-end.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch <ArrowDown className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </div>

        <div className="relative mt-12 md:mt-0 flex justify-center items-center">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
            <div className="grid grid-cols-4 gap-4 md:gap-6 relative">
              <TechIcon icon={Icons.react} label="React" />
              <TechIcon icon={Icons.javascript} label="JS" />
              <TechIcon icon={Icons.python} label="Python" />
              <TechIcon icon={Icons.java} label="Java" />
              <div className="col-span-2"></div>
              <div className="col-span-2"></div>
              <TechIcon icon={Server} label="APIs" />
              <div></div>
               <div className="relative w-40 h-40 md:w-48 md:h-48 col-span-2 row-span-2 place-self-center">
                {profileImage && (
                  <Image
                    src={profileImage.imageUrl}
                    alt={portfolioData.name}
                    width={192}
                    height={192}
                    priority
                    className="rounded-full object-cover border-4 border-background shadow-lg"
                    data-ai-hint={profileImage.imageHint}
                  />
                )}
              </div>
              <div></div>
              <TechIcon icon={Database} label="MySQL" />
              <div className="col-span-2"></div>
              <div className="col-span-2"></div>
              <TechIcon icon={Code} label="Streamlit" />
              <TechIcon icon={Icons.github} label="Git" />
              <TechIcon icon={Icons.tensorflow} label="TF" />
              <TechIcon icon={Icons.vscode} label="VS Code" />
            </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute top-0 left-1/2 w-[200%] h-full -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,hsl(var(--primary)/0.1),transparent)]"></div>
    </section>
  );
}
