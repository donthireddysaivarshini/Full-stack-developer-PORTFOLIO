import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedTyping } from '@/components/portfolio/AnimatedTyping';
import { portfolioData } from '@/lib/portfolio-data';
import { Icons } from '@/components/portfolio/Icons';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown, Database, Server, BrainCircuit } from 'lucide-react';

export function HeroSection() {
  return (
    // ── FIX: overflow-hidden clips the absolutely-positioned floating icons
    // that were rendering outside the viewport and causing horizontal scroll.
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Icons.react className="absolute top-[15%] left-[10%] w-12 h-12 text-primary/20 animate-float opacity-50" style={{ animationDelay: '1s' }} />
        <Icons.python className="absolute top-[20%] right-[15%] w-10 h-10 text-primary/20 animate-float opacity-50" style={{ animationDelay: '3s' }} />
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

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">

        {/* Sub-label Badge */}
        

        {/* Headline */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight animate-in fade-in-up max-w-4xl text-white px-2 whitespace-pre-wrap md:whitespace-nowrap"
          style={{ transitionDelay: '100ms' }}
        >
          Building software that{' '}
          <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            real businesses use.
          </span>
        </h1>

        {/* Dynamic Typing */}
        <div
          className="text-lg md:text-xl text-foreground font-code h-8 mt-6 animate-in fade-in-up flex items-center justify-center tracking-wide"
          style={{ transitionDelay: '250ms' }}
        >
          <span className="text-muted-foreground/30 mr-2">{'{'}</span>
          <AnimatedTyping
            strings={[
              'Full Stack Engineer',
              'React Component Architecture',
              'Next.js Production Frameworks',
              'Django Core Backends',
              'TypeScript Control Architecture',
            ]}
          />
          <span className="text-muted-foreground/30 ml-2">{'}'}</span>
        </div>

        {/* Description */}
        <p
          className="max-w-2xl text-sm md:text-base text-muted-foreground/90 font-light leading-relaxed mt-6 animate-in fade-in-up px-4"
          style={{ transitionDelay: '400ms' }}
        >
          Hi, I&apos;m Sai Varshini. I design, build, and deploy production-ready web applications
          used by businesses across ecommerce.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-3 justify-center items-center mt-8 animate-in fade-in-up"
          style={{ transitionDelay: '550ms' }}
        >
          <Button
            size="lg"
            asChild
            className="rounded-full shadow-lg font-medium px-7 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-full bg-white/5 border-white/10 backdrop-blur-sm px-7 transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-white/10"
          >
            <a href="#contact" className="flex items-center">
              Get In Touch <ArrowDown className="ml-2 h-3.5 w-3.5 opacity-60" />
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div
          className="flex gap-6 justify-center mt-8 animate-in fade-in-up"
          style={{ transitionDelay: '700ms' }}
        >
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground/60 transition-colors hover:text-white"
          >
            <Icons.github className="h-5 w-5" />
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground/60 transition-colors hover:text-white"
          >
            <Icons.linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Stats Bar */}
        <div
          className="w-full max-w-4xl mt-16 p-4 md:p-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md shadow-[0_32px_64px_rgba(0,0,0,0.5)] grid grid-cols-4 gap-1 md:gap-6 text-center divide-x divide-white/[0.05] transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.03] animate-in fade-in-up"
          style={{ transitionDelay: '850ms' }}
        >
          <div className="flex flex-col justify-center px-0.5">
            <div className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white font-sans">15+</div>
            <div className="text-[7px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-muted-foreground mt-1">Live Client Projects</div>
          </div>
          <div className="flex flex-col justify-center px-0.5">
            <div className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white font-sans">9.1</div>
            <div className="text-[7px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-muted-foreground mt-1">CGPA</div>
          </div>
          <div className="flex flex-col justify-center px-0.5">
            <div className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white font-sans">Production</div>
            <div className="text-[7px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-muted-foreground mt-1">Deployments</div>
          </div>
          <div className="flex flex-col justify-center px-0.5">
            <div className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white font-sans">Freelance</div>
            <div className="text-[7px] sm:text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-muted-foreground mt-1">Developer</div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 w-full aspect-square -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,hsl(var(--primary)/0.04),transparent)] mix-blend-screen pointer-events-none blur-3xl"
      />
    </section>
  );
}