import React from "react";

export const Cta = () => {
  return (
    <section className="bg-accent">
      <div className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
            Kamu bukannya gabisa, Kamu cuman butuh seseorang yang percaya kamu
            bisa
          </h2>
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
          <button className="bg-secondary rounded-full px-12 py-6 hover:scale-105 transition-all duration-300">
            <span className="text-lg font-semibold text-text">
              Gabung Sekarang
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
