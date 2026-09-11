import {
  ArrowDownRight,
  CheckCircle2,
  Compass,
  FileCheck2,
  Layers3,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import PageHero from '../../components/PageHero/PageHero';
import CTA from '../../components/CTA/CTA';
import './About.css';

const principles = [
  {
    icon: Compass,
    title: 'Start with system intent',
    text: 'Capacity, reliability and operational requirements shape the design direction from the beginning.',
  },
  {
    icon: ShieldCheck,
    title: 'Engineer for safe operation',
    text: 'Distribution, grounding and protection decisions are considered as parts of one connected system.',
  },
  {
    icon: Layers3,
    title: 'Coordinate every interface',
    text: 'Electrical and MEP systems are aligned with architectural, structural and spatial constraints.',
  },
  {
    icon: Workflow,
    title: 'Keep decisions traceable',
    text: 'Clear assumptions, calculations and review points support a disciplined design workflow.',
  },
  {
    icon: FileCheck2,
    title: 'Document for execution',
    text: 'Drawings and schedules are developed to communicate design intent clearly to project teams.',
  },
  {
    icon: CheckCircle2,
    title: 'Review before issue',
    text: 'Technical checks and coordination reviews are built into the path toward each deliverable.',
  },
];

const process = [
  {
    number: '01',
    title: 'Understand',
    text: 'Clarify the project stage, system requirements, available information and coordination boundaries.',
  },
  {
    number: '02',
    title: 'Define',
    text: 'Establish the design basis, system architecture and engineering assumptions that guide the scope.',
  },
  {
    number: '03',
    title: 'Coordinate',
    text: 'Develop the technical solution while resolving interfaces across disciplines and project constraints.',
  },
  {
    number: '04',
    title: 'Deliver',
    text: 'Review and issue clear calculations, drawings, schedules and study outputs for the required stage.',
  },
];

export default function About({ onConsult }) {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Engineering built around electrical clarity."
        text="A focused engineering practice for electrical design, power-system studies and coordinated MEP delivery."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85"
        variant="about"
      />

      <section className="section about-intro">
        <div className="container about-intro-grid">
          <div className="about-intro-title">
            <span className="eyebrow dark">Our approach</span>
            <h2>Power systems are not an afterthought.</h2>
            <span className="about-intro-arrow" aria-hidden="true">
              <ArrowDownRight size={24} strokeWidth={1.25} />
            </span>
          </div>

          <div className="about-intro-copy">
            <p className="lead">
              We treat electrical engineering as a core building system—from distribution architecture and load calculations to equipment sizing, grounding, lighting and protection studies.
            </p>
            <p>
              MEP coordination is developed around the same principle: clear interfaces, technically sound decisions and documents that are practical to build from.
            </p>

            <div className="about-focus-list" aria-label="Core focus areas">
              <span>Electrical design</span>
              <span>Power-system studies</span>
              <span>MEP coordination</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-principles">
        <div className="container">
          <div className="about-section-heading">
            <div>
              <span className="eyebrow">Why CoreAMP</span>
              <h2>Focused, coordinated and technically accountable.</h2>
            </div>
            <p>
              A practical engineering approach connects design intent, technical analysis and multidisciplinary coordination through every project stage.
            </p>
          </div>

          <div className="about-feature-grid">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="about-feature-card" key={item.title}>
                  <div className="about-feature-top">
                    <span className="about-feature-icon" aria-hidden="true">
                      <Icon size={21} strokeWidth={1.45} />
                    </span>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section about-process">
        <div className="container">
          <div className="about-process-heading">
            <div>
              <span className="eyebrow dark">How we work</span>
              <h2>A clear path from brief to coordinated output.</h2>
            </div>
            <p>
              The workflow scales to the project stage while keeping system decisions, interfaces and deliverables visible.
            </p>
          </div>

          <ol className="about-process-list">
            {process.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA
        eyebrow="Work with us"
        title="Bring us your next engineering challenge."
        button="Book Consultation"
        onClick={onConsult}
      />
    </>
  );
}
