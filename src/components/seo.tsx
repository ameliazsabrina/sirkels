import React from "react";
import ScrollVelocity from "./ui/scroll-velocity";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const Seo = () => {
  return (
    <section className="bg-accent py-16 text-secondary ">
      <ScrollVelocity texts={["Make English Fun Again"]} />
    </section>
  );
};
