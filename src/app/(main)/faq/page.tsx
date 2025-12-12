"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./page.module.css";
import { HiLightBulb } from "react-icons/hi";
import { FaBolt, FaWrench, FaComments } from "react-icons/fa";

export const dynamic = 'force-dynamic';

export default function FAQPage() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div>Loading...</div>;
  }

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
