'use server';

import { aiPoweredProjectRecommendations } from '@/ai/flows/ai-powered-project-recommendations';
import { portfolioData } from '@/lib/portfolio-data';

export async function getRecommendedProjects(profileText: string): Promise<{ recommendedProjects?: string[], error?: string }> {
  if (!profileText || profileText.trim().length < 20) {
    return { error: 'Please provide a more detailed job description or profile (at least 20 characters).' };
  }

  const projectList = portfolioData.projects.map(p => p.title).join(', ');

  try {
    const result = await aiPoweredProjectRecommendations({
      profileText,
      projectList,
    });
    return result;
  } catch (error) {
    console.error('AI recommendation error:', error);
    return { error: 'An error occurred while getting recommendations. Please try again later.' };
  }
}
