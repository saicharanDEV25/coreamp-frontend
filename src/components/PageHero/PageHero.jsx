import { motion, useReducedMotion } from 'framer-motion';
import './PageHero.css';

const visualDetails = {
  default: {
    code: 'CORE / 00',
    label: 'Engineering / Delivery',
    axis: '01—04',
  },
  about: {
    code: 'CORE / 01',
    label: 'Clarity / Coordination',
    axis: '01—03',
  },
  electrical: {
    code: 'ELEC / 02',
    label: 'Power / Protection',
    axis: '02—06',
  },
  mep: {
    code: 'MEP / 03',
    label: 'Systems / Interfaces',
    axis: '03—06',
  },
};

export default function PageHero({
  eyebrow,
  title,
  text,
  image,
  variant = 'default',
}) {
  const reduceMotion = useReducedMotion();
  const resolvedVariant = visualDetails[variant] ? variant : 'default';
  const detail = visualDetails[resolvedVariant];

  return (
    <section
      className={`page-hero page-hero--${resolvedVariant}`}
      style={{ '--page-hero-image': `url(${image})` }}
      aria-labelledby="page-hero-title"
    >
      <div className="page-hero-ambient" aria-hidden="true" />

      <div className="container page-hero-layout">
        <motion.div
          className="page-hero-content"
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="page-hero-overline">
            <span className="eyebrow">{eyebrow}</span>
            <span className="page-hero-code">{detail.code}</span>
          </div>

          <h1 id="page-hero-title">{title}</h1>
          <p>{text}</p>

          <div className="page-hero-footnote" aria-hidden="true">
            <span className="page-hero-footnote-mark" />
            <span>Define</span>
            <i />
            <span>Coordinate</span>
            <i />
            <span>Deliver</span>
          </div>
        </motion.div>

        <motion.div
          className="page-hero-visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : 0.08 }}
          aria-hidden="true"
        >
          <div className="page-hero-image" />
          <div className="page-hero-image-wash" />
          <div className="page-hero-drawing-grid" />

          <div className="page-hero-orbit">
            <span />
            <i />
          </div>

          <div className="page-hero-visual-label">
            <span>{detail.label}</span>
            <small>{detail.axis}</small>
          </div>
        </motion.div>
      </div>

      <div className="container page-hero-baseline" aria-hidden="true">
        <span>CoreAMP Engineering</span>
        <i />
        <span>Integrated systems</span>
      </div>
    </section>
  );
}
