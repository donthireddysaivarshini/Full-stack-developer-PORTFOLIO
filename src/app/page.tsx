'use client';

import { useState } from 'react';
import { Header } from '@/components/portfolio/Header';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { CapabilitiesSection } from '@/components/portfolio/CapabilitiesSection';
import { EducationSection } from '@/components/portfolio/EducationSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { AiRecommender } from '@/components/portfolio/AiRecommender';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { AchievementsSection } from '@/components/portfolio/AchievementsSection';
import { ProcessSection } from '@/components/portfolio/ProcessSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';

export default function Home() {
  const [recommendedProjects, setRecommendedProjects] = useState<string[]>([]);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CapabilitiesSection />
        <EducationSection />
        <ExperienceSection />
        <AiRecommender setRecommendedProjects={setRecommendedProjects} />
        <ProjectsSection recommendedProjects={recommendedProjects} />
        <SkillsSection />
        <AchievementsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
