import React from "react";
import Image from "next/image";
import SplitText from "./ui/split-text";

export const Hero = () => {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/gradient.svg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 flex min-h-[60vh] flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <h1 className="mb-4 text-5xl md:text-7xl font-semibold text-black leading-tight">
            <SplitText
              text="Ga lagi takut di-judge dan ga pede ngomong bahasa inggris"
              className="font-semibold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            {/* Ga lagi <br />
            takut <span className="italic">di-judge</span> dan ga pede ngomong
            bahasa inggris */}
          </h1>
        </div>
      </div>
    </section>
  );
};
