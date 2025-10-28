"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface VersionData {
  name: string;
  notes: string;
  pub_date: string;
}

export default function HeroVersionBadge() {
  const { language } = useLanguage();
  const [versionData, setVersionData] = useState<VersionData | null>(null);

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch("/api/version");
        if (!response.ok) return;
        const data = await response.json();
        setVersionData(data);
      } catch (error) {
        console.error("Failed to fetch version info:", error);
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

  if (!versionData) return null;

  return (
    <div className="hero-version-badge">
      <div className="badge-glow"></div>
      
      <div className="badge-content">
        {/* 左侧：版本标签 */}
        <div className="version-section">
          <div className="version-icon-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div className="version-info">
            <span className="version-label">{language === "zh" ? "最新版本" : "Latest"}</span>
            <span className="version-number">{versionData.name}</span>
          </div>
        </div>

        {/* 中间：公告信息 */}
        <div className="notes-section">
          <div className="notes-icon">
            <span className="sparkle">✨</span>
          </div>
          <p className="notes-text">{versionData.notes}</p>
        </div>

        {/* 右侧：发布时间 */}
        <div className="date-section">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="date-text">{formatDate(versionData.pub_date)}</span>
        </div>
      </div>

      <style jsx>{`
        .hero-version-badge {
          position: relative;
          margin-top: 24px;
          width: 100%;
        }

        .badge-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle at center, rgba(139, 92, 246, 0.15), transparent 70%);
          filter: blur(30px);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .hero-version-badge:hover .badge-glow {
          opacity: 1;
        }

        .badge-content {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 24px;
          padding: 20px 28px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(109, 40, 217, 0.08) 100%);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 16px;
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .badge-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.6), transparent);
        }

        .hero-version-badge:hover .badge-content {
          transform: translateY(-3px);
          border-color: rgba(139, 92, 246, 0.5);
          box-shadow: 0 16px 48px rgba(139, 92, 246, 0.2);
        }

        /* 版本区域 */
        .version-section {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-right: 24px;
          border-right: 1px solid rgba(139, 92, 246, 0.25);
        }

        .version-icon-wrapper {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.25) 0%, rgba(109, 40, 217, 0.2) 100%);
          border-radius: 12px;
          border: 1px solid rgba(139, 92, 246, 0.3);
          flex-shrink: 0;
        }

        .version-icon-wrapper svg {
          color: #a78bfa;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(0.95);
          }
        }

        .version-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .version-label {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .version-number {
          font-size: 17px;
          font-weight: 800;
          background: linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.01em;
        }

        /* 公告区域 */
        .notes-section {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .notes-icon {
          flex-shrink: 0;
        }

        .sparkle {
          font-size: 24px;
          display: inline-block;
          animation: sparkle 3s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(-10deg) scale(1.1);
          }
          50% {
            transform: rotate(10deg) scale(1.15);
          }
          75% {
            transform: rotate(-10deg) scale(1.1);
          }
        }

        .notes-text {
          font-size: 15px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        /* 日期区域 */
        .date-section {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 10px;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .date-section:hover {
          background: rgba(139, 92, 246, 0.15);
          border-color: rgba(139, 92, 246, 0.4);
        }

        .date-section svg {
          color: rgba(167, 139, 250, 0.8);
        }

        .date-text {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.75);
          white-space: nowrap;
        }

        /* 响应式设计 */
        @media (max-width: 968px) {
          .badge-content {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 20px 24px;
          }

          .version-section {
            border-right: none;
            padding-right: 0;
            padding-bottom: 16px;
            border-bottom: 1px solid rgba(139, 92, 246, 0.2);
          }

          .notes-section {
            padding-bottom: 16px;
            border-bottom: 1px solid rgba(139, 92, 246, 0.2);
          }

          .date-section {
            align-self: flex-end;
          }
        }

        @media (max-width: 640px) {
          .badge-content {
            padding: 18px 20px;
            gap: 16px;
          }

          .version-icon-wrapper {
            width: 40px;
            height: 40px;
          }

          .version-number {
            font-size: 16px;
          }

          .notes-text {
            font-size: 14px;
          }

          .sparkle {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}

