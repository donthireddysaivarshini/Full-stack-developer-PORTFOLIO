import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';
import { Icons } from '@/components/portfolio/Icons';
import { Code } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href={portfolioData.contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Icons.github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Icons.linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
