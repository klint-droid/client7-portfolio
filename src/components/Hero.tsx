import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  IconStar,
  IconArrowRight,
  IconDownload,
  IconUsers,
  IconMapPin,
  IconClock,
  IconCheckCircle,
} from './Icons';
import { scrollToSection } from '../utils/scroll';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const { personal, metrics } = portfolioData;

  const handlePrintCV = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  return (
    <section
      id="top"
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '3.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div>
            {/* Availability Status Badge */}
            <div style={{ marginBottom: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              <span className="pill-badge green">
                <span
                  className="pulse-dot"
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--green-700)',
                    display: 'inline-block',
                  }}
                />
                <span>Available for Remote Roles Worldwide</span>
              </span>
              <span className="pill-badge gold">
                <IconStar size={13} style={{ color: 'var(--gold-600)' }} />
                <span>10+ Years Enterprise Support</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em',
                fontSize: 'clamp(2.1rem, 5.5vw, 3.8rem)',
                lineHeight: 1.15,
              }}
            >
              Hi, I'm <span style={{ color: 'var(--green-900)' }}>{personal.name}</span>
            </h1>

            {/* Sub-headline */}
            <div
              style={{
                fontSize: 'clamp(0.95rem, 3.5vw, 1.15rem)',
                fontWeight: 600,
                color: 'var(--green-850)',
                marginBottom: '1.25rem',
                lineHeight: 1.45,
              }}
            >
              Virtual Assistant • Customer Support Specialist • Technical Support Professional • Administrative Support
            </div>

            {/* Bio Narrative */}
            <p
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.72,
                color: 'var(--text-secondary)',
                marginBottom: '1.75rem',
                maxWidth: '620px',
              }}
            >
              Results-driven <strong>Customer Support & Technical Support Leader</strong> with{' '}
              <strong style={{ color: 'var(--text-heading)' }}>over 10 years of experience</strong> spanning
              enterprise banking applications (<strong>CreditLens & LoanIQ</strong> supporting Asian Development Bank),
              large-scale <strong>service desk supervision over 50+ staff</strong> at ABS-CBN, and high-touch{' '}
              <strong>executive virtual assistance</strong>.
            </p>

            {/* Key Action Buttons */}
            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenContact}
                id="hero-hire-btn"
              >
                <span>Schedule Consultation</span>
                <IconArrowRight size={16} />
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => scrollToSection('services')}
                id="hero-services-btn"
              >
                <span>Explore Capabilities</span>
              </button>

              <button
                type="button"
                className="btn hero-save-btn"
                onClick={handlePrintCV}
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--green-900)',
                  border: '1px solid var(--border-subtle)',
                }}
                title="Print or export CV to PDF"
                id="hero-save-cv-btn"
              >
                <IconDownload size={16} />
                <span>Save CV</span>
              </button>
            </div>

            {/* Location & Remote Assurance Line */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                fontSize: '0.84rem',
                color: 'var(--text-tertiary)',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <IconMapPin size={15} style={{ color: 'var(--gold-600)' }} />
                <span>{personal.location}</span>
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <IconClock size={15} style={{ color: 'var(--green-700)' }} />
                <span>Flexible to US, UK, APAC & EMEA Shifts</span>
              </span>
            </div>
          </div>

          {/* Right Column: Luxury Executive Credential Showcase Card (NO AI Photos) */}
          <div className="hero-card-col">
            {/* Background Decorative Angled Frame */}
            <div className="hero-angled-frame" />

            {/* Main Executive Credential Card */}
            <div className="hero-executive-card">
              {/* Card Top Brand & Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      border: '1px solid var(--gold-400)',
                      color: 'var(--gold-400)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-serif)',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                      flexShrink: 0,
                    }}
                  >
                    WD
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '1.05rem', color: '#ffffff', display: 'block' }}>
                      {personal.name}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--gold-400)', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>
                      Executive Portfolio
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(34, 197, 94, 0.15)',
                    border: '1px solid rgba(34, 197, 94, 0.4)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '9999px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: '#4ade80',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    flexShrink: 0,
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4ade80' }} />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Core Executive Specializations */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1rem',
                  padding: '1.15rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gold-400)', fontWeight: 700, marginBottom: '0.55rem' }}>
                  Enterprise Specializations
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-on-dark-muted)' }}>
                    <IconCheckCircle size={15} style={{ color: '#4ade80', flexShrink: 0 }} />
                    <span>L2 Banking Systems Support (CreditLens, LoanIQ)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-on-dark-muted)' }}>
                    <IconCheckCircle size={15} style={{ color: '#4ade80', flexShrink: 0 }} />
                    <span>IT Service Desk Operations (50+ Staff Led)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-on-dark-muted)' }}>
                    <IconCheckCircle size={15} style={{ color: '#4ade80', flexShrink: 0 }} />
                    <span>Executive Calendar & Inbox Zero Triage</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-on-dark-muted)' }}>
                    <IconCheckCircle size={15} style={{ color: '#4ade80', flexShrink: 0 }} />
                    <span>ITIL Incident, Problem & Quality Assurance</span>
                  </li>
                </ul>
              </div>

              {/* Bottom Quote & Trust Seal */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-on-dark-muted)' }}>Operating Base</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#ffffff' }}>Manila PHT • Global Shifts</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--gold-400)', fontWeight: 600 }}>10+ YEARS</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff' }}>PROVEN TRACK RECORD</div>
                </div>
              </div>
            </div>

            {/* Floating Badge 1: Top Right on desktop, stacked on mobile */}
            <div className="floating-badge badge-top-right">
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--gold-100)',
                  color: 'var(--gold-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <IconStar size={17} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                  10+ Years Track Record
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                  Banking & Enterprise IT Support
                </div>
              </div>
            </div>

            {/* Floating Badge 2: Bottom Left on desktop, stacked on mobile */}
            <div className="floating-badge badge-bottom-left">
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#4ade80',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <IconUsers size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em' }}>
                  50+ IT Professionals
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-on-dark-muted)' }}>
                  Supervised at ABS-CBN Desk
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Banner matching Lauren reference */}
        <div className="metrics-grid">
          {metrics.map((m, idx) => (
            <div
              key={m.label}
              style={{
                borderRight: idx < metrics.length - 1 ? '1px solid var(--border-subtle)' : 'none',
              }}
              className="metric-item"
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.4rem',
                  fontWeight: 700,
                  color: 'var(--green-900)',
                  lineHeight: 1.1,
                  marginBottom: '0.35rem',
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  color: 'var(--text-heading)',
                  marginBottom: '0.2rem',
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  fontSize: '0.76rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.4,
                }}
              >
                {m.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          align-items: center;
          margin-bottom: 2rem;
        }

        .hero-card-col {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 440px;
          margin: 0 auto;
        }

        .hero-angled-frame {
          position: absolute;
          inset: -10px;
          border-radius: 2rem;
          border: 1.5px solid var(--border-subtle);
          background: linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(244,239,231,0.5) 100%);
          z-index: 0;
          transform: rotate(-1.5deg);
        }

        .hero-executive-card {
          position: relative;
          z-index: 1;
          width: 100%;
          border-radius: 1.75rem;
          box-shadow: var(--shadow-xl);
          border: 3px solid #ffffff;
          background-color: var(--green-950);
          color: #ffffff;
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
        }

        .badge-top-right {
          position: absolute;
          top: -15px;
          right: -10px;
          z-index: 2;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-medium);
          border-radius: 1rem;
          padding: 0.75rem 1rem;
          box-shadow: var(--shadow-lg);
          display: flex;
          align-items: center;
          gap: 0.65rem;
          max-width: 230px;
        }

        .badge-bottom-left {
          position: absolute;
          bottom: -20px;
          left: -15px;
          z-index: 2;
          background-color: var(--green-900);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 1rem;
          padding: 0.8rem 1.15rem;
          box-shadow: var(--shadow-xl);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .metrics-grid {
          margin-top: 4.5rem;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: 1.5rem;
          padding: 2rem 2.5rem;
          box-shadow: var(--shadow-md);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          gap: 2rem;
        }

        .metric-item {
          text-align: center;
          padding-right: 1rem;
        }

        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 3.5rem !important;
          }
        }

        @media (min-width: 1024px) {
          .metrics-grid {
            grid-template-columns: repeat(5, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .hero-card-col {
            flex-direction: column;
            gap: 1rem;
          }
          .hero-angled-frame {
            display: none;
          }
          .hero-executive-card {
            border-radius: 1.25rem;
            padding: 1.5rem 1.15rem;
          }
          .badge-top-right,
          .badge-bottom-left {
            position: static !important;
            transform: none !important;
            animation: none !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box;
          }
          .metrics-grid {
            margin-top: 2.75rem;
            padding: 1.5rem 1.25rem;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem 1rem;
            border-radius: 1.25rem;
          }
          .metric-item {
            border-right: none !important;
            padding-right: 0 !important;
            text-align: left;
          }
          .metric-item:last-child {
            grid-column: span 2;
            text-align: center;
            border-top: 1px solid var(--border-subtle);
            padding-top: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .hero-cta-group {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-cta-group .btn {
            width: 100%;
            justify-content: center;
          }
          .metrics-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem;
          }
          .metric-item:last-child {
            grid-column: auto;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
};
