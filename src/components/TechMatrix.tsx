import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { IconLaptop } from './Icons';

export const TechMatrix: React.FC = () => {
  const { techMatrix } = portfolioData;
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Complete Ecosystem' },
    { id: 'Ticketing & Service Management', label: 'Ticketing & ITSM' },
    { id: 'Microsoft 365 Ecosystem', label: 'Microsoft 365' },
    { id: 'Google Workspace', label: 'Google Workspace' },
    { id: 'Enterprise Banking Applications', label: 'Banking Platforms' },
    { id: 'Remote Support & SysAdmin', label: 'Remote & SysAdmin' },
  ];

  const filteredCategories =
    filter === 'all'
      ? techMatrix
      : techMatrix.filter((c) => c.category === filter);

  return (
    <section id="systems" className="section-padding" style={{ backgroundColor: 'var(--bg-canvas)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="sub-caption">Software & Platform Fluency</span>
          <h2>A Battle-Tested Enterprise Systems Stack</h2>
          <p>
            No lengthy software ramp-up periods. I step directly into your existing ServiceNow, Jira,
            Microsoft 365, Google Workspace, and enterprise banking portals with established operational muscle memory.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`pill-badge ${isActive ? 'green' : 'neutral'}`}
                style={{
                  cursor: 'pointer',
                  padding: '0.45rem 1.15rem',
                  fontSize: '0.86rem',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Category Blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredCategories.map((catGroup) => (
            <div
              key={catGroup.category}
              className="neutral-card"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderRadius: '1.5rem',
                padding: '2rem 2.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.85rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--green-100)',
                    color: 'var(--green-900)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconLaptop size={18} />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-heading)' }}>
                  {catGroup.category}
                </h3>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1.25rem',
                }}
              >
                {catGroup.tools.map((tool) => (
                  <div
                    key={tool.name}
                    style={{
                      padding: '1.15rem',
                      borderRadius: '12px',
                      backgroundColor: 'var(--bg-warm-tint)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'transform var(--transition-fast), border-color var(--transition-fast)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--green-800)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--text-heading)' }}>
                          {tool.name}
                        </span>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            padding: '0.15rem 0.55rem',
                            borderRadius: '9999px',
                            backgroundColor: tool.level === 'Expert' ? 'var(--green-100)' : 'var(--gold-100)',
                            color: tool.level === 'Expert' ? 'var(--green-900)' : 'var(--gold-600)',
                            border: tool.level === 'Expert' ? '1px solid var(--green-border)' : '1px solid var(--gold-border)',
                          }}
                        >
                          {tool.level}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
