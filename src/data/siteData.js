import {
  Activity,
  BatteryCharging,
  Building2,
  Cable,
  CircuitBoard,
  Droplets,
  Factory,
  Flame,
  Gauge,
  GraduationCap,
  HeartPulse,
  House,
  Lightbulb,
  Network,
  Server,
  ShieldCheck,
  Wind,
  Zap,
} from 'lucide-react';

export const electricalCapabilities = [
  { icon: Zap, area: 'Electrical Design', title: 'Power Distribution Design', level: 'Advanced', text: 'MV/LV distribution systems' },
  { icon: CircuitBoard, area: 'Electrical Design', title: 'Single Line Diagrams (SLD)', level: 'Advanced', text: 'Design & review' },
  { icon: Gauge, area: 'Electrical Design', title: 'Load Calculations', level: 'Advanced', text: 'Commercial & Industrial projects' },
  { icon: BatteryCharging, area: 'Electrical Design', title: 'Equipment Sizing', level: 'Advanced', text: 'Transformers, UPS, Generators' },
  { icon: Cable, area: 'Electrical Design', title: 'Cable Sizing & Routing', level: 'Advanced', text: 'Voltage drop & ampacity calculations' },
  { icon: ShieldCheck, area: 'Electrical Design', title: 'Grounding & Bonding Design', level: 'Advanced', text: 'IEEE/NEC based design' },
  { icon: Lightbulb, area: 'Electrical Design', title: 'Lighting Design', level: 'Intermediate', text: 'Indoor & outdoor systems' },
];

export const powerStudies = [
  { icon: Network, title: 'SKM Modeling', level: 'Advanced', text: 'Network modeling' },
  { icon: Activity, title: 'Load Flow Analysis', level: 'Advanced', text: 'Steady-state studies' },
  { icon: Zap, title: 'Short Circuit Analysis', level: 'Advanced', text: 'Fault current calculation' },
  { icon: ShieldCheck, title: 'Protective Device Coordination', level: 'Advanced', text: 'Coordination studies' },
  { icon: Flame, title: 'Arc Flash Studies', level: 'Advanced', text: 'Hazard analysis' },
];

export const sectorExpertise = [
  {
    icon: Building2,
    sector: 'Commercial',
    items: [
      ['Voltage Drop Calculations', 4],
      ['Transformer Sizing', 4],
      ['Grounding', 3],
      ['Electrical Schedules', 4],
      ['Lighting Design', 4],
    ],
  },
  {
    icon: GraduationCap,
    sector: 'Education',
    items: [
      ['Electrical Schedules', 3],
      ['Load Flow', 3],
      ['Switchgear Sizing', 4],
    ],
  },
  { icon: HeartPulse, sector: 'Healthcare', items: [['Switchgear Sizing', 3]] },
  { icon: House, sector: 'Residential', items: [['Switchgear Sizing', 4], ['Short Circuit', 4]] },
  { icon: Factory, sector: 'Industrial Projects', items: [['Lighting Calculation', 4]] },
  {
    icon: Server,
    sector: 'Mission Critical',
    items: [
      ['Relay Coordination', 3],
      ['Grounding', 3],
      ['Voltage Drop Calculations', 4],
      ['Transformer Sizing', 4],
      ['Switchgear Sizing', 4],
      ['Short Circuit', 4],
      ['Lighting Design', 4],
      ['Electrical Schedules', 4],
      ['Arc Flash', 3],
    ],
  },
];

export const mepItems = [
  { icon: Zap, title: 'Electrical Engineering', text: 'Power distribution, lighting, grounding, emergency and critical power systems.' },
  { icon: Wind, title: 'HVAC Design', text: 'Cooling, ventilation and equipment strategies coordinated with electrical loads.' },
  { icon: Droplets, title: 'Plumbing & Drainage', text: 'Water supply, drainage and utility routing integrated with the project model.' },
  { icon: Flame, title: 'Fire & Life Safety', text: 'Fire protection and life-safety systems coordinated across disciplines.' },
  { icon: CircuitBoard, title: 'ELV / Low Current', text: 'Low-current pathways, system planning and multidisciplinary coordination.' },
  { icon: BatteryCharging, title: 'Backup Power', text: 'UPS, generator and critical-power strategies aligned to operational requirements.' },
];

export const services = [
  { icon: Zap, title: 'Electrical Design', text: 'Power distribution, SLDs, load calculations, equipment sizing, cable routing, grounding and lighting.', image: '/images/services/electrical-design.png', path: '/#contact' },
  { icon: Network, title: 'Power System Studies', text: 'SKM modeling, load flow, short circuit, protection coordination and arc-flash studies.', image: '/images/services/power-system-studies.png', path: '/#contact' },
  { icon: Wind, title: 'MEP Design & Coordination', text: 'Integrated mechanical, electrical, plumbing, fire and low-current engineering.', image: '/images/services/mep-coordination.png', path: '/#contact' },
  { icon: Building2, title: 'BIM Services', text: 'Coordinated BIM models, clash detection, multidisciplinary integration and construction-ready documentation.', image: '/images/services/bim-services.png', path: '/#contact' },
  { icon: Lightbulb, title: 'Lighting Engineering', text: 'Indoor and outdoor lighting planning, calculations and coordination.', image: '/images/services/lighting-engineering.png', path: '/#contact' },
  { icon: Cable, title: 'Critical Power & Distribution', text: 'Transformers, UPS, generators, switchgear and distribution strategy for reliable systems.', image: '/images/services/critical-power.png', path: '/#contact' },
];

export const projects = [
  { title: 'Commercial Power Infrastructure', category: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85', tags: ['Power Distribution', 'Lighting Design'] },
  { title: 'Mission Critical Electrical Systems', category: 'Mission Critical', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85', tags: ['Arc Flash', 'Short Circuit', 'Relay Coordination'] },
  { title: 'Healthcare MEP Coordination', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=85', tags: ['Switchgear Sizing', 'MEP Coordination'] },
  { title: 'Residential Electrical Design', category: 'Residential', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85', tags: ['Lighting', 'Short Circuit'] },
  { title: 'Industrial Engineering Package', category: 'Industrial', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85', tags: ['Equipment Sizing', 'Lighting Calculation'] },
  { title: 'Education Campus Utilities', category: 'Education', image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85', tags: ['Load Flow', 'Electrical Schedules'] },
];
