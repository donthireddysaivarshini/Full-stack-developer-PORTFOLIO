import React from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import Link from 'next/link';
import { Icons } from './Icons';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} Designed and developed by {portfolioData.name}. All rights reserved.
        </p>
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
