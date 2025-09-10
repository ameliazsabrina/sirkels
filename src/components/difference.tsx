"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Difference = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { y: 100, opacity: 100 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom-=50px",
            end: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom-=100px",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top bottom-=80px",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, x: 100, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            delay: 0.7,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsRef.current[0],
              start: "top bottom-=50px",
              end: "bottom center",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="min-h-fit bg-primary">
      <div className="bg-accent rounded-t-4xl overflow-hidden justify-center">
        <div className="bg-accent rounded-t-4xl">
          <div className="py-24 px-4 max-w-5xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-background mb-16">
                Apa yang beda di sirkels?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-6 max-w-xs mx-auto">
                <h3 className="text-xl font-semibold text-background">
                  Circle Kecil & Akrab
                </h3>

                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto"></div>

                <p className="text-background ">
                  1 kelas hanya 4-6 orang, dibisah cewek/cowok biar lebih nyaman
                  sharing apapun ;)
                </p>
              </div>

              <div className="text-center space-y-6 max-w-xs mx-auto">
                <h3 className="text-xl font-semibold text-background">
                  Vibes Asik & Supportif
                </h3>

                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto"></div>

                <p className="text-background">
                  Berasa nongkrong sambil belajar, tanpa takut di-judge. Di sini
                  semua saling support.
                </p>
              </div>

              <div className="text-center space-y-6 max-w-xs mx-auto">
                <h3 className="text-xl font-semibold text-background">
                  Pembelajaran Progresif & Variatif
                </h3>

                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto"></div>

                <p className="text-background ">
                  Kurikulum yang di desain dengan rubrik CEFR, sekaligus
                  ngembangin skill komunikasimu, bikin tiap sesi selalu ada
                  progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
