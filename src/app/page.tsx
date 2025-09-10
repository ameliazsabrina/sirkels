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

export default function Home() {
  return (
    <>
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
    </>
  );
}
