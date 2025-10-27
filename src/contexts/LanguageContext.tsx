"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "zh" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  zh: {
    // Hero Section
    "hero.badge": "公测开放中",
    "hero.title": "AI 动画创作，从未如此简单",
    "hero.subtitle": "无需专业技能，几分钟创作专业级动画视频",
    "hero.description": "Ui2v 是一款完全本地运行的 AI 动画设计工具。用自然语言描述想法，AI 即刻生成精美动画。快速、安全、易用。",
    "hero.download": "下载 Windows 公测版",
    "hero.platform": "Windows 10/11",
    "hero.mac_coming": "macOS 版即将推出",
    "hero.local": "本地运行",
    "hero.privacy": "数据安全",
    "hero.ai": "AI 驱动",

    // Features
    "features.title": "三大核心优势",
    "features.subtitle": "让动画创作回归简单",
    "features.ai.title": "AI 智能创作",
    "features.ai.desc": "自然语言描述想法，AI 自动生成专业动画。无需学习复杂软件，3分钟快速上手。",
    "features.local.title": "100% 本地运行",
    "features.local.desc": "所有处理在本地完成，不上传云端。保护数据隐私，响应速度快，离线也能用。",
    "features.easy.title": "简单易用",
    "features.easy.desc": "直观的界面设计，强大的功能。支持多种图层类型和渲染引擎，满足各种创作需求。",

    // Capabilities
    "capabilities.title": "强大而易用的功能",
    "capabilities.subtitle": "专业工具，简单操作",
    "capabilities.layers": "多图层系统",
    "capabilities.layers.desc": "文本、图片、视频、3D、粒子等多种图层类型",
    "capabilities.timeline": "可视化时间轴",
    "capabilities.timeline.desc": "关键帧动画、缓动函数、精确控制每一帧",
    "capabilities.ai": "AI 智能助手",
    "capabilities.ai.desc": "智能推荐动画方案、自动优化、自然语言创作",
    "capabilities.export": "多格式导出",
    "capabilities.export.desc": "支持 MP4、WebM，自定义分辨率和帧率",
    "capabilities.engines": "多渲染引擎",
    "capabilities.engines.desc": "Three.js、Konva、Lottie、ECharts 等",
    "capabilities.providers": "多 AI 平台",
    "capabilities.providers.desc": "OpenAI、Claude、Gemini、本地模型等 15+ 平台",

    // Use Cases
    "usecases.title": "适合每一位创作者",
    "usecases.creator": "视频创作者",
    "usecases.creator.desc": "快速制作片头、转场、字幕动画",
    "usecases.designer": "UI 设计师",
    "usecases.designer.desc": "动效原型、交互演示",
    "usecases.marketer": "营销人员",
    "usecases.marketer.desc": "产品介绍、数据可视化",
    "usecases.educator": "教育工作者",
    "usecases.educator.desc": "教学动画、课件制作",

    // CTA
    "cta.title": "立即开始创作",

    "cta.download": "下载 Windows 公测版",
    "cta.size": "安装包大小约 150MB",
    "cta.requirement": "需要 Windows 10 及以上版本",
    "cta.mac": "💡 macOS 版正式版推出时同步发布",
    "cta.features.local": "本地运行",
    "cta.features.fast": "快速响应",
    "cta.features.ai": "AI 驱动",
    "cta.features.easy": "简单易用",

    // Footer
    "footer.platform": "当前支持平台",
    "footer.windows": "Windows 10/11 (公测中)",
    "footer.mac": "macOS (即将推出)",
    "footer.copyright": "© 2025 Ui2v. 保留所有权利",
  },
  en: {
    // Hero Section
    "hero.badge": "Public Beta",
    "hero.title": "AI Animation Made Simple",
    "hero.subtitle": "Create professional animations in minutes, no skills required",
    "hero.description": "Ui2v is a fully local AI animation tool. Describe your idea in natural language, AI generates stunning animations instantly. Fast, secure, and easy to use.",
    "hero.download": "Download Windows Beta",
    "hero.platform": "Windows 10/11",
    "hero.mac_coming": "macOS Coming Soon",
    "hero.local": "Local Execution",
    "hero.privacy": "Data Security",
    "hero.ai": "AI-Powered",

    // Features
    "features.title": "Three Core Advantages",
    "features.subtitle": "Animation creation made simple",
    "features.ai.title": "AI-Powered Creation",
    "features.ai.desc": "Describe in natural language, AI generates professional animations. No complex software learning, master in 3 minutes.",
    "features.local.title": "100% Local Execution",
    "features.local.desc": "All processing on your computer, no cloud uploads. Privacy protected, fast response, works offline.",
    "features.easy.title": "Simple & Easy",
    "features.easy.desc": "Intuitive interface design with powerful features. Supports multiple layer types and rendering engines for all creative needs.",

    // Capabilities
    "capabilities.title": "Powerful Yet Easy Features",
    "capabilities.subtitle": "Professional tools, simple operation",
    "capabilities.layers": "Multi-Layer System",
    "capabilities.layers.desc": "Text, images, videos, 3D, particles and more",
    "capabilities.timeline": "Visual Timeline",
    "capabilities.timeline.desc": "Keyframe animation, easing functions, frame-perfect control",
    "capabilities.ai": "AI Assistant",
    "capabilities.ai.desc": "Smart suggestions, auto-optimization, natural language creation",
    "capabilities.export": "Multi-Format Export",
    "capabilities.export.desc": "MP4, WebM with custom resolution and framerate",
    "capabilities.engines": "Multiple Render Engines",
    "capabilities.engines.desc": "Three.js, Konva, Lottie, ECharts and more",
    "capabilities.providers": "Multiple AI Platforms",
    "capabilities.providers.desc": "OpenAI, Claude, Gemini, local models, 15+ platforms",

    // Use Cases
    "usecases.title": "For Every Creator",
    "usecases.creator": "Video Creators",
    "usecases.creator.desc": "Quick intros, transitions, subtitle animations",
    "usecases.designer": "UI Designers",
    "usecases.designer.desc": "Motion prototypes, interaction demos",
    "usecases.marketer": "Marketers",
    "usecases.marketer.desc": "Product intros, data visualization",
    "usecases.educator": "Educators",
    "usecases.educator.desc": "Educational animations, courseware",

    // CTA
    "cta.title": "Start Creating Now",
    "cta.download": "Download Windows Beta",
    "cta.size": "Installer size ~150MB",
    "cta.requirement": "Requires Windows 10 or later",
    "cta.mac": "💡 macOS version launches with official release",
    "cta.features.local": "Local Execution",
    "cta.features.fast": "Fast Response",
    "cta.features.ai": "AI-Powered",
    "cta.features.easy": "Easy to Use",

    // Footer
    "footer.platform": "Currently Supported",
    "footer.windows": "Windows 10/11 (Beta)",
    "footer.mac": "macOS (Coming Soon)",
    "footer.copyright": "© 2025 Ui2v. All rights reserved.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("zh");

  useEffect(() => {
    // Load language from localStorage
    const savedLang = localStorage.getItem("ui2v-language") as Language;
    if (savedLang && (savedLang === "zh" || savedLang === "en")) {
      setLanguageState(savedLang);
    } else {
      // Auto-detect browser/system language
      const browserLang = navigator.language.toLowerCase();
      
      // Check if language contains 'zh' (Chinese)
      if (browserLang.includes("zh")) {
        setLanguageState("zh");
        localStorage.setItem("ui2v-language", "zh");
      } else {
        // Default to English for all other languages
        setLanguageState("en");
        localStorage.setItem("ui2v-language", "en");
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("ui2v-language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
