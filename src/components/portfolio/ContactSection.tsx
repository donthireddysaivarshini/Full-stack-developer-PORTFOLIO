'use client';

import { Section } from '@/components/portfolio/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/lib/portfolio-data';
import { Mail, Phone, ArrowUpRight, Linkedin } from 'lucide-react';

export function ContactSection() {
  return (
    <Section
      id="contact"
      title="Get In Touch"
      description="Feel free to reach out for questions, collaboration, or full-time opportunities. I'm always open to discussing new projects and innovative ideas."
      className="bg-card/50"
    >
      <div className="relative group/section max-w-4xl mx-auto px-4">
        {/* Ambient Premium Backlighting Aura */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-transparent rounded-3xl opacity-30 group-hover/section:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none" />
        
        <div className="grid md:grid-cols-3 gap-4 relative">
          
          {/* Email Premium Card Block */}
          <Card className="bg-background/40 border-white/[0.06] backdrop-blur-md hover:border-primary/30 transition-all duration-300 group/card">
            <CardContent className="p-6 flex flex-col items-center text-center justify-between h-full min-h-[160px]">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover/card:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Drop an Email</p>
                <a 
                  href={`mailto:${portfolioData.contact.email}`} 
                  className="text-sm font-medium text-foreground block hover:text-primary transition-colors break-all"
                >
                  {portfolioData.contact.email}
                </a>
              </div>
              <div className="text-[11px] font-mono text-primary/60 mt-2 flex items-center opacity-0 group-hover/card:opacity-100 transition-opacity">
                Send message <ArrowUpRight className="w-3 h-3 ml-1" />
              </div>
            </CardContent>
          </Card>

          {/* Phone Premium Card Block */}
          <Card className="bg-background/40 border-white/[0.06] backdrop-blur-md hover:border-primary/30 transition-all duration-300 group/card">
            <CardContent className="p-6 flex flex-col items-center text-center justify-between h-full min-h-[160px]">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover/card:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Let's Talk</p>
                <span className="text-sm font-medium text-foreground block tracking-wide">
                  {portfolioData.contact.phone}
                </span>
              </div>
              <div className="text-[11px] font-mono text-muted-foreground/40 mt-2">
                Available Mon — Fri
              </div>
            </CardContent>
          </Card>

          {/* LinkedIn Premium Card Block */}
          <Card className="bg-background/40 border-white/[0.06] backdrop-blur-md hover:border-primary/30 transition-all duration-300 group/card">
            <CardContent className="p-6 flex flex-col items-center text-center justify-between h-full min-h-[160px]">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover/card:scale-110 transition-transform">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-1 w-full">
                <p className="text-xs font-mono uppercase text-muted-foreground tracking-wider">Professional Network</p>
                <p className="text-sm text-muted-foreground">Connect with me</p>
              </div>
              <Button asChild size="sm" variant="secondary" className="w-full mt-3 rounded-xl border border-white/5 font-medium text-xs">
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                  Open Profile <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </Section>
  );
}