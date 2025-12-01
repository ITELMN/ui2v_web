"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Footer.module.css";
import Image from "next/image";
import { FooterDecorBg } from "./AiVideoDecorations";
import { FaTwitter, FaDiscord, FaGithub, FaYoutube } from "react-icons/fa";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} style={{ position: 'relative', overflow: 'hidden' }}>
      <FooterDecorBg />
      <div className={styles.container} style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.leftSection}>
          <div className={styles.brand}>
            <Image
              src="/logo.svg"
              alt="Ui2v"
              width={20}
              height={20}
              className={styles.logo}
            />
            <span className={`${styles.brandName} text-gradient`}>Ui2v</span>
          </div>
          <span className={styles.divider}>/</span>
          <div className={styles.copyright}>
            © {currentYear} Ui2v. All rights reserved.
          </div>
        </div>

        <div className={styles.rightSection}>
          {/* Social Links */}
          <div style={{ display: 'flex', gap: '16px', marginRight: '24px' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}><FaTwitter size={14} /></a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#5865F2'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}><FaDiscord size={14} /></a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}><FaGithub size={14} /></a>
          </div>

          <div className={styles.platformInfo}>
            <span className={styles.platformLabel}>{t("footer.platform")}</span>
            <div className={styles.badges}>
              <span className={`${styles.badge} ${styles.active}`}>{t("footer.windows")}</span>
              <span className={`${styles.badge} ${styles.coming}`}>{t("footer.mac")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
