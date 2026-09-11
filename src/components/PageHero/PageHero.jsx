import { motion } from 'framer-motion';
import './PageHero.css';

export default function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(7,9,10,.93),rgba(7,9,10,.50)),url(${image})` }}>
      <motion.div className="container page-hero-content" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </motion.div>
    </section>
  );
}
