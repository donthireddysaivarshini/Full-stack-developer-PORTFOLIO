'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlignJustify, X } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Nav links — defined at module level so they never change identity
// ─────────────────────────────────────────────────────────────────────────────
const navLinks = [
  { href: '#',        label: 'Home'      },
  { href: '#journey', label: 'Education' },
  { href: '#projects',label: 'Projects'  },
  { href: '#skills',  label: 'Skills'    },
  { href: '#contact', label: 'Contact'   },
];

// ─────────────────────────────────────────────────────────────────────────────
// Desktop nav links — no onClick needed
// ─────────────────────────────────────────────────────────────────────────────
function DesktopNavLinks() {
  return (
    <>
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-xs tracking-wide uppercase font-medium transition-colors text-foreground/70 hover:text-foreground relative group py-1"
        >
          {link.label}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Header
// ─────────────────────────────────────────────────────────────────────────────
export function Header() {
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* ── DESKTOP NAVBAR ────────────────────────────────────────── */}
      <div className="hidden md:flex fixed top-4 left-0 right-0 z-50 w-full px-4 justify-center pointer-events-none">
        <header
          className={`w-full max-w-5xl pointer-events-auto transition-all duration-500 rounded-full border ${
            isScrolled
              ? 'border-white/[0.08] bg-background/40 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] py-2 px-6'
              : 'border-transparent bg-transparent py-4 px-6'
          }`}
        >
          <div className="flex h-12 items-center justify-between">
            {/* spacer so nav sits centred */}
            <div className="w-10 h-10" />

            <nav className="flex items-center gap-8 bg-white/[0.03] border border-white/[0.05] rounded-full px-6 py-2 shadow-inner">
              <DesktopNavLinks />
            </nav>

            <Button
              asChild
              size="sm"
              className="rounded-full font-medium text-xs tracking-wide px-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_4px_12px_rgba(0,255,120,0.15)]"
            >
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        </header>
      </div>

      {/* ── MOBILE TOP BAR ────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-6 py-4 bg-background/60 backdrop-blur-xl border-b border-white/[0.05]">
        {/* Hamburger */}
        <button
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 backdrop-blur-xl"
        >
          <AlignJustify className="h-6 w-6 text-white" strokeWidth={2.5} />
        </button>

        <Button
          asChild
          size="sm"
          className="rounded-full font-medium text-[11px] tracking-wider px-4 h-8 bg-primary text-primary-foreground"
        >
          <a href="#contact">Hire Me</a>
        </Button>
      </div>

      {/* ── MOBILE DRAWER (custom — no Radix Sheet) ───────────────── */}

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer panel */}
      <nav
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 left-0 h-full w-[270px] z-[100] flex flex-col pt-8 pb-10 px-8
          bg-background/95 backdrop-blur-xl border-r border-white/10 rounded-r-3xl
          shadow-[4px_0_40px_rgba(0,0,0,0.6)]
          transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
          md:hidden
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close button */}
        <button
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className="self-end mb-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="h-4 w-4 text-white/70" />
        </button>

        {/* Links */}
        <div className="flex flex-col gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="text-sm tracking-widest uppercase font-semibold text-foreground/60 hover:text-foreground transition-colors relative group w-fit"
            >
              {link.label}
              {/* underline sweep */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-auto">
          <a
            href="#contact"
            onClick={closeMenu}
            className="flex items-center justify-center w-full h-10 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wide hover:bg-primary/90 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </>
  );
}