import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';
import { Icons } from '@/components/portfolio/Icons';
import { Code, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">VersaStack Portfolio</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Contact Me</h3>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <a href={`mailto:${portfolioData.contact.email}`} className="text-sm text-muted-foreground hover:text-foreground">
                {portfolioData.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{portfolioData.contact.phone}</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Follow Me</h3>
            <div className="flex items-center gap-4">
              <Link href={portfolioData.contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Icons.github className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Icons.linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
