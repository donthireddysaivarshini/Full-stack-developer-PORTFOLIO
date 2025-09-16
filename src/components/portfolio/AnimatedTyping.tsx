'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';

type AnimatedTypingProps = {
  strings: string[];
  className?: string;
};

export function AnimatedTyping({ strings, className }: AnimatedTypingProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentString = useMemo(() => strings[index], [strings, index]);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => setIsPaused(false), 1500);
      return () => clearTimeout(pauseTimeout);
    }

    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && subIndex === currentString.length) {
        setIsPaused(true);
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % strings.length);
      } else {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, isPaused, currentString, strings.length, index]);

  return (
    <span className={cn("relative", className)}>
      {currentString.substring(0, subIndex)}
      <span className="bg-primary w-[10px] h-[1.5rem] ml-1 inline-block animate-[blink-caret_1s_infinite] motion-reduce:hidden" aria-hidden="true" />
    </span>
  );
}
