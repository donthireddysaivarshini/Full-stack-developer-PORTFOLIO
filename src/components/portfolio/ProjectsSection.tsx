'use client'

import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/portfolio/Section';
import { portfolioData } from '@/lib/portfolio-data';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useAutoScroll } from '@/hooks/use-auto-scroll';

const ProjectCard = ({ project }: { project: typeof portfolioData.projects[0] }) => (
  <div className="flex-shrink-0 w-96">
    <Card className="h-full flex flex-col overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.8)] hover:-translate-y-1">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="mt-1">{project.year}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {project.github !== '#' && (
            <Button variant="secondary" size="sm" asChild>
              <Link href={project.github} target="_blank">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          )}
          {project.liveDemo !== '#' && (
            <Button variant="default" size="sm" asChild>
              <Link href={project.liveDemo} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" /> Demo
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  </div>
)

export function ProjectsSection() {
  const allProjects = portfolioData.projects;
  const scrollerRef = useAutoScroll({ speed: 1.5 });

  return (
    <Section
      id="projects"
      title="Full Stack Projects"
      description="A selection of applications I've built, showcasing my skills across the stack."
      className="bg-card/50"
    >
      <div className="relative group/section animate-in fade-in-up">
        <div className="absolute -inset-4 bg-primary/10 rounded-2xl opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 blur-2xl"></div>
        <div ref={scrollerRef} className="relative scroller horizontal-scrollbar">
          <div className="scroller-inner">
            {allProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
