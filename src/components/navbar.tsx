"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent pt-8 px-4 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center px-4">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
        </Link>
        <div className="flex items-center gap-4">
          <Button className="font-semibold text-xl py-6  w-36">
            Join Now{" "}
            <ArrowUpRight
              className="!w-6 !h-6"
              style={{ width: "24px !important", height: "24px !important" }}
            />
          </Button>
        </div>
      </div>
    </nav>
  );
};
