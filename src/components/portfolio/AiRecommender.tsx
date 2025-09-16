'use client';

import React, { useState, useTransition } from 'react';
import { Section } from '@/components/portfolio/Section';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { getRecommendedProjects } from '@/app/actions';
import { Loader2, Lightbulb, AlertTriangle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

type AiRecommenderProps = {
  setRecommendedProjects: (projects: string[]) => void;
};

export function AiRecommender({ setRecommendedProjects }: AiRecommenderProps) {
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await getRecommendedProjects(inputValue);
      if (result.error) {
        toast({
          variant: 'destructive',
          title: 'Recommendation Error',
          description: result.error,
        });
        setRecommendedProjects([]);
      } else if (result.recommendedProjects) {
        setRecommendedProjects(result.recommendedProjects);
        toast({
          title: 'Recommendations Ready!',
          description: `Highlighted projects that match your query.`,
        });
      }
    });
  };

  return (
    <Section
      id="ai-recommender"
      title="AI Project Matcher"
      description="Paste a job description or your skills below. I'll highlight my most relevant projects for you."
    >
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="e.g., 'Looking for a Python developer with experience in React and building REST APIs...'"
            rows={5}
            className="text-base"
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={isPending || !inputValue} size="lg">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Highlight Projects
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
}
