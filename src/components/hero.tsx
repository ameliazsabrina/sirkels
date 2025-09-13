import React from "react";
import SplitText from "./ui/split-text";
import PixelBlast from "@/components/ui/PixelBlast";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative  w-full overflow-hidden bg-hero py-16">
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="square"
          pixelSize={2}
          color="#EEE6FF"
          patternScale={2.75}
          patternDensity={0.65}
          pixelSizeJitter={0.4}
          enableRipples
          rippleSpeed={0.5}
          rippleThickness={0.15}
          rippleIntensityScale={7}
          liquid={false}
          speed={0.8}
          edgeFade={0.4}
          transparent={true}
        />
      </div>
      <div className="relative z-10 flex justify-center items-center mt-16 ">
        <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <h1 className="mb-4 text-5xl md:text-7xl font-semibold text-black leading-tight">
            <SplitText
              text="Ga lagi takut di-judge dan ga pede ngomong bahasa inggris"
              className="font-semibold text-center overflow-visible"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              timeout={4500}
            />
            <a
              href="https://wa.me/6285702064758?text=Hi%20Sirkels%20Team%2C%0A%0AI%27m%20interested%20in%20booking%20a%20session%20for%20the%20English%20Circle%20program.%20Could%20you%20please%20help%20me%20with%20the%20registration%20process%3F%0A%0AThank%20you%21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="font-semibold text-sm md:text-xl py-4 md:py-8 px-4 md:px-6 w-36 h-auto md:w-58  md:h-16 mt-8 md:mt-4">
                Coba Kelas Gratis
                <MessageCircle className="!w-4 !h-auto md:!w-6 md:!h-6 ml-1" />
              </Button>
            </a>
          </h1>
        </div>
      </div>
    </section>
  );
};
