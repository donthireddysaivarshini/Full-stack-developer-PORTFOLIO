'use client'

import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/portfolio/Section';
import { portfolioData } from '@/lib/portfolio-data';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function ProjectsSection() {
  const allProjects = [...portfolioData.projects, ...portfolioData.projects];

  return (
    <Section
      id="projects"
      title="Full Stack Projects"
      description="A selection of applications I've built, showcasing my skills across the stack."
      className="bg-card/50"
    >
      <div className="relative group/section">
        <div className="absolute -inset-4 bg-primary/10 rounded-2xl opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 blur-2xl"></div>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,hsl(var(--background))_10%,hsl(var(--background))_90%,transparent_100%)]">
          <div className="w-max">
            <div className="flex w-max space-x-8 py-4 scroller-projects">
              {allProjects.map((project, index) => (
                <div key={index} className="flex-shrink-0 w-96">
                  <Card className="h-full flex flex-col overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-primary/20 shadow-md hover:-translate-y-1">
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
                          <Button variant="outline" size="sm" asChild>
                            <Link href={project.github} target="_blank">
                              <Github className="mr-2 h-4 w-4" /> GitHub
                            </Link>
                          </Button>
                        )}
                        {project.liveDemo !== '#' && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={project.liveDemo} target="_blank">
                              <ExternalLink className="mr-2 h-4 w-4" /> Demo
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
