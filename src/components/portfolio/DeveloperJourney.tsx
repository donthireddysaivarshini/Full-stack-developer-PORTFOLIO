import { Section } from '@/components/portfolio/Section';
import { portfolioData } from '@/lib/portfolio-data';
import { GraduationCap, Briefcase, Ribbon, Laptop, Trophy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type JourneyItem = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  icon: LucideIcon;
  type: 'education' | 'certification' | 'internship' | 'projects' | 'achievements';
};

export function DeveloperJourney() {
  const educationItem = portfolioData.education.find(e => e.degree.includes('B.Tech'));
  const nptelCert = portfolioData.education.find(e => e.degree.includes('NPTEL'));
  const internshipItem = portfolioData.experience[0];
  
  const journeyItems: JourneyItem[] = [];

  if (educationItem) {
    journeyItems.push({
      title: educationItem.degree,
      subtitle: educationItem.institution,
      period: educationItem.period,
      description: `CGPA: ${educationItem.details.split(' ')[1]}`,
      icon: GraduationCap,
      type: 'education' as const,
    });
  }

  if (internshipItem) {
    journeyItems.push({
      title: internshipItem.role,
      subtitle: internshipItem.company,
      period: internshipItem.period,
      description: 'Focused on end-to-end development.',
      icon: Briefcase,
      type: 'internship' as const,
    });
  }
  
  if (nptelCert) {
    journeyItems.push({
      title: nptelCert.degree,
      subtitle: nptelCert.institution,
      period: nptelCert.period,
      description: 'Strengthened expertise in data structures and algorithms.',
      icon: Ribbon,
      type: 'certification' as const,
    });
  }

  journeyItems.push({
    title: 'Key Projects',
    subtitle: `${portfolioData.projects.length} Projects Built`,
    period: '2024-2025',
    description: 'Developed full-stack applications showcasing diverse skills.',
    icon: Laptop,
    type: 'projects' as const,
  });

  journeyItems.push({
    title: 'Key Achievements',
    subtitle: 'HSBC Hackathon Finalist',
    period: '2025',
    description: 'Recognized for problem-solving and full-stack capabilities.',
    icon: Trophy,
    type: 'achievements' as const,
  });


  const iconColorClasses = {
    education: 'text-green-400',
    certification: 'text-blue-400',
    internship: 'text-purple-400',
    projects: 'text-orange-400',
    achievements: 'text-yellow-400',
  };

  const borderColorClasses = {
    education: 'border-green-400/50',
    certification: 'border-blue-400/50',
    internship: 'border-purple-400/50',
    projects: 'border-orange-400/50',
    achievements: 'border-yellow-400/50',
  };

  return (
    <Section id="journey" title="My Developer Journey" description="A timeline of my growth, from education to real-world impact.">
      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-border -z-10" />
        <div className="overflow-x-auto pb-8 -mb-8">
          <div className="flex space-x-8 snap-x-mandatory py-14">
            {journeyItems.map((item, index) => (
              <div key={index} className="relative flex-shrink-0 w-80 snap-center animate-in fade-in-up" style={{ animationDelay: `${index * 150}ms`}}>
                <div className="absolute left-1/2 -translate-x-1/2 -top-7">
                  <div className={`w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center`}>
                    <item.icon className={`w-6 h-6 ${iconColorClasses[item.type]}`} />
                  </div>
                </div>
                <div className={`h-full rounded-lg bg-card/50 p-6 border-t-4 ${borderColorClasses[item.type]} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 pt-10`}>
                  <p className="text-sm text-muted-foreground mb-1 text-center">{item.period}</p>
                  <h3 className="font-bold text-lg text-foreground text-center">{item.title}</h3>
                  <h4 className="font-semibold text-primary mb-3 text-center">{item.subtitle}</h4>
                  <p className="text-sm text-muted-foreground text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
