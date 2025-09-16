'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

const navLinks = [
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavContent = () => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setMobileMenuOpen(false)}
          className="text-sm font-medium transition-colors text-foreground/80 hover:text-foreground"
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'border-b border-border/40 bg-background/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold hidden sm:inline-block">Sai Varshini Portfolio</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavContent />
        </nav>

        <div className="flex flex-1 items-center justify-end gap-4">
          <Button asChild>
            <a href="#contact">Hire Me</a>
          </Button>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="mr-6 flex items-center gap-2 mb-8">
                <Code className="h-6 w-6 text-primary" />
                <span className="font-bold">Sai Varshini Portfolio</span>
              </Link>
              <div className="flex flex-col gap-6">
                <NavContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
