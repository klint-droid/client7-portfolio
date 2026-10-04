import React, { useState, useEffect, useCallback } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  IconStar,
  IconArrowRight,
  IconDownload,
  IconUsers,
  IconMapPin,
  IconClock,
  IconChevronLeft,
  IconChevronRight,
} from './Icons';
import { scrollToSection } from '../utils/scroll';

interface HeroProps {
  onOpenContact: () => void;
}

const heroSlides = [
  {
    id: 1,
    image: '/photos/Wenelove.png',
    alt: 'Wenelove Del Castillo - Executive Virtual Assistant & Operations Leader',
    title: 'Wenelove Del Castillo',
    role: 'Executive Virtual Assistant & Operations Leader',
    badge: '10+ Years Enterprise Support',
    tags: ['Executive Care', 'Full-Time & Part-Time', 'Taguig, Metro Manila'],
    objectPosition: 'center 15%',
  },
  {
    id: 2,
    image: '/photos/WeneloveDC.png',
    alt: 'Wenelove Del Castillo - Senior Technical & Customer Support Specialist',
    title: 'Wenelove Del Castillo',
    role: 'Technical Support & L2 Enterprise Systems Specialist',
    badge: 'CreditLens & LoanIQ Expert',
    tags: ['50+ Staff Desk Lead', 'ITIL Quality Ops', 'Global Shifts'],
    objectPosition: 'center 22%',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const { personal, metrics } = portfolioData;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

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
                <span>Available for Full-Time & Part-Time Remote Roles</span>
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

          {/* Right Column: Interactive Luxury Photo Slideshow Showcase */}
          <div className="hero-card-col">
            {/* Background Decorative Angled Frame */}
            <div className="hero-angled-frame" />

            {/* Slideshow Card */}
            <div
              className="hero-slideshow-card"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              role="region"
              aria-label="Executive Photo Slideshow"
            >
              {/* Slides Container */}
              <div className="hero-slides-wrapper">
                {heroSlides.map((slide, idx) => {
                  const isActive = currentSlide === idx;
                  return (
                    <div
                      key={slide.id}
                      className={`hero-slide-item ${isActive ? 'active' : ''}`}
                      aria-hidden={!isActive}
                    >
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="hero-slide-img"
                        style={{ objectPosition: slide.objectPosition }}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                      />
                      {/* Gradient overlay for contrast */}
                      <div className="hero-slide-overlay" />
                    </div>
                  );
                })}
              </div>

              {/* Top Bar Floating Badges */}
              <div className="hero-slideshow-topbar">
                <div className="hero-slide-status-pill">
                  <span
                    className="pulse-dot"
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#4ade80',
                      display: 'inline-block',
                    }}
                  />
                  <span>VERIFIED SPECIALIST</span>
                </div>

                <div className="hero-slide-counter-badge">
                  <span>0{currentSlide + 1} / 0{heroSlides.length}</span>
                </div>
              </div>

              {/* Prev / Next Slide Navigation Controls */}
              <button
                type="button"
                className="hero-slide-arrow-btn prev"
                onClick={prevSlide}
                aria-label="Previous photo slide"
                id="hero-slide-prev-btn"
              >
                <IconChevronLeft size={18} />
              </button>

              <button
                type="button"
                className="hero-slide-arrow-btn next"
                onClick={nextSlide}
                aria-label="Next photo slide"
                id="hero-slide-next-btn"
              >
                <IconChevronRight size={18} />
              </button>

              {/* Bottom Caption Glassmorphism Card */}
              <div className="hero-slide-caption-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span className="hero-slide-badge-tag">
                    {heroSlides[currentSlide].badge}
                  </span>

                  {/* Dot / Pill Indicators */}
                  <div className="hero-slide-indicators">
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentSlide(idx)}
                        className={`hero-indicator-dot ${currentSlide === idx ? 'active' : ''}`}
                        aria-label={`Go to photo slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="hero-slide-title">
                  {heroSlides[currentSlide].title}
                </h3>
                <div className="hero-slide-role">
                  {heroSlides[currentSlide].role}
                </div>

                <div className="hero-slide-tags">
                  {heroSlides[currentSlide].tags.map((tag) => (
                    <span key={tag} className="hero-slide-tag-chip">
                      {tag}
                    </span>
                  ))}
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
          background: linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(246, 239, 233, 0.6) 100%);
          z-index: 0;
          transform: rotate(-1.5deg);
        }

        .hero-slideshow-card {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 520px;
          border-radius: 1.75rem;
          box-shadow: 0 24px 60px -12px rgba(42, 23, 37, 0.35), 0 0 0 1px rgba(212, 143, 120, 0.35);
          border: 3px solid #ffffff;
          overflow: hidden;
          background-color: var(--green-950);
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
        }

        .hero-slides-wrapper {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .hero-slide-item {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: scale(1.05);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
          z-index: 1;
        }

        .hero-slide-item.active {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
          z-index: 2;
        }

        .hero-slide-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(27, 17, 24, 0.5) 0%,
            rgba(27, 17, 24, 0.05) 28%,
            rgba(27, 17, 24, 0.35) 60%,
            rgba(27, 17, 24, 0.95) 100%
          );
          pointer-events: none;
        }

        .hero-slideshow-topbar {
          position: relative;
          z-index: 10;
          padding: 1.25rem 1.25rem 0 1.25rem;
          display: flex;
          align-items: center;
          justifyContent: space-between;
        }

        .hero-slide-status-pill {
          background-color: rgba(41, 24, 36, 0.8);
          border: 1px solid rgba(74, 222, 128, 0.45);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.68rem;
          font-weight: 700;
          color: #4ade80;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .hero-slide-counter-badge {
          background-color: rgba(41, 24, 36, 0.8);
          border: 1px solid rgba(212, 143, 120, 0.45);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0.35rem 0.7rem;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--gold-400);
          letter-spacing: 0.06em;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .hero-slide-arrow-btn {
          position: absolute;
          top: 48%;
          transform: translateY(-50%);
          z-index: 10;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: rgba(41, 24, 36, 0.72);
          border: 1px solid rgba(212, 143, 120, 0.4);
          color: #ffffff;
          display: flex;
          align-items: center;
          justifyContent: center;
          cursor: pointer;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.25s ease;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
          opacity: 0.85;
        }

        .hero-slide-arrow-btn:hover {
          opacity: 1;
          background-color: var(--green-900);
          border-color: var(--gold-400);
          transform: translateY(-50%) scale(1.1);
          color: var(--gold-300);
        }

        .hero-slide-arrow-btn.prev {
          left: 12px;
        }

        .hero-slide-arrow-btn.next {
          right: 12px;
        }

        .hero-slide-caption-card {
          position: relative;
          z-index: 10;
          margin: 1rem;
          background: rgba(41, 24, 36, 0.88);
          border: 1px solid rgba(212, 143, 120, 0.35);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 1.25rem;
          padding: 1.15rem 1.25rem;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
          color: #ffffff;
        }

        .hero-slide-badge-tag {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--gold-400);
          font-weight: 700;
        }

        .hero-slide-indicators {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .hero-indicator-dot {
          height: 6px;
          border-radius: 9999px;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background-color: rgba(255, 255, 255, 0.35);
          width: 8px;
        }

        .hero-indicator-dot.active {
          width: 24px;
          background-color: var(--gold-400);
          box-shadow: 0 0 8px rgba(212, 163, 89, 0.6);
        }

        .hero-slide-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0.2rem 0;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .hero-slide-role {
          font-size: 0.82rem;
          color: #e2e8f0;
          font-weight: 500;
          margin-bottom: 0.55rem;
          line-height: 1.35;
        }

        .hero-slide-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .hero-slide-tag-chip {
          font-size: 0.68rem;
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #f1f5f9;
          padding: 0.2rem 0.5rem;
          border-radius: 6px;
          font-weight: 500;
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
          .hero-slideshow-card {
            height: 470px;
            border-radius: 1.25rem;
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
