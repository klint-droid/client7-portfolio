import React, { useState, useEffect } from 'react';
import { IconMail, IconClock } from './Icons';
import { scrollToSection } from '../utils/scroll';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [manilaTime, setManilaTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Manila',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
        setManilaTime(timeStr);
      } catch {
        setManilaTime('PHT Active');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Experience', id: 'experience' },
    { label: 'Systems', id: 'systems' },
    { label: 'Reliability', id: 'reliability' },
    { label: 'FAQ', id: 'faq' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        transition: 'all 0.25s ease',
        backgroundColor: scrolled ? 'rgba(250, 247, 242, 0.96)' : 'rgba(250, 247, 242, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(19, 56, 38, 0.12)' : '1px solid rgba(19, 56, 38, 0.06)',
        padding: scrolled ? '0.45rem 0' : '0.65rem 0',
      }}
    >
      <div
        className="container nav-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          gap: '0.75rem',
        }}
      >
        {/* Left: Brand Monogram & Name */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('top');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
            zIndex: 2,
            flexShrink: 0,
          }}
          id="nav-brand"
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: 'var(--green-900)',
              color: 'var(--gold-100)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px rgba(19, 56, 38, 0.18)',
              border: '1px solid var(--gold-border)',
              flexShrink: 0,
            }}
          >
            WD
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
                fontSize: '1rem',
                color: 'var(--text-heading)',
                display: 'block',
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              {portfolioData.personal.name}
            </span>
            <span
              className="brand-subtitle"
              style={{
                fontSize: '0.68rem',
                color: 'var(--green-800)',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                display: 'block',
              }}
            >
              Operations & Tech Specialist
            </span>
          </div>
        </a>

        {/* Center: Minimal Floating Pill Navigation (Desktop) */}
        <nav className="desktop-nav-center" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className="minimal-nav-pill-btn"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Action & Live Time Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', zIndex: 2, flexShrink: 0 }}>
          {/* Live Manila Time Pill */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.35rem 0.75rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--bg-warm-tint)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.76rem',
              color: 'var(--text-secondary)',
            }}
            className="time-pill-desktop"
          >
            <IconClock size={12} style={{ color: 'var(--green-800)' }} />
            <span style={{ fontWeight: 600, color: 'var(--green-950)' }}>
              {manilaTime || 'PHT Active'}
            </span>
            <span style={{ color: 'var(--text-tertiary)', fontSize: '0.68rem' }}>
              (GMT+8)
            </span>
          </div>

          {/* Consultation CTA */}
          <button
            type="button"
            className="btn btn-primary nav-cta-btn"
            onClick={onOpenContact}
            style={{
              padding: '0.5rem 1.15rem',
              fontSize: '0.84rem',
            }}
            id="nav-contact-btn"
          >
            <IconMail size={14} />
            <span>Consultation</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              width: '42px',
              height: '42px',
              borderRadius: '9px',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--green-950)',
              cursor: 'pointer',
              touchAction: 'manipulation',
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              style={{
                width: '18px',
                height: '2px',
                backgroundColor: 'currentColor',
                borderRadius: '2px',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                transform: mobileMenuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                width: '18px',
                height: '2px',
                backgroundColor: 'currentColor',
                borderRadius: '2px',
                transition: 'opacity 0.2s ease',
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: '18px',
                height: '2px',
                backgroundColor: 'currentColor',
                borderRadius: '2px',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                transform: mobileMenuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.25rem 1.25rem 1.5rem 1.25rem',
            boxShadow: 'var(--shadow-xl)',
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                style={{
                  textAlign: 'left',
                  fontSize: '0.96rem',
                  fontWeight: 600,
                  color: 'var(--text-heading)',
                  padding: '0.75rem 0.85rem',
                  borderRadius: '8px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  transition: 'background-color 0.15s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(19, 56, 38, 0.05)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-warm-tint)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <span>{link.label}</span>
                <span style={{ color: 'var(--green-700)', fontSize: '0.85rem' }}>→</span>
              </button>
            ))}
          </div>

          <div
            style={{
              paddingTop: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.65rem 0.85rem',
                backgroundColor: 'var(--bg-warm-tint)',
                borderRadius: '8px',
                fontSize: '0.78rem',
                color: 'var(--text-secondary)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                <span>Available for Global Roles</span>
              </div>
              <div style={{ fontWeight: 600, color: 'var(--green-950)' }}>
                {manilaTime}
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '0.92rem' }}
            >
              <IconMail size={15} />
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        /* Center Minimal Pill Navigation */
        .desktop-nav-center {
          display: none;
        }

        @media (min-width: 920px) {
          .desktop-nav-center {
            display: flex;
            align-items: center;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 255, 255, 0.75);
            border: 1px solid rgba(19, 56, 38, 0.08);
            border-radius: 9999px;
            padding: 0.25rem 0.4rem;
            box-shadow: 0 2px 10px rgba(19, 56, 38, 0.04);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            gap: 0.15rem;
            z-index: 1;
          }
          .minimal-nav-pill-btn {
            font-size: 0.82rem;
            font-weight: 600;
            color: var(--text-secondary);
            padding: 0.38rem 0.85rem;
            border-radius: 9999px;
            transition: all var(--transition-fast);
            cursor: pointer;
            background: transparent;
            border: none;
            line-height: 1.1;
            white-space: nowrap;
          }
          .minimal-nav-pill-btn:hover {
            color: var(--green-950);
            background-color: rgba(19, 56, 38, 0.06);
          }
          .mobile-hamburger {
            display: none !important;
          }
        }

        @media (min-width: 1140px) {
          .time-pill-desktop {
            display: inline-flex !important;
          }
        }

        @media (max-width: 440px) {
          .brand-subtitle {
            display: none !important;
          }
          .nav-cta-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
