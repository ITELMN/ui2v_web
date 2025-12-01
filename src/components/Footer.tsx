"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Footer.module.css";
import Image from "next/image";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
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
