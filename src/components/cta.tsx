import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const Cta = () => {
  return (
    <section className="bg-accent">
      <div className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="mb-16">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={1}
            blurStrength={3}
            containerClassName="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight"
          >
            Kamu bukannya gabisa, Kamu cuman butuh seseorang yang percaya kamu
            bisa
          </ScrollReveal>
          <p className="text-lg text-background italic">dan kita percaya ;)</p>
        </div>

        <div className="mb-12">
          <p className="text-lg md:text-xl text-background leading-relaxed max-w-xl mx-auto">
            Batch #2 Open:{" "}
            <span className="font-semibold">12 September - 21 September</span>
          </p>
          <p className="text-lg md:text-xl text-background leading-relaxed max-w-xl mx-auto">
            Only for 18 people!
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="https://wa.me/6281234567890?text=Hi%20Sirkels%20Team%2C%0A%0AI%27m%20interested%20in%20joining%20the%20English%20Circle%20program.%20Could%20you%20please%20provide%20me%20with%20more%20information%20about%3A%0A%0A-%20Available%20schedules%20for%20the%20next%20batch%0A-%20Registration%20process%0A-%20Payment%20methods%0A%0AThank%20you%21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-secondary rounded-full px-12 py-6 hover:scale-105 transition-all duration-300">
              <span className="text-lg font-semibold text-text">
                Gabung Sekarang
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
