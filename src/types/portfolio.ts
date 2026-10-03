export type RoleFilterType = 'all' | 'va' | 'tech' | 'support' | 'lead';

export interface CompetencyItem {
  name: string;
  category: 'Customer Support' | 'Virtual Assistance & Administration' | 'Technical Support' | 'Leadership & Operations';
  description: string;
  highlightFor: RoleFilterType[];
  level: number; // 1-100
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  subContext?: string;
  period: string;
  isCurrent?: boolean;
  location: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  roleCategories: RoleFilterType[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  roleCategories: RoleFilterType[];
  metricHighlight: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  toolsUsed: string[];
}

export interface TechSkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    context?: string;
  }[];
}

export interface SimulatorScenario {
  id: string;
  title: string;
  roleType: 'L2 Technical Support' | 'Executive Virtual Assistant' | 'IT Service Desk Supervisor';
  priority: 'Critical / P1' | 'High' | 'Urgent VIP';
  scenarioDescription: string;
  initialInquiry: {
    from: string;
    channel: 'ServiceNow Ticket' | 'Executive Email' | 'Priority Queue Surge';
    message: string;
    timestamp: string;
  };
  resolutionSteps: {
    phase: string;
    action: string;
    details: string;
    deliverable: string;
  }[];
  keyTakeaway: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Availability' | 'Technical' | 'Virtual Assistance' | 'Security';
}
