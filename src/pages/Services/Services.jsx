import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

import { services } from "../../data/siteData";

import "./Services.css";

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
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
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services({
  onConsult,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="services-page">
      {/* HERO */}
      <section className="services-page-hero">
        <div
          className="services-page-grid"
          aria-hidden="true"
        />
        <div
          className="services-page-glow"
          aria-hidden="true"
        />

        <div className="container services-page-hero-inner">
          <motion.div
            className="services-page-hero-copy"
            initial={reduceMotion ? false : {
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="services-page-eyebrow">
              COREAMP SERVICES
            </span>

            <h1>
              Engineering services
              <br />

              <em>
                built around performance.
              </em>
            </h1>

            <p>
              Electrical engineering,
              power-system studies and
              coordinated MEP design for
              commercial, residential,
              healthcare, industrial and
              mission-critical projects.
            </p>

            <button
              type="button"
              className="services-page-consult"
              onClick={onConsult}
            >
              Discuss Your Project
              <ArrowRight size={18} />
            </button>
          </motion.div>

          <motion.ol
            className="services-page-process"
            aria-label="Core engineering workflow"
            initial={reduceMotion ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <li>
              <span>01</span>
              <div>
                <strong>Design</strong>
                <small>Electrical systems</small>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Study</strong>
                <small>Network performance</small>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Coordinate</strong>
                <small>Integrated MEP</small>
              </div>
            </li>
          </motion.ol>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-page-content">
        <div className="container">
          <motion.div
            className="services-page-heading"
            initial={reduceMotion ? false : {
              opacity: 0,
              y: 35,
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
              duration: 0.8,
            }}
          >
            <SectionHeader
              eyebrow="Our Capabilities"
              title="Integrated engineering. Clear technical direction."
              text="Explore CoreAMP's core electrical, power-system and coordinated MEP engineering capabilities."
            />
          </motion.div>

          <motion.div
            className="services-page-grid-cards"
            variants={containerVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            {services.map(
              (service, index) => (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  className="services-page-card-wrap"
                >
                  <ServiceCard
                    service={service}
                    index={index}
                  />
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* ELECTRICAL FOCUS */}
      <section className="services-focus-section">
        <div className="container services-focus-grid">
          <motion.div
            initial={reduceMotion ? false : {
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.85,
            }}
          >
            <span className="services-page-eyebrow">
              PRIMARY FOCUS
            </span>

            <h2>
              Electrical engineering
              with technical depth.
            </h2>

            <p>
              From power distribution and
              single-line diagrams to load
              calculations, equipment sizing,
              cable engineering, grounding
              and lighting design.
            </p>

            <Link
              to="/#services"
              className="services-focus-link"
            >
              View Services
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          <motion.ol
            className="services-focus-list"
            aria-label="Electrical design scope"
            initial={reduceMotion ? false : {
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.85,
            }}
          >
            {[
              "Power Distribution Design",
              "Single Line Diagrams",
              "Load Calculations",
              "Equipment Sizing",
              "Cable Sizing & Routing",
              "Grounding & Bonding",
              "Lighting Design",
            ].map((item, index) => (
              <li key={item}>
                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <p>{item}</p>
              </li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* CTA */}
      <section className="services-bottom-cta">
        <div className="container services-bottom-inner">
          <div>
            <span className="services-page-eyebrow">
              START A PROJECT
            </span>

            <h2>
              Need engineering support
              for your next project?
            </h2>
          </div>

          <button
            type="button"
            onClick={onConsult}
          >
            Book Consultation
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
