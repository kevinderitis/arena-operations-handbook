export type DepartmentId = 'bed24' | 'spinal' | 'front-desk' | 'cleaning';

export interface DepartmentMeta {
  id: DepartmentId;
  label: string;
  path: string;
  description: string;
  icon: string;
}

export type CalloutType = 'info' | 'important' | 'warning' | 'tip' | 'error';

export interface Callout {
  type: CalloutType;
  title?: string;
  content: string;
}

export interface StepImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Step {
  id?: string;
  title: string;
  description?: string;
  images?: StepImage[];
  callouts?: Callout[];
  substeps?: string[];
}

export interface ChecklistItem {
  id: string;
  label: string;
}

export interface TroubleshootingItem {
  problem: string;
  solution: string;
}

export interface Procedure {
  id: string;
  slug: string;
  department: DepartmentId;
  title: string;
  description: string;
  keywords?: string[];
  estimatedDuration?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  lastUpdated?: string;
  prerequisites?: string[];
  introduction?: string;
  steps: Step[];
  notes?: string[];
  commonMistakes?: string[];
  troubleshooting?: TroubleshootingItem[];
  checklist?: ChecklistItem[];
  relatedProcedures?: string[];
}

export interface NavItem {
  id: string;
  title: string;
  slug: string;
  department: DepartmentId;
}

export interface NavGroup {
  id: DepartmentId;
  title: string;
  department: DepartmentId;
  items: NavItem[];
}
