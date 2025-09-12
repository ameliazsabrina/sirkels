import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const Footer = () => {
  return (
    <footer className="bg-accent">
      <div className="py-20 px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="flex justify-between items-start">
            <div className="max-w-2xl">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={1}
                blurStrength={3}
                containerClassName="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-8 leading-tight"
              >
                Great things start with a talk.
              </ScrollReveal>
              <a
                href="mailto:sirkels.contact@gmail.com?subject=Inquiry%20about%20Sirkels%20English%20Circle&body=Hi%20Sirkels%20Team%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20your%20English%20learning%20circles.%20Could%20you%20please%20provide%20me%20with%20more%20information%20about%3A%0A%0A-%20Class%20schedules%20and%20availability%0A-%20Pricing%20and%20packages%0A-%20How%20to%20get%20started%0A%0AThank%20you%21%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D"
                className="text-xl md:text-3xl text-background font-medium hover:text-secondary transition-colors decoration-secondary decoration-2 "
              >
                sirkels.contact@gmail.com
              </a>
            </div>
            <Link href="https://wa.me/6281234567890">
              <button className="bg-transparent border-2 border-background text-background md:px-8 px-4 md:py-3 py-2 rounded-full whitespace-nowrap  font-medium hover:bg-background hover:text-accent transition-colors text-underline">
                Contact us
              </button>
            </Link>
          </div>
        </div>

        <div className="border-t border-background/20 mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Image src="/duotone.png" alt="Logo" width={100} height={100} />
            </div>
          </div>

          <div>
            <h4 className="text-background text-lg font-medium mb-4">Email</h4>
            <p className="text-background">sirkels.contact@gmail.com</p>
          </div>

          <div>
            <h4 className="text-background text-lg font-medium mb-4">
              Socials
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <a
                  href="https://www.instagram.com/sirkels_id/"
                  className="text-background hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <FaInstagram className="w-4 h-4 text-background" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pt-16 border-t border-background/20 mt-16">
          <p className="text-background/70 text-sm text-center">
            Copyright © 2025 Sirkels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
