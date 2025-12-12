"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = language === "zh" ? "en" : "zh";
    setLanguage(newLang);
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={toggleLanguage}
        onMouseEnter={(e) => {
          setIsOpen(true);
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
        }}
        onMouseLeave={(e) => {
          setIsOpen(false);
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
        }}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "8px",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          background: "rgba(255, 255, 255, 0.05)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s ease",
          position: "relative",
        }}
        aria-label="Toggle language"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      </button>

      {/* Tooltip */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(15, 15, 15, 0.95)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "6px",
            padding: "6px 12px",
            whiteSpace: "nowrap",
            fontSize: "13px",
            color: "rgba(255, 255, 255, 0.9)",
            pointerEvents: "none",
            zIndex: 1001,
            backdropFilter: "blur(10px)",
          }}
        >
          {language === "zh" ? "切换到 English" : "Switch to 中文"}
        </div>
      )}
    </div>
  );
}

