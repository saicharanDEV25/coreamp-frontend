import { Building2, Cable, DraftingCompass, Droplets, Flame, Hammer, Layers3, Lightbulb, Ruler, Sparkles, Wind } from 'lucide-react';

export const services = [
  { icon: DraftingCompass, title: 'Architectural Design', text: 'Concept planning, space optimization, working drawings and coordinated architectural packages.' },
  { icon: Cable, title: 'MEP Engineering', text: 'Mechanical, electrical and plumbing systems engineered for performance, safety and long-term efficiency.', path: '/services/mep-design' },
  { icon: Layers3, title: 'Interior Design', text: 'Premium interior concepts, material palettes, lighting, furniture and execution-ready detailing.' },
  { icon: Building2, title: 'Exterior & Facade', text: 'Facade concepts, elevation design, materials and architectural identity for modern buildings.' },
  { icon: Ruler, title: 'Structural Engineering', text: 'Safe, economical and coordinated structural solutions aligned with architecture and services.' },
  { icon: Hammer, title: 'Turnkey Execution', text: 'Single-point project delivery from planning and procurement to execution and final handover.' },
];

export const mepItems = [
  { icon: Wind, title: 'HVAC Design' },
  { icon: Lightbulb, title: 'Electrical Design' },
  { icon: Droplets, title: 'Plumbing & Drainage' },
  { icon: Flame, title: 'Fire & Life Safety' },
  { icon: Sparkles, title: 'Energy Efficiency' },
  { icon: Cable, title: 'BMS & Automation' },
];

export const projects = [
  { title: 'Luxury Residence', category: 'Residential', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85' },
  { title: 'Corporate Workspace', category: 'Commercial', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85' },
  { title: 'Premium Hospitality', category: 'Hospitality', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85' },
  { title: 'Modern Villa', category: 'Residential', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85' },
  { title: 'Retail Experience', category: 'Commercial', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85' },
  { title: 'Signature Interiors', category: 'Interior', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85' },
];
