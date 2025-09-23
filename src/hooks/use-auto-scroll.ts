'use client';

import { useRef, useEffect, useCallback } from 'react';

type UseAutoScrollOptions = {
  speed?: number;
  pauseOnHover?: boolean;
};

export function useAutoScroll<T extends HTMLElement>(
  ref: React.RefObject<T>,
  options: UseAutoScrollOptions = {}
) {
  const { speed = 1, pauseOnHover = true } = options;

  const animationFrameRef = useRef<number>();
  const scrollDirectionRef = useRef<'forward' | 'backward'>('forward');
  const isHoveringRef = useRef(false);
  const isManuallyScrollingRef = useRef(false);
  const manualScrollTimeoutRef = useRef<NodeJS.Timeout>();

  const animateScroll = useCallback(() => {
    if (ref.current && !isHoveringRef.current && !isManuallyScrollingRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (scrollDirectionRef.current === 'forward') {
        if (scrollLeft >= maxScrollLeft) {
          scrollDirectionRef.current = 'backward';
        } else {
          ref.current.scrollLeft += speed;
        }
      } else {
        if (scrollLeft <= 0) {
          scrollDirectionRef.current = 'forward';
        } else {
          ref.current.scrollLeft -= speed;
        }
      }
    }
    animationFrameRef.current = requestAnimationFrame(animateScroll);
  }, [ref, speed]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = () => {
      if (pauseOnHover) {
        isHoveringRef.current = true;
      }
    };

    const handleMouseLeave = () => {
      if (pauseOnHover) {
        isHoveringRef.current = false;
      }
    };
    
    const handleWheel = () => {
        isManuallyScrollingRef.current = true;
        clearTimeout(manualScrollTimeoutRef.current);
        manualScrollTimeoutRef.current = setTimeout(() => {
            isManuallyScrollingRef.current = false;
        }, 1500);
    }

    animationFrameRef.current = requestAnimationFrame(animateScroll);

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(manualScrollTimeoutRef.current);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('wheel', handleWheel);
    };
  }, [animateScroll, pauseOnHover, ref]);
}
