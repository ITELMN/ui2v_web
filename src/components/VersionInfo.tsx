"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface VersionData {
  name: string;
  notes: string;
  pub_date: string;
  url: string;
}

export default function VersionInfo() {
  const { language } = useLanguage();
  const [versionData, setVersionData] = useState<VersionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch("/api/version");
        if (!response.ok) {
          throw new Error("Failed to fetch version");
        }
        const data = await response.json();
        setVersionData(data);
      } catch (error) {
        console.error("Failed to fetch version info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVersion();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === "zh") {
      return date.toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="version-info-container">
        <div className="version-card loading">
          <div className="loading-shimmer"></div>
        </div>

        <style jsx>{`
          .version-info-container {
            padding: 80px 24px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .version-card {
            background: rgba(139, 92, 246, 0.05);
            border: 1px solid rgba(139, 92, 246, 0.2);
            border-radius: 24px;
            padding: 48px;
            position: relative;
            overflow: hidden;
          }

          .version-card.loading {
            height: 200px;
          }

          .loading-shimmer {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(139, 92, 246, 0.1),
              transparent
            );
            animation: shimmer 2s infinite;
          }

          @keyframes shimmer {
            0% {
              left: -100%;
            }
            100% {
              left: 100%;
            }
          }
        `}</style>
      </div>
    );
  }

  if (!versionData) return null;

  return (
    <div className="version-info-container">
      <div className="version-card">
        {/* 装饰性背景 */}
        <div className="version-bg-decoration"></div>

        {/* 版本标签 */}
        <div className="version-badge">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          {language === "zh" ? "最新版本" : "Latest Version"}
        </div>

        {/* 主内容区 */}
        <div className="version-content">
          {/* 版本号 */}
          <div className="version-header">
            <h3 className="version-name">{versionData.name}</h3>
            <div className="version-date">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {formatDate(versionData.pub_date)}
            </div>
          </div>

          {/* 更新说明 */}
          <div className="version-notes">
            {versionData.notes.split("\n").map((line, index) => (
              <p key={index} className="note-line">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* 装饰性元素 */}
        <div className="version-decoration">
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
          <div className="decoration-circle"></div>
        </div>
      </div>

      <style jsx>{`
        .version-info-container {
          padding: 80px 24px 88px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .version-card {
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.08) 0%,
            rgba(109, 40, 217, 0.05) 100%
          );
          border: 1px solid rgba(139, 92, 246, 0.25);
          border-radius: 24px;
          padding: 48px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }

        .version-card:hover {
          transform: translateY(-4px);
          border-color: rgba(139, 92, 246, 0.4);
          box-shadow: 0 20px 60px rgba(139, 92, 246, 0.2);
          z-index: 2;
        }

        .version-bg-decoration {
          position: absolute;
          top: -50%;
          right: -20%;
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(139, 92, 246, 0.15) 0%,
            transparent 70%
          );
          filter: blur(80px);
          pointer-events: none;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-30px, -30px);
          }
        }

        .version-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          color: #a78bfa;
          margin-bottom: 32px;
          position: relative;
          z-index: 1;
          backdrop-filter: blur(10px);
        }

        .version-badge svg {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .version-content {
          position: relative;
          z-index: 1;
        }

        .version-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .version-name {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .version-date {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 12px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
        }

        .version-date svg {
          color: #a78bfa;
        }

        .version-notes {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .note-line {
          font-size: 18px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
          padding-left: 24px;
          position: relative;
        }

        .note-line::before {
          content: "";
          position: absolute;
          left: 0;
          top: 12px;
          width: 6px;
          height: 6px;
          background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%);
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(139, 92, 246, 0.6);
        }

        .version-decoration {
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          pointer-events: none;
          z-index: 0;
        }

        .decoration-circle {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(139, 92, 246, 0.2);
        }

        .decoration-circle:nth-child(1) {
          width: 100px;
          height: 100px;
          top: 50px;
          left: 50px;
          animation: rotate 10s linear infinite;
        }

        .decoration-circle:nth-child(2) {
          width: 150px;
          height: 150px;
          top: 25px;
          left: 25px;
          animation: rotate 15s linear infinite reverse;
        }

        .decoration-circle:nth-child(3) {
          width: 200px;
          height: 200px;
          top: 0;
          left: 0;
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
          .version-info-container {
            padding: 60px 16px;
          }

          .version-card {
            padding: 32px 24px;
          }

          .version-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .version-name {
            font-size: 2rem;
          }

          .note-line {
            font-size: 16px;
            padding-left: 20px;
          }

          .version-decoration {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

