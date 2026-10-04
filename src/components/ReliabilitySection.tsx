import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  IconWifi,
  IconBatteryCharging,
  IconLaptop,
  IconShieldCheck,
  IconClock,
  IconFileText,
} from './Icons';

export const ReliabilitySection: React.FC = () => {
  const { reliability } = portfolioData;

  const getReliabilityIcon = (index: number) => {
    switch (index) {
      case 0:
        return <IconWifi size={22} />;
      case 1:
        return <IconBatteryCharging size={22} />;
      case 2:
        return <IconLaptop size={22} />;
      case 3:
        return <IconShieldCheck size={22} />;
      case 4:
        return <IconClock size={22} />;
      case 5:
        return <IconFileText size={22} />;
      default:
        return <IconShieldCheck size={22} />;
    }
  };

  return (
    <section id="reliability" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="sub-caption">Enterprise Continuity</span>
          <h2>Zero-Downtime Infrastructure & Remote Readiness</h2>
          <p>{reliability.subtitle}</p>
        </div>

        {/* Big Grid of 6 Reliability Pillars */}
        <div className="reliability-grid">
          {reliability.specs.map((item, idx) => (
            <div
              key={item.title}
              className="neutral-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: 'var(--bg-surface)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--green-100)',
                      color: 'var(--green-900)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid var(--green-border)',
                    }}
                  >
                    {getReliabilityIcon(idx)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-heading)', lineHeight: 1.25 }}>
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--green-800)',
                    marginBottom: '0.65rem',
                  }}
                >
                  {item.highlight}
                </div>

                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Shift Alignment Callout Card */}
        <div
          className="green-card"
          style={{
            borderRadius: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="pill-badge gold" style={{ marginBottom: '0.5rem' }}>
                Remote First Collaboration
              </span>
              <h3 style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)', color: '#ffffff', marginBottom: '0.35rem' }}>
                Seamless Timezone Overlap Across 4 Continents
              </h3>
              <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '0.92rem', maxWidth: '680px' }}>
                With a base in the Philippines (PHT / UTC+8), I easily support full-time schedules or structured overlap
                hours across US Eastern (EST), US Pacific (PST), United Kingdom (GMT), and Australian Eastern (AEST).
              </p>
            </div>

            <div className="shifts-badge-row">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--gold-400)', fontFamily: 'var(--font-serif)' }}>🇺🇸 US Shifts</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-on-dark-muted)' }}>EST & PST Compatible</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--gold-400)', fontFamily: 'var(--font-serif)' }}>🇬🇧 UK / EMEA</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-on-dark-muted)' }}>Convenient Hours</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--gold-400)', fontFamily: 'var(--font-serif)' }}>🇦🇺 Australia</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-on-dark-muted)' }}>Direct Business Hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .reliability-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
          gap: 1.75rem;
          margin-bottom: 3rem;
        }
        .shifts-badge-row {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        @media (max-width: 640px) {
          .reliability-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            margin-bottom: 2rem;
          }
          .shifts-badge-row {
            width: 100%;
            justify-content: space-around;
            gap: 1rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 1rem;
          }
        }
      `}</style>
    </section>
  );
};
