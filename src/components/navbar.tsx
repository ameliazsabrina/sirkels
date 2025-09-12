"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > scrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < scrollY) {
        setIsVisible(true);
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent pt-4 md:pt-8 px-4 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-center items-center px-2 md:px-4 mt-8 md:mt-0">
        <Link href="/" className="flex-1 flex justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-20 h-auto md:w-28 lg:w-32"
          />
        </Link>
      </div>
    </nav>
  );
};
