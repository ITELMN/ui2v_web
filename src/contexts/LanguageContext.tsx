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
    // Site Meta
    "site.title": "Ui2v - 本地 AI 动画设计工具",
    "site.description": "Ui2v 是一款完全本地运行的 AI 动画设计工具。用自然语言描述想法，AI 即刻生成精美动画。快速、安全、易用。",

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

    // FAQ
    "faq.title": "常见问题",
    "faq.subtitle": "快速找到您需要的答案，了解 Ui2v 的强大功能",
    "faq.back": "返回首页",
    "faq.category.general": "基础信息",
    "faq.category.usage": "使用指南",
    "faq.category.technical": "技术细节",
    
    "faq.q1": "什么是 Ui2v？",
    "faq.a1": "Ui2v 是一款完全本地运行的 AI 动画设计工具。它让任何人都能用自然语言描述创意想法，AI 就能自动生成专业的动画视频。无需学习复杂的软件，3分钟即可上手创作。所有处理都在您的电脑本地完成，保护数据隐私，响应速度快，离线也能使用。",
    
    "faq.q2": "Ui2v 是免费的吗？",
    "faq.a2": "Ui2v 目前处于公测阶段，完全免费使用。公测期间您可以体验所有核心功能，包括多图层编辑、时间轴控制、多种渲染引擎等。如果使用 AI 功能，需要您自己的 AI API Key。未来正式版的定价策略会根据用户反馈制定。",
    
    "faq.q3": "支持哪些平台？",
    "faq.a3": "目前 Ui2v 公测版支持 Windows 10 和 Windows 11 系统。macOS 版本正在开发中，将在正式版发布时同步推出。我们致力于让更多平台的用户都能体验到 AI 动画创作的便利。",
    
    "faq.q4": "如何开始使用 Ui2v？",
    "faq.a4": "非常简单！首先从官网下载 Windows 安装包，安装后打开软件。您可以从空白项目开始，手动添加图层和动画；也可以点击 AI 助手，用自然语言描述您的想法（如'制作一个标题从左滑入的动画'），AI 会自动帮您生成。软件内置了详细的教程和示例项目，帮助您快速上手。",
    
    "faq.q5": "可以导出哪些格式的视频？",
    "faq.a5": "Ui2v 支持导出 MP4 和 WebM 两种主流视频格式。您可以自定义分辨率（从 480p 到 4K）、帧率（24fps-60fps）和视频质量。导出过程完全在本地完成，保证您的作品安全性。还支持导出透明背景的 WebM 视频，方便后期合成。",
    
    "faq.q6": "AI 功能需要什么配置？",
    "faq.a6": "AI 功能需要联网并配置 API Key。我们支持 15+ 个 AI 平台：OpenAI (GPT-4、GPT-3.5)、Anthropic (Claude)、Google (Gemini)、以及各种本地模型 (Ollama、LM Studio 等)。您可以根据预算和需求选择合适的平台。如果配置本地模型，可实现完全离线的 AI 动画创作。",
    
    "faq.q7": "需要什么样的电脑配置？",
    "faq.a7": "Ui2v 对配置要求不高。最低要求：Windows 10/11 系统，4GB 内存，支持 OpenGL 3.0 的显卡。推荐配置：8GB 或更多内存，独立显卡，可以获得更流畅的编辑和预览体验。软件安装包约 150MB，非常轻量。",
    
    "faq.q8": "支持哪些渲染引擎？",
    "faq.a8": "Ui2v 内置多种专业渲染引擎：Three.js (3D图形)、Konva (2D canvas)、Lottie (矢量动画)、ECharts (数据可视化)、Fabric.js (图形编辑) 等。不同的引擎适合不同的应用场景，您可以根据项目需求自由切换，充分发挥每个引擎的优势。",
    
    "faq.q9": "数据安全吗？",
    "faq.a9": "绝对安全！Ui2v 的核心功能完全在本地运行，您的项目文件、素材、创意都存储在本地电脑，我们无法访问。只有在使用 AI 功能时，才会将您的文本提示发送给 AI 服务商（如 OpenAI），但项目文件本身不会上传。您可以选择使用本地 AI 模型实现100%离线工作。",
    
    "faq.contact.title": "还有其他问题？",
    "faq.contact.desc": "如果您没有找到想要的答案，欢迎下载体验 Ui2v 或访问我们的官方文档",
    "faq.contact.button": "立即下载体验",
  },
  en: {
    // Site Meta
    "site.title": "Ui2v - Local AI Animation Design Tool",
    "site.description": "Ui2v is a fully local AI animation tool. Describe your idea in natural language, AI generates stunning animations instantly. Fast, secure, and easy to use.",

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

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Find answers quickly and discover Ui2v's powerful features",
    "faq.back": "Back to Home",
    "faq.category.general": "General",
    "faq.category.usage": "Usage Guide",
    "faq.category.technical": "Technical Details",
    
    "faq.q1": "What is Ui2v?",
    "faq.a1": "Ui2v is a fully local AI animation design tool that empowers anyone to create professional animations. Simply describe your creative ideas in natural language, and AI automatically generates stunning animation videos. No need to learn complex software - get started in just 3 minutes. All processing happens locally on your computer, protecting your data privacy, ensuring fast response times, and enabling offline use.",
    
    "faq.q2": "Is Ui2v free?",
    "faq.a2": "Ui2v is currently in public beta and completely free to use. During the beta period, you can experience all core features including multi-layer editing, timeline control, and multiple rendering engines. If using AI features, you'll need your own AI API Key. Official release pricing will be determined based on user feedback.",
    
    "faq.q3": "What platforms are supported?",
    "faq.a3": "Currently, Ui2v beta supports Windows 10 and Windows 11 systems. The macOS version is under development and will be released alongside the official launch. We're committed to bringing AI animation creation to users across all platforms.",
    
    "faq.q4": "How do I get started with Ui2v?",
    "faq.a4": "It's simple! First, download the Windows installer from our website and install it. You can start from a blank project and manually add layers and animations, or click the AI assistant and describe your idea in natural language (like 'create a title sliding in from left'), and AI will generate it for you. The software includes detailed tutorials and sample projects to help you get started quickly.",
    
    "faq.q5": "What video formats can I export?",
    "faq.a5": "Ui2v supports exporting to MP4 and WebM formats. You can customize resolution (480p to 4K), frame rate (24fps-60fps), and video quality. The entire export process happens locally, ensuring your work's security. We also support transparent WebM export for easy compositing in post-production.",
    
    "faq.q6": "What's needed for AI features?",
    "faq.a6": "AI features require internet and an API Key. We support 15+ AI platforms: OpenAI (GPT-4, GPT-3.5), Anthropic (Claude), Google (Gemini), and various local models (Ollama, LM Studio, etc.). You can choose the platform that fits your budget and needs. With local models, you can achieve completely offline AI animation creation.",
    
    "faq.q7": "What are the system requirements?",
    "faq.a7": "Ui2v has modest requirements. Minimum: Windows 10/11, 4GB RAM, OpenGL 3.0 compatible graphics. Recommended: 8GB+ RAM and dedicated graphics card for smoother editing and preview. The installer is only ~150MB - very lightweight.",
    
    "faq.q8": "What rendering engines are supported?",
    "faq.a8": "Ui2v includes multiple professional rendering engines: Three.js (3D graphics), Konva (2D canvas), Lottie (vector animation), ECharts (data visualization), Fabric.js (graphic editing), and more. Different engines suit different scenarios - you can freely switch based on your project needs to leverage each engine's strengths.",
    
    "faq.q9": "Is my data secure?",
    "faq.a9": "Absolutely! Ui2v's core features run entirely locally - your project files, assets, and creative work are stored on your computer where we can't access them. Only when using AI features will your text prompts be sent to AI providers (like OpenAI), but project files themselves are never uploaded. You can use local AI models for 100% offline work.",
    
    "faq.contact.title": "Still have questions?",
    "faq.contact.desc": "If you haven't found the answer you're looking for, download Ui2v or visit our official documentation",
    "faq.contact.button": "Download Now",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with a consistent default for SSR
  const [language, setLanguageState] = useState<Language>("zh");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    
    // Client-side initialization logic
    const savedLang = localStorage.getItem("ui2v-language") as Language;
    if (savedLang && (savedLang === "zh" || savedLang === "en")) {
      setLanguageState(savedLang);
    } else {
      // Auto-detect if no saved preference
      const browserLang = navigator.language.toLowerCase();
      const detectedLang = browserLang.includes("zh") ? "zh" : "en";
      if (detectedLang !== "zh") {
        setLanguageState(detectedLang);
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
