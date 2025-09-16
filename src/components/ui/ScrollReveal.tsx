import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    // Set initial state
    gsap.set(el, { transformOrigin: '0% 50%', rotate: baseRotation });
    
    const wordElements = el.querySelectorAll<HTMLElement>('.word');
    gsap.set(wordElements, { 
      opacity: baseOpacity, 
      filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
      willChange: 'opacity, filter, transform'
    });

    // Create a timeline for all animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scroller,
        start: 'top 85%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
        once: false,
        fastScrollEnd: true,
        onToggle: (self) => {
          // Ensure animations complete properly
          if (self.isActive) {
            tl.play();
          }
        }
      }
    });

    // Add all animations to timeline
    tl.to(el, {
        rotate: 0,
        duration: 1,
        ease: 'power2.out',
      }, 0)
      .to(wordElements, {
        opacity: 1,
        duration: 0.8,
        stagger: 0.03,
        ease: 'power2.out',
      }, 0.2);

    // Add blur animation if enabled
    if (enableBlur) {
      tl.to(wordElements, {
        filter: 'blur(0px)',
        duration: 0.8,
        stagger: 0.03,
        ease: 'power2.out',
      }, 0.2);
    }

    return () => {
      // Clean up properly
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
