import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { portfolioData } from '@/lib/portfolio-data';
import { Section } from '@/components/portfolio/Section';
import { Check } from 'lucide-react';

export function CapabilitiesSection() {
  return (
    <Section
      id="capabilities"
      title="Full Stack Capabilities"
      description="Demonstrating end-to-end development expertise, from user interface to database architecture."
      className="bg-card/50"
      animation="fade-in-up"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {portfolioData.capabilities.map((capability, index) => (
          <Card key={capability.title} className="bg-background/50 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-primary/20 fade-in-up" style={{ transitionDelay: `${index * 100}ms` }}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{capability.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {capability.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-1 text-primary shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
