"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Footer.module.css";
import Image from "next/image";
import { FooterDecorBg } from "./AiVideoDecorations";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <FooterDecorBg />
      
      {/* Top gradient line */}
      <div className={styles.topLine} />
      
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.brand}>
            <Image
              src="/logo.svg"
              alt="Ui2v"
              width={24}
              height={24}
              className={styles.logo}
            />
            <span className={styles.brandName}>Ui2v</span>
          </div>
          <span className={styles.divider}>·</span>
          <div className={styles.copyright}>
            © {currentYear} Ui2v. All rights reserved.
          </div>
        </div>

        <div className={styles.rightSection}>
          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Discord">
              <FaDiscord />
            </a>
            <a href="#" className={styles.socialLink} aria-label="GitHub">
              <FaGithub />
            </a>
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
