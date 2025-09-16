'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Section } from '@/components/portfolio/Section';
import { portfolioData } from '@/lib/portfolio-data';

type SkillCategory = keyof typeof portfolioData.skills;

const SkillChart = ({ category, title, animation, delay }: { category: SkillCategory; title: string, animation: string, delay: number }) => {
  const skills = portfolioData.skills[category];

  return (
    <Card className={`animate-in ${animation}`} style={{ transitionDelay: `${delay}ms` }}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-1 animate-in pop-up" style={{ transitionDelay: `${index * 50}ms` }}>
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 font-medium">
                  <skill.icon className="h-4 w-4 text-muted-foreground" />
                  <span>{skill.name}</span>
                </div>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};


export function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      description="My proficiency across various technologies in the full stack ecosystem."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <SkillChart category="frontend" title="Frontend Development" animation="fade-in-left" delay={0} />
        <SkillChart category="backend" title="Backend Development" animation="fade-in-right" delay={100} />
        <SkillChart category="databasesAndDevOps" title="Databases & DevOps" animation="fade-in-left" delay={200} />
        <SkillChart category="emerging" title="Emerging Technologies" animation="fade-in-right" delay={300} />
      </div>
    </Section>
  );
}
