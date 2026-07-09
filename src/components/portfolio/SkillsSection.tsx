'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Section } from '@/components/portfolio/Section';
import { portfolioData } from '@/lib/portfolio-data';

export function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      description="Technologies and tools I use to build production-ready web applications."
      className="bg-card/50"
    >
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">

        {/* Frontend Glassmorphic Card */}
        <Card className="bg-background/30 backdrop-blur-md border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/15 transition-all duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg tracking-wide font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Frontend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2.5">
              {[
                'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 
                'Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-lg text-xs font-medium text-foreground/80 hover:bg-white/[0.06] hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Backend Glassmorphic Card */}
        <Card className="bg-background/30 backdrop-blur-md border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/15 transition-all duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg tracking-wide font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Backend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Python', 'Django', 'REST APIs', 'Firebase', 'FireCMS', 
                'Next.js API Routes', 'Authentication', 'Payment Integration',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-lg text-xs font-medium text-foreground/80 hover:bg-white/[0.06] hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Database & Deployment Glassmorphic Card */}
        <Card className="bg-background/30 backdrop-blur-md border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/15 transition-all duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg tracking-wide font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Database & Deployment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2.5">
              {[
                'MySQL', 'SQLite', 'Firebase', 'Docker', 'VPS Deployment', 
                'Linux', 'Nginx', 'Git', 'GitHub',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-lg text-xs font-medium text-foreground/80 hover:bg-white/[0.06] hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tools & AI Glassmorphic Card */}
        <Card className="bg-background/30 backdrop-blur-md border-white/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-white/15 transition-all duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg tracking-wide font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Tools & AI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Claude', 'Gemini', 'GitHub Copilot', 'OpenAI', 'VS Code', 'Razorpay',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-lg text-xs font-medium text-foreground/80 hover:bg-white/[0.06] hover:text-white transition-colors"
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