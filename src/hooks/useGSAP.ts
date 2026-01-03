import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Hook for basic GSAP fade-in animation
export const useFadeIn = (delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: 'power3.out',
        }
      );
    }
  }, [delay]);

  return ref;
};

// Hook for scroll-triggered animations
export const useScrollAnimation = (
  animation: 'fadeIn' | 'slideIn' | 'scaleIn' = 'fadeIn',
  options?: {
    start?: string;
    end?: string;
    scrub?: boolean;
    markers?: boolean;
  }
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let fromVars: gsap.TweenVars = {};
    let toVars: gsap.TweenVars = {};

    switch (animation) {
      case 'fadeIn':
        fromVars = { opacity: 0, y: 60 };
        toVars = { opacity: 1, y: 0 };
        break;
      case 'slideIn':
        fromVars = { opacity: 0, x: -60 };
        toVars = { opacity: 1, x: 0 };
        break;
      case 'scaleIn':
        fromVars = { opacity: 0, scale: 0.9 };
        toVars = { opacity: 1, scale: 1 };
        break;
    }

    gsap.fromTo(element, fromVars, {
      ...toVars,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: options?.start || 'top 80%',
        end: options?.end || 'bottom 20%',
        scrub: options?.scrub || false,
        markers: options?.markers || false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [animation, options]);

  return ref;
};

// Hook for parallax effect
export const useParallax = (speed = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    gsap.to(element, {
      y: () => window.innerHeight * speed * 0.5,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [speed]);

  return ref;
};

// Hook for stagger animations on children
export const useStaggerAnimation = (stagger = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const children = ref.current.children;

    gsap.fromTo(
      children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [stagger]);

  return ref;
};

// Hook for horizontal scroll section
export const useHorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const container = containerRef.current;
    const scroller = scrollerRef.current;
    const scrollWidth = scroller.scrollWidth - container.offsetWidth;

    gsap.to(scroller, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return { containerRef, scrollerRef };
};

// Hook for counter animation
export const useCounterAnimation = (
  endValue: number,
  duration = 2,
  suffix = ''
) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const counter = { value: 0 };

    gsap.to(counter, {
      value: endValue,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true,
      },
      onUpdate: () => {
        element.textContent = Math.round(counter.value) + suffix;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [endValue, duration, suffix]);

  return ref;
};

// Hook for text reveal animation
export const useTextReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const text = element.textContent || '';
    element.innerHTML = '';

    // Create wrapper for each word
    text.split(' ').forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.overflow = 'hidden';
      wordSpan.style.marginRight = '0.25em';

      const innerSpan = document.createElement('span');
      innerSpan.textContent = word;
      innerSpan.style.display = 'inline-block';
      innerSpan.style.transform = 'translateY(100%)';
      innerSpan.classList.add(`word-${wordIndex}`);

      wordSpan.appendChild(innerSpan);
      element.appendChild(wordSpan);
    });

    gsap.to(element.querySelectorAll('span > span'), {
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return ref;
};
