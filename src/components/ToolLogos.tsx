import type { FC, CSSProperties } from 'react';

interface LogoProps {
  size?: number;
  className?: string;
  style?: CSSProperties;
}

// 1. ServiceNow Logo
export const LogoServiceNow: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#032D42" />
    <path
      d="M24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10ZM24 34C18.477 34 14 29.523 14 24C14 18.477 18.477 14 24 14C29.523 14 34 18.477 34 24C34 29.523 29.523 34 24 34Z"
      fill="#81B5A1"
    />
    <path
      d="M24 16C19.582 16 16 19.582 16 24C16 28.418 19.582 32 24 32C28.418 32 32 28.418 32 24H28C28 26.209 26.209 28 24 28C21.791 28 20 26.209 20 24C20 21.791 21.791 20 24 20V16Z"
      fill="#293E40"
    />
    <circle cx="24" cy="24" r="3" fill="#81B5A1" />
  </svg>
);

// 2. Jira Logo
export const LogoJira: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#F4F5F7" />
    <path
      d="M24.004 10C24.004 17.732 17.736 24 10.004 24C17.736 24 24.004 30.268 24.004 38C24.004 30.268 30.272 24 38.004 24C30.272 24 24.004 17.732 24.004 10Z"
      fill="#0052CC"
    />
    <path
      d="M24.004 17C24.004 20.866 20.87 24 17.004 24C20.87 24 24.004 27.134 24.004 31C24.004 27.134 27.138 24 31.004 24C27.138 24 24.004 20.866 24.004 17Z"
      fill="#2684FF"
    />
  </svg>
);

// 3. Microsoft 365 Logo
export const LogoMicrosoft365: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
    <rect x="12" y="12" width="11" height="11" rx="1" fill="#F25022" />
    <rect x="25" y="12" width="11" height="11" rx="1" fill="#7FBA00" />
    <rect x="12" y="25" width="11" height="11" rx="1" fill="#00A4EF" />
    <rect x="25" y="25" width="11" height="11" rx="1" fill="#FFB900" />
  </svg>
);

// 4. SharePoint Logo
export const LogoSharePoint: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#E6F2F1" />
    <circle cx="21" cy="20" r="7" fill="#038387" />
    <circle cx="28" cy="23" r="8" fill="#004E54" fillOpacity="0.85" />
    <circle cx="22" cy="29" r="6" fill="#00B294" />
    <text x="14" y="27" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="sans-serif">S</text>
  </svg>
);

// 5. Microsoft Teams Logo
export const LogoTeams: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#EBEFF8" />
    <circle cx="31" cy="18" r="4" fill="#7B83EB" />
    <path d="M26 31V25C26 23.343 27.343 22 29 22H33C34.657 22 36 23.343 36 25V31H26Z" fill="#7B83EB" />
    <rect x="12" y="15" width="18" height="18" rx="4" fill="#505AC9" />
    <text x="17.5" y="28.5" fill="#FFFFFF" fontSize="13" fontWeight="800" fontFamily="sans-serif">T</text>
  </svg>
);

// 6. Microsoft Outlook Logo
export const LogoOutlook: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#E5F1FB" />
    <path d="M22 17H34C35.1 17 36 17.9 36 19V29C36 30.1 35.1 31 34 31H22V17Z" fill="#0078D4" />
    <path d="M22 17L29 23L36 17H22Z" fill="#28A8EA" />
    <rect x="12" y="15" width="18" height="18" rx="4" fill="#005A9E" />
    <text x="17.5" y="28.5" fill="#FFFFFF" fontSize="13" fontWeight="800" fontFamily="sans-serif">O</text>
  </svg>
);

// 7. Microsoft Excel Logo
export const LogoExcel: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#E6F5EC" />
    <path d="M22 17H34C35.1 17 36 17.9 36 19V29C36 30.1 35.1 31 34 31H22V17Z" fill="#107C41" />
    <rect x="24" y="20" width="10" height="2" fill="#FFFFFF" fillOpacity="0.7" />
    <rect x="24" y="24" width="10" height="2" fill="#FFFFFF" fillOpacity="0.7" />
    <rect x="24" y="28" width="10" height="2" fill="#FFFFFF" fillOpacity="0.7" />
    <rect x="12" y="15" width="18" height="18" rx="4" fill="#0E5C2F" />
    <text x="18" y="28.5" fill="#FFFFFF" fontSize="13" fontWeight="800" fontFamily="sans-serif">X</text>
  </svg>
);

// 8. Google Workspace Logo
export const LogoGoogleWorkspace: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
    <path d="M34.5 24.2c0-.7-.06-1.4-.18-2H24v4.2h5.9c-.25 1.4-1.04 2.6-2.2 3.4v2.8h3.6c2.1-1.9 3.2-4.8 3.2-8.4z" fill="#4285F4" />
    <path d="M24 35c3 0 5.5-1 7.3-2.7l-3.6-2.8c-1 .7-2.3 1.1-3.7 1.1-2.9 0-5.3-2-6.2-4.6H14v2.9C15.8 32.5 19.6 35 24 35z" fill="#34A853" />
    <path d="M17.8 26c-.2-.7-.4-1.5-.4-2.3 0-.8.2-1.6.4-2.3V18.5H14c-.7 1.5-1.2 3.2-1.2 5.5 0 2.3.5 4 1.2 5.5l3.8-3.5z" fill="#FBBC05" />
    <path d="M24 16.7c1.6 0 3.1.6 4.3 1.7l3.2-3.2C29.5 13.3 26.9 12.3 24 12.3 19.6 12.3 15.8 14.8 14 18.5l3.8 2.9c.9-2.7 3.3-4.7 6.2-4.7z" fill="#EA4335" />
  </svg>
);

