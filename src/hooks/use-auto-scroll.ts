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
  const direction = useRef(1); // 1 for right, -1 for left

  const loop = useCallback(() => {
    if (!containerRef.current || isHovering.current || isManuallyScrolling.current) {
      animationFrameRef.current = requestAnimationFrame(loop);
      return;
    }

    const container = containerRef.current;
    
    // Check if we've hit the end or the beginning
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
      direction.current = -1; // Change direction to left
    } else if (container.scrollLeft <= 1) {
      direction.current = 1; // Change direction to right
    }

    container.scrollLeft += speed * direction.current;

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
        }, 150); // Pause animation for a bit after manual scroll
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
