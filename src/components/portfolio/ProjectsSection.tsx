'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/portfolio/Section';
import { cn } from '@/lib/utils';
import { 
  Globe, Layers, Briefcase, Trophy, GraduationCap, 
  ExternalLink, Github, ShoppingBag, Utensils, Plane, 
  Activity, ShieldAlert, BookOpen, BrainCircuit 
} from 'lucide-react';
import Link from 'next/link';

// --- DATA STRUCTURE ---
const PROJECT_CATEGORIES = [
  { id: 'fullstack', label: 'Live Full Stack Projects', icon: Layers },
  { id: 'commercial', label: 'Live Frontend Projects', icon: Globe },
  { id: 'internship', label: 'Internships', icon: Briefcase },
  { id: 'hackathon', label: 'Hackathons', icon: Trophy },
  { id: 'academic', label: 'Academic Projects', icon: GraduationCap },
];

const PROJECTS_DATA: Record<string, any[]> = {
  fullstack: [
  {
    id: 'vinsaraa',
    label: 'Vinsaraa',
    icon: ShoppingBag,
    image: '/vinsaraa.png',
    description: 'Production e-commerce platform with admin dashboard, product & order management, Razorpay integration, Google authentication and dynamic content management.',
    liveDemo: 'https://www.vinsaraa.com/',
    github: '#'
  },
  {
    id: 'rastlina',
    label: 'Rastlina',
    icon: ShoppingBag,
    image: '/rastlina.png',
    description: 'Plant e-commerce platform featuring complex category hierarchy, Shop by Size filters, space tags, dynamic catalog management and scalable admin panel.',
    liveDemo: 'https://rastlina.com/',
    github: '#'
  },
  {
    id: 'yuva',
    label: 'Yuva Computers',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200',
    description: 'Electronics e-commerce platform with variant-based products, brand-category mapping, inventory management, Razorpay payments and complete admin panel.',
    liveDemo: 'https://www.yuvacomputers.in/',
    github: '#'
  },
  {
    id: 'foursix46',
    label: 'FourSix46',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200',
    description: 'Modern business platform built with Next.js & Firebase featuring editable CMS, CRM modules, SEO, analytics, schema markup and performance optimization.',
    liveDemo: 'https://foursix46.com/',
    github: '#'
  },
  {
    id: 'sriruchi',
    label: 'Sri Ruchi Pachallu',
    icon: Utensils,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200',
    description: 'Full-stack food products e-commerce platform with authentication, product management, orders, payments and customizable admin dashboard.',
    liveDemo: 'https://www.sriruchipachallu.in/',
    github: '#'
  },
  {
    id: 'stature',
    label: 'Stature Vogue',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200',
    description: 'Fashion e-commerce platform with complete backend, authentication, inventory, order workflow and content management.',
    liveDemo: 'https://www.staturevogue.com/',
    github: '#'
  },
  {
    id: 'gtd',
    label: 'GTD Fashion',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200',
    description: 'End-to-end apparel e-commerce solution with dynamic product architecture and scalable administration.',
    liveDemo: 'https://www.gtdfashion.com/',
    github: '#'
  },
],
  commercial: [
    { id: 'bob', label: 'Bob Bites of Bliss', icon: Utensils, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200', description: 'Frontend e-commerce with WhatsApp integration.', liveDemo: 'https://www.bobbitesofbliss.com/', github: '#' },
    { id: 'raju', label: 'Raju Gari Biryani', icon: Utensils, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200', description: 'Restaurant frontend & ordering system.', liveDemo: 'https://www.rajugaribiryani.com/', github: '#' },
    { id: 'vyoma', label: 'Vyoma Visas', icon: Plane, image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200', description: 'Visa consultancy platform with mail integration.', liveDemo: 'https://www.vyomavisas.in/', github: '#' },
    { id: 'sakala', label: 'Sakala Connect', icon: Activity, image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200', description: 'Business connectivity and service platform.', liveDemo: 'https://www.sakalaconnect.com/', github: '#' },
    { id: 'deccan', label: 'The Deccan Grill Plano', icon: Utensils, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200', description: 'Premium restaurant showcase and menu.', liveDemo: 'https://www.thedeccangrillplano.com/', github: '#' },
    { id: 'goli', label: 'Andhra Goli Soda', icon: ShoppingBag, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200', description: 'Beverage brand landing page.', liveDemo: 'https://www.andhragolisoda.in/', github: '#' },
    { id: 'sindri', label: 'Sindri Power', icon: Globe, image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200', description: 'Corporate website for energy solutions.', liveDemo: 'https://www.sindripower.com/', github: '#' },
  ],
  
  internship: [
  {
    id: 'saanidhyam',
    label: 'Saanidhyam Search',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200',
    description: 'Data-driven search engine connecting users with verified elder-care homes, featuring lead generation, ticketing system, payment workflow and business process automation.',
    liveDemo: 'https://www.satorufoundation.org/saanidhyam',
    github: '#'
  },
  {
    id: 'dementia',
    label: 'Dementia Training',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200',
    description: 'Learning platform built for dementia awareness and caregiver training with secure content management.',
    liveDemo: 'https://www.satorufoundation.org/dementia-training',
    github: '#'
  },
  {
    id: 'deal',
    label: 'Deal Hunter',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200',
    description: 'Python web scraper with Streamlit dashboard for discovering and filtering e-commerce deals across multiple stores.',
    liveDemo: 'https://www.linkedin.com/posts/saivarshini-donthireddy_infosysspringboardinternship-pythonprojects-activity-7353692116599910400-664U?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEt6PFsBaskPzve_4TPMTCg1SDQWjaZukKM',
    github: 'https://github.com/donthireddysaivarshini/Deal_Scraper'
  },
  {
    id: 'job',
    label: 'Creative Jobs Portal',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200',
    description: 'Automated Behance job scraper using Selenium with intelligent job discovery and filtering.',
    liveDemo: 'https://www.linkedin.com/posts/saivarshini-donthireddy_built-a-smarter-way-to-discover-behance-activity-7354026177709182976-kbhX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEt6PFsBaskPzve_4TPMTCg1SDQWjaZukKM',
    github: 'https://github.com/donthireddysaivarshini/Job-Scraper'
  },
],
 hackathon: [
  {
    id: 'comfort',
    label: 'Comfort Companion',
    icon: BrainCircuit,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200',
    description: 'AI-powered emotional support companion that provides personalized conversations and mental wellness assistance.',
    liveDemo: 'https://comfort-companion-three.vercel.app/',
    github: 'https://github.com/donthireddysaivarshini/Comfort_Companion'
  },
  {
    id: 'fraud',
    label: 'HSBC Fraud Detection',
    icon: ShieldAlert,
   image: '/hsbc.png',
    description: 'Machine learning model for fraud detection developed during HSBC Hackathon 2025.',
    liveDemo: '#',
    github: 'https://github.com/donthireddysaivarshini/Fraud_Detection.git'
  },
],
  academic: [
  {
    id: 'recipe',
    label: 'Recipe Snap',
    icon: Utensils,
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=1200',
    description: 'AI-powered recipe generator that suggests recipes based on ingredients using Generative AI.',
    liveDemo: 'https://www.linkedin.com/posts/saivarshini-donthireddy_ai-genai-edunetfoundation-activity-7354524969650868227-tTMF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEt6PFsBaskPzve_4TPMTCg1SDQWjaZukKM',
    github: 'https://github.com/donthireddysaivarshini/Recipe-Snap'
  },
  {
    id: 'finance',
    label: 'Finance Tracker',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200',
    description: 'Personal finance dashboard for tracking expenses, income and savings.',
    liveDemo: 'https://svfinance.vercel.app/',
    github: 'https://github.com/donthireddysaivarshini/SoloFinance.git'
  },
  {
    id: 'techblog',
    label: 'TechBuzz',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200',
    description: 'Responsive blogging platform built with modern frontend technologies.',
    liveDemo: 'https://techbuzz-xi.vercel.app/',
    github: 'https://github.com/donthireddysaivarshini/Techblog'
  },
  {
    id: 'student',
    label: 'Student Management System',
    icon: GraduationCap,
    image: '/student.png',
    description: 'Java Swing and MySQL based CRUD application for managing student records.',
    liveDemo: 'https://www.linkedin.com/posts/saivarshini-donthireddy_javaprojects-studentmanagementsystem-mysql-activity-7354776720702394368-Cac6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEt6PFsBaskPzve_4TPMTCg1SDQWjaZukKM',
    github: 'https://github.com/donthireddysaivarshini/Student-Management-System'
  },
],
};

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('commercial');
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentFeatures = PROJECTS_DATA[activeCategory];
  const currentIndex = ((step % currentFeatures.length) + currentFeatures.length) % currentFeatures.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  // Reset carousel step when category changes
  useEffect(() => {
    setStep(0);
  }, [activeCategory]);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + currentFeatures.length) % currentFeatures.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = currentFeatures.length;
    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <Section id="projects" title="Projects"
    
description="A collection of production applications, client projects, internships, hackathons, and personal builds showcasing my experience across full-stack development, AI-assisted development, and modern web technologies.">
      <div className="flex flex-col xl:flex-row gap-8 w-full max-w-7xl mx-auto pt-6">
        
        {/* SIDEBAR NAVIGATION */}
        <div className="w-full xl:w-64 flex-shrink-0 flex flex-row xl:flex-col gap-2 overflow-x-auto horizontal-scrollbar pb-4 xl:pb-0 z-10">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-300 border whitespace-nowrap",
                activeCategory === cat.id 
                  ? "bg-primary/10 border-primary text-primary shadow-[0_0_15px_hsl(var(--primary)/0.2)]" 
                  : "bg-card/30 border-border text-muted-foreground hover:bg-card hover:border-border/80"
              )}
            >
              <cat.icon className="w-5 h-5" />
              <span className="font-semibold text-sm">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* 3D CAROUSEL */}
        <div className="flex-1 relative overflow-hidden rounded-3xl border border-border bg-card/10 flex flex-col lg:flex-row min-h-[600px]">
          
          {/* Left Side: Chips */}
          <div className="w-full lg:w-[40%] min-h-[350px] relative z-30 flex flex-col items-start justify-center overflow-hidden px-6 md:px-12 bg-card/40 backdrop-blur-sm border-r border-border/50">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background via-background/80 to-transparent z-40 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent z-40 pointer-events-none" />
            
            <div className="relative w-full h-full flex items-center justify-start z-20 mt-10">
              {currentFeatures.map((feature, index) => {
                const isActive = index === currentIndex;
                const distance = index - currentIndex;
                const wrappedDistance = wrap(-(currentFeatures.length / 2), currentFeatures.length / 2, distance);

                return (
                  <motion.div
                    key={feature.id}
                    style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                    animate={{
                      y: wrappedDistance * ITEM_HEIGHT,
                      opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                      scale: isActive ? 1 : 0.95
                    }}
                    transition={{ type: "spring", stiffness: 90, damping: 22 }}
                    className="absolute flex items-center justify-start"
                  >
                    <button
                      onClick={() => handleChipClick(index)}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      className={cn(
                        "relative flex items-center gap-4 px-6 py-3.5 rounded-full transition-all duration-500 text-left group border",
                        isActive
                          ? "bg-primary/20 text-primary border-primary z-10 shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
                          : "bg-background/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                      )}
                    >
                      <feature.icon className={cn("w-4 h-4 transition-colors duration-500", isActive ? "text-primary" : "text-muted-foreground")} />
                      <span className="font-medium text-sm tracking-tight whitespace-nowrap">
                        {feature.label}
                      </span>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side: 3D Image Cards */}
          <div className="flex-1 min-h-[500px] relative bg-background/50 flex items-center justify-center p-8 overflow-hidden">
            <div className="relative w-full max-w-[450px] aspect-[4/5] flex items-center justify-center">
              {currentFeatures.map((feature, index) => {
                const status = getCardStatus(index);
                const isActive = status === "active";
                const isPrev = status === "prev";
                const isNext = status === "next";

                return (
                  <motion.div
                    key={feature.id}
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                      scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                      opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                      rotate: isPrev ? -4 : isNext ? 4 : 0,
                      zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="absolute inset-0 rounded-[2rem] overflow-hidden border border-border bg-card shadow-2xl origin-center"
                  >
                    {/* Dark Overlay for better contrast */}
                    <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500" style={{ opacity: isActive ? 0.2 : 0.6 }} />
                    
                    <img
                      src={feature.image}
                      alt={feature.label}
                      className={cn(
                        "w-full h-full object-cover transition-all duration-700",
                        isActive ? "grayscale-0 blur-0" : "grayscale blur-[2px] brightness-50"
                      )}
                    />

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute inset-x-0 bottom-0 p-8 pt-32 bg-gradient-to-t from-background via-background/80 to-transparent flex flex-col justify-end z-20"
                        >
                          <div className="bg-primary/20 text-primary border border-primary/50 px-3 py-1 rounded-full text-xs font-semibold tracking-wider w-fit mb-3 backdrop-blur-md">
                            {feature.label}
                          </div>
                          <p className="text-foreground font-medium text-lg leading-tight mb-6">
                            {feature.description}
                          </p>
                          
                          {/* Call to action buttons */}
                          <div className="flex gap-3">
                            {feature.liveDemo !== '#' && (
                              <Link href={feature.liveDemo} target="_blank" className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
                                <ExternalLink className="w-4 h-4" /> View Project
                              </Link>
                            )}
                            {feature.github !== '#' && (
                              <Link href={feature.github} target="_blank" className="flex-1 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-2.5 rounded-lg text-sm font-bold border border-border hover:bg-secondary/80 transition-colors">
                                <Github className="w-4 h-4" /> Code
                              </Link>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}