// 9. Gmail Logo
export const LogoGmail: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
    <path d="M12 17.5V30.5C12 31.6 12.9 32.5 14 32.5H17V23.5L24 28.5L31 23.5V32.5H34C35.1 32.5 36 31.6 36 30.5V17.5L24 26.5L12 17.5Z" fill="#EA4335" />
    <path d="M34 15.5H31V23.5L36 19.7V17.5C36 16.4 35.1 15.5 34 15.5Z" fill="#FBBC05" />
    <path d="M14 15.5H17V23.5L12 19.7V17.5C12 16.4 12.9 15.5 14 15.5Z" fill="#4285F4" />
    <path d="M17 15.5H31L24 21L17 15.5Z" fill="#34A853" />
  </svg>
);

// 10. Google Calendar Logo
export const LogoGoogleCalendar: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
    <rect x="13" y="14" width="22" height="20" rx="3" fill="#FFFFFF" stroke="#4285F4" strokeWidth="2.5" />
    <path d="M13 21H35" stroke="#4285F4" strokeWidth="2" />
    <text x="18" y="30.5" fill="#1A73E8" fontSize="10" fontWeight="800" fontFamily="sans-serif">31</text>
    <rect x="18" y="11" width="2" height="5" rx="1" fill="#EA4335" />
    <rect x="28" y="11" width="2" height="5" rx="1" fill="#4285F4" />
  </svg>
);

// 11. Google Drive Logo
export const LogoGoogleDrive: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1" />
    <path d="M19 14L12 26L16 33L23 21L19 14Z" fill="#0F9D58" />
    <path d="M29 14H19L23 21H33L29 14Z" fill="#FFC107" />
    <path d="M33 21L26 33H36L40 26L33 21Z" fill="#4285F4" />
  </svg>
);

// 12. CreditLens (Moody's Analytics) Logo
export const LogoCreditLens: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#0B2341" />
    <circle cx="24" cy="24" r="12" stroke="#D8B16D" strokeWidth="2.5" strokeDasharray="5 2" />
    <polygon points="24,16 30,28 18,28" stroke="#D8B16D" strokeWidth="2" fill="none" />
    <circle cx="24" cy="24" r="3" fill="#D8B16D" />
  </svg>
);

// 13. LoanIQ (Finastra) Logo
export const LogoLoanIQ: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#2E0854" />
    <rect x="13" y="14" width="22" height="20" rx="3" stroke="#D8B16D" strokeWidth="2" />
    <circle cx="20" cy="21" r="2.5" fill="#C1006E" />
    <circle cx="28" cy="21" r="2.5" fill="#C1006E" />
    <circle cx="24" cy="28" r="2.5" fill="#4ADE80" />
    <path d="M20 21L24 28L28 21" stroke="#FFFFFF" strokeWidth="1.5" />
  </svg>
);

// 14. Active Directory Logo
export const LogoActiveDirectory: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#E8F1FC" />
    <rect x="20" y="12" width="8" height="8" rx="2" fill="#0078D4" />
    <path d="M24 20V26M16 26H32M16 26V30M32 26V30" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" />
    <rect x="12" y="30" width="8" height="6" rx="1.5" fill="#28A8EA" />
    <rect x="28" y="30" width="8" height="6" rx="1.5" fill="#28A8EA" />
  </svg>
);

// 15. TeamViewer Logo
export const LogoTeamViewer: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#0E80E5" />
    <circle cx="24" cy="24" r="11" fill="#FFFFFF" />
    <path d="M19 24H29M29 24L26 21M29 24L26 27" stroke="#0E80E5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M29 24H19M19 24L22 21M19 24L22 27" stroke="#0E80E5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 16. Zendesk Logo
export const LogoZendesk: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#03363D" />
    <path d="M15 15H25L15 25V15Z" fill="#17494D" />
    <circle cx="30" cy="20" r="5" fill="#03363D" stroke="#FFFFFF" strokeWidth="2" />
    <path d="M33 33H23L33 23V33Z" fill="#03363D" stroke="#FFFFFF" strokeWidth="2" />
    <circle cx="18" cy="28" r="5" fill="#03363D" stroke="#FFFFFF" strokeWidth="2" />
  </svg>
);

// 17. Remote Desktop (RDP) Logo
export const LogoRDP: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#E8F4FA" />
    <rect x="11" y="14" width="20" height="15" rx="2" fill="#0078D4" />
    <rect x="17" y="19" width="20" height="15" rx="2" fill="#28A8EA" stroke="#FFFFFF" strokeWidth="1.5" />
    <path d="M27 34V37M23 37H31" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 18. ITIL & Service Desk Ops Logo
export const LogoITIL: FC<LogoProps> = ({ size = 44, className = '', style }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
    <rect width="48" height="48" rx="12" fill="#2a1725" />
    <circle cx="24" cy="24" r="11" stroke="#D48F78" strokeWidth="2" fill="none" />
    <path d="M24 16V24L29 27" stroke="#D48F78" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="24" cy="24" r="2.5" fill="#4ADE80" />
  </svg>
);
