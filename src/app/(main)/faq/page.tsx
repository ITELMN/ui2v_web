"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./page.module.css";
import { HiLightBulb } from "react-icons/hi";
import { FaBolt, FaWrench, FaComments } from "react-icons/fa";
import CursorGlow from "@/components/CursorGlow";
import { GlowingOrb, FloatingParticles } from "@/components/GlowingOrb";
import RippleGrid from "@/components/RippleGrid";

export const dynamic = 'force-dynamic';

export default function FAQPage() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqCategories = [
    {
      title: t("faq.category.general"),
      icon: <HiLightBulb />,
      faqs: [
        { id: 1, question: t("faq.q1"), answer: t("faq.a1") },
        { id: 2, question: t("faq.q2"), answer: t("faq.a2") },
        { id: 3, question: t("faq.q3"), answer: t("faq.a3") },
      ]
    },
    {
      title: t("faq.category.usage"),
      icon: <FaBolt />,
      faqs: [
        { id: 4, question: t("faq.q4"), answer: t("faq.a4") },
        { id: 5, question: t("faq.q5"), answer: t("faq.a5") },
        { id: 6, question: t("faq.q6"), answer: t("faq.a6") },
      ]
    },
    {
      title: t("faq.category.technical"),
      icon: <FaWrench />,
      faqs: [
        { id: 7, question: t("faq.q7"), answer: t("faq.a7") },
        { id: 8, question: t("faq.q8"), answer: t("faq.a8") },
        { id: 9, question: t("faq.q9"), answer: t("faq.a9") },
      ]
    },
  ];

  const allFaqs = faqCategories.flatMap(cat => cat.faqs);

  const handleToggle = (index: number) => {
    console.log('Toggling index:', index, 'Current openIndex:', openIndex);
    if (openIndex === index) {
      setOpenIndex(-1); // 关闭当前项
    } else {
      setOpenIndex(index); // 打开新项
    }
  };

  return (
    <div className={styles.faqContainer}>
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

      <div className={styles.faqBackNav}>
        <a href="/" className={styles.backButton}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>{t("faq.back")}</span>
        </a>
      </div>

      <div className={styles.faqHeader}>
        <h1 className={styles.faqMainTitle}>{t("faq.title")}</h1>
        <p className={styles.faqSubtitle}>{t("faq.subtitle")}</p>
      </div>

      <div className={styles.faqContent}>
        {faqCategories.map((category, catIndex) => (
          <div key={catIndex} className={styles.faqCategory}>
            <div className={styles.categoryHeader}>
              <span className={styles.categoryIcon}>{category.icon}</span>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
            </div>

            <div className={styles.faqList}>
              {category.faqs.map((faq) => {
                const globalIndex = allFaqs.findIndex(f => f.id === faq.id);
                const isOpen = openIndex === globalIndex;
                return (
                  <div key={faq.id} className={styles.faqItem}>
                    <div className={styles.faqQuestionWrapper}>
                      <div className={styles.faqQuestionContent}>
                        <div className={styles.faqQuestionText}>
                          {faq.question}
                        </div>
                        <button
                          className={styles.faqIconButton}
                          onClick={() => handleToggle(globalIndex)}
                          type="button"
                          aria-label={isOpen ? "折叠" : "展开"}
                        >
                          <div className={`${styles.faqIcon} ${isOpen ? styles.open : ""}`}>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <line x1="12" y1="8" x2="12" y2="16" className={`${styles.verticalLine} ${isOpen ? styles.hidden : ""}`} />
                              <line x1="8" y1="12" x2="16" y2="12" />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className={`${styles.faqAnswer} ${isOpen ? styles.open : ""}`}>
                      <div className={styles.faqAnswerContent}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div className={styles.faqContact}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}><FaComments /></div>
            <h3 className={styles.contactTitle}>{t("faq.contact.title")}</h3>
            <p className={styles.contactDesc}>{t("faq.contact.desc")}</p>
            <a 
              href="https://new.ui2v.com/download" 
              className={styles.contactButton}
              data-umami-event="faq-contact-click"
            >
              {t("faq.contact.button")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
