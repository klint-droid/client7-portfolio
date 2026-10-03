import React, { useState } from 'react';
import { portfolioData, type Service } from '../data/portfolioData';
import {
  IconFileText,
  IconLaptop,
  IconUsers,
  IconCheckCircle,
  IconArrowRight,
  IconShieldCheck,
} from './Icons';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { services } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'va', label: 'Executive Virtual Assistance' },
    { id: 'technical', label: 'L2 Banking & Systems Support' },
    { id: 'support', label: 'Customer Support & Help Desk' },
    { id: 'leadership', label: 'Leadership & QA Operations' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory);

  const getServiceIcon = (category: Service['category']) => {
    switch (category) {
      case 'va':
        return <IconFileText size={22} />;
      case 'technical':
        return <IconLaptop size={22} />;
      case 'support':
        return <IconShieldCheck size={22} />;
      case 'leadership':
        return <IconUsers size={22} />;
      default:
        return <IconFileText size={22} />;
    }
  };

  return (
    <section id="services" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="sub-caption">Operational Specializations</span>
          <h2>Enterprise Support, Virtual Assistance & Technical Leadership</h2>
          <p>
            Whether you need a proactive Virtual Assistant to streamline your executive workflows, an
            L2 Technical Support specialist for your banking software, or a seasoned Service Desk Lead to elevate
            customer satisfaction, here is how I take operational friction off your plate.
          </p>
        </div>

        {/* Filter Pills */}
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
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
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

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="neutral-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Top Badge & Icon */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--green-100)',
                      color: 'var(--green-900)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--green-border)',
                    }}
                  >
                    {getServiceIcon(service.category)}
                  </div>
                  {service.badge && (
                    <span className="pill-badge gold">
                      <span>{service.badge}</span>
                    </span>
                  )}
                </div>

                {/* Service Title & Tagline */}
                <h3 style={{ marginBottom: '0.4rem', color: 'var(--text-heading)' }}>
                  {service.title}
                </h3>
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--green-800)',
                    marginBottom: '1rem',
                  }}
                >
                  {service.tagline}
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: 1.65 }}>
                  {service.description}
                </p>

                {/* Tools Applied Tags */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--text-tertiary)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Platforms & Technologies
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        style={{
                          fontSize: '0.76rem',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px',
                          backgroundColor: 'var(--bg-warm-tint)',
                          color: 'var(--text-primary)',
                          border: '1px solid var(--border-subtle)',
                          fontWeight: 500,
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Deliverables */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--text-tertiary)',
                      marginBottom: '0.65rem',
                    }}
                  >
                    Key Deliverables & Responsibilities
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.55rem',
                      fontSize: '0.88rem',
                    }}
                  >
                    {service.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.6rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.5,
                        }}
                      >
                        <IconCheckCircle
                          size={16}
                          style={{
                            color: 'var(--green-700)',
                            flexShrink: 0,
                            marginTop: '0.15rem',
                          }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => onSelectService(service.title)}
                  style={{ width: '100%', fontSize: '0.88rem', padding: '0.7rem 1.25rem' }}
                >
                  <span>Inquire on this Specialization</span>
                  <IconArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
