"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function DynamicTitle() {
  const { t, language } = useLanguage();

  useEffect(() => {
    // Update document title and lang when language changes
    document.title = t("site.title");
    document.documentElement.lang = language;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t("site.description"));
    }

    // Update OG title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", t("site.title"));
    }

    // Update OG description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", t("site.description"));
    }

    // Update Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", t("site.title"));
    }

    // Update Twitter description
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", t("site.description"));
    }
  }, [t, language]);

  return null;
}

