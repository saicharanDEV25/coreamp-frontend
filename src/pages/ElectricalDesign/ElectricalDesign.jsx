import { Check, ArrowRight } from 'lucide-react';
import PageHero from '../../components/PageHero/PageHero';
import ElectricalCapabilities from '../../components/ElectricalCapabilities/ElectricalCapabilities';
import PowerStudies from '../../components/PowerStudies/PowerStudies';
import SectorExpertise from '../../components/SectorExpertise/SectorExpertise';
import CTA from '../../components/CTA/CTA';
import './ElectricalDesign.css';

export default function ElectricalDesign({ onConsult }) {
  return (
    <>
      <PageHero
        eyebrow="Core engineering service"
        title="Electrical systems designed for reliability."
        text="From MV/LV power distribution and SLDs to cable sizing, grounding, lighting and advanced power-system studies."
        image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="section electrical-intro">
        <div className="container split-grid">
          <div><span className="eyebrow dark">Service overview</span><h2 className="section-title">Electrical engineering from concept to coordinated documentation.</h2></div>
          <div><p className="lead">The electrical scope is developed around system safety, capacity, reliability and practical coordination with the building and wider MEP package.</p><p className="electrical-copy">The capability profile includes distribution design, load calculations, equipment sizing, cable routing, grounding and lighting, supported by dedicated system studies.</p></div>
        </div>
      </section>

      <ElectricalCapabilities/>
      <PowerStudies/>

      <section className="section electrical-deliverables">
        <div className="container split-grid">
          <div><span className="eyebrow dark">Typical deliverables</span><h2 className="section-title">Clear information for design, review and execution.</h2></div>
          <div className="electrical-deliverable-list">
            {[
              'Power distribution design and system architecture',
              'Single Line Diagrams (SLD)',
              'Electrical load calculations and schedules',
              'Transformer, UPS and generator sizing',
              'Cable sizing, voltage drop and routing',
              'Grounding and bonding design',
              'Indoor and outdoor lighting design',
              'Power-system study reports and coordination outputs',
            ].map(item => <div key={item}><Check/><span>{item}</span></div>)}
          </div>
        </div>
      </section>

      <SectorExpertise/>
      <CTA eyebrow="Electrical requirement?" title="Let’s define the system correctly from day one." button="Start Electrical Consultation" onClick={onConsult}/>
    </>
  );
}
