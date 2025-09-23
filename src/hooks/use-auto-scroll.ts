'use client';

import { useRef, useEffect, useCallback } from 'react';

type UseAutoScrollOptions = {
  speed?: number;
  pauseOnHover?: boolean;
};

export function useAutoScroll<T extends HTMLElement>({
  speed = 1,
  pauseOnHover = true,
}: UseAutoScrollOptions = {}) {
  const containerRef = useRef<T>(null);
  const animationFrameRef = useRef<number>();
  const isHovering = useRef(false);
  const isManuallyScrolling = useRef(false);
  const manualScrollTimeoutRef = useRef<NodeJS.Timeout>();

  const loop = useCallback(() => {
    if (!containerRef.current || isHovering.current || isManuallyScrolling.current) {
      animationFrameRef.current = requestAnimationFrame(loop);
      return;
    }

    const container = containerRef.current;
    const content = container.firstElementChild as HTMLElement;

    if (content) {
      // The total width is the width of the original content
      const contentWidth = content.scrollWidth / 2;
      container.scrollLeft += speed;

      // If we've scrolled past the original content, loop back to the start
      if (container.scrollLeft >= contentWidth) {
        container.scrollLeft = 0;
      }
    }

    animationFrameRef.current = requestAnimationFrame(loop);
  }, [speed]);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => {
      if (pauseOnHover) {
        isHovering.current = true;
      }
    };

    const handleMouseLeave = () => {
      if (pauseOnHover) {
        isHovering.current = false;
      }
    };
    
    const handleScroll = () => {
        isManuallyScrolling.current = true;
        clearTimeout(manualScrollTimeoutRef.current);
        manualScrollTimeoutRef.current = setTimeout(() => {
            isManuallyScrolling.current = false;
        }, 100); // Consider manual scroll for 100ms after the last scroll event
    };


    if (pauseOnHover) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }
    container.addEventListener('scroll', handleScroll, { passive: true });

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
      if (container) {
        if (pauseOnHover) {
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        }
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [loop, pauseOnHover]);

  return containerRef;
}
