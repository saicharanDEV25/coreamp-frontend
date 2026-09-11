import { Check } from 'lucide-react';
import PageHero from '../../components/PageHero/PageHero';
import MepOverview from '../../components/MepOverview/MepOverview';
import CTA from '../../components/CTA/CTA';
import './MepDesign.css';

export default function MepDesign({ onConsult }) {
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

  return (
    <>
      <PageHero
        eyebrow="MEP engineering"
        title="Coordinated building systems, led by strong electrical engineering."
        text="Mechanical, electrical, plumbing, fire and low-current systems developed as one coordinated building-services package."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="section mep-intro">
        <div className="container split-grid">
          <div><span className="eyebrow dark">MEP approach</span><h2 className="section-title">One model. Clear interfaces. Fewer clashes.</h2></div>
          <div><p className="lead">Electrical engineering is treated as a core discipline while mechanical, plumbing, fire and low-current systems are coordinated around architecture, structure and operating requirements.</p><p className="mep-copy">The goal is not just to produce drawings, but to reduce conflicts and create systems that are practical to install, operate and maintain.</p></div>
        </div>
      </section>
      <MepOverview/>
      <section className="section mep-deliverables">
        <div className="container split-grid">
          <div><span className="eyebrow dark">Key deliverables</span><h2 className="section-title">Execution-ready MEP coordination.</h2></div>
          <div className="mep-deliverable-list">
            {deliverables.map(item => <div key={item}><Check/><span>{item}</span></div>)}
          </div>
        </div>
      </section>
      <CTA eyebrow="MEP requirement?" title="Coordinate the systems before they reach site." button="Start MEP Consultation" onClick={onConsult}/>
    </>
  );
}
