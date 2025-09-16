'use client';

import { Header } from '@/components/portfolio/Header';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { CapabilitiesSection } from '@/components/portfolio/CapabilitiesSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ProcessSection } from '@/components/portfolio/ProcessSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';
import { useEffect } from 'react';
import { DeveloperJourney } from '@/components/portfolio/DeveloperJourney';

export default function Home() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CapabilitiesSection />
        <DeveloperJourney />
        <ProjectsSection />
        <SkillsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
