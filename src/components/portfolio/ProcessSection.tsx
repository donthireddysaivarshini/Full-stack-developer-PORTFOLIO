import { Section } from '@/components/portfolio/Section';
import { portfolioData } from '@/lib/portfolio-data';
import { ArrowRight } from 'lucide-react';

export function ProcessSection() {
  return (
    <Section
      id="process"
      title="My Development Process"
      description="A structured and agile approach to ensure quality, scalability, and timely delivery of projects."
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
        {portfolioData.developmentProcess.map((step, index) => (
          <div key={step.title} className="relative flex flex-col items-center gap-4 group">
            <div className="w-20 h-20 rounded-full bg-card border-2 border-border flex items-center justify-center transition-colors duration-300 group-hover:border-primary">
              <step.icon className="w-8 h-8 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
            </div>
            <h3 className="font-semibold text-sm">{step.title}</h3>
            <p className="text-xs text-muted-foreground hidden md:block">{step.description}</p>
            {index < portfolioData.developmentProcess.length - 1 && (
              <ArrowRight className="absolute top-9 left-full -translate-x-1/2 w-8 h-8 text-border hidden lg:block" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
