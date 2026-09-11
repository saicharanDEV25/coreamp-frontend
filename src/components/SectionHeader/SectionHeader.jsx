import { motion } from 'framer-motion';
import './SectionHeader.css';

export default function SectionHeader({ eyebrow, title, text, dark = false, center = false }) {
  return (
    <motion.div
      className={`section-header ${center ? 'center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .2 }}
      transition={{ duration: .55 }}
    >
      <span className={`eyebrow ${dark ? 'dark' : ''}`}>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}
