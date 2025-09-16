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
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioData.education.map((edu) => (
          <Card key={edu.degree} className="flex flex-col transform hover:-translate-y-1 transition-transform duration-300 shadow-lg hover:shadow-primary/20">
             <CardHeader className="flex-row items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <edu.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg text-primary">{edu.degree}</CardTitle>
                <CardDescription>{edu.institution} • {edu.period}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{edu.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
