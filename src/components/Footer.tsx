import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  IconMail,
  IconPhone,
  IconLinkedin,
  IconShieldCheck,
  IconArrowRight,
  IconMapPin,
  IconClock,
} from './Icons';
import { scrollToSection } from '../utils/scroll';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const { personal } = portfolioData;

  return (
    <footer
      style={{
        backgroundColor: 'var(--green-950)',
        color: '#ffffff',
        padding: '5rem 0 3rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Pre-Footer Big CTA Ribbon */}
        <div className="footer-cta-ribbon">
          <div style={{ maxWidth: '640px' }}>
            <span className="pill-badge gold" style={{ marginBottom: '0.75rem', fontSize: '0.76rem' }}>
              <IconShieldCheck size={14} /> Immediate Capacity Available
            </span>
            <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', color: '#ffffff', marginBottom: '0.5rem' }}>
              Ready to elevate your operational efficiency?
            </h3>
            <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.96rem' }}>
              Providing 10+ years of high-trust customer support, L2 enterprise systems troubleshooting,
              and executive virtual assistance worldwide.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenContact}
            className="footer-cta-btn"
            id="footer-cta-contact"
          >
            <span>Start a Conversation</span>
            <IconArrowRight size={16} />
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="footer-main-grid">
          {/* Brand info */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  border: '2px solid var(--gold-400)',
                  overflow: 'hidden',
                  flexShrink: 0,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <img
                  src="/photos/Wenelove.png"
                  alt={personal.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                  }}
                />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '1.15rem', color: '#ffffff', display: 'block' }}>
                  {personal.name}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--gold-400)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                  Virtual & Tech Specialist
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Results-driven customer service, IT service desk supervision, enterprise banking application support, and virtual assistance.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-on-dark-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <IconMapPin size={14} style={{ color: 'var(--gold-400)' }} />
                <span>{personal.location}</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <IconClock size={14} style={{ color: '#4ade80' }} />
                <span>{personal.availability}</span>
              </span>
            </div>
          </div>

          {/* Direct Channels */}
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-400)', marginBottom: '1.25rem' }}>
              Direct Channels
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <a
                href={`mailto:${personal.email}`}
                style={{ color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-400)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
              >
                <IconMail size={16} style={{ color: 'var(--gold-400)' }} />
                <span>{personal.email}</span>
              </a>

              <a
                href={`tel:${personal.phone}`}
                style={{ color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-400)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
              >
                <IconPhone size={16} style={{ color: '#4ade80' }} />
                <span>{personal.phoneFormatted}</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-400)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
              >
                <IconLinkedin size={16} style={{ color: '#60a5fa' }} />
                <span>linkedin.com/in/{personal.linkedinHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-400)', marginBottom: '1.25rem' }}>
              Quick Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <button
                type="button"
                onClick={() => scrollToSection('top')}
                style={{ textAlign: 'left', color: 'var(--text-on-dark-muted)', cursor: 'pointer' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-on-dark-muted)')}
              >
                Overview
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('services')}
                style={{ textAlign: 'left', color: 'var(--text-on-dark-muted)', cursor: 'pointer' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-on-dark-muted)')}
              >
                Services & Specializations
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('experience')}
                style={{ textAlign: 'left', color: 'var(--text-on-dark-muted)', cursor: 'pointer' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-on-dark-muted)')}
              >
                Career Milestones
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('systems')}
                style={{ textAlign: 'left', color: 'var(--text-on-dark-muted)', cursor: 'pointer' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-on-dark-muted)')}
              >
                Software & Platform Matrix
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('reliability')}
                style={{ textAlign: 'left', color: 'var(--text-on-dark-muted)', cursor: 'pointer' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-on-dark-muted)')}
              >
                Enterprise Reliability
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('faq')}
                style={{ textAlign: 'left', color: 'var(--text-on-dark-muted)', cursor: 'pointer' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-on-dark-muted)')}
              >
                FAQs
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem',
            fontSize: '0.82rem',
            color: 'var(--text-on-dark-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Wenelove Del Castillo. All rights reserved.
          </div>
          <button
            type="button"
            onClick={() => scrollToSection('top')}
            style={{
              color: 'var(--gold-400)',
              fontWeight: 600,
              fontSize: '0.82rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              cursor: 'pointer',
            }}
          >
            <span>Back to top ↑</span>
          </button>
        </div>
      </div>

      <style>{`
        .footer-cta-ribbon {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 1.5rem;
          padding: 3rem 2.5rem;
          margin-bottom: 4.5rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }
        .footer-cta-btn {
          background-color: var(--gold-500);
          color: var(--green-950);
          font-weight: 700;
          font-size: 1rem;
          padding: 1rem 2.25rem;
          border-radius: 999px;
          box-shadow: 0 8px 24px rgba(197, 155, 83, 0.35);
          transition: transform 0.2s, background-color 0.2s;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
        }
        .footer-cta-btn:hover {
          background-color: var(--gold-400);
          transform: translateY(-2px);
        }
        .footer-main-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
          gap: 3rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 640px) {
          .footer-cta-ribbon {
            padding: 1.75rem 1.25rem;
            margin-bottom: 3rem;
            border-radius: 1.25rem;
          }
          .footer-cta-btn {
            width: 100%;
            justify-content: center;
            padding: 0.85rem 1.5rem;
          }
          .footer-main-grid {
            gap: 2rem;
            padding-bottom: 2.5rem;
          }
        }
      `}</style>
    </footer>
  );
};
