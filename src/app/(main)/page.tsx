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
import styles from "./page.module.css";

export default function Home() {
  const { t } = useLanguage();

    return (
    <div className={styles.pageContainer}>
      {/* Hero Section - 全新设计 */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          {/* 左侧内容区 */}
          <div className={styles.heroText}>
            <div className={styles.betaBadge}>
              <span className={styles.badgeDot}></span>
              {t("hero.badge")}
            </div>

            <Heading className={styles.heroTitle}>
            {t("hero.title")}
          </Heading>

            <Text className={styles.heroSubtitle}>
            {t("hero.subtitle")}
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
                <span className={styles.btnIcon}>⬇</span>
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

            {/* 版本信息徽章 */}
            <HeroVersionBadge />
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
          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.aiIcon}`}>
              🤖
        </div>
            <Heading className={styles.featureTitle}>
              {t("features.ai.title")}
            </Heading>
            <Text className={styles.featureDesc}>
              {t("features.ai.desc")}
            </Text>
          </div>

          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.localIcon}`}>
              🏠
            </div>
            <Heading className={styles.featureTitle}>
              {t("features.local.title")}
          </Heading>
            <Text className={styles.featureDesc}>
              {t("features.local.desc")}
          </Text>
          </div>

          <div className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.easyIcon}`}>
              ⚡
          </div>
            <Heading className={styles.featureTitle}>
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
          <div className={styles.capabilityItem}>
            <div className={styles.capabilityIcon}>📊</div>
            <div className={styles.capabilityText}>
              <strong>{t("capabilities.layers")}</strong>
              <span>{t("capabilities.layers.desc")}</span>
            </div>
          </div>

          <div className={styles.capabilityItem}>
            <div className={styles.capabilityIcon}>⏱️</div>
            <div className={styles.capabilityText}>
              <strong>{t("capabilities.timeline")}</strong>
              <span>{t("capabilities.timeline.desc")}</span>
                </div>
            </div>

          <div className={styles.capabilityItem}>
            <div className={styles.capabilityIcon}>✨</div>
            <div className={styles.capabilityText}>
              <strong>{t("capabilities.ai")}</strong>
              <span>{t("capabilities.ai.desc")}</span>
        </div>
          </div>

          <div className={styles.capabilityItem}>
            <div className={styles.capabilityIcon}>💾</div>
            <div className={styles.capabilityText}>
              <strong>{t("capabilities.export")}</strong>
              <span>{t("capabilities.export.desc")}</span>
          </div>
          </div>

          <div className={styles.capabilityItem}>
            <div className={styles.capabilityIcon}>🎨</div>
            <div className={styles.capabilityText}>
              <strong>{t("capabilities.engines")}</strong>
              <span>{t("capabilities.engines.desc")}</span>
                </div>
              </div>

          <div className={styles.capabilityItem}>
            <div className={styles.capabilityIcon}>🔌</div>
            <div className={styles.capabilityText}>
              <strong>{t("capabilities.providers")}</strong>
              <span>{t("capabilities.providers.desc")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 适用场景 */}
      <section className={styles.usecasesSection}>
        <Heading className={styles.sectionTitle}>
          {t("usecases.title")}
          </Heading>

        <div className={styles.usecasesGrid}>
          <div className={styles.usecaseCard}>
            <div className={styles.usecaseIcon}>🎬</div>
            <strong>{t("usecases.creator")}</strong>
            <span>{t("usecases.creator.desc")}</span>
        </div>

          <div className={styles.usecaseCard}>
            <div className={styles.usecaseIcon}>🎨</div>
            <strong>{t("usecases.designer")}</strong>
            <span>{t("usecases.designer.desc")}</span>
        </div>

          <div className={styles.usecaseCard}>
            <div className={styles.usecaseIcon}>📈</div>
            <strong>{t("usecases.marketer")}</strong>
            <span>{t("usecases.marketer.desc")}</span>
          </div>

          <div className={styles.usecaseCard}>
            <div className={styles.usecaseIcon}>📚</div>
            <strong>{t("usecases.educator")}</strong>
            <span>{t("usecases.educator.desc")}</span>
          </div>
        </div>
      </section>

      {/* CTA Section - 全新设计 */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaMain}>
            <Heading className={styles.ctaTitle}>
            {t("cta.title")}
        </Heading>

            <a 
              href="https://new.ui2v.com/download" 
              className={styles.ctaDownloadBtn}
              data-umami-event="download-click"
              data-umami-event-position="cta"
            >
              <span className={styles.downloadIcon}>⬇</span>
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
              <div className={styles.ctaFeatureIcon}>🏠</div>
              <span>{t("cta.features.local")}</span>
            </div>
            <div className={styles.ctaFeatureItem}>
              <div className={styles.ctaFeatureIcon}>⚡</div>
              <span>{t("cta.features.fast")}</span>
            </div>
            <div className={styles.ctaFeatureItem}>
              <div className={styles.ctaFeatureIcon}>🤖</div>
              <span>{t("cta.features.ai")}</span>
            </div>
            <div className={styles.ctaFeatureItem}>
              <div className={styles.ctaFeatureIcon}>✨</div>
              <span>{t("cta.features.easy")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerPlatforms}>
            <Text className={styles.footerLabel}>{t("footer.platform")}</Text>
            <div className={styles.footerPlatformList}>
              <span className={`${styles.platformBadge} ${styles.active}`}>{t("footer.windows")}</span>
              <span className={`${styles.platformBadge} ${styles.coming}`}>{t("footer.mac")}</span>
            </div>
          </div>
          
          <Text className={styles.footerCopyright}>
          {t("footer.copyright")}
        </Text>
        </div>
      </footer>
    </div>
  );
}
