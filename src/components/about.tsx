"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top bottom-=100px",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom-=50px",
            end: "bottom center",
            toggleActions: "play none none reverse",
            onEnter: () => {
              // Start video after 3 second delay when it enters viewport
              setTimeout(() => {
                if (videoRef.current) {
                  videoRef.current.play().catch((error) => {
                    console.log("Video autoplay failed:", error);
                  });
                }
              }, 5000);
            },
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-8">
      <div className="pb-12 px-6 max-w-5xl mx-auto h-fit flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center justify-between ">
          <div ref={textRef} className="space-y-2 text-center lg:text-left">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800">
              Sirkels bukan cuma soal belajar Inggris.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-800">
              Ini sirkel yang isinya orang-orang yang sama-sama pernah ngerasain
              grogi, malu, atau takut salah.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-800">
              Di sini kita latihan bareng, saling support, dan pelan-pelan
              tumbuh jadi lebih percaya diri.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <span className="inline-block bg-secondary text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                No Judgement – Intimate – Fun
              </span>
            </div>
          </div>
          <div ref={imageRef} className="flex justify-center lg:justify-end">
            {/* <Image
              src="/about.png"
              alt="About"
              width={500}
              height={500}
              className="bg-gray-200 rounded-lg h-80 w-80 object-cover"
            /> */}
            <video
              ref={videoRef}
              width="500"
              height="500"
              controls
              preload="none"
              className="rounded-lg h-80 w-80 mt-8"
              muted
            >
              <source src="/video-testimoni-rara.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
