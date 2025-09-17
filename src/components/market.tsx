"use client";
import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const Market = () => {
  return (
    <section className="min-h-fit bg-primary overflow-hidden justify-center">
      <div className="py-16 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={1}
            blurStrength={3}
            containerClassName="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-8 leading-tight"
          >
            Cocok Buat Kamu Yang
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-secondary leading-tight">
              Pelajar/Pekerja <br />
              Gen-Z
            </h3>
            <p className="text-background leading-relaxed">
              Tau basic english, nggak punya banyak waktu tapi tetap pengen
              belajar English dengan cara fun dan fleksibel.
            </p>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-secondary leading-tight">
              Budget pas-pasan &<br />
              Ga cocok kelas rame
            </h3>
            <p className="text-background leading-relaxed">
              Nggak mau kelas privat yang mahal, tapi pengen tetap intensif dan
              nggak ribet kayak kelas reguler.
            </p>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-secondary leading-tight">
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
