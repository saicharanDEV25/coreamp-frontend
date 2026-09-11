import {
  ArrowDownRight,
  Check,
  CircuitBoard,
  FileCheck2,
  Gauge,
  Layers3,
} from 'lucide-react';
import PageHero from '../../components/PageHero/PageHero';
import ElectricalCapabilities from '../../components/ElectricalCapabilities/ElectricalCapabilities';
import PowerStudies from '../../components/PowerStudies/PowerStudies';
import SectorExpertise from '../../components/SectorExpertise/SectorExpertise';
import CTA from '../../components/CTA/CTA';
import './ElectricalDesign.css';

const workflow = [
  {
    icon: FileCheck2,
    number: '01',
    title: 'Establish the design basis',
    text: 'Confirm loads, operating priorities, project criteria and the information available for design.',
  },
  {
    icon: CircuitBoard,
    number: '02',
    title: 'Develop the architecture',
    text: 'Define distribution topology, system interfaces and the path from source to connected load.',
  },
  {
    icon: Gauge,
    number: '03',
    title: 'Calculate and verify',
    text: 'Size equipment and conduct the calculations or studies required to test the design direction.',
  },
  {
    icon: Layers3,
    number: '04',
    title: 'Coordinate and document',
    text: 'Resolve routing and multidisciplinary interfaces, then communicate the solution through clear outputs.',
  },
];

const deliverables = [
  'Power distribution design and system architecture',
  'Single Line Diagrams (SLD)',
  'Electrical load calculations and schedules',
  'Transformer, UPS and generator sizing',
  'Cable sizing, voltage drop and routing',
  'Grounding and bonding design',
  'Indoor and outdoor lighting design',
  'Power-system study reports and coordination outputs',
];

export default function ElectricalDesign({ onConsult }) {
  return (
    <>
      <PageHero
        eyebrow="Core engineering service"
        title="Electrical systems designed for reliability."
        text="From MV/LV power distribution and SLDs to cable sizing, grounding, lighting and advanced power-system studies."
        image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=85"
        variant="electrical"
      />

      <section className="section electrical-intro">
        <div className="container electrical-intro-grid">
          <div className="electrical-intro-title">
            <span className="eyebrow dark">Service overview</span>
            <h2>Electrical engineering from concept to coordinated documentation.</h2>
            <span className="electrical-intro-arrow" aria-hidden="true">
              <ArrowDownRight size={24} strokeWidth={1.25} />
            </span>
          </div>

          <div className="electrical-intro-copy">
            <p className="lead">
              The electrical scope is developed around system safety, capacity, reliability and practical coordination with the building and wider MEP package.
            </p>
            <p>
              The capability profile includes distribution design, load calculations, equipment sizing, cable routing, grounding and lighting, supported by dedicated system studies.
            </p>

            <div className="electrical-intro-lenses" aria-label="Electrical design priorities">
              <span>Safety</span>
              <span>Capacity</span>
              <span>Reliability</span>
              <span>Coordination</span>
            </div>
          </div>
        </div>
      </section>

      <ElectricalCapabilities />
      <PowerStudies />

      <section className="section electrical-delivery">
        <div className="container">
          <div className="electrical-delivery-heading">
            <div>
              <span className="eyebrow dark">Design workflow</span>
              <h2>A disciplined route from criteria to coordinated issue.</h2>
            </div>
            <p>
              Each step carries the design intent forward while calculations, system interfaces and documentation are progressively resolved.
            </p>
          </div>

          <ol className="electrical-workflow-list">
            {workflow.map((step) => {
              const Icon = step.icon;

              return (
                <li key={step.number}>
                  <div className="electrical-workflow-top">
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

          <div className="electrical-deliverables-grid">
            <div className="electrical-deliverables-title">
              <span className="eyebrow dark">Typical deliverables</span>
              <h2>Clear information for design, review and execution.</h2>
              <p>Outputs are aligned to the agreed project stage and engineering scope.</p>
            </div>

            <div className="electrical-deliverable-list">
              {deliverables.map((item, index) => (
                <div key={item}>
                  <span className="electrical-deliverable-number">
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

      <SectorExpertise />

      <CTA
        eyebrow="Electrical requirement?"
        title="Let’s define the system correctly from day one."
        button="Start Electrical Consultation"
        onClick={onConsult}
      />
    </>
  );
}
