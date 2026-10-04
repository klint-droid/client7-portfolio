import React, { useState } from 'react';
import {
  LogoServiceNow,
  LogoJira,
  LogoMicrosoft365,
  LogoSharePoint,
  LogoTeams,
  LogoOutlook,
  LogoExcel,
  LogoGoogleWorkspace,
  LogoGmail,
  LogoGoogleCalendar,
  LogoGoogleDrive,
  LogoCreditLens,
  LogoLoanIQ,
  LogoActiveDirectory,
  LogoTeamViewer,
  LogoZendesk,
  LogoRDP,
  LogoITIL,
  LogoOneDrive,
  LogoGoogleMeet,
} from './ToolLogos';
import { IconCheckCircle } from './Icons';

interface ToolItem {
  id: string;
  name: string;
  category: 'itsm' | 'm365' | 'google' | 'banking' | 'sysadmin';
  categoryLabel: string;
  level: string;
  Logo: React.FC<{ size?: number; className?: string }>;
}

export const TechMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredTool, setHoveredTool] = useState<ToolItem | null>(null);

  const toolsRow1: ToolItem[] = [
    { id: 'servicenow', name: 'ServiceNow', category: 'itsm', categoryLabel: 'ITSM & Service Desk', level: 'Expert', Logo: LogoServiceNow },
    { id: 'jira', name: 'Jira Service Mgmt', category: 'itsm', categoryLabel: 'Ticketing & Agile', level: 'Expert', Logo: LogoJira },
    { id: 'creditlens', name: 'CreditLens', category: 'banking', categoryLabel: 'L2 Banking (Moody\'s)', level: 'Expert', Logo: LogoCreditLens },
    { id: 'loaniq', name: 'LoanIQ', category: 'banking', categoryLabel: 'Syndicated Loans (Finastra)', level: 'Advanced', Logo: LogoLoanIQ },
    { id: 'm365', name: 'Microsoft 365', category: 'm365', categoryLabel: 'Enterprise Suite', level: 'Expert', Logo: LogoMicrosoft365 },
    { id: 'onedrive', name: 'OneDrive', category: 'm365', categoryLabel: 'Cloud Storage & Sync', level: 'Expert', Logo: LogoOneDrive },
    { id: 'sharepoint', name: 'SharePoint', category: 'm365', categoryLabel: 'Knowledge Base SOPs', level: 'Expert', Logo: LogoSharePoint },
    { id: 'activedirectory', name: 'Active Directory', category: 'sysadmin', categoryLabel: 'User & Access Admin', level: 'Advanced', Logo: LogoActiveDirectory },
    { id: 'teamviewer', name: 'TeamViewer', category: 'sysadmin', categoryLabel: 'Remote Screen Assistance', level: 'Expert', Logo: LogoTeamViewer },
    { id: 'itil', name: 'ITIL Framework', category: 'itsm', categoryLabel: 'Incident & QA Governance', level: 'Expert', Logo: LogoITIL },
  ];

  const toolsRow2: ToolItem[] = [
    { id: 'teams', name: 'Microsoft Teams', category: 'm365', categoryLabel: 'Team Collaboration', level: 'Expert', Logo: LogoTeams },
    { id: 'outlook', name: 'Outlook', category: 'm365', categoryLabel: 'Executive Inbox & Calendar', level: 'Expert', Logo: LogoOutlook },
    { id: 'excel', name: 'Microsoft Excel', category: 'm365', categoryLabel: 'Formulas & Data Trackers', level: 'Advanced', Logo: LogoExcel },
    { id: 'googleworkspace', name: 'Google Workspace', category: 'google', categoryLabel: 'Cloud Office Suite', level: 'Expert', Logo: LogoGoogleWorkspace },
    { id: 'gmeet', name: 'Google Meet', category: 'google', categoryLabel: 'Video Conferencing', level: 'Expert', Logo: LogoGoogleMeet },
    { id: 'gmail', name: 'Gmail', category: 'google', categoryLabel: 'Zero-Inbox Triage', level: 'Expert', Logo: LogoGmail },
    { id: 'gcalendar', name: 'Google Calendar', category: 'google', categoryLabel: 'Multi-Timezone Booking', level: 'Expert', Logo: LogoGoogleCalendar },
    { id: 'gdrive', name: 'Google Drive', category: 'google', categoryLabel: 'Storage & Permissions', level: 'Expert', Logo: LogoGoogleDrive },
    { id: 'zendesk', name: 'Zendesk', category: 'itsm', categoryLabel: 'Customer Support Desk', level: 'Expert', Logo: LogoZendesk },
    { id: 'rdp', name: 'Remote Desktop', category: 'sysadmin', categoryLabel: 'RDP & Server Sessions', level: 'Expert', Logo: LogoRDP },
  ];

  const categories = [
    { id: 'all', label: 'All Platforms' },
    { id: 'itsm', label: 'ITSM & Ticketing' },
    { id: 'm365', label: 'Microsoft 365' },
    { id: 'google', label: 'Google Workspace' },
    { id: 'banking', label: 'Enterprise Banking' },
    { id: 'sysadmin', label: 'Remote & SysAdmin' },
  ];

  // Quadruple rows for ultra-smooth seamless infinite sliding
  const marqueeRow1 = [...toolsRow1, ...toolsRow1, ...toolsRow1, ...toolsRow1];
  const marqueeRow2 = [...toolsRow2, ...toolsRow2, ...toolsRow2, ...toolsRow2];

  const isHighlighted = (tool: ToolItem) => {
    if (activeCategory === 'all') return true;
    return tool.category === activeCategory;
  };

  return (
    <section id="systems" className="section-padding" style={{ backgroundColor: 'var(--bg-canvas)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="sub-caption">Software & Platform Fluency</span>
          <h2>A Battle-Tested Enterprise Systems Stack</h2>
          <p>
            No lengthy software ramp-up periods. I step directly into your existing ServiceNow, Jira,
            Microsoft 365, Google Workspace, and enterprise banking portals with established operational muscle memory.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="tools-filter-bar">
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
                  padding: '0.42rem 1.1rem',
                  fontSize: '0.84rem',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Full-bleed Infinite Sliding Tool Logos Marquee (Right to Left) */}
      <div className="tools-marquee-container" aria-label="Enterprise tools slideshow sliding from right to left">
        {/* Gradient edge masks */}
        <div className="marquee-edge-mask left-mask" />
        <div className="marquee-edge-mask right-mask" />

        {/* Marquee Row 1 */}
        <div className="marquee-row-wrapper" style={{ marginBottom: '1.25rem' }}>
          <div className="marquee-track track-speed-normal">
            {marqueeRow1.map((tool, idx) => {
              const highlighted = isHighlighted(tool);
              return (
                <div
                  key={`${tool.id}-r1-${idx}`}
                  className={`tool-logo-card ${highlighted ? 'highlighted' : 'dimmed'}`}
                  onMouseEnter={() => setHoveredTool(tool)}
                  onMouseLeave={() => setHoveredTool(null)}
                  title={`${tool.name} • ${tool.categoryLabel}`}
                >
                  <div className="tool-logo-icon-wrap">
                    <tool.Logo size={42} />
                  </div>
                  <span className="tool-logo-name">{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Marquee Row 2 */}
        <div className="marquee-row-wrapper">
          <div className="marquee-track track-speed-slow">
            {marqueeRow2.map((tool, idx) => {
              const highlighted = isHighlighted(tool);
              return (
                <div
                  key={`${tool.id}-r2-${idx}`}
                  className={`tool-logo-card ${highlighted ? 'highlighted' : 'dimmed'}`}
                  onMouseEnter={() => setHoveredTool(tool)}
                  onMouseLeave={() => setHoveredTool(null)}
                  title={`${tool.name} • ${tool.categoryLabel}`}
                >
                  <div className="tool-logo-icon-wrap">
                    <tool.Logo size={42} />
                  </div>
                  <span className="tool-logo-name">{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Tool Details Callout on Hover / Active */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        <div className="tool-status-callout">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', flexShrink: 0 }} />
            <span style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
              {hoveredTool ? (
                <>
                  <strong style={{ color: 'var(--green-950)' }}>{hoveredTool.name}</strong> • {hoveredTool.categoryLabel} ({hoveredTool.level} Proficiency)
                </>
              ) : (
                'Hover or tap any tool logo to pause the animation • Immediate day-one productivity'
              )}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
            <IconCheckCircle size={14} style={{ color: 'var(--green-700)' }} />
            <span>20 Core Enterprise Platforms Supported</span>
          </div>
        </div>
      </div>

      <style>{`
        .tools-filter-bar {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-bottom: 2rem;
        }

        .tools-marquee-container {
          position: relative;
          width: 100vw;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          overflow: hidden;
          padding: 0.5rem 0;
        }

        /* Edge gradient masks for elegant fade-in/fade-out */
        .marquee-edge-mask {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }
        .left-mask {
          left: 0;
          background: linear-gradient(to right, var(--bg-canvas) 0%, rgba(250, 247, 242, 0) 100%);
        }
        .right-mask {
          right: 0;
          background: linear-gradient(to left, var(--bg-canvas) 0%, rgba(250, 247, 242, 0) 100%);
        }

        .marquee-row-wrapper {
          display: flex;
          width: 100%;
          overflow: hidden;
          user-select: none;
        }

        /* Slide from right to left */
        @keyframes slideRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          display: flex;
          gap: 1.25rem;
          width: max-content;
          will-change: transform;
        }

        .track-speed-normal {
          animation: slideRightToLeft 42s linear infinite;
        }

        .track-speed-slow {
          animation: slideRightToLeft 50s linear infinite;
        }

        /* Pause on hover */
        .tools-marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }

        /* Logo Cards */
        .tool-logo-card {
          width: 142px;
          height: 86px;
          flex-shrink: 0;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: 1.15rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
          gap: 0.35rem;
          padding: 0.65rem 0.5rem;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .tool-logo-card.highlighted {
          opacity: 1;
        }

        .tool-logo-card.dimmed {
          opacity: 0.35;
          filter: grayscale(0.5);
        }

        .tool-logo-card:hover {
          transform: translateY(-4px) scale(1.03);
          border-color: var(--green-800);
          box-shadow: 0 8px 20px rgba(42, 23, 37, 0.12);
          opacity: 1 !important;
          filter: none !important;
        }

        .tool-logo-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 44px;
          transition: transform 0.2s ease;
        }

        .tool-logo-card:hover .tool-logo-icon-wrap {
          transform: scale(1.08);
        }

        .tool-logo-name {
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--text-heading);
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 125px;
          letter-spacing: -0.01em;
        }

        .tool-status-callout {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.85rem;
          padding: 0.85rem 1.35rem;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: 1rem;
          box-shadow: var(--shadow-sm);
        }

        @media (max-width: 640px) {
          .marquee-edge-mask {
            width: 45px;
          }
          .tool-logo-card {
            width: 124px;
            height: 80px;
            padding: 0.5rem 0.4rem;
          }
          .tool-logo-name {
            font-size: 0.72rem;
            max-width: 110px;
          }
          .track-speed-normal {
            animation-duration: 32s;
          }
          .track-speed-slow {
            animation-duration: 38s;
          }
          .tool-status-callout {
            flex-direction: column;
            align-items: flex-start;
            padding: 0.85rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};
