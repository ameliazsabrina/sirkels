"use client";
import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const Difference = () => {
  return (
    <section className="min-h-fit bg-accent">
      <div className="bg-accent overflow-hidden justify-center">
        <div className="bg-accent">
          <div className="py-16 px-4 max-w-5xl mx-auto">
            <div className="text-center">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={1}
                blurStrength={3}
                containerClassName="text-4xl md:text-5xl font-bold text-background mb-16"
              >
                Apa Yang Beda di Sirkels?
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-6 max-w-xs mx-auto">
                <h3 className="text-xl font-semibold text-background">
                  Circle Kecil & Akrab
                </h3>

                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto">
                  <Image
                    src="/1.jpg"
                    alt="Circle Small"
                    width={100}
                    height={100}
                    className="rounded-lg object-cover w-32 h-32"
                  />
                </div>

                <p className="text-background ">
                  1 kelas hanya 4–6 orang, dipisah cewek/cowok biar lebih nyaman
                  sharing apapun ;)
                </p>
              </div>

              <div className="text-center space-y-6 max-w-xs mx-auto">
                <h3 className="text-xl font-semibold text-background">
                  Vibes & Speak
                </h3>

                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto">
                  <Image
                    src="/2.jpg"
                    alt="Circle Small"
                    width={100}
                    height={100}
                    className="rounded-lg object-cover w-32 h-32"
                  />
                </div>

                <p className="text-background">
                  Mau life update, ngomongin yang lagi trend, atau kamu punya
                  cerita, we have the session.
                </p>
              </div>

              <div className="text-center space-y-6 max-w-xs mx-auto">
                <h3 className="text-xl font-semibold text-background">
                  Belajar skill komunikasi in real life
                </h3>

                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto">
                  <Image
                    src="/3.jpg"
                    alt="Circle Small"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                </div>

                <p className="text-background ">
                  CEFR standard, real life communication (presentation, active
                  listening, handling conflict , etc)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
