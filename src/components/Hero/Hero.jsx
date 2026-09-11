import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero({ onConsult }) {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.18,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.15, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-backdrop"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 2.2, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />

      <div className="container hero-content">
        <motion.div
          className="hero-copy"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="eyebrow" variants={itemVariants}>
            Electrical Design / Power System Studies
          </motion.span>

          <motion.h1 variants={itemVariants}>
            Design. Engineer.
            <br />
            <em>Build.</em>
          </motion.h1>

          <motion.p variants={itemVariants}>
            Reliable electrical design, power-system analysis and coordinated
            technical delivery for buildings and critical infrastructure.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <Link className="btn btn-gold" to="/#services">
              View services <ArrowRight size={17} />
            </Link>
            <button type="button" className="btn btn-outline" onClick={onConsult}>
              Book consultation
            </button>
          </motion.div>

          <motion.div className="hero-proof" variants={itemVariants}>
            <div className="hero-proof-item">
              <ShieldCheck size={17} />
              <span>Standards-led thinking</span>
            </div>
            <div className="hero-proof-item">
              <CheckCircle2 size={17} />
              <span>Coordinated technical delivery</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <a className="scroll-label" href="#services" aria-label="Scroll to services">
        Scroll to explore <span />
      </a>
    </section>
  );
}
