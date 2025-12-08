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
import { LayersAnim, ProvidersAnim, DownloadGuideAnim, GlobalAmbientBg } from "@/components/AiVideoDecorations";
import { 
  TimelineEditorAnim, 
  ModelHubAnim, 
  DiffusionGridAnim, 
  RenderingAnim, 
  SmartTrackingAnim, 
  DesignerAnim, 
  MarketerAnim, 
  EducatorAnim 
} from "@/components/NewAiDecorations";
import { ProcessFlowAnim } from "@/components/ProcessFlowAnim";
import { AiLogicIcon, LocalLogicIcon, EasyLogicIcon } from "@/components/HeroFlowAnim";
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
  FaBook,
  FaWindows,
  FaApple,
  FaShieldAlt,
  FaCheckCircle
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className={`${styles.pageContainer} bg-dot-grid`}>
      {/* <GlobalAmbientBg /> */}
      {/* Hero Section - 全新设计 */}
      <section className={styles.heroSection}>
        {/* <HeroFlowAnim /> */}
        <div className={styles.heroContent}>
          {/* 左侧内容区 */}
          <div className={styles.heroText}>
            <div className={styles.betaBadge}>
              <span className={styles.badgeDot}></span>
              {t("hero.badge")}
            </div>

            <Heading className={`${styles.heroTitle} text-gradient`} style={{ position: 'relative', display: 'inline-block' }}>
              {t("hero.title")}
              <HiSparkles 
                className="hero-decor-star"
                style={{ 
                  position: 'absolute', 
                  top: '-20px', 
                  right: '-24px', 
                  color: '#FCD34D',
                  zIndex: -1,
                  opacity: 0.8,
                  fontSize: '32px'
                }}
              />
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
            <div className={styles.heroActions} style={{ position: 'relative' }}>
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
                <FaWindows />
                <span>{t("hero.platform")}</span>
                </div>
              <div className={`${styles.platformItem} ${styles.macComing}`}>
                <FaApple />
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
                <FaShieldAlt style={{ fontSize: '0.9em', opacity: 0.8 }} />
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
      </section>

      {/* 核心特性 - 精简版 */}
      <section className={styles.featuresSection} style={{ position: 'relative' }}>
        {/* Process Flow Animation */}
        <div style={{ marginBottom: '80px' }}>
          <ProcessFlowAnim />
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
              <AiLogicIcon className="w-full h-full" />
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
              <LocalLogicIcon className="w-full h-full" />
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
              <EasyLogicIcon className="w-full h-full" />
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
      <section className={styles.capabilitiesSection} style={{ position: 'relative', overflow: 'hidden' }}>
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
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '140px', height: '70px', opacity: 0.3, pointerEvents: 'none' }}>
              <LayersAnim />
            </div>
            <div className={styles.capabilityIcon} style={{ position: 'relative', zIndex: 1 }}><FaChartBar /></div>
            <div className={styles.capabilityText} style={{ position: 'relative', zIndex: 1 }}>
              <strong className="text-gradient-primary">{t("capabilities.layers")}</strong>
              <span>{t("capabilities.layers.desc")}</span>
            </div>
          </div>

          <div className={`${styles.capabilityItem} card-hover-effect`} style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '160px', height: '60px', opacity: 0.4, pointerEvents: 'none' }}>
              <TimelineEditorAnim />
            </div>
            <div className={styles.capabilityIcon} style={{ position: 'relative', zIndex: 1 }}><FaClock /></div>
            <div className={styles.capabilityText} style={{ position: 'relative', zIndex: 1 }}>
              <strong className="text-gradient-primary">{t("capabilities.timeline")}</strong>
              <span>{t("capabilities.timeline.desc")}</span>
            </div>
          </div>

          <div className={`${styles.capabilityItem} card-hover-effect`} style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', opacity: 0.2, pointerEvents: 'none' }}>
              <DiffusionGridAnim />
            </div>
            <div className={styles.capabilityIcon} style={{ position: 'relative', zIndex: 1 }}><HiSparkles /></div>
            <div className={styles.capabilityText} style={{ position: 'relative', zIndex: 1 }}>
              <strong className="text-gradient-primary">{t("capabilities.ai")}</strong>
              <span>{t("capabilities.ai.desc")}</span>
            </div>
          </div>

          <div className={`${styles.capabilityItem} card-hover-effect`} style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '140px', height: '60px', opacity: 0.3, pointerEvents: 'none' }}>
               <RenderingAnim />
            </div>
            <div className={styles.capabilityIcon} style={{ position: 'relative', zIndex: 1 }}><FaSave /></div>
            <div className={styles.capabilityText} style={{ position: 'relative', zIndex: 1 }}>
              <strong className="text-gradient-primary">{t("capabilities.export")}</strong>
              <span>{t("capabilities.export.desc")}</span>
            </div>
          </div>

          <div className={`${styles.capabilityItem} card-hover-effect`} style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '140px', height: '140px', opacity: 0.15, pointerEvents: 'none' }}>
              <ModelHubAnim />
            </div>
            <div className={styles.capabilityIcon} style={{ position: 'relative', zIndex: 1 }}><FaPalette /></div>
            <div className={styles.capabilityText} style={{ position: 'relative', zIndex: 1 }}>
              <strong className="text-gradient-primary">{t("capabilities.engines")}</strong>
              <span>{t("capabilities.engines.desc")}</span>
            </div>
          </div>

          <div className={`${styles.capabilityItem} card-hover-effect`} style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '10px', right: '10px', width: '100px', height: '50px', opacity: 0.3, pointerEvents: 'none' }}>
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

      {/* 适用场景 */}
      <section className={styles.usecasesSection} style={{ position: 'relative', overflow: 'hidden' }}>
        <Heading className={`${styles.sectionTitle} text-gradient`} style={{ position: 'relative', zIndex: 1 }}>
          {t("usecases.title")}
          </Heading>
        
        <div className={styles.usecasesGrid} style={{ position: 'relative', zIndex: 1 }}>
          <div className={`${styles.usecaseCard} card-hover-effect`} style={{ position: 'relative', overflow: 'hidden' }}>
            <SmartTrackingAnim style={{ position: 'absolute', top: 0, left: 0, opacity: 0.1, pointerEvents: 'none' }} />
            <div className={`${styles.usecaseIcon} animate-float`}><FaVideo /></div>
            <strong className="text-gradient-primary">{t("usecases.creator")}</strong>
            <span>{t("usecases.creator.desc")}</span>
        </div>

          <div className={`${styles.usecaseCard} card-hover-effect`} style={{ position: 'relative', overflow: 'hidden' }}>
            <DesignerAnim style={{ position: 'absolute', top: 0, left: 0, opacity: 0.15, pointerEvents: 'none' }} />
            <div className={`${styles.usecaseIcon} animate-float`}><FaPalette /></div>
            <strong className="text-gradient-primary">{t("usecases.designer")}</strong>
            <span>{t("usecases.designer.desc")}</span>
        </div>

          <div className={`${styles.usecaseCard} card-hover-effect`} style={{ position: 'relative', overflow: 'hidden' }}>
            <MarketerAnim style={{ position: 'absolute', top: 0, left: 0, opacity: 0.15, pointerEvents: 'none' }} />
            <div className={`${styles.usecaseIcon} animate-float`}><FaChartLine /></div>
            <strong className="text-gradient-primary">{t("usecases.marketer")}</strong>
            <span>{t("usecases.marketer.desc")}</span>
          </div>

          <div className={`${styles.usecaseCard} card-hover-effect`} style={{ position: 'relative', overflow: 'hidden' }}>
            <EducatorAnim style={{ position: 'absolute', top: 0, left: 0, opacity: 0.15, pointerEvents: 'none' }} />
            <div className={`${styles.usecaseIcon} animate-float`}><FaBook /></div>
            <strong className="text-gradient-primary">{t("usecases.educator")}</strong>
            <span>{t("usecases.educator.desc")}</span>
          </div>
        </div>
      </section>

      {/* CTA Section - 全新设计 */}
      <section className={styles.ctaSection} style={{ position: 'relative', overflow: 'hidden' }}>

        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', opacity: 0.3, pointerEvents: 'none' }}>
          <DownloadGuideAnim />
        </div>
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
