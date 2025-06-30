
import { useState, useEffect, useRef } from 'react';

interface UseAnimatedCounterProps {
  end: number;
  duration?: number;
  startOnView?: boolean;
  suffix?: string;
}

export const useAnimatedCounter = ({ 
  end, 
  duration = 2000, 
  startOnView = true,
  suffix = '' 
}: UseAnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      animateCounter();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounter();
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, isVisible, startOnView]);

  const animateCounter = () => {
    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const formatValue = (value: number) => {
    if (end >= 1000 && end < 10000) {
      return `${(value / 1000).toFixed(1)}K${suffix}`;
    } else if (end >= 10000) {
      return `${Math.floor(value / 1000)}K${suffix}`;
    }
    return `${value}${suffix}`;
  };

  return {
    count: formatValue(count),
    ref: elementRef
  };
};
