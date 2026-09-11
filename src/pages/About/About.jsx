import { CheckCircle2 } from 'lucide-react';
import PageHero from '../../components/PageHero/PageHero';
import CTA from '../../components/CTA/CTA';
import './About.css';

export default function About({ onConsult }) {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Engineering built around electrical clarity."
        text="A focused engineering practice for electrical design, power-system studies and coordinated MEP delivery."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="section">
        <div className="container split-grid">
          <div><span className="eyebrow dark">Our approach</span><h2 className="section-title">Power systems are not an afterthought.</h2></div>
          <div><p className="lead">We treat electrical engineering as a core building system — from distribution architecture and load calculations to equipment sizing, grounding, lighting and protection studies.</p><p className="about-body">MEP coordination is developed around the same principle: clear interfaces, technically sound decisions and documents that are practical to build from.</p></div>
        </div>
      </section>
      <section className="section soft-bg">
        <div className="container">
          <div className="about-head"><span className="eyebrow dark">Why CoreAmp</span><h2 className="section-title">Focused, coordinated and technically accountable.</h2></div>
          <div className="about-feature-grid">
            {[
              'Electrical-first engineering focus',
              'Power-system study capability',
              'Commercial & mission-critical expertise',
              'Coordinated MEP workflows',
              'Design review & technical checking',
              'Execution-aware documentation',
            ].map(item => <div className="about-feature-card" key={item}><CheckCircle2/><h3>{item}</h3><p>Every design decision is considered for performance, safety, coordination and constructability.</p></div>)}
          </div>
        </div>
      </section>
      <CTA eyebrow="Work with us" title="Bring us your next engineering challenge." button="Book Consultation" onClick={onConsult}/>
    </>
  );
}
