export interface Service {
  id: string;
  title: string;
  category: 'va' | 'technical' | 'support' | 'leadership';
  tagline: string;
  description: string;
  tools: string[];
  deliverables: string[];
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  period: string;
  role: string;
  type: string;
  summary: string;
  achievements: string[];
  toolsUsed: string[];
  highlightMetric: string;
}

export interface ToolCategory {
  category: string;
  tools: {
    name: string;
    level: string;
    description: string;
  }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const portfolioData = {
  personal: {
    name: 'Wenelove Del Castillo',
    role: 'Virtual Assistant & Technical Support Specialist',
    badge: 'Available for Full-Time & Part-Time Remote Roles • 10+ Years Enterprise Support',
    headline: 'Senior Technical Support & Executive Virtual Assistant',
    subheadline: 'Virtual Assistant • Customer Support Specialist • Technical Support Professional • Administrative Support',
    bio:
      'Results-driven Customer Support and Technical Support Professional with over 10 years of experience in customer service, service desk operations, enterprise application support, incident management, and team leadership. Experienced in providing support through email, chat, phone, and ticketing systems while maintaining high levels of customer satisfaction. Demonstrated expertise in troubleshooting, workflow administration, process documentation, stakeholder management, knowledge base creation, and administrative support.',
    location: 'Taguig City, Metro Manila, Philippines',
    email: 'wenelove.delcastillo@gmail.com',
    phone: '+63 907 663 7135',
    phoneFormatted: '+63 907 663 7135',
    linkedin: 'https://www.linkedin.com/in/wenelove-del-castillo',
    linkedinHandle: 'wenelove-del-castillo',
    availability: 'Full-Time or Part-Time • Flexible to US, UK, APAC & EMEA Shifts',
    timezoneOffset: 'UTC+8 (PHT - Philippine Standard Time)',
    experienceYears: '10+',
  },

  metrics: [
    { label: 'Years Experience', value: '10+', caption: 'In Customer & Tech Support' },
    { label: 'IT Staff Supervised', value: '50+', caption: 'At ABS-CBN Service Desk' },
    { label: 'SLA Benchmark', value: '99.4%', caption: 'Resolution & CSAT Performance' },
    { label: 'Banking Applications', value: 'Tier-2', caption: 'ADB Support / CreditLens & LoanIQ' },
    { label: 'Remote Readiness', value: '100%', caption: 'US, UK, APAC & EMEA Shift Alignment' },
  ],

  services: [
    {
      id: 'virtual-assistance',
      title: 'Executive Virtual Assistance & Administration',
      category: 'va' as const,
      tagline: 'High-Touch Calendar, Inbox Zero, Research & Seamless Back-Office Operations',
      description:
        'Providing reliable administrative and virtual support that frees busy executives and founders from daily operational friction, meeting conflicts, and administrative overhead.',
      tools: ['Google Workspace', 'Microsoft 365', 'SharePoint', 'Outlook', 'OneDrive', 'Google Meet', 'Excel'],
      deliverables: [
        'Multi-timezone calendar management, schedule deconfliction, and buffer optimization',
        'Inbox triage (Zero-Inbox methodology), priority categorization, and canned drafting',
        'Meticulous data entry, spreadsheet validation, CRM maintenance, and auditing',
        'Document taxonomy organization in SharePoint, OneDrive, and Google Drive',
        'Internet research, market synthesis, vendor price comparisons, and reporting',
        'Standard Operating Procedures (SOPs) development and knowledge documentation',
      ],
      badge: 'Executive Focus',
    },
    {
      id: 'tech-support',
      title: 'L2 Technical & Banking Application Support',
      category: 'technical' as const,
      tagline: 'Enterprise Systems Troubleshooting, Workflow Validation & Root Cause Analysis',
      description:
        'Providing dedicated Level 2 application support for business-critical banking and corporate systems, ensuring 99.9% uptime, rapid triage, and zero business interruption.',
      tools: ['CreditLens', 'LoanIQ', 'ServiceNow', 'Active Directory', 'SharePoint KB', 'RCA'],
      deliverables: [
        'L2 support for enterprise banking and financial applications (CreditLens, LoanIQ)',
        'Workflow validation, transaction state troubleshooting, and data lock resolution',
        'Root Cause Analysis (RCA) and post-incident corrective action documentation',
        'Vendor and technical stakeholder coordination for complex system integration bugs',
        'Authoring definitive knowledge base user guides, manuals, and support runbooks',
        'User access administration, security group assignments, and offboarding checks',
      ],
      badge: 'Enterprise Tier',
    },
    {
      id: 'customer-support',
      title: 'Omnichannel Customer Support & Service Desk',
      category: 'support' as const,
      tagline: 'Empathetic, High-Resolution Support Across Email, Live Chat, Phone & Tickets',
      description:
        'Delivering warm, prompt, and effective customer service that turns frustrated callers into brand advocates while consistently exceeding enterprise SLA targets.',
      tools: ['ServiceNow', 'Jira Service Management', 'Zendesk / Help Desk', 'VoIP', 'CRM'],
      deliverables: [
        'Omnichannel customer support across Email, Live Chat, Phone, and Ticket portals',
        'Queue triage, ticket categorization, and SLA deadline monitoring in ServiceNow/Jira',
        'Senior escalation management, customer de-escalation, and complaint resolution',
        'Customer Relationship Management (CRM) record hygiene and customer logs',
        'First Call Resolution (FCR) optimization and continuous customer satisfaction (CSAT)',
        'Process improvement recommendations based on recurring support inquiry patterns',
      ],
      badge: 'Customer First',
    },
    {
      id: 'leadership-operations',
      title: 'Team Leadership, Coaching & QA Operations',
      category: 'leadership' as const,
      tagline: 'Supervising 50+ Support Engineers, Quality Auditing & SLA Governance',
      description:
        'Proven supervisory leadership in scaling 24/7 service desk teams, designing quality assurance frameworks, mentoring frontline agents, and aligning operations with executive KPIs.',
      tools: ['QA Rubrics', 'ServiceNow Metrics', 'SLA Dashboards', 'Coaching Logs', 'KPI Systems'],
      deliverables: [
        'Supervised daily service desk operations over 50+ support professionals at ABS-CBN',
        'Monitored SLA compliance, multi-channel queues, and operational performance metrics',
        'Conducted regular 1-on-1 coaching, staff evaluations, and targeted skill development',
        'Designed and facilitated structured training programs and onboarding job aids',
        'Conducted rigorous quality assurance (QA) audits across phone, ticket, and chat logs',
        'Incident commander for major outages, cross-departmental stakeholder communications',
      ],
      badge: 'Proven Leadership',
    },
  ],

  experiences: [
    {
      id: 'exp-indra',
      company: 'Indra Philippines',
      location: 'Philippines (Supporting Global Stakeholders)',
      period: 'Recent Enterprise Engagement',
      role: 'L2 Junior Systems Engineer (ADB Support)',
      type: 'Enterprise Financial Systems Support',
      summary:
        'Provided dedicated Level 2 application support for business-critical banking and financial platforms supporting the Asian Development Bank (ADB) and international loan officers.',
      achievements: [
        'Maintained uninterrupted business continuity across CreditLens and LoanIQ workflows.',
        'Investigated, troubleshot, and resolved application incidents, service requests, and workflow deadlocks.',
        'Authored comprehensive CreditLens Knowledge Base articles and standard user guides that cut repetitive user tickets by 80%.',
        'Conducted thorough root cause analysis (RCA) and coordinated directly with software vendors to remediate edge-case defects.',
      ],
      toolsUsed: ['CreditLens', 'LoanIQ', 'ServiceNow', 'SharePoint', 'RCA', 'M365', 'Incident Management'],
      highlightMetric: '80% Reduction in Repetitive User Tickets',
    },
    {
      id: 'exp-abscbn-supervisor',
      company: 'ABS-CBN Corporation',
      location: 'Quezon City / Remote, Philippines',
      period: 'Multi-Year Leadership Tenure',
      role: 'IT Service Desk Supervisor',
      type: '24/7 Enterprise IT Operations',
      summary:
        'Directed daily 24/7 service desk operations and led a high-volume team of approximately 50 service desk professionals supporting nationwide broadcast and corporate networks.',
      achievements: [
        'Supervised approximately 50 service desk professionals across multiple shifts.',
        'Monitored real-time SLA compliance, ticket queues, and service performance metrics.',
        'Substantially reduced Mean Time to Resolution (MTTR) and maintained consistently high CSAT ratings.',
        'Conducted structured coaching sessions, quality reviews, and formal staff evaluations.',
        'Served as primary escalation point and incident commander during critical broadcast support outages.',
      ],
      toolsUsed: ['ServiceNow', 'Jira', 'Active Directory', 'SLA Management', 'Quality Assurance', 'Team Leadership'],
      highlightMetric: 'Supervised 50+ IT Professionals',
    },
    {
      id: 'exp-abscbn-teamlead',
      company: 'ABS-CBN Corporation',
      location: 'Philippines',
      period: 'Leadership Promotion',
      role: 'IT Team Lead – Phone Support',
      type: 'Frontline Technical & Customer Operations',
      summary:
        'Led frontline technical and customer service telephone operations, providing real-time guidance to support reps and managing high-priority incident escalations.',
      achievements: [
        'Managed ticket queues, workload distribution, and handled complex tier-2 customer escalations.',
        'Consistently met service level and quality targets during high-call broadcast seasons.',
        'Coached team members on troubleshooting procedures and telecommunication etiquette.',
        'Mentored numerous frontline agents who subsequently earned promotions to senior engineering roles.',
      ],
      toolsUsed: ['Help Desk Systems', 'VoIP / Telephony', 'Incident Escalations', 'Remote Support', 'KPI Tracking'],
      highlightMetric: '95%+ SLA & FCR Adherence',
    },
    {
      id: 'exp-abscbn-quality',
      company: 'ABS-CBN Corporation',
      location: 'Philippines',
      period: 'Specialized Operational Role',
      role: 'Training and Quality Lead',
      type: 'Learning & Development, Service Excellence',
      summary:
        'Designed and facilitated training programs, established the division’s first standardized quality assurance rubric, and audited service evaluations.',
      achievements: [
        'Designed and delivered end-to-end training programs for incoming and existing support personnel.',
        'Established standardized quality assurance (QA) evaluation scorecards for tickets, chats, and calls.',
        'Developed training materials, job aids, and centralized knowledge resources that accelerated onboarding.',
        'Conducted calibration sessions and 1-on-1 coaching that elevated overall service desk consistency.',
      ],
      toolsUsed: ['Instructional Design', 'QA Auditing', 'Knowledge Management', 'Staff Coaching', 'Process Documentation'],
      highlightMetric: 'Built Division-Wide QA Framework',
    },
  ],

  techMatrix: [
    {
      category: 'Ticketing & Service Management',
      tools: [
        { name: 'ServiceNow', level: 'Expert', description: 'Incident, change, request, knowledge & SLA management' },
        { name: 'Jira Service Management', level: 'Expert', description: 'Agile sprints, customer queues & bug reporting' },
        { name: 'Help Desk Systems', level: 'Expert', description: 'Multi-channel ticketing, macros & automated triage' },
        { name: 'ITIL Incident Management', level: 'Expert', description: 'Sev-1 incident commander, root cause analysis (RCA)' },
      ],
    },
    {
      category: 'Microsoft 365 Ecosystem',
      tools: [
        { name: 'Microsoft 365 Admin', level: 'Advanced', description: 'User provisioning, licenses, group security policies' },
        { name: 'SharePoint', level: 'Expert', description: 'Knowledge base architecture, document libraries, permissions' },
        { name: 'Microsoft Teams', level: 'Expert', description: 'Enterprise collaboration, channels, meeting facilitation' },
        { name: 'Outlook', level: 'Expert', description: 'Executive calendar deconfliction, rules & inbox management' },
        { name: 'Excel', level: 'Advanced', description: 'VLOOKUP, Pivot Tables, data cleaning & KPI trackers' },
        { name: 'Word & PowerPoint', level: 'Expert', description: 'Procedural manuals, SOP documentation, executive decks' },
        { name: 'OneDrive', level: 'Expert', description: 'Cloud file synchronization, sharing permissions & backup' },
      ],
    },
    {
      category: 'Google Workspace',
      tools: [
        { name: 'Gmail', level: 'Expert', description: 'Zero-Inbox categorization, filters, canned responses' },
        { name: 'Google Calendar', level: 'Expert', description: 'Global multi-timezone scheduling, invites & buffer mgmt' },
        { name: 'Google Docs & Sheets', level: 'Expert', description: 'Collaborative live documentation, formulas & trackers' },
        { name: 'Google Drive', level: 'Expert', description: 'Taxonomy folder structuring, permissions & archiving' },
        { name: 'Google Meet', level: 'Expert', description: 'Virtual conference facilitation, recording & notes log' },
      ],
    },
    {
      category: 'Enterprise Banking Applications',
      tools: [
        { name: 'CreditLens', level: 'Expert', description: 'Lending workflow, approval cycles, task reassignment, rework' },
        { name: 'LoanIQ', level: 'Advanced', description: 'Syndicated loan management, data validation, system checks' },
        { name: 'Microsoft Dynamics 365', level: 'Proficient', description: 'CRM customer tracking & records management' },
      ],
    },
    {
      category: 'Remote Support & SysAdmin',
      tools: [
        { name: 'Active Directory (AD)', level: 'Advanced', description: 'User account creation, password resets, OU & permissions' },
        { name: 'User Access Administration', level: 'Expert', description: 'Role-based access control (RBAC), security audits' },
        { name: 'Remote Desktop (RDP)', level: 'Expert', description: 'Secure remote assistance & server terminal sessions' },
        { name: 'TeamViewer & UltraVNC', level: 'Expert', description: 'Frontline desktop control, screen share & user guidance' },
        { name: 'SCCM', level: 'Proficient', description: 'Software deployment monitoring and patch tracking' },
      ],
    },
  ],

  reliability: {
    title: 'Zero-Downtime Infrastructure & Remote Readiness',
    subtitle: 'When managing business-critical banking workflows, executive inboxes, and high-volume ticket queues, reliability is non-negotiable. Here is the enterprise remote setup powering Wenelove’s daily operations.',
    specs: [
      {
        title: 'Redundant High-Speed Fiber Internet',
        highlight: 'Primary 300 Mbps Fiber + Secondary 4G/5G Backup',
        description:
          'Equipped with commercial high-speed fiber internet and an automatic secondary cellular failover to prevent dropped calls or connectivity downtime during critical operations.',
      },
      {
        title: 'Uninterruptible Power Supply (UPS)',
        highlight: 'Battery Backup & Clean Power Surge Protection',
        description:
          'Workstation and networking equipment are backed by a dedicated UPS system, ensuring uninterrupted operation during temporary power fluctuations or electrical grid maintenance.',
      },
      {
        title: 'Ergonomic Dual-Monitor Workstation',
        highlight: 'Multi-Display Setup + Noise-Canceling Audio',
        description:
          'Dual high-resolution displays for seamless side-by-side multitasking across ServiceNow, CreditLens, and communications, paired with an active noise-canceling headset.',
      },
      {
        title: 'Enterprise Security & Confidentiality',
        highlight: 'Active Directory, 2FA, BitLocker & Strict NDAs',
        description:
          'Trained in banking-grade data confidentiality and corporate security protocols. All devices are encrypted with hardware password protection and strict 2FA authentication.',
      },
      {
        title: 'Flexible Global Shift Coverage',
        highlight: 'US (EST/PST), UK (GMT), Australia (AEST) & APAC',
        description:
          '10+ years of 24/7 service desk experience means full adaptability to global timezones. Ready to overlap with your core working hours with punctual, dedicated attendance.',
      },
      {
        title: 'Documented Standard Operating Procedures',
        highlight: 'SOPs, Runbooks & Zero Operational Ambiguity',
        description:
          'Every recurring task and delegation workflow is documented with step-by-step Standard Operating Procedures, ensuring smooth handoffs and repeatable quality.',
      },
    ],
  },

  faqs: [
    {
      question: 'What time zones and working hours are you available for?',
      answer:
        'I am based in the Philippines (UTC+8 / PHT), but with 10+ years of 24/7 service desk and international banking support experience, I am fully equipped to work US hours (EST, CST, PST), UK / European hours (GMT/CET), or Australian hours (AEST). I ensure dependable, punctual overlap with your team.',
    },
    {
      question: 'How do you bridge Technical Support and Virtual Assistance roles?',
      answer:
        'My technical background in enterprise systems (L2 support, ServiceNow, Active Directory, LoanIQ) provides a decisive advantage for virtual assistance. Unlike standard assistants, I can troubleshoot software glitches, organize complex SharePoint architectures, automate repetitive workflows, and document SOPs with technical precision.',
    },
    {
      question: 'What was your specific role with CreditLens and LoanIQ at Indra / ADB?',
      answer:
        'At Indra Philippines supporting the Asian Development Bank (ADB), I provided dedicated Level 2 support for CreditLens and LoanIQ. This included troubleshooting complex loan lifecycle stages, approvals, endorsements, rework cycles, task reassignments, and authoring the official knowledge base manuals for international banking officers.',
    },
    {
      question: 'How many agents have you managed, and what is your leadership style?',
      answer:
        'At ABS-CBN Corporation, I supervised approximately 50 service desk professionals. My leadership approach focuses on clear SLA expectations, empathetic 1-on-1 coaching, objective quality assurance auditing, and creating structured knowledge resources so every team member is empowered to succeed.',
    },
    {
      question: 'What is your remote workspace setup and reliability guarantee?',
      answer:
        'I operate with high-speed fiber internet plus an active secondary backup connection, an uninterruptible power supply (UPS), dual monitors, an ergonomic workstation, and dedicated noise-canceling headset technology for crisp, professional communication.',
    },
    {
      question: 'How quickly can you be onboarded into our company’s tools and workflows?',
      answer:
        'Given my extensive experience across Microsoft 365, Google Workspace, ServiceNow, Jira, and enterprise financial tools, I ramp up rapidly. I typically master team workflows within 48 to 72 hours and immediately begin drafting SOPs to streamline ongoing operations.',
    },
  ],
};
