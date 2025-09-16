import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { portfolioData } from '@/lib/portfolio-data';
import { Section } from '@/components/portfolio/Section';
import { CheckCircle } from 'lucide-react';

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Full Stack Experience"
      description="Hands-on experience in building, deploying, and maintaining full stack applications."
      className="bg-card/50"
    >
      <div className="max-w-4xl mx-auto">
        {portfolioData.experience.map((exp) => (
          <Card key={exp.company} className="overflow-hidden">
            <div className="grid md:grid-cols-3">
              <div className="p-6 bg-muted/30 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <exp.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <p className="text-sm text-primary">{exp.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
              </div>
              <div className="md:col-span-2 p-6">
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((ach) => (
                    <li key={ach} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
