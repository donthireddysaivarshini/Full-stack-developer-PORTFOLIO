'use client';

import { Header } from '@/components/portfolio/Header';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { CapabilitiesSection } from '@/components/portfolio/CapabilitiesSection';
import { EducationSection } from '@/components/portfolio/EducationSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { AchievementsSection } from '@/components/portfolio/AchievementsSection';
import { ProcessSection } from '@/components/portfolio/ProcessSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';
import { useEffect } from 'react';

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
        <EducationExperienceTimeline />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


function EducationExperienceTimeline() {
  const combinedTimeline = [
    ...portfolioData.experience.map(item => ({ ...item, type: 'experience' })),
    ...portfolioData.education.map(item => ({ ...item, type: 'education' }))
  ].sort((a, b) => parseInt(b.period.slice(0, 4)) - parseInt(a.period.slice(0, 4)));

  return (
    <Section id="journey" title="My Journey" description="A timeline of my professional experience and academic achievements." className="bg-card/50">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
        <div className="space-y-12">
          {combinedTimeline.map((item, index) => {
            const side = index % 2 === 0 ? 'left' : 'right';
            const animation = side === 'left' ? 'fade-in-left' : 'fade-in-right';

            return (
              <div key={`${item.type}-${index}`} className={`relative flex items-start animate-in ${animation} md:w-1/2 ${side === 'left' ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background top-1 hidden md:block"></div>
                {item.type === 'experience' ? (
                  <ExperienceCard experience={item as (typeof portfolioData.experience)[0]} />
                ) : (
                  <EducationCard education={item as (typeof portfolioData.education)[0]} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { portfolioData } from '@/lib/portfolio-data';
import { Section } from '@/components/portfolio/Section';
import { CheckCircle } from 'lucide-react';

const ExperienceCard = ({ experience }: { experience: (typeof portfolioData.experience)[0] }) => (
  <Card className="w-full overflow-hidden border-primary/20 hover:border-primary/50 transition-colors duration-300 shadow-lg hover:shadow-primary/20">
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <experience.icon className="w-8 h-8 text-primary" />
        <div>
          <CardTitle className="text-lg">{experience.company}</CardTitle>
          <p className="text-sm text-primary font-semibold">{experience.role}</p>
          <p className="text-xs text-muted-foreground mt-1">{experience.period}</p>
        </div>
      </div>
      <CardDescription className="mb-4">{experience.description}</CardDescription>
      <ul className="space-y-2">
        {experience.achievements.map((ach) => (
          <li key={ach} className="flex items-start gap-3 text-sm">
            <CheckCircle className="w-4 h-4 mt-0.5 text-primary shrink-0" />
            <span>{ach}</span>
          </li>
        ))}
      </ul>
    </div>
  </Card>
);

const EducationCard = ({ education }: { education: (typeof portfolioData.education)[0] }) => (
  <Card className="w-full flex flex-col transform hover:-translate-y-1 transition-transform duration-300 shadow-lg hover:shadow-primary/20">
    <CardHeader className="flex-row items-center gap-4">
      <div className="p-3 bg-primary/10 rounded-full">
        <education.icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <CardTitle className="text-lg text-primary">{education.degree}</CardTitle>
        <CardDescription>{education.institution} • {education.period}</CardDescription>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">{education.details}</p>
    </CardContent>
  </Card>
);
