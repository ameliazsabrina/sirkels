"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false);
    setIsVisible(true);
    
    // Get the target section
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      
      const targetElement = document.querySelector(href);
      if (targetElement) {
        // Try to use ScrollSmoother if available, fallback to native scrollIntoView
        const smoother = ScrollSmoother.get();
        if (smoother) {
          smoother.scrollTo(targetElement, true, "top top+=100");
        } else {
          // Fallback to native smooth scroll
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
        
        // Update URL hash
        window.history.pushState(null, '', href);
        
        // Reset scroll position tracking after navigation
        setTimeout(() => {
          setScrollY(window.scrollY);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      clearTimeout(timeoutId);

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > scrollY + 15) {
        // Scrolling down significantly
        setIsVisible(false);
      } else if (scrollY > currentScrollY + 15) {
        // Scrolling up significantly
        setIsVisible(true);
      }

      // Update scroll position with a small delay to avoid rapid changes
      timeoutId = setTimeout(() => {
        setScrollY(currentScrollY);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [scrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent pt-4 md:pt-4 px-4 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center px-2 md:px-4 mt-8 md:mt-0 max-w-6xl mx-auto">
        <Link href="/" className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-20 h-auto md:w-28 lg:w-32"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-primary relative pb-1 group transition-colors duration-200"
            onClick={handleAnchorClick}
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a
            href="#program"
            className="text-primary relative pb-1 group transition-colors duration-200"
            onClick={handleAnchorClick}
          >
            Program
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a
            href="#price"
            className="text-primary relative pb-1 group transition-colors duration-200"
            onClick={handleAnchorClick}
          >
            Price
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a
            href="#testimoni"
            className="text-primary relative pb-1 group transition-colors duration-200"
            onClick={handleAnchorClick}
          >
            Testimoni
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a
            href="#faqs"
            className="text-primary relative pb-1 group transition-colors duration-200"
            onClick={handleAnchorClick}
          >
            FAQs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-1">
            <div
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background rounded-lg backdrop-blur-sm transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 py-4 space-y-4 items-center text-center">
          <a
            href="#about"
            className="block text-primary relative pb-1 group transition-colors duration-200"
            onClick={handleAnchorClick}
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a
            href="#program"
            className="block text-primary relative pb-1 group transition-colors duration-200"
            onClick={handleAnchorClick}
          >
            Program
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a
            href="#price"
            className="block text-primary relative pb-1 group transition-colors duration-200"
            onClick={handleAnchorClick}
          >
            Price
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a
            href="#testimoni"
            className="block text-primary relative pb-1 group transition-colors duration-200"
            onClick={handleAnchorClick}
          >
            Testimoni
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a
            href="#faqs"
            className="block text-primary relative pb-1 group transition-colors duration-200"
            onClick={handleAnchorClick}
          >
            FAQs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
        </div>
      </div>
    </nav>
  );
};
