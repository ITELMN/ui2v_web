"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Heading, Text } from "@once-ui-system/core";

export default function FAQPage() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqCategories = [
    {
      title: t("faq.category.general"),
      icon: "💡",
      faqs: [
        { id: 1, question: t("faq.q1"), answer: t("faq.a1") },
        { id: 2, question: t("faq.q2"), answer: t("faq.a2") },
        { id: 3, question: t("faq.q3"), answer: t("faq.a3") },
      ]
    },
    {
      title: t("faq.category.usage"),
      icon: "⚡",
      faqs: [
        { id: 4, question: t("faq.q4"), answer: t("faq.a4") },
        { id: 5, question: t("faq.q5"), answer: t("faq.a5") },
        { id: 6, question: t("faq.q6"), answer: t("faq.a6") },
      ]
    },
    {
      title: t("faq.category.technical"),
      icon: "🔧",
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
    <div className="faq-container">
      <div className="faq-back-nav">
        <a href="/" className="back-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>{t("faq.back")}</span>
        </a>
      </div>

      <div className="faq-header">
        <Heading className="faq-main-title">{t("faq.title")}</Heading>
        <Text className="faq-subtitle">{t("faq.subtitle")}</Text>
      </div>

      <div className="faq-content">
        {faqCategories.map((category, catIndex) => (
          <div key={catIndex} className="faq-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h2 className="category-title">{category.title}</h2>
            </div>

            <div className="faq-list">
              {category.faqs.map((faq) => {
                const globalIndex = allFaqs.findIndex(f => f.id === faq.id);
                const isOpen = openIndex === globalIndex;
                return (
                  <div key={faq.id} className="faq-item">
                    <div className="faq-question-wrapper">
                      <div className="faq-question-content">
                        <div className="faq-question-text">
                          {faq.question}
                        </div>
                        <button
                          className="faq-icon-button"
                          onClick={() => handleToggle(globalIndex)}
                          type="button"
                          aria-label={isOpen ? "折叠" : "展开"}
                        >
                          <div className={`faq-icon ${isOpen ? "open" : ""}`}>
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
                              <line x1="12" y1="8" x2="12" y2="16" className={isOpen ? "vertical-line hidden" : "vertical-line"} />
                              <line x1="8" y1="12" x2="16" y2="12" />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                      <div className="faq-answer-content">
                        <Text>{faq.answer}</Text>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div className="faq-contact">
          <div className="contact-card">
            <div className="contact-icon">💬</div>
            <h3 className="contact-title">{t("faq.contact.title")}</h3>
            <p className="contact-desc">{t("faq.contact.desc")}</p>
            <a 
              href="https://new.ui2v.com/download" 
              className="contact-button"
              data-umami-event="faq-contact-click"
            >
              {t("faq.contact.button")}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-container {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(180deg, #0a0d14 0%, #121621 50%, #0a0d14 100%);
          padding: 120px 24px 80px;
          position: relative;
          z-index: 1;
        }

        .faq-back-nav {
          max-width: 1200px;
          margin: 0 auto 32px;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 10px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .back-button:hover {
          background: rgba(139, 92, 246, 0.15);
          border-color: rgba(139, 92, 246, 0.4);
          color: #fff;
          transform: translateX(-4px);
        }

        .back-button svg {
          transition: transform 0.3s ease;
        }

        .back-button:hover svg {
          transform: translateX(-2px);
        }

        .faq-header {
          max-width: 1200px;
          margin: 0 auto 80px;
          text-align: center;
        }

        .faq-main-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 16px 0;
        }

        .faq-subtitle {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
          max-width: 600px;
          margin: 0 auto;
        }

        .faq-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .faq-category {
          margin-bottom: 64px;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid rgba(139, 92, 246, 0.2);
        }

        .category-icon {
          font-size: 28px;
          line-height: 1;
        }

        .category-title {
          font-size: 24px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: rgba(139, 92, 246, 0.4);
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.1);
        }

        .faq-question-wrapper {
          width: 100%;
          padding: 28px 32px;
          transition: background 0.2s ease;
          position: relative;
          z-index: 2;
        }

        .faq-question-wrapper:hover {
          background: rgba(139, 92, 246, 0.05);
        }

        .faq-question-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .faq-icon-button {
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .faq-icon-button:active {
          transform: scale(0.95);
        }

        .faq-question-text {
          flex: 1;
          font-size: 18px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.5;
          user-select: text;
          -webkit-user-select: text;
        }

        .faq-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(139, 92, 246, 0.15);
          border-radius: 50%;
          transition: all 0.3s ease;
          color: #a78bfa;
        }

        .faq-icon.open {
          background: rgba(139, 92, 246, 0.25);
        }

        .faq-icon svg {
          transition: all 0.3s ease;
        }

        .faq-icon .vertical-line {
          transition: opacity 0.3s ease;
        }

        .faq-icon .vertical-line.hidden {
          opacity: 0;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease-in-out, opacity 0.3s ease;
          opacity: 0;
        }

        .faq-answer.open {
          max-height: 2000px;
          opacity: 1;
        }

        .faq-answer-content {
          padding: 0 32px 32px;
          color: rgba(255, 255, 255, 0.75);
          font-size: 15px;
          line-height: 1.8;
          user-select: text;
          -webkit-user-select: text;
        }

        .faq-answer-content :global(p) {
          margin: 0;
          user-select: text;
          -webkit-user-select: text;
        }

        .faq-contact {
          margin-top: 80px;
          padding-top: 80px;
          border-top: 1px solid rgba(139, 92, 246, 0.2);
        }

        .contact-card {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(109, 40, 217, 0.05) 100%);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 24px;
          padding: 48px 32px;
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          border-color: rgba(139, 92, 246, 0.5);
          box-shadow: 0 8px 32px rgba(139, 92, 246, 0.15);
          transform: translateY(-4px);
        }

        .contact-icon {
          font-size: 48px;
          margin-bottom: 24px;
          display: inline-block;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .contact-title {
          font-size: 28px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
          margin: 0 0 12px 0;
        }

        .contact-desc {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
          margin: 0 0 32px 0;
        }

        .contact-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.4);
        }

        .contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(139, 92, 246, 0.6);
        }

        @media (max-width: 768px) {
          .faq-container {
            padding: 100px 16px 60px;
          }

          .faq-header {
            margin-bottom: 60px;
          }

          .faq-subtitle {
            font-size: 16px;
          }

          .faq-category {
            margin-bottom: 48px;
          }

          .category-header {
            margin-bottom: 20px;
          }

          .category-icon {
            font-size: 24px;
          }

          .category-title {
            font-size: 20px;
          }

          .faq-question-wrapper {
            padding: 24px 20px;
          }

          .faq-question-content {
            gap: 16px;
          }

          .faq-question-text {
            font-size: 16px;
          }

          .faq-answer-content {
            padding: 0 20px 24px;
            font-size: 14px;
          }

          .faq-icon {
            width: 36px;
            height: 36px;
          }

          .faq-contact {
            margin-top: 60px;
            padding-top: 60px;
          }

          .contact-card {
            padding: 40px 24px;
          }

          .contact-icon {
            font-size: 40px;
            margin-bottom: 20px;
          }

          .contact-title {
            font-size: 24px;
          }

          .contact-desc {
            font-size: 15px;
          }

          .contact-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

