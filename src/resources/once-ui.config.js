// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://new.ui2v.com";

// Import and set font for each variant
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light | system
  neutral: "slate", // sand | gray | slate
  brand: "violet", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "magenta", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast | inverse
  solidStyle: "plastic", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const dataStyle = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

const effects = {
  mask: {
    cursor: true,
    x: 50,
    y: 50,
    radius: 80,
  },
  gradient: {
    display: true,
    x: 50,
    y: 30,
    width: 120,
    height: 120,
    tilt: 25,
    colorStart: "brand-background-strong",
    colorEnd: "accent-background-strong",
    opacity: 30,
  },
  dots: {
    display: true,
    size: "2",
    color: "brand-on-background-weak",
    opacity: 30,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    thickness: 1,
    angle: 45,
    size: "8",
  },
  grid: {
    display: true,
    color: "neutral-alpha-weak",
    opacity: 20,
    width: "32",
    height: "32",
  },
};

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "Ui2v - 本地 AI 动画设计工具 | 免费",
    description:
      "Ui2v 是一款免费、本地运行的 AI 动画设计工具。支持多层动画系统、AI智能助手、多渲染引擎，保护隐私。",
    image: "/images/ui2v-og.jpg",
    canonical: "https://new.ui2v.com",
    robots: "index,follow",
    alternates: [
      { href: "https://new.ui2v.com", hrefLang: "zh" },
      { href: "https://new.ui2v.com/en", hrefLang: "en" }
    ],
  },
  // add more routes and reference them in page.tsx
};

// default schema data
const schema = {
  logo: "",
  type: "SoftwareApplication",
  name: "Ui2v",
  description: meta.home.description,
  email: "contact@ui2v.com",
};

// social links
const social = {
  website: "https://new.ui2v.com",
  download: "https://new.ui2v.com/download",
};

export { baseURL, fonts, style, meta, schema, social, effects, dataStyle };
