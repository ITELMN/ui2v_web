"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./HeroVersionBadge.module.css";

interface VersionData {
  name: string;
  notes: string;
  pub_date: string;
}

export default function HeroVersionBadge() {
  const { language } = useLanguage();
  const [versionData, setVersionData] = useState<VersionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch("/api/version");
        if (!response.ok) return;
        const data = await response.json();
        setVersionData(data);
      } catch (error) {
        console.error("Failed to fetch version info:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVersion();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === "zh") {
      return date.toLocaleDateString("zh-CN", {
        month: "numeric",
        day: "numeric",
      });
    }
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  // Skeleton loader
  if (isLoading || !versionData) {
    return (
      <div className={styles.heroVersionBadge}>
        <div className={styles.badgeGlow}></div>
        <div className={styles.badgeContent}>
          <div className={styles.versionSection}>
            <div className={styles.versionIconWrapper}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className={styles.versionInfo}>
              <div className={`${styles.skeletonLabel} ${styles.skeleton}`}></div>
              <div className={`${styles.skeletonNumber} ${styles.skeleton}`}></div>
            </div>
          </div>
          <div className={styles.notesSection}>
            <div className={styles.notesIcon}>
              <span className={styles.sparkle}>✨</span>
            </div>
            <div className={`${styles.skeletonText} ${styles.skeleton}`}></div>
          </div>
          <div className={styles.dateSection}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <div className={`${styles.skeletonDate} ${styles.skeleton}`}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.heroVersionBadge}>
      <div className={styles.badgeGlow}></div>
      
      <div className={styles.badgeContent}>
        {/* 左侧：版本标签 */}
        <div className={styles.versionSection}>
          <div className={styles.versionIconWrapper}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div className={styles.versionInfo}>
            <span className={styles.versionLabel}>{language === "zh" ? "最新版本" : "Latest"}</span>
            <span className={styles.versionNumber}>{versionData.name}</span>
          </div>
        </div>

        {/* 中间：公告信息 */}
        <div className={styles.notesSection}>
          <div className={styles.notesIcon}>
            <span className={styles.sparkle}>✨</span>
          </div>
          <p className={styles.notesText}>{versionData.notes}</p>
        </div>

        {/* 右侧：发布时间 */}
        <div className={styles.dateSection}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className={styles.dateText}>{formatDate(versionData.pub_date)}</span>
        </div>
      </div>
    </div>
  );
}
