"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import HeroVersionBadge from "@/components/HeroVersionBadge";
import { AiCardBg, LocalCardBg, EasyCardBg } from "@/components/FeatureIcons";
import { LayersAnim, ProvidersAnim, DownloadGuideAnim } from "@/components/AiVideoDecorations";
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
import RippleGrid from "@/components/RippleGrid";
import TiltCard from "@/components/TiltCard";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import CursorGlow from "@/components/CursorGlow";
import { GlowingOrb, FloatingParticles } from "@/components/GlowingOrb";
import TypeWriter from "@/components/TypeWriter";
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
  FaBook,
  FaWindows,
  FaApple,
  FaShieldAlt,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function Home() {
  const { t, language } = useLanguage();

  const promptExamples = language === 'zh' 
    ? ['创建一个粒子爆炸动画', '设计渐变文字标题', '制作数据可视化图表', '生成3D旋转Logo']
    : ['Create particle explosion', 'Design gradient title', 'Make data visualization', 'Generate 3D rotating logo'];

  return (
    <div className={styles.pageContainer}>
      {/* Global Cursor Glow */}
      <CursorGlow color="rgba(139, 92, 246, 0.15)" size={500} blur={120} opacity={0.5} />
      
      {/* Background Elements */}
      <div className={styles.backgroundLayer}>
        {/* RippleGrid */}
        <div className={styles.rippleContainer}>
          <RippleGrid 
            enableRainbow={false}
            gridColor="#6366f1"
            rippleIntensity={0.06}
            gridSize={10.0}
            gridThickness={15.0}
            fadeDistance={1.4}
            vignetteStrength={1.8}
            glowIntensity={0.2}
            opacity={0.5}
            mouseInteraction={true}
            mouseInteractionRadius={1.8}
          />
        </div>
        
        {/* Floating Orbs */}
        <GlowingOrb 
          className={styles.orb1} 
          color="rgba(139, 92, 246, 0.3)" 
          size={600} 
          blur={150}
        />
        <GlowingOrb 
          className={styles.orb2} 
          color="rgba(6, 182, 212, 0.2)" 
          size={500} 
          blur={120}
        />
        <GlowingOrb 
          className={styles.orb3} 
          color="rgba(139, 92, 246, 0.2)" 
          size={400} 
          blur={100}
        />
        
        {/* Floating Particles */}
        <FloatingParticles count={30} />
      </div>

      {/* ==================== HERO SECTION ==================== */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          {/* Left Content */}
          <div className={styles.heroText}>
            <ScrollReveal direction="down" delay={0} duration={800}>
              <div className={styles.betaBadge}>
                <span className={styles.badgeDot} />
                <span>{t("hero.badge")}</span>
                <HiSparkles className={styles.badgeIcon} />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100} duration={800}>
              <h1 className={styles.heroTitle}>
                <span className="text-gradient">{t("hero.title")}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} duration={800}>
              <p className={styles.heroSubtitle}>
                <span className="text-shimmer">{t("hero.subtitle")}</span>
              </p>
            </ScrollReveal>

            
            
            <ScrollReveal direction="up" delay={400} duration={800}>
              <p className={styles.heroDescription}>
                {t("hero.description")}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={500} duration={800}>
              <div className={styles.heroActions}>
                <a 
                  href="https://new.ui2v.com/download" 
                  className={styles.btnPrimary}
                  data-umami-event="download-click"
                  data-umami-event-position="hero"
                >
                  <span className={styles.btnGlow} />
                  <FaDownload className={styles.btnIcon} />
                  <span>{t("hero.download")}</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600} duration={800}>
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
            </ScrollReveal>

            <ScrollReveal direction="up" delay={700} duration={800}>
              <div className={styles.featureTags}>
                <div className={styles.tag}>
                  <FaHome />
                  <span>{t("hero.local")}</span>
                </div>
                <div className={styles.tag}>
                  <FaShieldAlt />
                  <span>{t("hero.privacy")}</span>
                </div>
                <div className={styles.tag}>
                  <FaRobot />
                  <span>{t("hero.ai")}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Preview */}
          <ScrollReveal direction="scale" delay={300} duration={1000} className={styles.heroPreview}>
            <TiltCard 
              className={styles.previewCard}
              tiltIntensity={6}
              glowIntensity={0.3}
              glowColor="rgba(139, 92, 246, 0.5)"
            >
              <Image
                src="/images/preview1.png"
                alt="Ui2v Interface Preview"
                width={1200}
                height={675}
                priority
                className={styles.previewImage}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0dSn/DwACwQHLqwH3TwAAAABJRU5ErkJggg=="
              />
              <div className={styles.previewOverlay} />
            </TiltCard>
            {/* <ScrollReveal direction="up" delay={300} duration={800}>
              <div className={styles.promptDemo}>
                <span className={styles.promptLabel}>AI Prompt:</span>
                <TypeWriter 
                  texts={promptExamples}
                  className={styles.promptText}
                  typingSpeed={60}
                  deletingSpeed={30}
                  pauseDuration={2500}
                />
              </div>
            </ScrollReveal> */}
            <div className={styles.versionBadgeWrapper}>
              <HeroVersionBadge />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== PROCESS FLOW ==================== */}
      <section className={styles.processSection}>
        <ScrollReveal direction="up" duration={800}>
          <ProcessFlowAnim />
        </ScrollReveal>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className={styles.featuresSection}>
        <ScrollReveal direction="up" duration={800}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className="text-gradient">{t("features.title")}</span>
            </h2>
            <p className={styles.sectionSubtitle}>{t("features.subtitle")}</p>
          </div>
        </ScrollReveal>

        <div className={styles.featuresGrid}>
          <ScrollReveal direction="up" delay={0} duration={700}>
            <TiltCard className={styles.featureCard} tiltIntensity={5} glowIntensity={0.2}>
              <AiCardBg />
              <div className={`${styles.featureIcon} ${styles.aiIcon}`}>
                <AiLogicIcon className="w-full h-full" />
              </div>
              <h3 className={styles.featureTitle}>
                <span className="text-gradient-primary">{t("features.ai.title")}</span>
              </h3>
              <p className={styles.featureDesc}>{t("features.ai.desc")}</p>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100} duration={700}>
            <TiltCard className={styles.featureCard} tiltIntensity={5} glowIntensity={0.2}>
              <LocalCardBg />
              <div className={`${styles.featureIcon} ${styles.localIcon}`}>
                <LocalLogicIcon className="w-full h-full" />
              </div>
              <h3 className={styles.featureTitle}>
                <span className="text-gradient-primary">{t("features.local.title")}</span>
              </h3>
              <p className={styles.featureDesc}>{t("features.local.desc")}</p>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200} duration={700}>
            <TiltCard className={styles.featureCard} tiltIntensity={5} glowIntensity={0.2}>
              <EasyCardBg />
              <div className={`${styles.featureIcon} ${styles.easyIcon}`}>
                <EasyLogicIcon className="w-full h-full" />
              </div>
              <h3 className={styles.featureTitle}>
                <span className="text-gradient-primary">{t("features.easy.title")}</span>
              </h3>
              <p className={styles.featureDesc}>{t("features.easy.desc")}</p>
            </TiltCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== CAPABILITIES SECTION ==================== */}
      <section className={styles.capabilitiesSection}>
        <ScrollReveal direction="up" duration={800}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className="text-gradient">{t("capabilities.title")}</span>
            </h2>
            <p className={styles.sectionSubtitle}>{t("capabilities.subtitle")}</p>
          </div>
        </ScrollReveal>

        <div className={styles.capabilitiesGrid}>
          {[
            { icon: FaChartBar, key: 'layers', Anim: LayersAnim },
            { icon: FaClock, key: 'timeline', Anim: TimelineEditorAnim },
            { icon: HiSparkles, key: 'ai', Anim: DiffusionGridAnim },
            { icon: FaSave, key: 'export', Anim: RenderingAnim },
            { icon: FaPalette, key: 'engines', Anim: ModelHubAnim },
            { icon: FaPlug, key: 'providers', Anim: ProvidersAnim },
          ].map((item, index) => (
            <ScrollReveal key={item.key} direction="up" delay={index * 80} duration={600}>
              <TiltCard className={styles.capabilityItem} tiltIntensity={4} glowIntensity={0.15}>
                <div className={styles.capabilityAnim}>
                  <item.Anim />
                </div>
                <div className={styles.capabilityIcon}>
                  <item.icon />
                </div>
                <div className={styles.capabilityText}>
                  <strong className="text-gradient-primary">{t(`capabilities.${item.key}`)}</strong>
                  <span>{t(`capabilities.${item.key}.desc`)}</span>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ==================== USE CASES SECTION ==================== */}
      <section className={styles.usecasesSection}>
        <ScrollReveal direction="up" duration={800}>
          <h2 className={styles.sectionTitle}>
            <span className="text-gradient">{t("usecases.title")}</span>
          </h2>
        </ScrollReveal>
        
        <div className={styles.usecasesGrid}>
          {[
            { icon: FaVideo, key: 'creator', Anim: SmartTrackingAnim },
            { icon: FaPalette, key: 'designer', Anim: DesignerAnim },
            { icon: FaChartLine, key: 'marketer', Anim: MarketerAnim },
            { icon: FaBook, key: 'educator', Anim: EducatorAnim },
          ].map((item, index) => (
            <ScrollReveal key={item.key} direction="up" delay={index * 100} duration={700}>
              <TiltCard className={styles.usecaseCard} tiltIntensity={5} glowIntensity={0.2}>
                <div className={styles.usecaseAnim}>
                  <item.Anim />
                </div>
                <div className={styles.usecaseIcon}>
                  <item.icon />
                </div>
                <strong className="text-gradient-primary">{t(`usecases.${item.key}`)}</strong>
                <span>{t(`usecases.${item.key}.desc`)}</span>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <DownloadGuideAnim />
        </div>
        
        <ScrollReveal direction="scale" duration={800}>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaMain}>
              <h2 className={styles.ctaTitle}>
                <span className="text-shimmer">{t("cta.title")}</span>
              </h2>

              <a 
                href="https://new.ui2v.com/download" 
                className={styles.ctaDownloadBtn}
                data-umami-event="download-click"
                data-umami-event-position="cta"
              >
                <span className={styles.ctaBtnGlow} />
                <FaDownload className={styles.downloadIcon} />
                <div className={styles.downloadText}>
                  <span className={styles.downloadLabel}>{t("cta.download")}</span>
                  <span className={styles.downloadSize}>{t("cta.size")}</span>
                </div>
              </a>

              <div className={styles.ctaDetails}>
                <span>{t("cta.requirement")}</span>
              </div>

              <div className={styles.ctaMacNotice}>
                {t("cta.mac")}
              </div>
            </div>

            <div className={styles.ctaFeatures}>
              {[
                { icon: FaHome, key: 'local' },
                { icon: FaBolt, key: 'fast' },
                { icon: FaRobot, key: 'ai' },
                { icon: HiSparkles, key: 'easy' },
              ].map((item) => (
                <div key={item.key} className={styles.ctaFeatureItem}>
                  <div className={styles.ctaFeatureIcon}>
                    <item.icon />
                  </div>
                  <span>{t(`cta.features.${item.key}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
