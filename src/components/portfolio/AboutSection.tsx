'use client';

import { Section } from '@/components/portfolio/Section';

export function AboutSection() {
  return (
    <Section 
      id="about" 
      title="A Little About Me" 
      description="My philosophy on engineering, design, and reliable software delivery."
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative overflow-hidden bg-white/[0.01] backdrop-blur-xl border border-white/[0.05] p-8 md:p-10 rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
          {/* Decorative ambient flare line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <span className="text-[10px] font-mono tracking-widest uppercase text-primary block mb-2">// THE INTENT</span>
              <h3 className="text-lg font-medium text-white tracking-tight font-sans">
                Simple interfaces. Bulletproof logic.
              </h3>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <p className="text-sm md:text-base text-muted-foreground/90 font-light leading-relaxed font-sans">
                I am a developer who believes software should be clean, intentional, and highly dependable. I don't just assemble copy-paste components—I focus closely on robust state management, clean relational schemas, and smooth, responsive interactive interfaces.
              </p>
              <p className="text-sm md:text-base text-muted-foreground/95 font-light leading-relaxed font-sans">
                Whether deploying custom web applications for businesses or engineering tools during fast-paced hackathons, I approach every code base with a focus on long-term maintainability and real-world utility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}