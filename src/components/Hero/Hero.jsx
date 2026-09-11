import {
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  useEffect,
  useRef,
} from "react";

import "./Hero.css";

export default function Hero({
  onConsult,
}) {
  const heroRef = useRef(null);

  const isInView = useInView(heroRef, {
    amount: 0.35,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.set("hidden");

      const timer = setTimeout(() => {
        controls.start("visible");
      }, 120);

      return () => clearTimeout(timer);
    }

    controls.set("hidden");
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.22,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 45,
      filter: "blur(6px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="hero"
    >
      {/* BACKGROUND */}
      <motion.div
        className="hero-media"
        initial={{
          scale: 1.08,
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                scale: 1,
                opacity: 1,
              }
            : {
                scale: 1.08,
                opacity: 0,
              }
        }
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* GRID */}
      <motion.div
        className="hero-grid-overlay"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isInView ? 1 : 0,
        }}
        transition={{
          duration: 1.6,
          delay: isInView ? 0.25 : 0,
        }}
      />

      {/* POWER LINE 1 */}
      <motion.div
        className="hero-power-line hero-power-line-one"
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                scaleX: 1,
              }
            : {
                opacity: 0,
                scaleX: 0,
              }
        }
        transition={{
          duration: 1.5,
          delay: isInView ? 0.7 : 0,
          ease: "easeOut",
        }}
      />

      {/* POWER LINE 2 */}
      <motion.div
        className="hero-power-line hero-power-line-two"
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                scaleX: 1,
              }
            : {
                opacity: 0,
                scaleX: 0,
              }
        }
        transition={{
          duration: 1.7,
          delay: isInView ? 0.9 : 0,
          ease: "easeOut",
        }}
      />

      {/* CONTENT */}
      <div className="container hero-content">
        <motion.div
          className="hero-copy"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* EYEBROW */}
          <motion.span
            className="eyebrow"
            variants={itemVariants}
          >
            Electrical Engineering • MEP Design
          </motion.span>

          {/* TITLE */}
          <motion.h1
            variants={itemVariants}
          >
            Design.
            <br />

            Engineer.{" "}

            <motion.em
              variants={itemVariants}
            >
              Build.
            </motion.em>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={itemVariants}
          >
            Electrical design,
            power-system studies and
            coordinated MEP engineering
            for commercial, residential,
            healthcare, industrial and
            mission-critical projects.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="hero-actions"
            variants={itemVariants}
          >
            <Link
              className="btn btn-gold"
              to="/electrical-design"
            >
              Explore Electrical

              <ArrowRight size={18} />
            </Link>

            <button
              type="button"
              className="btn btn-outline"
              onClick={onConsult}
            >
              Book Consultation
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL LABEL */}
      <motion.div
        className="scroll-label"
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
              }
            : {
                opacity: 0,
                x: 20,
              }
        }
        transition={{
          duration: 1,
          delay: isInView ? 1.6 : 0,
        }}
      >
        SCROLL
        <span />
      </motion.div>
    </section>
  );
}