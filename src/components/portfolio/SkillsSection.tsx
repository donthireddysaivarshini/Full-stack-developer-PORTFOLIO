'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Section } from '@/components/portfolio/Section';
import { portfolioData } from '@/lib/portfolio-data';

type SkillCategory = keyof typeof portfolioData.skills;

const SkillChart = ({ category, title, animation, delay }: { category: SkillCategory; title: string, animation: string, delay: number }) => {
  const skills = portfolioData.skills[category];

  return (
    <Card className={`animate-in ${animation} bg-background/50`} style={{ transitionDelay: `${delay}ms` }}>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="space-y-2 group animate-in pop-up" 
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-3 font-medium">
                  <skill.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  <span className="transition-colors group-hover:text-foreground">{skill.name}</span>
                </div>
                <span className="text-muted-foreground transition-colors group-hover:text-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden transition-shadow group-hover:shadow-[0_0_10px_hsl(var(--primary)/0.5)]">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-500" 
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
      description="Technologies and tools I use to build production-ready web applications."
      className="bg-card/50"
    >
      <div className="grid lg:grid-cols-2 gap-6">

        <Card className="bg-background/50">
          <CardHeader>
            <CardTitle>Frontend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {[
                'HTML',
                'CSS',
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Vite',
                'Tailwind CSS',
                'Framer Motion',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 rounded-lg border bg-muted/40 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-background/50">
          <CardHeader>
            <CardTitle>Backend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {[
                'Python',
                'Django',
                'REST APIs',
                'Firebase',
                'FireCMS',
                'Next.js API Routes',
                'Authentication',
                'Payment Integration',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 rounded-lg border bg-muted/40 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-background/50">
          <CardHeader>
            <CardTitle>Database & Deployment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {[
                'MySQL',
                'SQLite',
                'Firebase',
                'Docker',
                'VPS Deployment',
                'Linux',
                'Nginx',
                'Git',
                'GitHub',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 rounded-lg border bg-muted/40 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-background/50">
          <CardHeader>
            <CardTitle>Tools & AI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {[
                'Claude',
                'Gemini',
                'GitHub Copilot',
                'OpenAI',
                'VS Code',
                
                'Razorpay',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 rounded-lg border bg-muted/40 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </Section>
  );
}