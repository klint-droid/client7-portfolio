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
    window.addEventListener('scroll', handleScroll);
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
    { label: 'Cost Calculator', id: 'calculator' },
    { label: 'Experience', id: 'experience' },
    { label: 'Systems Matrix', id: 'systems' },
    { label: 'Reliability', id: 'reliability' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        transition: 'all 0.25s ease',
        backgroundColor: scrolled ? 'rgba(250, 247, 242, 0.95)' : 'rgba(250, 247, 242, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(19, 56, 38, 0.08)',
        padding: scrolled ? '0.45rem 0' : '0.65rem 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Brand Monogram & Name */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('top');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
          }}
          id="nav-brand"
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              backgroundColor: 'var(--green-900)',
              color: 'var(--gold-100)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: '1.15rem',
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
                fontSize: '1.05rem',
                color: 'var(--text-heading)',
                display: 'block',
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
              }}
            >
              {portfolioData.personal.name}
            </span>
            <span
              style={{
                fontSize: '0.7rem',
                color: 'var(--green-800)',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                display: 'block',
              }}
            >
              Tech & Operations Specialist
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.5rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                padding: '0.35rem 0',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--green-900)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Action & Live Time Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Live Manila Time Pill */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.8rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--bg-warm-tint)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.78rem',
              color: 'var(--text-secondary)',
            }}
            className="time-pill-desktop"
          >
            <IconClock size={13} style={{ color: 'var(--green-800)' }} />
            <span style={{ fontWeight: 600, color: 'var(--green-950)' }}>
              {manilaTime || 'PHT Active'}
            </span>
            <span style={{ color: 'var(--text-tertiary)', fontSize: '0.7rem' }}>
              (GMT+8)
            </span>
          </div>

          {/* Consultation CTA */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={onOpenContact}
            style={{
              padding: '0.55rem 1.25rem',
              fontSize: '0.85rem',
            }}
            id="nav-contact-btn"
          >
            <IconMail size={15} />
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
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-heading)',
            }}
            aria-label="Toggle navigation menu"
          >
            <span style={{ width: '18px', height: '2px', backgroundColor: 'currentColor', borderRadius: '1px' }}></span>
            <span style={{ width: '18px', height: '2px', backgroundColor: 'currentColor', borderRadius: '1px' }}></span>
            <span style={{ width: '18px', height: '2px', backgroundColor: 'currentColor', borderRadius: '1px' }}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.25rem 1.5rem',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection(link.id);
                }}
                style={{
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-heading)',
                  padding: '0.4rem 0',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }}></span>
              <span>Available for Remote Roles</span>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}
            >
              Hire Me
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .time-pill-desktop {
            display: inline-flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
