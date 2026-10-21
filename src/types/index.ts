export type Language = 'id' | 'en';

export type ProductCategory = 
  | 'all' 
  | 'passenger' 
  | 'panoramic' 
  | 'hospital' 
  | 'freight' 
  | 'home' 
  | 'car' 
  | 'escalator' 
  | 'moving-walk' 
  | 'dumbwaiter';

export interface ElevatorProduct {
  id: string;
  name: { id: string; en: string };
  category: ProductCategory;
  brand: 'FUJIYANG' | 'SHARP' | 'BOTH';
  modelCode: string;
  tagline: { id: string; en: string };
  description: { id: string; en: string };
  image: string;
  badge?: { id: string; en: string };
  specs: {
    ratedSpeed: string;
    ratedCapacity: string;
    maxTravelHeight?: string;
    driveSystem: string;
    controller: string;
    doorType: string;
    cabinFinish: string;
  };
  keyPoints: { id: string; en: string }[];
  applications: { id: string; en: string }[];
  safetyFeatures: { id: string; en: string }[];
}

export interface PortfolioProject {
  id: string;
  name: string;
  location: string;
  category: 'healthcare' | 'hospitality' | 'commercial' | 'residential' | 'government' | 'transport';
  typeModel: string;
  units: number;
  stops?: string;
  capacity?: string;
  brand: 'FUJIYANG' | 'SHARP';
  scope: { id: string; en: string };
  featured?: boolean;
}

export interface ProjectItem {
  id: string | number;
  title: { id: string; en: string };
  category: string;
  location: string;
  units: string;
  type: { id: string; en: string };
  specs: string;
  image: string;
  description: { id: string; en: string };
}

export interface ServiceItem {
  id: string | number;
  title: { id: string; en: string };
  description: { id: string; en: string };
  points: { id: string; en: string }[];
}

export interface CabinStyle {
  id: string;
  code: string;
  name: string;
  series: 'concise' | 'classical' | 'luxury' | 'panoramic' | 'hospital';
  finish: { id: string; en: string };
  ceiling: { id: string; en: string };
  handrail: { id: string; en: string };
  flooring: { id: string; en: string };
  accentColor: string;
  bgColor: string;
  description: { id: string; en: string };
  features: string[];
}

export interface ComparisonRow {
  parameter: { id: string; en: string };
  fujiyang: string;
  kone: string;
  schindler: string;
  mitsubishi: string;
}

export interface ReasonItem {
  id: number;
  stat: string;
  title: { id: string; en: string };
  desc: { id: string; en: string };
  iconName: string;
}

export interface Testimonial {
  id: string;
  clientName?: string;
  name?: string;
  role: string | { id: string; en: string };
  company?: string;
  project?: string;
  location?: string;
  content?: { id: string; en: string };
  comment?: { id: string; en: string };
  rating: number;
  projectRef?: string;
}

export interface BlogPost {
  id: string;
  title: { id: string; en: string };
  excerpt: { id: string; en: string };
  category: { id: string; en: string };
  date: string;
  readTime: string;
  content: { id: string; en: string };
  tags: string[];
}

export interface FAQItem {
  id: string | number;
  category: string;
  question: { id: string; en: string };
  answer: { id: string; en: string };
}
