'use client';

import { Section } from '@/components/portfolio/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { portfolioData } from '@/lib/portfolio-data';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
  return (
    <Section
      id="contact"
      title="Let's Build Something Amazing"
      description="I'm open for full-time opportunities and freelance projects. Let's connect and discuss how I can help."
      className="bg-card/50"
    >
      <div className="grid lg:grid-cols-2 gap-12 animate-in fade-in-up">
        <div>
          <h3 className="text-2xl font-bold mb-6">What I Can Build For You</h3>
          <div className="space-y-6">
            {portfolioData.whatICanBuild.map((item, index) => (
              <div key={item.title} className="flex items-start gap-4" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="p-2 bg-primary/10 rounded-full mt-1">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Project Inquiry</CardTitle>
            <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Inquiry Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-stack">Full Stack Web App</SelectItem>
                  <SelectItem value="ai-ml">AI/ML Project</SelectItem>
                  <SelectItem value="iot">IoT Solution</SelectItem>
                  <SelectItem value="freelance">Freelance Inquiry</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Tell me about your project..." rows={5} />
              <Button type="submit" className="w-full" size="lg">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
