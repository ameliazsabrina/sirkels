"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuBadgeCheck, LuBadgeMinus } from "react-icons/lu";
import ScrollReveal from "@/components/ui/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

export const Pricing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      const headerTitle = headerRef.current?.querySelector("h2");
      const headerParagraphs = headerRef.current?.querySelectorAll("p");

      if (headerTitle) {
        headerTimeline.fromTo(
          headerTitle,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
        );
      }

      if (headerParagraphs && headerParagraphs.length > 0) {
        headerTimeline.fromTo(
          headerParagraphs,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power2.out" },
          "-=0.4"
        );
      }

      const cards = cardsRef.current?.querySelectorAll(".pricing-card");
      if (cards) {
        gsap.fromTo(
          cards,
          {
            scale: 0.8,
            opacity: 0,
            rotationY: -15,
            transformOrigin: "center center",
          },
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Add hover animations for cards
        cards.forEach((card) => {
          const element = card as HTMLElement;
          element.addEventListener("mouseenter", () => {
            gsap.to(element, {
              scale: 1.05,
              y: -10,
              duration: 0.3,
              ease: "power2.out",
            });
          });
          element.addEventListener("mouseleave", () => {
            gsap.to(element, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary">
      <div className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="text-center lg:text-left">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={1}
              blurStrength={3}
              containerClassName="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight max-w-sm mx-auto lg:mx-0"
            >
              Worth It Gasih? Kan Ada yang Gratis
            </ScrollReveal>
            <p className="text-lg text-background mb-8">
              Opsi yang kamu punya untuk ngembangin skill speaking bahasa
              Inggris kamu
            </p>
          </div>
          <div className="flex items-center text-center lg:text-left">
            <p className="text-md md:text-lg leading-relaxed text-background">
              Komunitas gratis biasanya cuma latihan santai. Di Sirkels, kamu
              dapet 6 minggu program terstruktur, circle kecil 4-6 orang, plus
              feedback personal. Jadi bukan cuma practice, tapi juga mindset,
              skill, dan pede buat ngomong di dunia nyata
            </p>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-gray-200 rounded-2xl p-6 space-y-4 ">
            <h3 className="text-xl font-semibold text-text">
              Komunitas Gratis
            </h3>
            <div className="text-center py-4">
              <span className="text-4xl font-bold text-gray-600">0</span>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-700">Pros:</p>
              <p className="text-gray-600 flex items-center gap-2">
                <LuBadgeCheck className="w-4 h-4 flex-shrink-0 mt-0.5" /> Bebas,
                santai
              </p>

              <p className="text-sm font-semibold text-gray-700 pt-2">Cons:</p>
              <p className="text-gray-600 flex items-center gap-2">
                <LuBadgeMinus className="w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                Belajar ga ke struktur
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <LuBadgeMinus className="w-4 h-4 flex-shrink-0 mt-0.5" /> Minim
                feedback untuk ningkatin pedemu
              </p>
            </div>
          </div>

          <div className="bg-gray-200 rounded-2xl p-6 space-y-4 ">
            <h3 className="text-xl font-semibold text-text">Kelas Reguler</h3>
            <div className="text-center py-4">
              <span className="text-2xl font-bold text-gray-600">
                150k-500k
              </span>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-700">Pros:</p>
              <p className="text-gray-600 flex items-center gap-2">
                <LuBadgeCheck className="w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                Terjadwal, ada guru
              </p>

              <p className="text-sm font-semibold text-gray-700 pt-2">Cons:</p>
              <p className="text-gray-600 flex items-center gap-2">
                <LuBadgeMinus className="w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                Peserta banyak, kurang fokus ke kamu
              </p>
            </div>
          </div>

          <div className="bg-accent border-2 border-[#490DC6] rounded-2xl p-6 space-y-4 text-background hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-background">Sirkels</h3>
            <div className="text-center py-4">
              <span className="text-3xl font-bold text-secondary">350k</span>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-background">Pros:</p>
              <p className="text-background/90 flex items-center gap-2">
                <LuBadgeCheck className="w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                Terjadwal, ada guru
              </p>

              <p className="text-sm font-semibold text-background pt-2">
                Cons:
              </p>
              <p className="text-background/90 flex items-center gap-2">
                <LuBadgeMinus className="w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                Peserta banyak, kurang fokus ke kamu
              </p>
            </div>
          </div>

          <div className="bg-gray-200 rounded-2xl p-6 space-y-4 ">
            <h3 className="text-xl font-semibold text-text">Kelas Privat</h3>
            <div className="text-center py-4">
              <span className="text-2xl font-bold text-gray-600">
                800k - 2.5jt
              </span>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-700">Pros:</p>
              <p className="text-gray-600 flex items-center gap-2">
                <LuBadgeCheck className="w-4 h-4 flex-shrink-0 mt-0.5" /> Fokus
                1:1, Personal
              </p>

              <p className="text-sm font-semibold pt-2 text-gray-700">Cons:</p>
              <p className="text-gray-600 flex items-center gap-2">
                <LuBadgeMinus className="w-4 h-4 flex-shrink-0 mt-0.5" /> Mahal
                dan bisa kerasa kaku kalau ga cocok sama gurunya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
