'use server';
/**
 * @fileOverview This file contains the AI-powered project recommendation flow.
 *
 * - aiPoweredProjectRecommendations - A function that suggests projects to showcase based on the skills and technologies detected from a resume or profile.
 * - AiPoweredProjectRecommendationsInput - The input type for the aiPoweredProjectRecommendations function, which is the user's resume/profile text.
 * - AiPoweredProjectRecommendationsOutput - The return type for the aiPoweredProjectRecommendations function, which is a list of recommended projects.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPoweredProjectRecommendationsInputSchema = z.object({
  profileText: z
    .string()
    .describe("The developer's resume or profile text."),
  projectList: z
    .string()
    .describe("A list of available projects."),
});
export type AiPoweredProjectRecommendationsInput = z.infer<typeof AiPoweredProjectRecommendationsInputSchema>;

const AiPoweredProjectRecommendationsOutputSchema = z.object({
  recommendedProjects: z.array(z.string()).describe('A list of recommended projects to showcase.'),
});
export type AiPoweredProjectRecommendationsOutput = z.infer<typeof AiPoweredProjectRecommendationsOutputSchema>;

export async function aiPoweredProjectRecommendations(input: AiPoweredProjectRecommendationsInput): Promise<AiPoweredProjectRecommendationsOutput> {
  return aiPoweredProjectRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPoweredProjectRecommendationsPrompt',
  input: {schema: AiPoweredProjectRecommendationsInputSchema},
  output: {schema: AiPoweredProjectRecommendationsOutputSchema},
  prompt: `Based on the following profile text:\n\n{{profileText}}\n\nand the following list of available projects:\n\n{{projectList}}\n\nSuggest which projects the developer should showcase in their portfolio to highlight the most relevant work to potential employers. Only return a list of project names.\n\nProjects:`,
});

const aiPoweredProjectRecommendationsFlow = ai.defineFlow(
  {
    name: 'aiPoweredProjectRecommendationsFlow',
    inputSchema: AiPoweredProjectRecommendationsInputSchema,
    outputSchema: AiPoweredProjectRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
