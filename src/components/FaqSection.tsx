import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export const FaqSection: React.FC = () => {
  const { faqs } = portfolioData;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: 'var(--bg-warm-tint)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        <div className="section-header">
          <span className="sub-caption">Common Questions</span>
          <h2>Hiring & Collaboration FAQs</h2>
          <p>
            Key details for hiring managers, operations directors, and executives looking to onboard Wenelove.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: isOpen ? '1.5px solid var(--green-800)' : '1px solid var(--border-subtle)',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="faq-trigger-btn"
                  id={`faq-btn-${idx}`}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1rem, 3.2vw, 1.15rem)',
                      fontWeight: 600,
                      color: isOpen ? 'var(--green-900)' : 'var(--text-heading)',
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--green-100)' : 'var(--bg-warm-tint)',
                      color: isOpen ? 'var(--green-900)' : 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-content-box">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-trigger-btn {
          width: 100%;
          padding: 1.35rem 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          text-align: left;
          cursor: pointer;
          background: transparent;
          border: none;
        }
        .faq-content-box {
          padding: 0 1.75rem 1.5rem 1.75rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.7;
          border-top: 1px solid var(--border-subtle);
          padding-top: 1rem;
        }
        @media (max-width: 640px) {
          .faq-trigger-btn {
            padding: 1.1rem 1rem !important;
          }
          .faq-content-box {
            padding: 0 1rem 1.25rem 1rem !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  );
};
