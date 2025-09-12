"use client";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Market } from "@/components/market";
import { Difference } from "@/components/difference";
import { Seo } from "@/components/seo";
import { Activity } from "@/components/activity";
import { Pricing } from "@/components/pricing";
import { Testimonial } from "@/components/testimonial";
import { Cta } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { useEffect } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: false,
      smoothTouch: 0.1,
    });

    return () => {
      smoother?.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Navbar />
        <Hero />
        <About />

        <Market />
        <Difference />

        <Seo />
        <Activity />
        <Pricing />
        <Testimonial />
        <Cta />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
