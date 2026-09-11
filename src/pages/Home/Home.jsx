import { motion } from "framer-motion";
import {
  ArrowRight,
  CircuitBoard,
  Layers3,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ElectricalCapabilities from "../../components/ElectricalCapabilities/ElectricalCapabilities";
import MepOverview from "../../components/MepOverview/MepOverview";

import {
  projects,
  services,
} from "../../data/siteData";

import "./Home.css";

const reveal = {
  initial: {
    opacity: 0,
    y: 35,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.16,
  },

  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  },
};

export default function Home({
  onConsult,
}) {
  const whatsappNumber = "919014842227";

  const whatsappMessage =
    "Hello CoreAMP Engineering, I would like to discuss my project.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      {/* =====================================
          HOME / HERO
      ====================================== */}

      <Hero onConsult={onConsult} />

      {/* =====================================
    SERVICES
====================================== */}

<section
  id="services"
  className="section section-dark home-services premium-services"
>
  <div className="services-glow services-glow-one" />
  <div className="services-glow services-glow-two" />

  <div className="container premium-services-container">
    <motion.div
      className="home-section-head"
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <SectionHeader
        eyebrow="Our Capabilities"
        title="Engineering that starts with power."
        text="Electrical engineering is the primary focus, supported by coordinated building-services design."
      />

      <Link
        className="text-link light"
        to="/services"
      >
        Explore all services
        <ArrowRight size={17} />
      </Link>
    </motion.div>

    <motion.div
      className="home-service-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.18,
            delayChildren: 0.18,
          },
        },
      }}
    >
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          className="premium-service-motion"
          variants={{
            hidden: {
              opacity: 0,
              y: 55,
              scale: 0.97,
              filter: "blur(5px)",
            },

            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",

              transition: {
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          <ServiceCard
            service={service}
            index={index}
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* =====================================
          ELECTRICAL
      ====================================== */}

      <section
        id="electrical"
        className="home-scroll-section"
      >
        <ElectricalCapabilities compact />
      </section>

      {/* =====================================
          MEP
      ====================================== */}

      <section
        id="mep"
        className="home-scroll-section"
      >
        <MepOverview compact />
      </section>

      {/* =====================================
          PROJECTS
      ====================================== */}

      <section
        id="projects"
        className="section home-projects"
      >
        <div className="container">
          <div className="home-section-head light-head">
            <SectionHeader
              eyebrow="Selected Work"
              title="Projects shaped by engineering intent."
              text="Representative project types aligned to the electrical and MEP capability profile."
              dark
            />

            <Link
              className="text-link"
              to="/projects"
            >
              View all projects
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="home-project-grid">
            {projects
              .slice(0, 4)
              .map(
                (project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    wide={index === 0}
                  />
                )
              )}
          </div>
        </div>
      </section>

      {/* =====================================
          ABOUT
      ====================================== */}

      <section
        id="about"
        className="coreamp-home-about"
      >
        <div className="coreamp-about-grid-bg" />

        <div className="container coreamp-about-container">
          <motion.div
            className="coreamp-about-heading"
            {...reveal}
          >
            <span className="coreamp-section-tag">
              ABOUT COREAMP
            </span>

            <h2>
              Precision in power.
              <br />

              <em>
                Clarity in engineering.
              </em>
            </h2>
          </motion.div>

          <motion.div
            className="coreamp-about-intro"
            {...reveal}
          >
            <div className="coreamp-about-line" />

            <p>
              CoreAMP brings electrical
              engineering, power-system studies
              and coordinated MEP design into
              one disciplined engineering
              workflow.
            </p>

            <p className="coreamp-about-muted">
              From early design decisions through
              detailed engineering and project
              coordination, our focus is on
              practical systems, technical
              reliability and clear delivery.
            </p>

            <Link
              to="/about"
              className="coreamp-about-action"
            >
              Discover our approach
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          <div className="coreamp-about-capabilities">
            {/* ELECTRICAL */}

            <motion.article
              className="coreamp-about-capability"
              {...reveal}
            >
              <div className="coreamp-about-icon">
                <CircuitBoard
                  size={22}
                  strokeWidth={1.6}
                />
              </div>

              <span className="coreamp-about-number">
                01
              </span>

              <h3>
                Electrical Engineering
              </h3>

              <p>
                Power distribution, SLDs,
                load calculations, equipment
                sizing, cable engineering,
                grounding and lighting design.
              </p>

              <Link to="/electrical-design">
                Explore Electrical
                <ArrowRight size={15} />
              </Link>
            </motion.article>

            {/* POWER STUDIES */}

            <motion.article
              className="coreamp-about-capability"
              {...reveal}
            >
              <div className="coreamp-about-icon">
                <ShieldCheck
                  size={22}
                  strokeWidth={1.6}
                />
              </div>

              <span className="coreamp-about-number">
                02
              </span>

              <h3>
                Power System Studies
              </h3>

              <p>
                SKM modeling, load flow,
                short circuit, protective
                device coordination and
                arc-flash engineering studies.
              </p>

              <Link to="/services">
                Explore Studies
                <ArrowRight size={15} />
              </Link>
            </motion.article>

            {/* MEP */}

            <motion.article
              className="coreamp-about-capability"
              {...reveal}
            >
              <div className="coreamp-about-icon">
                <Layers3
                  size={22}
                  strokeWidth={1.6}
                />
              </div>

              <span className="coreamp-about-number">
                03
              </span>

              <h3>
                Coordinated MEP
              </h3>

              <p>
                Integrated electrical,
                mechanical, plumbing,
                life-safety and low-current
                coordination for complex
                building projects.
              </p>

              <Link to="/services/mep-design">
                Explore MEP
                <ArrowRight size={15} />
              </Link>
            </motion.article>
          </div>

          <motion.div
            className="coreamp-about-stats"
            {...reveal}
          >
            <div>
              <strong>7</strong>

              <span>
                Electrical Design
                Capabilities
              </span>
            </div>

            <div>
              <strong>5</strong>

              <span>
                Power System
                Studies
              </span>
            </div>

            <div>
              <strong>6</strong>

              <span>
                Project
                Sectors
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================
          CONTACT
      ====================================== */}

      <section
        id="contact"
        className="coreamp-home-contact"
      >
        <div className="coreamp-contact-glow" />

        <div className="coreamp-contact-line coreamp-contact-line-one" />

        <div className="coreamp-contact-line coreamp-contact-line-two" />

        <div className="container coreamp-contact-container">
          {/* LEFT CONTENT */}

          <motion.div
            className="coreamp-contact-copy"
            {...reveal}
          >
            <span className="coreamp-section-tag">
              START A PROJECT
            </span>

            <h2>
              Your project.
              <br />

              <em>
                Engineered with clarity.
              </em>
            </h2>

            <p>
              Planning an electrical,
              power-system or MEP project?
              Share your requirements with
              CoreAMP and let’s identify the
              right engineering approach.
            </p>
          </motion.div>

          {/* RIGHT CONTACT CARD */}

          <motion.div
            className="coreamp-contact-card"
            {...reveal}
          >
            <span className="coreamp-contact-card-label">
              PROJECT CONSULTATION
            </span>

            <h3>
              Let’s discuss your
              engineering requirements.
            </h3>

            <p>
              Start with a consultation or
              connect directly with our team
              through WhatsApp.
            </p>

            <button
              type="button"
              className="coreamp-contact-consult"
              onClick={onConsult}
            >
              Book Consultation

              <ArrowRight size={17} />
            </button>

            <a
              className="coreamp-contact-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} />

              Chat with CoreAMP
            </a>

            <Link
              className="coreamp-contact-page-link"
              to="/contact"
            >
              View Contact Page

              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}