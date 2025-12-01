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
import { Footer } from "@/components/Footer";
import HeroVersionBadge from "@/components/HeroVersionBadge";
import styles from "./page.module.css";
import { 
  FaDownload, 
  FaRobot, 
  FaHome, 
  FaBolt, 
  FaChartBar, 
  FaClock, 
  FaSave, 
  FaPalette, 
  FaPlug, 
  FaVideo, 
  FaChartLine, 
  FaBook 
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className={`${styles.pageContainer} bg-dot-grid`}>
      {/* Hero Section - 全新设计 */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          {/* 左侧内容区 */}
          <div className={styles.heroText}>
            <div className={styles.betaBadge}>
              <span className={styles.badgeDot}></span>
              {t("hero.badge")}
            </div>

            <Heading className={`${styles.heroTitle} text-gradient`} style={{ position: 'relative', display: 'inline-block' }}>
              {t("hero.title")}
              <svg 
                className="hero-decor-star"
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                style={{ 
                  position: 'absolute', 
                  top: '-20px', 
                  right: '-30px', 
                  color: '#FCD34D',
                  zIndex: -1,
                  opacity: 0.8
                }}
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </Heading>

            <Text className={`${styles.heroSubtitle} text-shimmer`} style={{ position: 'relative' }}>
              {t("hero.subtitle")}
              <svg 
                className="hero-decor-underline"
                width="120" 
                height="10" 
                viewBox="0 0 120 10" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                style={{ 
                  position: 'absolute', 
                  bottom: '-10px', 
                  left: '0', 
                  color: 'var(--ui2v-accent)',
                  opacity: 0.6 
                }}
              >
                <path d="M0 5 Q 60 10 120 5" />
              </svg>
            </Text>
            
            <Text className={styles.heroDescription}>
            {t("hero.description")}
          </Text>

            {/* CTA 按钮 */}
            <div className={styles.heroActions}>
              <a 
                href="https://new.ui2v.com/download" 
                className={styles.btnPrimary}
                data-umami-event="download-click"
                data-umami-event-position="hero"
              >
                <span className={styles.btnIcon}><FaDownload /></span>
              {t("hero.download")}
            </a>
            </div>

            {/* 平台信息 */}
            <div className={styles.platformInfo}>
              <div className={styles.platformItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                </svg>
                <span>{t("hero.platform")}</span>
                </div>
              <div className={`${styles.platformItem} ${styles.macComing}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                <span>{t("hero.mac_coming")}</span>
              </div>
            </div>

            {/* 特性标签 */}
            <div className={styles.featureTags}>
              <div className={styles.tag}>{t("hero.local")}</div>
              <div className={styles.tag}>{t("hero.privacy")}</div>
              <div className={styles.tag}>{t("hero.ai")}</div>
            </div>
          </div>

          {/* 右侧预览图 */}
          <div className={styles.heroPreview}>
            <div className={styles.previewCard}>
            <Image
              src="/images/preview1.png"
                alt="Ui2v 界面预览"
              width={1200}
              height={675}
              priority
                className={styles.previewImage}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0dSn/DwACwQHLqwH3TwAAAABJRU5ErkJggg=="
            />
              <div className={styles.previewGlow}></div>
          </div>
            {/* 版本信息徽章 - 移动到图片下方 */}
            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
              <HeroVersionBadge />
            </div>
          </div>
        </div>
      </section>

      {/* 核心特性 - 精简版 */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <Heading className={styles.sectionTitle}>
              {t("features.title")}
            </Heading>
          <Text className={styles.sectionSubtitle}>
            {t("features.subtitle")}
          </Text>
        </div>

        <div className={styles.featuresGrid}>
          <div className={`${styles.featureCard} card-hover-effect`}>
            <div className={`${styles.featureIcon} ${styles.aiIcon} animate-float`}>
              <FaRobot />
        </div>
            <Heading className={`${styles.featureTitle} text-gradient`}>
              {t("features.ai.title")}
            </Heading>
            <Text className={styles.featureDesc}>
              {t("features.ai.desc")}
            </Text>
          </div>

          <div className={`${styles.featureCard} card-hover-effect`}>
            <div className={`${styles.featureIcon} ${styles.localIcon} animate-float`}>
              <FaHome />
            </div>
            <Heading className={`${styles.featureTitle} text-gradient`}>
              {t("features.local.title")}
          </Heading>
            <Text className={styles.featureDesc}>
              {t("features.local.desc")}
          </Text>
          </div>

          <div className={`${styles.featureCard} card-hover-effect`}>
            <div className={`${styles.featureIcon} ${styles.easyIcon} animate-float`}>
              <FaBolt />
          </div>
            <Heading className={`${styles.featureTitle} text-gradient`}>
              {t("features.easy.title")}
            </Heading>
            <Text className={styles.featureDesc}>
              {t("features.easy.desc")}
            </Text>
        </div>
        </div>
      </section>

      {/* 功能亮点 - 网格展示 */}
      <section className={styles.capabilitiesSection}>
        <div className={styles.sectionHeader}>
          <Heading className={styles.sectionTitle}>
            {t("capabilities.title")}
            </Heading>
          <Text className={styles.sectionSubtitle}>
            {t("capabilities.subtitle")}
            </Text>
        </div>

        <div className={styles.capabilitiesGrid}>
          <div className={`${styles.capabilityItem} card-hover-effect`}>
            <div className={styles.capabilityIcon}><FaChartBar /></div>
            <div className={styles.capabilityText}>
              <strong className="text-gradient-primary">{t("capabilities.layers")}</strong>
              <span>{t("capabilities.layers.desc")}</span>
            </div>
          </div>

          <div className={`${styles.capabilityItem} card-hover-effect`}>
            <div className={styles.capabilityIcon}><FaClock /></div>
            <div className={styles.capabilityText}>
              <strong className="text-gradient-primary">{t("capabilities.timeline")}</strong>
              <span>{t("capabilities.timeline.desc")}</span>
                </div>
            </div>

          <div className={`${styles.capabilityItem} card-hover-effect`}>
            <div className={styles.capabilityIcon}><HiSparkles /></div>
            <div className={styles.capabilityText}>
              <strong className="text-gradient-primary">{t("capabilities.ai")}</strong>
              <span>{t("capabilities.ai.desc")}</span>
        </div>
          </div>

          <div className={`${styles.capabilityItem} card-hover-effect`}>
            <div className={styles.capabilityIcon}><FaSave /></div>
            <div className={styles.capabilityText}>
              <strong className="text-gradient-primary">{t("capabilities.export")}</strong>
              <span>{t("capabilities.export.desc")}</span>
          </div>
          </div>

          <div className={`${styles.capabilityItem} card-hover-effect`}>
            <div className={styles.capabilityIcon}><FaPalette /></div>
            <div className={styles.capabilityText}>
              <strong className="text-gradient-primary">{t("capabilities.engines")}</strong>
              <span>{t("capabilities.engines.desc")}</span>
                </div>
              </div>

          <div className={`${styles.capabilityItem} card-hover-effect`}>
            <div className={styles.capabilityIcon}><FaPlug /></div>
            <div className={styles.capabilityText}>
              <strong className="text-gradient-primary">{t("capabilities.providers")}</strong>
              <span>{t("capabilities.providers.desc")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 适用场景 */}
      <section className={styles.usecasesSection}>
        <Heading className={`${styles.sectionTitle} text-gradient`}>
          {t("usecases.title")}
          </Heading>

        <div className={styles.usecasesGrid}>
          <div className={`${styles.usecaseCard} card-hover-effect`}>
            <div className={`${styles.usecaseIcon} animate-float`}><FaVideo /></div>
            <strong className="text-gradient-primary">{t("usecases.creator")}</strong>
            <span>{t("usecases.creator.desc")}</span>
        </div>

          <div className={`${styles.usecaseCard} card-hover-effect`}>
            <div className={`${styles.usecaseIcon} animate-float`}><FaPalette /></div>
            <strong className="text-gradient-primary">{t("usecases.designer")}</strong>
            <span>{t("usecases.designer.desc")}</span>
        </div>

          <div className={`${styles.usecaseCard} card-hover-effect`}>
            <div className={`${styles.usecaseIcon} animate-float`}><FaChartLine /></div>
            <strong className="text-gradient-primary">{t("usecases.marketer")}</strong>
            <span>{t("usecases.marketer.desc")}</span>
          </div>

          <div className={`${styles.usecaseCard} card-hover-effect`}>
            <div className={`${styles.usecaseIcon} animate-float`}><FaBook /></div>
            <strong className="text-gradient-primary">{t("usecases.educator")}</strong>
            <span>{t("usecases.educator.desc")}</span>
          </div>
        </div>
      </section>

      {/* CTA Section - 全新设计 */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaMain}>
            <Heading className={`${styles.ctaTitle} text-shimmer`}>
            {t("cta.title")}
        </Heading>

            <a 
              href="https://new.ui2v.com/download" 
              className={styles.ctaDownloadBtn}
              data-umami-event="download-click"
              data-umami-event-position="cta"
            >
              <span className={styles.downloadIcon}><FaDownload /></span>
              <div className={styles.downloadText}>
                <span className={styles.downloadLabel}>{t("cta.download")}</span>
                <span className={styles.downloadSize}>{t("cta.size")}</span>
              </div>
            </a>

            <div className={styles.ctaDetails}>
              <div className={styles.ctaDetailItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>{t("cta.requirement")}</span>
              </div>
            </div>

            <div className={styles.ctaMacNotice}>
              {t("cta.mac")}
            </div>
          </div>

          <div className={styles.ctaFeatures}>
            <div className={styles.ctaFeatureItem}>
              <div className={styles.ctaFeatureIcon}><FaHome /></div>
              <span>{t("cta.features.local")}</span>
            </div>
            <div className={styles.ctaFeatureItem}>
              <div className={styles.ctaFeatureIcon}><FaBolt /></div>
              <span>{t("cta.features.fast")}</span>
            </div>
            <div className={styles.ctaFeatureItem}>
              <div className={styles.ctaFeatureIcon}><FaRobot /></div>
              <span>{t("cta.features.ai")}</span>
            </div>
            <div className={styles.ctaFeatureItem}>
              <div className={styles.ctaFeatureIcon}><HiSparkles /></div>
              <span>{t("cta.features.easy")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
