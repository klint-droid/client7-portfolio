import React, { useState } from 'react';
import { portfolioData, type ExperienceItem } from '../data/portfolioData';
import {
  IconCheckCircle,
  IconMapPin,
  IconCalendar,
  IconShieldCheck,
  IconStar,
} from './Icons';

export const ExperienceTimeline: React.FC = () => {
  const { experiences } = portfolioData;
  const [selectedRoleIndex, setSelectedRoleIndex] = useState<number>(0);

  const activeRole: ExperienceItem = experiences[selectedRoleIndex];

  return (
    <section id="experience" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="sub-caption">Track Record & Career Milestones</span>
          <h2>Proven Operational Leadership Across 10+ Years</h2>
          <p>
            From mission-critical financial application support for the Asian Development Bank to directing
            24/7 IT service desk operations over 50+ engineers at ABS-CBN, every role demonstrates systematic
            problem-solving, SLA compliance, and operational excellence.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
          }}
          className="experience-layout"
        >
          {/* Left Column: Role Selector Tabs */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
          >
            {experiences.map((item, idx) => {
              const isSelected = selectedRoleIndex === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedRoleIndex(idx)}
                  style={{
                    textAlign: 'left',
                    padding: '1.25rem 1.5rem',
                    borderRadius: '1rem',
                    border: isSelected ? '1.5px solid var(--green-800)' : '1px solid var(--border-subtle)',
                    backgroundColor: isSelected ? 'var(--bg-surface)' : 'rgba(255, 255, 255, 0.5)',
                    boxShadow: isSelected ? 'var(--shadow-md)' : 'none',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                  id={`exp-tab-${item.id}`}
                >
                  {isSelected && (
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '15%',
                        bottom: '15%',
                        width: '4px',
                        backgroundColor: 'var(--green-800)',
                        borderRadius: '0 4px 4px 0',
                      }}
                    />
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.98rem', color: isSelected ? 'var(--green-950)' : 'var(--text-heading)' }}>
                      {item.company}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>
                      {item.period}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: isSelected ? 'var(--green-800)' : 'var(--text-secondary)', fontWeight: 500 }}>
                    {item.role}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Active Role Card */}
          <div className="neutral-card exp-detail-card">
            {/* Header info */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1rem',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <div>
                <span className="pill-badge green" style={{ marginBottom: '0.65rem' }}>
                  <IconShieldCheck size={13} style={{ color: 'var(--green-700)' }} />
                  <span>{activeRole.type}</span>
                </span>
                <h3 style={{ fontSize: 'clamp(1.35rem, 3.5vw, 1.65rem)', color: 'var(--text-heading)', marginBottom: '0.35rem' }}>
                  {activeRole.role}
                </h3>
                <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--green-850)' }}>
                  {activeRole.company}
                </div>
              </div>

              <div className="exp-meta-right" style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                  <IconCalendar size={14} style={{ color: 'var(--green-800)' }} />
                  <span>{activeRole.period}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem', color: 'var(--text-tertiary)' }}>
                  <IconMapPin size={14} style={{ color: 'var(--gold-600)' }} />
                  <span>{activeRole.location}</span>
                </div>
              </div>
            </div>

            {/* Role Summary */}
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
              {activeRole.summary}
            </p>

            {/* Quantifiable Highlight Badge */}
            <div
              style={{
                backgroundColor: 'var(--gold-100)',
                border: '1px solid var(--gold-border)',
                borderRadius: '1rem',
                padding: '0.85rem 1.25rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '1.75rem',
              }}
            >
              <IconStar size={16} style={{ color: 'var(--gold-600)' }} />
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--gold-600)' }}>
                Key Impact: {activeRole.highlightMetric}
              </span>
            </div>

            {/* Achievements Bullet Points */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-heading)',
                  marginBottom: '0.85rem',
                }}
              >
                Key Responsibilities & Operational Milestones
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  fontSize: '0.94rem',
                }}
              >
                {activeRole.achievements.map((ach, aIdx) => (
                  <li
                    key={aIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      lineHeight: 1.55,
                      color: 'var(--text-primary)',
                    }}
                  >
                    <IconCheckCircle
                      size={18}
                      style={{
                        color: 'var(--green-700)',
                        flexShrink: 0,
                        marginTop: '0.15rem',
                      }}
                    />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Used */}
            <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-tertiary)',
                  marginBottom: '0.55rem',
                }}
              >
                Technologies, Platforms & Frameworks
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {activeRole.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      fontSize: '0.8rem',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      backgroundColor: 'var(--bg-warm-tint)',
                      color: 'var(--green-900)',
                      border: '1px solid var(--border-subtle)',
                      fontWeight: 600,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .exp-detail-card {
          background-color: var(--bg-surface);
          border: 1.5px solid var(--border-subtle);
          border-radius: 1.5rem;
          padding: 2.5rem;
          box-shadow: var(--shadow-md);
        }
        @media (min-width: 920px) {
          .experience-layout {
            grid-template-columns: 0.85fr 1.35fr !important;
          }
        }
        @media (max-width: 640px) {
          .exp-detail-card {
            padding: 1.5rem 1.15rem !important;
            border-radius: 1.25rem !important;
          }
          .exp-meta-right {
            text-align: left !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
};
