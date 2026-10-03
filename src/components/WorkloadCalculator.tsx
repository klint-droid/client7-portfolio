import React, { useState, useId } from 'react';
import {
  IconArrowRight,
  IconSparkles,
} from './Icons';

interface WorkloadCalculatorProps {
  onCustomInquiry: (details: string) => void;
}

export const WorkloadCalculator: React.FC<WorkloadCalculatorProps> = ({ onCustomInquiry }) => {
  const [peopleCount, setPeopleCount] = useState<number>(2);
  const [hoursPerDay, setHoursPerDay] = useState<number>(8);
  const [daysPerMonth, setDaysPerMonth] = useState<number>(21.5);
  const [localRate, setLocalRate] = useState<number>(38);
  const [vaRate, setVaRate] = useState<number>(16);

  const peopleSliderId = useId();
  const hoursSliderId = useId();
  const daysSliderId = useId();
  const localRateId = useId();
  const vaRateId = useId();

  // Core calculations
  const totalMonthlyHours = Math.round(peopleCount * hoursPerDay * daysPerMonth);
  const weeklyHours = Math.round((peopleCount * hoursPerDay * daysPerMonth) / 4.3);

  const validLocalRate = Math.max(0, localRate || 0);
  const validVaRate = Math.max(0, vaRate || 0);

  const localCost = Math.round(totalMonthlyHours * validLocalRate);
  const vaCost = Math.round(totalMonthlyHours * validVaRate);
  const costDifference = localCost - vaCost;
  const annualSavings = costDifference * 12;

  const formatUSD = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleInquire = () => {
    const summary = `Support & Operations Delegation Analysis: ${peopleCount} support headcount @ ${hoursPerDay} hrs/day (~${totalMonthlyHours} hrs/month). Comparing estimated internal staff cost (${formatUSD(localCost)}/mo @ $${validLocalRate}/hr) with dedicated remote specialist support (${formatUSD(vaCost)}/mo @ $${validVaRate}/hr). Estimated monthly savings: ${formatUSD(costDifference)}/mo (${formatUSD(annualSavings)}/yr).`;
    onCustomInquiry(summary);
  };

  return (
    <section id="calculator" className="section-padding" style={{ backgroundColor: 'var(--bg-warm-tint)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="sub-caption">Operational Capacity & Cost Estimator</span>
          <h2>The Cost of In-House vs. Dedicated Remote Support</h2>
          <p>
            Evaluate how much internal capacity your organization invests into customer support, help desk queues,
            and executive administration, and compare the estimated cost against partnering with an experienced senior specialist.
          </p>
        </div>

        <div
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            backgroundColor: 'var(--bg-surface)',
            borderRadius: '1.75rem',
            border: '1px solid var(--border-medium)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-lg)',
          }}
          className="calculator-container"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem',
            }}
            className="calculator-grid"
          >
            {/* Left Column: Sliders */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.85rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.25rem' }}>
                  Configure Your Support Parameters
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  Adjust the inputs below to match your current ticketing volume and administrative needs:
                </p>
              </div>

              {/* Slider 1: Team Size */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label htmlFor={peopleSliderId} style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-heading)' }}>
                    Support / Administrative Headcount Needed
                  </label>
                  <span style={{ fontWeight: 700, color: 'var(--green-900)', fontSize: '0.95rem' }}>
                    {peopleCount} {peopleCount === 1 ? 'person' : 'people'}
                  </span>
                </div>
                <input
                  id={peopleSliderId}
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={peopleCount}
                  onChange={(e) => setPeopleCount(parseInt(e.target.value) || 1)}
                  style={{ width: '100%', accentColor: 'var(--green-800)', cursor: 'pointer' }}
                />
              </div>

              {/* Slider 2: Daily Hours */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label htmlFor={hoursSliderId} style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-heading)' }}>
                    Daily Coverage Hours per Specialist
                  </label>
                  <span style={{ fontWeight: 700, color: 'var(--green-900)', fontSize: '0.95rem' }}>
                    {hoursPerDay} hrs / day
                  </span>
                </div>
                <input
                  id={hoursSliderId}
                  type="range"
                  min="4"
                  max="10"
                  step="1"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(parseInt(e.target.value) || 8)}
                  style={{ width: '100%', accentColor: 'var(--green-800)', cursor: 'pointer' }}
                />
              </div>

              {/* Slider 3: Days per Month */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label htmlFor={daysSliderId} style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-heading)' }}>
                    Operating Days per Month
                  </label>
                  <span style={{ fontWeight: 700, color: 'var(--green-900)', fontSize: '0.95rem' }}>
                    {daysPerMonth} days
                  </span>
                </div>
                <input
                  id={daysSliderId}
                  type="range"
                  min="15"
                  max="26"
                  step="0.5"
                  value={daysPerMonth}
                  onChange={(e) => setDaysPerMonth(parseFloat(e.target.value) || 21.5)}
                  style={{ width: '100%', accentColor: 'var(--green-800)', cursor: 'pointer' }}
                />
              </div>

              {/* Sliders 4 & 5: Rates Comparison */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div>
                  <label htmlFor={localRateId} style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.35rem' }}>
                    Est. In-House Cost / hr (USD)
                  </label>
                  <input
                    id={localRateId}
                    type="number"
                    min="20"
                    max="100"
                    value={localRate}
                    onChange={(e) => setLocalRate(parseInt(e.target.value) || 0)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      backgroundColor: 'var(--bg-canvas)',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor={vaRateId} style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.35rem' }}>
                    Remote Specialist Rate / hr (USD)
                  </label>
                  <input
                    id={vaRateId}
                    type="number"
                    min="10"
                    max="40"
                    value={vaRate}
                    onChange={(e) => setVaRate(parseInt(e.target.value) || 0)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid var(--border-medium)',
                      backgroundColor: 'var(--bg-canvas)',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Result Card */}
            <div
              style={{
                backgroundColor: 'var(--green-950)',
                color: '#ffffff',
                borderRadius: '1.25rem',
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <IconSparkles size={18} style={{ color: 'var(--gold-400)' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-400)' }}>
                    Estimated Operational Impact
                  </span>
                </div>

                {/* Monthly Hours Breakdown */}
                <div style={{ marginBottom: '1.75rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-on-dark-muted)', marginBottom: '0.25rem' }}>
                    Total Support Hours Delegated
                  </div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 700, color: '#ffffff' }}>
                    {totalMonthlyHours} <span style={{ fontSize: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>hrs / month</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-on-dark-muted)' }}>
                    ~{weeklyHours} hours weekly of dedicated operations
                  </div>
                </div>

                {/* Cost Comparison Summary */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem' }}>
                    <span style={{ color: 'var(--text-on-dark-muted)' }}>In-House Internal Cost:</span>
                    <span style={{ fontWeight: 600, textDecoration: 'line-through', opacity: 0.85 }}>{formatUSD(localCost)}/mo</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem' }}>
                    <span style={{ color: 'var(--text-on-dark-muted)' }}>Dedicated Specialist Cost:</span>
                    <span style={{ fontWeight: 700, color: 'var(--gold-400)' }}>{formatUSD(vaCost)}/mo</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid rgba(255,255,255,0.12)',
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#4ade80', display: 'block' }}>
                        Net Monthly Savings
                      </span>
                      <span style={{ fontSize: '0.74rem', color: 'var(--text-on-dark-muted)' }}>
                        Overhead, benefits & facility avoided
                      </span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: '#4ade80' }}>
                      {formatUSD(costDifference)}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    fontSize: '0.82rem',
                    color: 'var(--text-on-dark-muted)',
                    marginBottom: '1.5rem',
                  }}
                >
                  Estimated Annual Bottom-Line Efficiency:{' '}
                  <strong style={{ color: '#ffffff' }}>{formatUSD(annualSavings)} / year</strong>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                className="btn btn-outline-white"
                onClick={handleInquire}
                style={{ width: '100%', padding: '0.85rem 1.5rem', fontSize: '0.9rem' }}
                id="calc-inquire-btn"
              >
                <span>Inquire About Delegation</span>
                <IconArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .calculator-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
};
