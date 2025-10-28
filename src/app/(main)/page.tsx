"use client";

import {
  Heading,
  Text,
  Flex,
  Button,
} from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";
import { iconLibrary } from "@/resources/icons";
import Image from "next/image";
import HeroVersionBadge from "@/components/HeroVersionBadge";

export default function Home() {
  const { t } = useLanguage();

    return (
    <div className="page-container">
      {/* Hero Section - 全新设计 */}
      <section className="hero-section">
        <div className="hero-content">
          {/* 左侧内容区 */}
          <div className="hero-text">
            <div className="beta-badge">
              <span className="badge-dot"></span>
              {t("hero.badge")}
            </div>

            <Heading className="hero-title">
            {t("hero.title")}
          </Heading>

            <Text className="hero-subtitle">
            {t("hero.subtitle")}
            </Text>
            
            <Text className="hero-description">
            {t("hero.description")}
          </Text>

            {/* CTA 按钮 */}
            <div className="hero-actions">
              <a 
                href="https://new.ui2v.com/download" 
                className="btn-primary"
                data-umami-event="download-click"
                data-umami-event-position="hero"
              >
                <span className="btn-icon">⬇</span>
              {t("hero.download")}
            </a>
            </div>

            {/* 平台信息 */}
            <div className="platform-info">
              <div className="platform-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                </svg>
                <span>{t("hero.platform")}</span>
                </div>
              <div className="platform-item mac-coming">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                <span>{t("hero.mac_coming")}</span>
              </div>
            </div>

            {/* 特性标签 */}
            <div className="feature-tags">
              <div className="tag">{t("hero.local")}</div>
              <div className="tag">{t("hero.privacy")}</div>
              <div className="tag">{t("hero.ai")}</div>
            </div>

            {/* 版本信息徽章 */}
            <HeroVersionBadge />
          </div>

          {/* 右侧预览图 */}
          <div className="hero-preview">
            <div className="preview-card">
            <Image
              src="/images/preview1.png"
                alt="Ui2v 界面预览"
              width={1200}
              height={675}
              priority
                className="preview-image"
            />
              <div className="preview-glow"></div>
          </div>
          </div>
        </div>
      </section>

      {/* 核心特性 - 精简版 */}
      <section className="features-section">
        <div className="section-header">
          <Heading className="section-title">
              {t("features.title")}
            </Heading>
          <Text className="section-subtitle">
            {t("features.subtitle")}
          </Text>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon ai-icon">
              🤖
        </div>
            <Heading className="feature-title">
              {t("features.ai.title")}
            </Heading>
            <Text className="feature-desc">
              {t("features.ai.desc")}
            </Text>
          </div>

          <div className="feature-card">
            <div className="feature-icon local-icon">
              🏠
            </div>
            <Heading className="feature-title">
              {t("features.local.title")}
          </Heading>
            <Text className="feature-desc">
              {t("features.local.desc")}
          </Text>
          </div>

          <div className="feature-card">
            <div className="feature-icon easy-icon">
              ⚡
          </div>
            <Heading className="feature-title">
              {t("features.easy.title")}
            </Heading>
            <Text className="feature-desc">
              {t("features.easy.desc")}
            </Text>
        </div>
        </div>
      </section>

      {/* 功能亮点 - 网格展示 */}
      <section className="capabilities-section">
        <div className="section-header">
          <Heading className="section-title">
            {t("capabilities.title")}
            </Heading>
          <Text className="section-subtitle">
            {t("capabilities.subtitle")}
            </Text>
        </div>

        <div className="capabilities-grid">
          <div className="capability-item">
            <div className="capability-icon">📊</div>
            <div className="capability-text">
              <strong>{t("capabilities.layers")}</strong>
              <span>{t("capabilities.layers.desc")}</span>
            </div>
          </div>

          <div className="capability-item">
            <div className="capability-icon">⏱️</div>
            <div className="capability-text">
              <strong>{t("capabilities.timeline")}</strong>
              <span>{t("capabilities.timeline.desc")}</span>
                </div>
            </div>

          <div className="capability-item">
            <div className="capability-icon">✨</div>
            <div className="capability-text">
              <strong>{t("capabilities.ai")}</strong>
              <span>{t("capabilities.ai.desc")}</span>
        </div>
          </div>

          <div className="capability-item">
            <div className="capability-icon">💾</div>
            <div className="capability-text">
              <strong>{t("capabilities.export")}</strong>
              <span>{t("capabilities.export.desc")}</span>
          </div>
          </div>

          <div className="capability-item">
            <div className="capability-icon">🎨</div>
            <div className="capability-text">
              <strong>{t("capabilities.engines")}</strong>
              <span>{t("capabilities.engines.desc")}</span>
                </div>
              </div>

          <div className="capability-item">
            <div className="capability-icon">🔌</div>
            <div className="capability-text">
              <strong>{t("capabilities.providers")}</strong>
              <span>{t("capabilities.providers.desc")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 适用场景 */}
      <section className="usecases-section">
        <Heading className="section-title">
          {t("usecases.title")}
          </Heading>

        <div className="usecases-grid">
          <div className="usecase-card">
            <div className="usecase-icon">🎬</div>
            <strong>{t("usecases.creator")}</strong>
            <span>{t("usecases.creator.desc")}</span>
        </div>

          <div className="usecase-card">
            <div className="usecase-icon">🎨</div>
            <strong>{t("usecases.designer")}</strong>
            <span>{t("usecases.designer.desc")}</span>
        </div>

          <div className="usecase-card">
            <div className="usecase-icon">📈</div>
            <strong>{t("usecases.marketer")}</strong>
            <span>{t("usecases.marketer.desc")}</span>
          </div>

          <div className="usecase-card">
            <div className="usecase-icon">📚</div>
            <strong>{t("usecases.educator")}</strong>
            <span>{t("usecases.educator.desc")}</span>
          </div>
        </div>
      </section>

      {/* CTA Section - 全新设计 */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-main">
            <Heading className="cta-title">
            {t("cta.title")}
        </Heading>

            <a 
              href="https://new.ui2v.com/download" 
              className="cta-download-btn"
              data-umami-event="download-click"
              data-umami-event-position="cta"
            >
              <span className="download-icon">⬇</span>
              <div className="download-text">
                <span className="download-label">{t("cta.download")}</span>
                <span className="download-size">{t("cta.size")}</span>
              </div>
            </a>

            <div className="cta-details">
              <div className="cta-detail-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>{t("cta.requirement")}</span>
              </div>
            </div>

            <div className="cta-mac-notice">
              {t("cta.mac")}
            </div>
          </div>

          <div className="cta-features">
            <div className="cta-feature-item">
              <div className="cta-feature-icon">🏠</div>
              <span>{t("cta.features.local")}</span>
            </div>
            <div className="cta-feature-item">
              <div className="cta-feature-icon">⚡</div>
              <span>{t("cta.features.fast")}</span>
            </div>
            <div className="cta-feature-item">
              <div className="cta-feature-icon">🤖</div>
              <span>{t("cta.features.ai")}</span>
            </div>
            <div className="cta-feature-item">
              <div className="cta-feature-icon">✨</div>
              <span>{t("cta.features.easy")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-platforms">
            <Text className="footer-label">{t("footer.platform")}</Text>
            <div className="footer-platform-list">
              <span className="platform-badge active">{t("footer.windows")}</span>
              <span className="platform-badge coming">{t("footer.mac")}</span>
            </div>
          </div>
          
          <Text className="footer-copyright">
          {t("footer.copyright")}
        </Text>
        </div>
      </footer>

      <style jsx>{`
        .page-container {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(180deg, #0a0d14 0%, #121621 50%, #0a0d14 100%);
          color: #fff;
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 24px 80px;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-text {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .beta-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          color: #a78bfa;
          width: fit-content;
          animation: pulse 2s ease-in-out infinite;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #a78bfa;
          border-radius: 50%;
          animation: blink 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(139, 92, 246, 0); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .hero-subtitle {
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .hero-description {
          font-size: 17px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-primary {
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
          color: #fff;
          box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(139, 92, 246, 0.6);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(139, 92, 246, 0.5);
        }

        .btn-icon,
        .btn-secondary svg {
          font-size: 20px;
        }

        .platform-info {
          display: flex;
          gap: 20px;
          margin-top: 8px;
        }

        .platform-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }

        .platform-item svg {
          opacity: 0.8;
        }

        .platform-item.mac-coming {
          color: rgba(255, 255, 255, 0.5);
        }

        .feature-tags {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }

        .tag {
          padding: 6px 14px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 20px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
        }

        .hero-preview {
          position: relative;
        }

        .preview-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(139, 92, 246, 0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          transition: transform 0.4s ease;
        }

        .preview-card:hover {
          transform: translateY(-8px);
        }

        .preview-image {
          display: block;
          width: 100%;
          height: auto;
        }

        .preview-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
          filter: blur(40px);
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .preview-card:hover .preview-glow {
          opacity: 1;
        }

        /* Features Section */
        .features-section {
          padding: 100px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
            text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px 0;
        }

        .section-subtitle {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        .feature-card {
          padding: 40px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          background: rgba(139, 92, 246, 0.05);
          border-color: rgba(139, 92, 246, 0.4);
          transform: translateY(-4px);
        }

        .feature-icon {
          width: 64px;
          height: 64px;
          font-size: 32px;
          display: flex;
            align-items: center;
          justify-content: center;
          border-radius: 16px;
          margin-bottom: 24px;
        }

        .ai-icon {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(109, 40, 217, 0.2) 100%);
        }

        .local-icon {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%);
        }

        .easy-icon {
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.2) 100%);
        }

        .feature-title {
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px 0;
        }

        .feature-desc {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
        }

        /* Capabilities Section */
        .capabilities-section {
          padding: 80px 24px;
          max-width: 1200px;
          margin: 0 auto;
          background: rgba(139, 92, 246, 0.03);
          border-radius: 32px;
        }

        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .capability-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(139, 92, 246, 0.15);
          border-radius: 16px;
          transition: all 0.2s ease;
        }

        .capability-item:hover {
          background: rgba(139, 92, 246, 0.05);
          border-color: rgba(139, 92, 246, 0.3);
        }

        .capability-icon {
          font-size: 28px;
          flex-shrink: 0;
        }

        .capability-text {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .capability-text strong {
          font-size: 16px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
        }

        .capability-text span {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }

        /* Use Cases Section */
        .usecases-section {
          padding: 100px 24px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .usecases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }

        .usecase-card {
          padding: 32px 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .usecase-card:hover {
          background: rgba(139, 92, 246, 0.05);
          border-color: rgba(139, 92, 246, 0.4);
          transform: translateY(-4px);
        }

        .usecase-icon {
          font-size: 48px;
          margin-bottom: 8px;
        }

        .usecase-card strong {
          font-size: 18px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
        }

        .usecase-card span {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }

        /* CTA Section - 全新设计 */
        .cta-section {
          padding: 100px 24px;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
          background: rgba(139, 92, 246, 0.05);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 24px;
          padding: 60px 48px;
          position: relative;
          z-index: 1;
          backdrop-filter: blur(10px);
        }

        .cta-main {
          text-align: center;
          margin-bottom: 48px;
        }

        .cta-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 12px 0;
          line-height: 1.2;
        }

        .cta-subtitle {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 40px 0;
        }

        .cta-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          padding: 18px 40px;
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
          color: #fff;
          border-radius: 14px;
          text-decoration: none;
          box-shadow: 0 12px 32px rgba(139, 92, 246, 0.5);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-bottom: 24px;
        }

        .cta-download-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(139, 92, 246, 0.7);
        }

        .download-icon {
          font-size: 28px;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .download-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
        }

        .download-label {
          font-size: 18px;
          font-weight: 700;
        }

        .download-size {
          font-size: 12px;
          opacity: 0.8;
        }

        .cta-details {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-bottom: 16px;
        }

        .cta-detail-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.65);
        }

        .cta-detail-item svg {
          opacity: 0.8;
          color: #10b981;
        }

        .cta-mac-notice {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 16px;
        }

        .cta-features {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          padding-top: 32px;
          border-top: 1px solid rgba(139, 92, 246, 0.2);
        }

        .cta-feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 20px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(139, 92, 246, 0.15);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .cta-feature-item:hover {
          background: rgba(139, 92, 246, 0.08);
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-2px);
        }

        .cta-feature-icon {
          font-size: 32px;
          margin-bottom: 4px;
        }

        .cta-feature-item span {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          text-align: center;
        }

        /* Footer */
        .footer {
          padding: 60px 24px 40px;
          border-top: 1px solid rgba(139, 92, 246, 0.1);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .footer-platforms {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .footer-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        .footer-platform-list {
          display: flex;
          gap: 12px;
        }

        .platform-badge {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }

        .platform-badge.active {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
        }

        .platform-badge.coming {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.5);
        }

        .footer-copyright {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
          margin: 0;
        }

        /* 响应式设计 */
        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }

          .hero-text {
            align-items: center;
          }

          .beta-badge,
          .platform-info,
          .feature-tags {
            justify-content: center;
          }

          .hero-actions {
            justify-content: center;
            flex-wrap: wrap;
          }

          .features-grid,
          .capabilities-grid,
          .usecases-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 100px 16px 60px;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .platform-info {
            flex-direction: column;
            gap: 12px;
          }

          .cta-container {
            padding: 48px 24px !important;
          }

          .cta-features {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .cta-download-btn {
            width: 100%;
            justify-content: center;
          }

          .download-text {
            align-items: center !important;
          }
        }
      `}</style>
    </div>
  );
}
