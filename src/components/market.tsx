"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Market = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });

      gsap.fromTo(
        sectionRef.current,
        { y: 100, opacity: 0 },
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
    <section
      ref={sectionRef}
      className="min-h-fit bg-primary overflow-hidden justify-center pin-panel"
    >
      <div className="py-16 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-8 leading-tight">
            Cocok buat kamu yang
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-secondary leading-tight">
              Pelajar/Pekerja <br />
              Gen-Z
            </h3>
            <p className="text-background leading-relaxed">
              Tau basic english, nggak punya banyak waktu tapi tetap pengen
              belajar English dengan cara fun dan fleksibel.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-secondary leading-tight">
              Budget pas-pasan &<br />
              Ga cocok kelas rame
            </h3>
            <p className="text-background leading-relaxed">
              Nggak mau kelas privat yang mahal, tapi pengen tetap intensif dan
              nggak ribet kayak kelas reguler.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-secondary leading-tight">
              Pengen <br /> lebih pede
            </h3>
            <p className="text-background leading-relaxed">
              Ngomong dan lancar ngobrol dalam bahasa Inggris, tanpa takut salah
              atau di-judge
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
