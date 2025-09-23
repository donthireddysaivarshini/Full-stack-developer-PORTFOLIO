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
    if (isHovering.current || isManuallyScrolling.current) {
      animationFrameRef.current = requestAnimationFrame(loop);
      return;
    }
    if (containerRef.current) {
        const container = containerRef.current;
        
        if (direction.current === 1 && container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
            direction.current = -1;
        } else if (direction.current === -1 && container.scrollLeft <= 1) {
            direction.current = 1;
        }
        
        container.scrollLeft += speed * direction.current;
    }

    animationFrameRef.current = requestAnimationFrame(loop);
  }, [speed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleManualScroll = () => {
        isManuallyScrolling.current = true;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isManuallyScrolling.current = false;
        }, 150); // Short delay after manual scroll to resume auto-scroll
    };

    const handleMouseEnter = () => {
        if (pauseOnHover) isHovering.current = true;
    };

    const handleMouseLeave = () => {
        if (pauseOnHover) isHovering.current = false;
    };

    container.addEventListener('scroll', handleManualScroll, { passive: true });
    if (pauseOnHover) {
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);
    }
    
    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        clearTimeout(scrollTimeout);
        if (container) {
            container.removeEventListener('scroll', handleManualScroll);
            if (pauseOnHover) {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            }
        }
    };
  }, [loop, pauseOnHover]);

  return containerRef;
}
