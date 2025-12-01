"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import Image from "next/image";

export function Navbar() {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 9999,
          backdropFilter: isScrolled ? "blur(20px)" : "blur(10px)",
          background: isScrolled 
            ? "rgba(255, 255, 255, 0.01)" 
            : "transparent",
          borderBottom: isScrolled 
            ? "1px solid rgba(255, 255, 255, 0.08)" 
            : "1px solid transparent",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          contain: "none",
        }}
      >
        {/* Animated Bottom Glow Line */}
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)',
            opacity: isScrolled ? 1 : 0,
            transition: 'opacity 0.5s ease',
            zIndex: 2
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: '-50%',
            width: '50%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
            animation: 'scanline 3s linear infinite',
            opacity: 0.5
          }} />
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Image
              src="/logo.svg"
              alt="Ui2v"
              width={32}
              height={32}
              style={{ display: "block" }}
            />
            <span
              className="text-gradient"
              style={{
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Ui2v
            </span>
            <span
              className="text-glow-accent"
              style={{
                fontSize: "10px",
                fontWeight: 600,
                padding: "2px 6px",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "6px",
                color: "rgba(255, 255, 255, 0.8)",
                letterSpacing: "0.02em",
              }}
            >
              BETA
            </span>
          </a>

          {/* Right Side */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <a
              href="/faq"
              style={{
                padding: "10px 20px",
                fontSize: "15px",
                fontWeight: 600,
                color: "rgba(255, 255, 255, 0.85)",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(139, 92, 246, 0.2)",
                borderRadius: "10px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(139, 92, 246, 0.15)";
                e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.4)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.2)";
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)";
              }}
            >
              FAQ
            </a>

            <a
              href="https://new.ui2v.com/download"
              style={{
                padding: "10px 28px",
                fontSize: "15px",
                fontWeight: 700,
                color: "#fff",
                background: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
                borderRadius: "10px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 16px rgba(139, 92, 246, 0.4)",
                position: "relative",
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(139, 92, 246, 0.6)";
                e.currentTarget.style.zIndex = "100";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(139, 92, 246, 0.4)";
                e.currentTarget.style.zIndex = "1";
              }}
            >
              {language === "zh" ? "立即下载" : "Download"}
            </a>

            <LanguageToggle />
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: "60px" }} />

      <style jsx global>{`
        nav {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          z-index: 9999 !important;
          transform: none !important;
        }
        
        @media (max-width: 640px) {
          nav > div {
            padding: 12px 16px !important;
          }
        }
        
        @keyframes scanline {
          0% { left: -50%; }
          100% { left: 150%; }
        }
      `}</style>
    </>
  );
}
