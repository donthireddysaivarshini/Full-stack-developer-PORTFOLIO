'use client';

import { Section } from '@/components/portfolio/Section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/lib/portfolio-data';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export function ContactSection() {
  return (
    <Section
      id="contact"
      title="Get In Touch"
      description="Feel free to reach out for questions, collaboration, or full-time opportunities. I'm always open to discussing new projects and innovative ideas."
      className="bg-card/50"
    >
      <div className="relative group/section max-w-2xl mx-auto">
        <div className="absolute -inset-4 bg-primary/10 rounded-2xl opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 blur-2xl"></div>
        <Card className="relative animate-in fade-in-up">
          <CardContent className="p-8 flex flex-col items-center justify-center gap-8 text-center">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <Mail className="w-6 h-6 text-primary" />
                <a href={`mailto:${portfolioData.contact.email}`} className="text-lg font-semibold text-foreground hover:underline">
                  {portfolioData.contact.email}
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <Phone className="w-6 h-6 text-primary" />
                <span className="text-lg font-semibold text-foreground">{portfolioData.contact.phone}</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
                <Button asChild size="lg">
                  <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn <ArrowRight className="ml-2" />
                  </a>
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
