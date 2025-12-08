"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HiMenu, HiX } from "react-icons/hi";

export function Navbar() {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle smooth scroll for anchor links (starting with #)
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-[9999]",
          "transition-all duration-300 ease-out",
          isScrolled
            ? "bg-white/[0.01] backdrop-blur-xl border-b border-white/[0.08]"
            : "bg-transparent backdrop-blur-md border-b border-transparent"
        )}
      >
        {/* Animated Bottom Glow Line */}
        <div
          className={cn(
            "absolute bottom-0 left-0 w-full h-px",
            "bg-gradient-to-r from-transparent via-primary-500/50 to-transparent",
            "transition-opacity duration-500",
            isScrolled ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="absolute top-0 -left-1/2 w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-50 animate-[scanline_3s_linear_infinite]" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-6 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleSmoothScroll(e, "/")}
            className="flex items-center gap-2.5 no-underline transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/logo.svg"
              alt="Ui2v"
              width={32}
              height={32}
              className="block"
            />
            <span className="text-gradient text-xl font-bold tracking-tight">
              Ui2v
            </span>
            <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-white/10 border border-white/10 rounded-md text-white/80 tracking-wide">
              BETA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-3 items-center">
            <a
              href="/faq"
              onClick={(e) => handleSmoothScroll(e, "/faq")}
              className={cn(
                "px-5 py-2.5 text-[15px] font-semibold",
                "text-white/85 bg-white/5 border border-primary-500/20 rounded-lg",
                "no-underline transition-all duration-300 backdrop-blur-md",
                "hover:bg-primary-500/15 hover:border-primary-500/40 hover:text-white"
              )}
            >
              FAQ
            </a>

            <a
              href="https://new.ui2v.com/download"
              className={cn(
                "px-7 py-2.5 text-[15px] font-bold text-white",
                "bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg",
                "no-underline transition-all duration-300",
                "shadow-[0_4px_16px_rgba(192,132,252,0.4)]",
                "hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(192,132,252,0.6)]"
              )}
            >
              {language === "zh" ? "立即下载" : "Download"}
            </a>

            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 text-white/85 transition-colors duration-300",
              "hover:text-white hover:bg-white/5 rounded-lg"
            )}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            "bg-neutral-950/95 backdrop-blur-xl border-t border-white/5",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            <a
              href="/faq"
              onClick={(e) => handleSmoothScroll(e, "/faq")}
              className={cn(
                "px-5 py-3 text-[15px] font-semibold text-center",
                "text-white/85 bg-white/5 border border-primary-500/20 rounded-lg",
                "no-underline transition-all duration-300",
                "hover:bg-primary-500/15 hover:border-primary-500/40 hover:text-white"
              )}
            >
              FAQ
            </a>

            <a
              href="https://new.ui2v.com/download"
              className={cn(
                "px-7 py-3 text-[15px] font-bold text-white text-center",
                "bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg",
                "no-underline transition-all duration-300",
                "shadow-[0_4px_16px_rgba(192,132,252,0.4)]"
              )}
            >
              {language === "zh" ? "立即下载" : "Download"}
            </a>

            <div className="flex justify-center pt-2">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-[60px]" />

      <style jsx global>{`
        @keyframes scanline {
          0% {
            left: -50%;
          }
          100% {
            left: 150%;
          }
        }
      `}</style>
    </>
  );
}
