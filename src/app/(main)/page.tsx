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
import { AiIcon, LocalIcon, EasyIcon, AiCardBg, LocalCardBg, EasyCardBg } from "@/components/FeatureIcons";
import { SectionConnector, WaveDivider } from "@/components/SectionDividers";
import { VideoTimelineAnim, AiProcessingNodes, FilmStripBg, WaveformAnim, NeuralNetworkGrid, RenderingAnim, CircuitBoardBg, EnergyFlowBg, ScanningOverlay, LayersAnim, EnginesAnim, ProvidersAnim, DownloadGuideAnim } from "@/components/AiVideoDecorations";
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
              <div className={styles.tag} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FaHome style={{ fontSize: '0.9em', opacity: 0.8 }} />
                {t("hero.local")}
              </div>
              <div className={styles.tag} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.8 }}>
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
                {t("hero.privacy")}
              </div>
              <div className={styles.tag} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FaRobot style={{ fontSize: '0.9em', opacity: 0.8 }} />
                {t("hero.ai")}
              </div>
            </div>
          </div>

          {/* 右侧预览图 */}
          <div className={styles.heroPreview}>
            <div className={styles.previewCard} style={{ position: 'relative' }}>
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
        <WaveDivider />
      </section>

      {/* 核心特性 - 精简版 */}
      <section className={styles.featuresSection} style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '0', right: '0', opacity: 0.6, pointerEvents: 'none', zIndex: 0 }}>
          <AiProcessingNodes />
        </div>
        <div className={styles.sectionHeader} style={{ position: 'relative', zIndex: 1 }}>
          <Heading className={styles.sectionTitle}>
              {t("features.title")}
            </Heading>
          <Text className={styles.sectionSubtitle}>
            {t("features.subtitle")}
          </Text>
        </div>

        <div className={styles.featuresGrid}>
          <div className={`${styles.featureCard} card-hover-effect`}>
            <AiCardBg />
            <div className={`${styles.featureIcon} ${styles.aiIcon} animate-float`}>
              <AiIcon className="w-full h-full" />
        </div>
            <Heading className={`${styles.featureTitle} text-gradient`}>
              {t("features.ai.title")}
            </Heading>
            <Text className={styles.featureDesc}>
              {t("features.ai.desc")}
            </Text>
          </div>

          <div className={`${styles.featureCard} card-hover-effect`}>
            <LocalCardBg />
            <div className={`${styles.featureIcon} ${styles.localIcon} animate-float`}>
              <LocalIcon className="w-full h-full" />
            </div>
            <Heading className={`${styles.featureTitle} text-gradient`}>
              {t("features.local.title")}
          </Heading>
            <Text className={styles.featureDesc}>
              {t("features.local.desc")}
          </Text>
          </div>

          <div className={`${styles.featureCard} card-hover-effect`}>
            <EasyCardBg />
            <div className={`${styles.featureIcon} ${styles.easyIcon} animate-float`}>
              <EasyIcon className="w-full h-full" />
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

      <SectionConnector />

      {/* 功能亮点 - 网格展示 */}
      <section className={styles.capabilitiesSection} style={{ position: 'relative', overflow: 'hidden' }}>
        <CircuitBoardBg />
        <div className={styles.sectionHeader} style={{ position: 'relative', zIndex: 1 }}>
          <Heading className={styles.sectionTitle}>
            {t("capabilities.title")}
            </Heading>
          <Text className={styles.sectionSubtitle}>
            {t("capabilities.subtitle")}
            </Text>
        </div>

        <div className={styles.capabilitiesGrid} style={{ position: 'relative', zIndex: 1 }}>
          <div className={`${styles.capabilityItem} card-hover-effect`} style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '120px', height: '60px', opacity: 0.5, pointerEvents: 'none' }}>
              <LayersAnim />
            </div>
            <div className={styles.capabilityIcon} style={{ position: 'relative', zIndex: 1 }}><FaChartBar /></div>
            <div className={styles.capabilityText} style={{ position: 'relative', zIndex: 1 }}>
              <strong className="text-gradient-primary">{t("capabilities.layers")}</strong>
              <span>{t("capabilities.layers.desc")}</span>
            </div>
          </div>

          <div className={`${styles.capabilityItem} card-hover-effect`} style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: 10, right: 10, width: '180px', height: '40px', opacity: 0.8, pointerEvents: 'none' }}>
              <VideoTimelineAnim />
            </div>
            <div className={styles.capabilityIcon} style={{ position: 'relative', zIndex: 1 }}><FaClock /></div>
            <div className={styles.capabilityText} style={{ position: 'relative', zIndex: 1 }}>
              <strong className="text-gradient-primary">{t("capabilities.timeline")}</strong>
              <span>{t("capabilities.timeline.desc")}</span>
                </div>
            </div>

          <div className={`${styles.capabilityItem} card-hover-effect`} style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', opacity: 0.3, pointerEvents: 'none' }}>
              <NeuralNetworkGrid />
            </div>
            <div className={styles.capabilityIcon} style={{ position: 'relative', zIndex: 1 }}><HiSparkles /></div>
            <div className={styles.capabilityText} style={{ position: 'relative', zIndex: 1 }}>
              <strong className="text-gradient-primary">{t("capabilities.ai")}</strong>
              <span>{t("capabilities.ai.desc")}</span>
        </div>
          </div>

          <div className={`${styles.capabilityItem} card-hover-effect`} style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '140px', height: '50px', opacity: 0.4, pointerEvents: 'none' }}>
              <RenderingAnim />
            </div>
            <div className={styles.capabilityIcon} style={{ position: 'relative', zIndex: 1 }}><FaSave /></div>
            <div className={styles.capabilityText} style={{ position: 'relative', zIndex: 1 }}>
              <strong className="text-gradient-primary">{t("capabilities.export")}</strong>
              <span>{t("capabilities.export.desc")}</span>
          </div>
          </div>

          <div className={`${styles.capabilityItem} card-hover-effect`} style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '80px', height: '80px', opacity: 0.4, pointerEvents: 'none' }}>
              <EnginesAnim />
            </div>
            <div className={styles.capabilityIcon} style={{ position: 'relative', zIndex: 1 }}><FaPalette /></div>
            <div className={styles.capabilityText} style={{ position: 'relative', zIndex: 1 }}>
              <strong className="text-gradient-primary">{t("capabilities.engines")}</strong>
              <span>{t("capabilities.engines.desc")}</span>
                </div>
              </div>

          <div className={`${styles.capabilityItem} card-hover-effect`} style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '10px', right: '10px', width: '100px', height: '50px', opacity: 0.4, pointerEvents: 'none' }}>
              <ProvidersAnim />
            </div>
            <div className={styles.capabilityIcon} style={{ position: 'relative', zIndex: 1 }}><FaPlug /></div>
            <div className={styles.capabilityText} style={{ position: 'relative', zIndex: 1 }}>
              <strong className="text-gradient-primary">{t("capabilities.providers")}</strong>
              <span>{t("capabilities.providers.desc")}</span>
            </div>
          </div>
        </div>
      </section>

      <SectionConnector />

      {/* 适用场景 */}
      <section className={styles.usecasesSection} style={{ position: 'relative', overflow: 'hidden' }}>
        <FilmStripBg />
        <Heading className={`${styles.sectionTitle} text-gradient`} style={{ position: 'relative', zIndex: 1 }}>
          {t("usecases.title")}
          </Heading>

        <div className={styles.usecasesGrid} style={{ position: 'relative', zIndex: 1 }}>
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
        <EnergyFlowBg />
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
