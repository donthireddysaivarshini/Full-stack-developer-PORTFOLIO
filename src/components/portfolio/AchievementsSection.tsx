import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Section } from '@/components/portfolio/Section';
import { portfolioData } from '@/lib/portfolio-data';
import { Trophy, Package, GraduationCap, Book, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: { [key: string]: LucideIcon } = {
  'trophy': Trophy,
  'package': Package,
  'graduation-cap': GraduationCap,
  'book': Book,
};

export function AchievementsSection() {
  return (
    <Section
      id="achievements"
      title="Achievements & Recognition"
      description="Milestones and accomplishments that mark my journey as a developer."
      className="bg-card/50"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border-gold/50 animate-in pop-up">
          <CardHeader>
            <CardTitle className="text-gold">Technical Achievements</CardTitle>
          </CardHeader>
          <div className="p-6 pt-0 grid gap-6">
            {portfolioData.achievements.technical.map((ach, index) => {
              const Icon = iconMap[ach.icon];
              return (
                <div key={ach.title} className="flex items-start gap-4">
                  <div className="p-2 bg-gold/10 rounded-full">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{ach.title}</h4>
                    <p className="text-sm text-muted-foreground">{ach.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
        <Card className="border-accent/50 animate-in pop-up" style={{ transitionDelay: '200ms' }}>
          <CardHeader>
            <CardTitle className="text-accent">Academic Excellence</CardTitle>
          </CardHeader>
          <div className="p-6 pt-0 grid gap-6">
            {portfolioData.achievements.academic.map((ach, index) => {
              const Icon = iconMap[ach.icon];
              return (
                <div key={ach.title} className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-full">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{ach.title}</h4>
                    <p className="text-sm text-muted-foreground">{ach.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </Section>
  );
}
