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
          zIndex: 1000,
          backdropFilter: isScrolled ? "blur(20px)" : "blur(10px)",
          background: isScrolled 
            ? "rgba(10, 13, 20, 0.9)" 
            : "rgba(10, 13, 20, 0.6)",
          borderBottom: isScrolled 
            ? "1px solid rgba(139, 92, 246, 0.2)" 
            : "1px solid transparent",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
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
              style={{
                fontSize: "22px",
                fontWeight: 800,
                background: "linear-gradient(135deg, #fff 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.5px",
              }}
            >
              Ui2v
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                padding: "2px 8px",
                background: "rgba(139, 92, 246, 0.2)",
                border: "1px solid rgba(139, 92, 246, 0.4)",
                borderRadius: "12px",
                color: "#a78bfa",
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
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(139, 92, 246, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(139, 92, 246, 0.4)";
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

      <style jsx>{`
        @media (max-width: 640px) {
          nav > div {
            padding: 12px 16px !important;
          }
        }
      `}</style>
    </>
  );
}
