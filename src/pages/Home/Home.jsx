import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CircuitBoard,
  ClipboardCheck,
  DraftingCompass,
  Layers3,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { COREAMP_CONTACT } from "../../data/contact";
import { projects, services } from "../../data/siteData";
import "./Home.css";

const reveal = {
  initial: { opacity: 0, y: 44 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 1.28, ease: [0.16, 1, 0.3, 1] },
};

const processSteps = [
  {
    icon: SearchCheck,
    number: "01",
    title: "Understand",
    text: "Map the brief, constraints, loads and critical interfaces before design begins.",
  },
  {
    icon: DraftingCompass,
    number: "02",
    title: "Engineer",
    text: "Develop the system architecture, calculations, selections and coordinated layouts.",
  },
  {
    icon: Workflow,
    number: "03",
    title: "Coordinate",
    text: "Resolve multidisciplinary interfaces across architecture, structure and building services.",
  },
  {
    icon: ClipboardCheck,
    number: "04",
    title: "Deliver",
    text: "Issue clear technical information for review, procurement and execution support.",
  },
];

export default function Home({ onConsult }) {
  const reduceMotion = useReducedMotion();
  const revealMotion = reduceMotion ? { initial: false } : reveal;

  const whatsappLink = `https://wa.me/${COREAMP_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    "Hello CoreAMP Engineering, I would like to discuss my project."
  )}`;

  return (
    <>
      <Hero onConsult={onConsult} />

      <section id="services" className="section section-dark home-services">
        <div className="home-services-glow" aria-hidden="true" />
        <div className="container">
          <div className="home-section-head">
            <SectionHeader
              eyebrow="Our capabilities"
              title="Engineering that starts with power."
              text="Electrical engineering is the core, supported by power-system analysis and coordinated building-services design."
            />
            <Link className="text-link light" to="/#contact">
              Start a service enquiry <ArrowRight size={17} />
            </Link>
          </div>

          <div className="home-service-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section home-projects surface-grid">
        <div className="container">
          <div className="home-section-head light-head">
            <SectionHeader
              eyebrow="Capability portfolio"
              title="Engineering for varied project environments."
              text="Representative project types that show where CoreAMP's electrical and coordinated MEP capabilities can be applied."
              dark
            />
            <Link className="text-link" to="/#contact">
              Discuss your sector <ArrowRight size={17} />
            </Link>
          </div>

          <div className="home-project-grid">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                wide={index === 0}
              />
            ))}
          </div>

          <p className="home-project-note">
            Imagery is illustrative. Scope is tailored to each project brief,
            authority requirement and delivery stage.
          </p>
        </div>
      </section>

      <section className="section home-process">
        <div className="container">
          <div className="home-process-heading">
            <div>
              <span className="eyebrow dark">How we work</span>
              <h2>
                One clear path from
                <br /> brief to <em>buildable design.</em>
              </h2>
            </div>
            <p>
              Every engagement follows a disciplined workflow designed to make
              technical decisions visible, coordinated and easier to act on.
            </p>
          </div>

          <div className="home-process-grid">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.number}
                  {...revealMotion}
                  transition={
                    reduceMotion
                      ? undefined
                      : { ...reveal.transition, delay: index * 0.06 }
                  }
                >
                  <div className="home-process-card-top">
                    <span>{step.number}</span>
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="coreamp-home-about">
        <div className="coreamp-about-grid-bg" aria-hidden="true" />
        <div className="container coreamp-about-container">
          <motion.div className="coreamp-about-heading" {...revealMotion}>
            <span className="coreamp-section-tag">ABOUT COREAMP</span>
            <h2>
              Precision in power.
              <br />
              <em>Clarity in engineering.</em>
            </h2>
          </motion.div>

          <motion.div className="coreamp-about-intro" {...revealMotion}>
            <div className="coreamp-about-line" />
            <p>
              CoreAMP brings electrical engineering, power-system studies and
              coordinated MEP design into one disciplined workflow.
            </p>
            <p className="coreamp-about-muted">
              From early system decisions through detailed engineering and
              coordination, the focus stays on practical systems, technical
              reliability and clear delivery.
            </p>
            <Link to="/#contact" className="coreamp-about-action">
              Talk to the team <ArrowRight size={17} />
            </Link>
          </motion.div>

          <div className="coreamp-about-capabilities">
            <motion.article className="coreamp-about-capability" {...revealMotion}>
              <div className="coreamp-about-icon">
                <CircuitBoard size={22} strokeWidth={1.6} />
              </div>
              <span className="coreamp-about-number">01 / CORE</span>
              <h3>Electrical Engineering</h3>
              <p>
                Distribution, SLDs, load calculations, equipment sizing,
                cables, grounding and lighting design.
              </p>
              <Link to="/#services">
                View services <ArrowRight size={15} />
              </Link>
            </motion.article>

            <motion.article className="coreamp-about-capability" {...revealMotion}>
              <div className="coreamp-about-icon">
                <ShieldCheck size={22} strokeWidth={1.6} />
              </div>
              <span className="coreamp-about-number">02 / VALIDATE</span>
              <h3>Power System Studies</h3>
              <p>
                SKM modeling, load flow, short circuit, protection coordination
                and arc-flash analysis.
              </p>
              <Link to="/#services">
                View studies <ArrowRight size={15} />
              </Link>
            </motion.article>

            <motion.article className="coreamp-about-capability" {...revealMotion}>
              <div className="coreamp-about-icon">
                <Layers3 size={22} strokeWidth={1.6} />
              </div>
              <span className="coreamp-about-number">03 / ALIGN</span>
              <h3>Coordinated MEP</h3>
              <p>
                Integrated electrical, mechanical, plumbing, life-safety and
                low-current coordination.
              </p>
              <Link to="/#services">
                View coordination <ArrowRight size={15} />
              </Link>
            </motion.article>
          </div>
        </div>
      </section>

      <section id="contact" className="coreamp-home-contact">
        <div className="coreamp-contact-glow" aria-hidden="true" />
        <div className="coreamp-contact-line coreamp-contact-line-one" aria-hidden="true" />
        <div className="coreamp-contact-line coreamp-contact-line-two" aria-hidden="true" />

        <div className="container coreamp-contact-container">
          <motion.div className="coreamp-contact-copy" {...revealMotion}>
            <span className="coreamp-section-tag">START A PROJECT</span>
            <h2>
              Your project.
              <br />
              <em>Engineered with clarity.</em>
            </h2>
            <p>
              Planning an electrical, power-system or MEP project? Share the
              brief and let&apos;s identify the right engineering approach.
            </p>
          </motion.div>

          <motion.div className="coreamp-contact-card" {...revealMotion}>
            <span className="coreamp-contact-card-label">PROJECT CONSULTATION</span>
            <h3>Let&apos;s discuss your engineering requirement.</h3>
            <p>
              Start with a structured enquiry or connect directly with the
              CoreAMP team through WhatsApp.
            </p>
            <button
              type="button"
              className="coreamp-contact-consult"
              onClick={onConsult}
            >
              Book consultation <ArrowRight size={17} />
            </button>
            <a
              className="coreamp-contact-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} /> Chat with CoreAMP
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
