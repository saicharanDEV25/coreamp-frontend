import { motion } from 'framer-motion';
import { powerStudies } from '../../data/siteData';
import SectionHeader from '../SectionHeader/SectionHeader';
import './PowerStudies.css';

export default function PowerStudies() {
  return (
    <section className="section section-dark power-studies" id="studies">
      <div className="container">
        <SectionHeader
          eyebrow="Power System Studies"
          title="Study. Validate. Protect."
          text="Engineering studies developed to understand network behavior, fault conditions and protection performance before systems are energized."
        />
        <div className="power-study-list">
          {powerStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.article
                key={study.title}
                className="power-study-row"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: .25 }}
                transition={{ duration: .45, delay: index * .05 }}
              >
                <span className="power-study-number">{String(index + 1).padStart(2, '0')}</span>
                <Icon />
                <div><h3>{study.title}</h3><p>{study.text}</p></div>
                <span className="power-study-level">{study.level}</span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
