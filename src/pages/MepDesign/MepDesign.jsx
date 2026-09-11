import {
  ArrowDownRight,
  Check,
  DraftingCompass,
  FileCheck2,
  Network,
  ScanLine,
} from 'lucide-react';
import PageHero from '../../components/PageHero/PageHero';
import MepOverview from '../../components/MepOverview/MepOverview';
import CTA from '../../components/CTA/CTA';
import './MepDesign.css';

const coordinationValues = [
  {
    number: '01',
    title: 'System intent',
    text: 'Technical requirements remain visible while each discipline develops its part of the design.',
  },
  {
    number: '02',
    title: 'Spatial coordination',
    text: 'Routes, equipment zones and access requirements are considered alongside architecture and structure.',
  },
  {
    number: '03',
    title: 'Practical information',
    text: 'Coordinated outputs are organized to make interfaces and execution requirements easier to understand.',
  },
];

const workflow = [
  {
    icon: DraftingCompass,
    number: '01',
    title: 'Map requirements',
    text: 'Confirm the scope, project criteria, system loads and inputs available from each discipline.',
  },
  {
    icon: Network,
    number: '02',
    title: 'Plan systems',
    text: 'Develop the discipline strategies and identify the interfaces that influence the wider package.',
  },
  {
    icon: ScanLine,
    number: '03',
    title: 'Resolve interfaces',
    text: 'Coordinate routes, equipment, clearances and connections against architectural and structural needs.',
  },
  {
    icon: FileCheck2,
    number: '04',
    title: 'Review and issue',
    text: 'Check the coordinated solution and prepare the drawings or schedules required for the project stage.',
  },
];

const deliverables = [
  'Electrical design integrated with wider MEP systems',
  'HVAC system planning and coordination',
  'Plumbing and drainage layouts',
  'Fire & life-safety coordination',
  'ELV / low-current pathways and interfaces',
  'Backup and critical power coordination',
  'Multidisciplinary coordination drawings',
  'Technical review and project support',
];

export default function MepDesign({ onConsult }) {
  return (
    <>
      <PageHero
        eyebrow="MEP engineering"
        title="Coordinated building systems, led by strong electrical engineering."
        text="Mechanical, electrical, plumbing, fire and low-current systems developed as one coordinated building-services package."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85"
        variant="mep"
      />

      <section className="section mep-intro">
        <div className="container">
          <div className="mep-intro-grid">
            <div className="mep-intro-title">
              <span className="eyebrow dark">MEP approach</span>
              <h2>One model. Clear interfaces. Fewer clashes.</h2>
              <span className="mep-intro-arrow" aria-hidden="true">
                <ArrowDownRight size={24} strokeWidth={1.25} />
              </span>
            </div>

            <div className="mep-intro-copy">
              <p className="lead">
                Electrical engineering is treated as a core discipline while mechanical, plumbing, fire and low-current systems are coordinated around architecture, structure and operating requirements.
              </p>
              <p>
                The goal is not just to produce drawings, but to reduce conflicts and create systems that are practical to install, operate and maintain.
              </p>
            </div>
          </div>

          <div className="mep-value-strip">
            {coordinationValues.map((value) => (
              <article key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MepOverview />

      <section className="section mep-coordination">
        <div className="container">
          <div className="mep-coordination-heading">
            <div>
              <span className="eyebrow dark">Coordination workflow</span>
              <h2>Bring each discipline into one clear delivery path.</h2>
            </div>
            <p>
              A structured workflow keeps individual system requirements connected to the decisions that affect the whole building-services package.
            </p>
          </div>

          <ol className="mep-workflow-list">
            {workflow.map((step) => {
              const Icon = step.icon;

              return (
                <li key={step.number}>
                  <div className="mep-workflow-top">
                    <span>{step.number}</span>
                    <i aria-hidden="true"><Icon size={20} strokeWidth={1.4} /></i>
                  </div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mep-deliverables-grid">
            <div className="mep-deliverables-title">
              <span className="eyebrow dark">Key deliverables</span>
              <h2>Execution-aware MEP coordination.</h2>
              <p>Deliverables are developed around the agreed scope, information level and project stage.</p>
            </div>

            <div className="mep-deliverable-list">
              {deliverables.map((item, index) => (
                <div key={item}>
                  <span className="mep-deliverable-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Check size={17} strokeWidth={1.8} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="MEP requirement?"
        title="Coordinate the systems before they reach site."
        button="Start MEP Consultation"
        onClick={onConsult}
      />
    </>
  );
}
