'use client'

import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Section } from '@/components/portfolio/Section';
import { portfolioData } from '@/lib/portfolio-data';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function ProjectsSection() {

  const ProjectCard = ({ project }: { project: (typeof portfolioData.projects)[0] }) => (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300">
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
  );

  return (
    <Section
      id="projects"
      title="Full Stack Projects"
      description="A selection of applications I've built, showcasing my skills across the stack."
      className="bg-card/50"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {portfolioData.projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <ProjectCard project={project} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </Section>
  );
}
