import { portfolioData } from '@/lib/portfolio-data';
import { Section } from '@/components/portfolio/Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export function EducationSection() {
  return (
    <Section
      id="education"
      title="Developer Journey"
      description="My academic background and continuous learning path in the world of technology."
    >
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" aria-hidden="true" />

        <div className="space-y-12">
          {portfolioData.education.map((edu, index) => (
            <div key={edu.degree} className="relative flex items-center">
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left order-2'}`}>
                <Card className="transform hover:-translate-y-1 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{edu.degree}</CardTitle>
                    <CardDescription>{edu.institution} • {edu.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{edu.details}</p>
                  </CardContent>
                </Card>
              </div>
              <div className="w-1/2 flex justify-center order-1">
                <div className="absolute top-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <edu.icon className="w-3 h-3 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
