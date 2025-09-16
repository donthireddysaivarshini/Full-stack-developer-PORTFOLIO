import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right';
};

export function Section({ id, title, description, children, className, animation = 'fade-in-up' }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className, animation)}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
