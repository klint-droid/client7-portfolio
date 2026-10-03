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
        paddingTop: '7.5rem',
        paddingBottom: '4.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div>
            {/* Availability Status Badge */}
            <div style={{ marginBottom: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
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
            <h1 style={{ marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
              Hi, I'm <span style={{ color: 'var(--green-900)' }}>{personal.name}</span>
            </h1>

            {/* Sub-headline */}
            <div
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                color: 'var(--green-800)',
                marginBottom: '1.25rem',
                lineHeight: 1.4,
              }}
            >
              Virtual Assistant • Customer Support Specialist • Technical Support Professional • Administrative Support
            </div>

            {/* Bio Narrative */}
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.72,
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
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
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.9rem',
                alignItems: 'center',
                marginBottom: '2rem',
              }}
            >
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
                className="btn"
                onClick={handlePrintCV}
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--green-900)',
                  border: '1px solid var(--border-subtle)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--green-800)';
                  e.currentTarget.style.backgroundColor = 'var(--bg-warm-tint)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--green-900)';
                  e.currentTarget.style.backgroundColor = 'transparent';
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
                gap: '1.25rem',
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
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Background Decorative Angled Frame */}
            <div
              style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '2rem',
                border: '1.5px solid var(--border-subtle)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(244,239,231,0.5) 100%)',
                zIndex: 0,
                transform: 'rotate(-1.5deg)',
              }}
            />

            {/* Main Executive Credential Card */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '420px',
                borderRadius: '1.75rem',
                boxShadow: 'var(--shadow-xl)',
                border: '4px solid #ffffff',
                backgroundColor: 'var(--green-950)',
                color: '#ffffff',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {/* Card Top Brand & Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      border: '1px solid var(--gold-400)',
                      color: 'var(--gold-400)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-serif)',
                      fontWeight: 700,
                      fontSize: '1.35rem',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                    }}
                  >
                    WD
                  </div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '1.1rem', color: '#ffffff', display: 'block' }}>
                      {personal.name}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--gold-400)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                      Executive Portfolio
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(34, 197, 94, 0.15)',
                    border: '1px solid rgba(34, 197, 94, 0.4)',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#4ade80',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4ade80' }}></span>
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Core Executive Specializations */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '1rem',
                  padding: '1.25rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gold-400)', fontWeight: 700, marginBottom: '0.65rem' }}>
                  Enterprise Specializations
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem' }}>
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
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-on-dark-muted)' }}>Standard Operating Base</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>Manila PHT • Global Shifts</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--gold-400)', fontWeight: 600 }}>10+ YEARS</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>PROVEN TRACK RECORD</div>
                </div>
              </div>
            </div>

            {/* Floating Badge 1: Top Right */}
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-10px',
                zIndex: 2,
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-medium)',
                borderRadius: '1rem',
                padding: '0.85rem 1.15rem',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                maxWidth: '240px',
              }}
              className="floating-badge"
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--gold-100)',
                  color: 'var(--gold-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <IconStar size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                  10+ Years Track Record
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                  Banking & Enterprise IT Support
                </div>
              </div>
            </div>

            {/* Floating Badge 2: Bottom Left */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-15px',
                zIndex: 2,
                backgroundColor: 'var(--green-900)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '1rem',
                padding: '0.9rem 1.25rem',
                boxShadow: 'var(--shadow-xl)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
              }}
              className="floating-badge"
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#4ade80',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <IconUsers size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em' }}>
                  50+ IT Professionals
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-on-dark-muted)' }}>
                  Supervised at ABS-CBN Desk
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Banner matching Lauren reference */}
        <div
          className="metrics-grid"
          style={{
            marginTop: '4.5rem',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '1.5rem',
            padding: '2rem 2.5rem',
            boxShadow: 'var(--shadow-md)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
          }}
        >
          {metrics.map((m, idx) => (
            <div
              key={m.label}
              style={{
                textAlign: 'center',
                borderRight: idx < metrics.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                paddingRight: '1rem',
              }}
              className="metric-item"
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.5rem',
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
                  fontSize: '0.9rem',
                  color: 'var(--text-heading)',
                  marginBottom: '0.2rem',
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
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
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (min-width: 1024px) {
          .metrics-grid {
            grid-template-columns: repeat(5, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .metric-item {
            border-right: none !important;
            padding-right: 0 !important;
            border-bottom: 1px solid var(--border-subtle);
            padding-bottom: 1.25rem;
          }
          .metric-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .floating-badge {
            position: static !important;
            margin-top: 1rem;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
