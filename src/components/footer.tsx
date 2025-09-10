import React from "react";
import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-accent">
      <div className="py-20 px-6 max-w-5xl mx-auto">
        {/* Top Section */}
        <div className="mb-16">
          <div className="flex justify-between items-start">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-8 leading-tight">
                Great things start with a talk.
              </h2>
              <p className="text-2xl md:text-3xl text-background font-medium">
                hello@sirkels.com
              </p>
            </div>

            <button className="bg-transparent border-2 border-background text-background px-8 py-3 rounded-full font-medium hover:bg-background hover:text-accent transition-colors">
              Contact us
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 mb-16"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Image src="/duotone.png" alt="Logo" width={100} height={100} />
            </div>
          </div>

          {/* Email */}
          <div>
            <h4 className="text-background text-lg font-medium mb-4">Email</h4>
            <p className="text-background">hello@sirkels.com</p>
          </div>

          {/* Socials */}
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
              <div className="flex items-center space-x-2">
                <a
                  href="#"
                  className="text-background hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <FaTiktok className="w-4 h-4 text-background" />
                  Tiktok
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center pt-16 border-t border-background/20 mt-16">
          <p className="text-background/70 text-sm text-center">
            Copyright © 2025 Sirkels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
