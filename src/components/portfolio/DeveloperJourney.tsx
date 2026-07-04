'use client';

import { Section } from '@/components/portfolio/Section';
import { GraduationCap, Briefcase, Trophy, Code, ExternalLink } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const journeyData = [
  {
  title: 'Freelance Full Stack Web Developer',
  company: 'Staffarc',
  period: 'Nov 2025 - Present',
  description:
    'Delivered 10+ production web applications for real businesses across multiple industries. Built both frontend and full-stack solutions with React, Next.js, Django, and TypeScript, developing features such as admin panels, authentication, payment integration, content management systems, order management, and business-specific workflows while collaborating directly with clients.',
  icon: Briefcase,
  logo: 'https://www.staffarc.in/_next/image?url=%2Fimages%2FStaffarc-logo.png&w=96&q=75',
  link: 'https://www.staffarc.in',
  type: 'freelance',
},
  {
  title: 'Web Developer Intern',
  company: 'Satoru Foundation',
  period: 'Nov 2025 - Present',
  description: 'Developed a ticketing and lead management system from scratch with automatic ticket creation from website enquiries, an 8-stage workflow, ticket dashboard, detailed ticket management, payment integration, and business process automation. Also contributed to the Saanidhyam search engine for elder-care services.',
  icon: Briefcase,
  logo: 'https://www.satorufoundation.org/_next/image?url=%2Flogo.png&w=640&q=75',
  link: 'https://www.satorufoundation.org',
  type: 'internship',
},
  {
    title: 'Hackathon Competitor',
    company: 'HSBC & HackWithAI',
    period: '2025 - 2026',
    description: 'Top 117 Finalist in the HSBC Hackathon (selected from 30,000+ applicants). Actively building AI-integrated solutions for competitive hackathons like HackWithAI.',
    icon: Trophy,
    logo: 'https://www.hsbc.bank.in/content/dam/hsbc/in/images/01_HSBC_MASTERBRAND_LOGO_RGB.svg',
    link: 'https://www.hsbc.bank.in',
    type: 'achievements',
  },
  {
    title: 'Project Intern',
    company: 'Infosys Springboard',
    period: 'Oct 2024 - Dec 2024',
    description: 'Orchestrated the development of DealHunter, a Python web scraper with a Streamlit dashboard, achieving 15% faster filtering. Built a Creative Jobs Portal using Selenium automation.',
    icon: Code,
    logo: 'https://infyspringboard.onwingspan.com/web/assets/images/infosysheadstart/app_logos/landing-new.png',
    link: 'https://infyspringboard.onwingspan.com',
    type: 'projects',
  },
  {
    title: 'B.Tech in CSE (IoT)',
    company: 'Malla Reddy Eng. College for Women',
    period: '2022 - 2026',
    description: 'Maintaining a strong academic foundation with a 9.1 CGPA while continuously building hands-on web applications.',
    icon: GraduationCap,
    logo: 'https://www.mallareddyecw.com/assets/mallareddy-college-logo.png',
    link: 'https://www.mallareddyecw.com',
    type: 'education',
  },
];

export function DeveloperJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 50%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <Section id="journey" title="My Developer Journey" description="A timeline of my growth, from education to real-world impact.">
      <div ref={containerRef} className="relative max-w-4xl mx-auto py-10 px-4">
        
        {/* Background Line */}
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-border/50 rounded-full transform md:-translate-x-1/2" />
        
        {/* Animated Green Line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[39px] md:left-1/2 top-0 w-1 bg-primary rounded-full transform md:-translate-x-1/2 shadow-[0_0_15px_hsl(var(--primary))]"
        />

        <div className="flex flex-col gap-12 relative z-10">
          {journeyData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } gap-8 group`}
              >
                {/* Desktop Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Timeline Icon */}
                <div className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full bg-background border-4 border-border group-hover:border-primary transition-colors duration-300 flex items-center justify-center transform -translate-x-1/2 z-20 shadow-lg">
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Content Card */}
                <div className="w-full pl-16 md:pl-0 md:w-1/2 flex flex-col justify-center">
                  <div
                    className={`bg-card/40 backdrop-blur-md border border-border p-6 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] hover:-translate-y-1 ${
                      isEven ? 'md:mr-10' : 'md:ml-10'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full">
                        {item.period}
                      </span>
                      {/* Logo Container - White background to ensure logos pop */}
                      <div className="bg-white/90 p-1.5 rounded-md h-10 w-auto flex items-center justify-center shadow-sm">
                        <img 
                          src={item.logo} 
                          alt={`${item.company} logo`} 
                          className="max-h-full max-w-[80px] object-contain"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Clickable Company Link */}
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-md font-medium text-muted-foreground hover:text-foreground transition-colors mb-4"
                    >
                      {item.company}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}