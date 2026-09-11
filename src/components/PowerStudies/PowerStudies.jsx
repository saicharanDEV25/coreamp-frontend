import { motion, useReducedMotion } from 'framer-motion';
import { powerStudies } from '../../data/siteData';
import SectionHeader from '../SectionHeader/SectionHeader';
import './PowerStudies.css';

export default function PowerStudies() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section section-dark power-studies" id="studies">
      <div className="container">
        <div className="power-studies-heading">
          <SectionHeader
            eyebrow="Power System Studies"
            title="Study. Validate. Protect."
            text="Engineering studies developed to understand network behavior, fault conditions and protection performance before systems are energized."
          />

          <div className="power-studies-sequence" aria-label="Study workflow: model, analyze, coordinate">
            <span>Model</span>
            <i />
            <span>Analyze</span>
            <i />
            <span>Coordinate</span>
          </div>
        </div>

        <div className="power-studies-layout">
          <aside className="power-studies-diagram" aria-hidden="true">
            <div className="power-diagram-ring">
              <span />
              <i />
            </div>
            <div className="power-diagram-caption">
              <span>Network behavior</span>
              <small>System study matrix</small>
            </div>
          </aside>

          <div className="power-study-list">
            {powerStudies.map((study, index) => {
              const Icon = study.icon;

              return (
                <motion.article
                  key={study.title}
                  className="power-study-row"
                  initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.46,
                    delay: reduceMotion ? 0 : index * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="power-study-number">{String(index + 1).padStart(2, '0')}</span>

                  <span className="power-study-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.45} />
                  </span>

                  <div className="power-study-copy">
                    <h3>{study.title}</h3>
                    <p>{study.text}</p>
                  </div>

                  <div className="power-study-meta">
                    <span>Capability</span>
                    <strong>{study.level}</strong>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
