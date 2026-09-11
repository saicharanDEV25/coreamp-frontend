import { motion, useReducedMotion } from 'framer-motion';
import { sectorExpertise } from '../../data/siteData';
import SectionHeader from '../SectionHeader/SectionHeader';
import './SectorExpertise.css';

function LevelBars({ level }) {
  return (
    <span className="level-bars" role="img" aria-label={`Capability level ${level} of 4`}>
      {[1, 2, 3, 4].map((bar) => (
        <i key={bar} className={bar <= level ? 'active' : ''} aria-hidden="true" />
      ))}
    </span>
  );
}

export default function SectorExpertise() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section sector-expertise soft-bg">
      <div className="container">
        <div className="sector-expertise-heading">
          <SectionHeader
            eyebrow="Sector Expertise"
            title="Electrical experience across project types."
            text="Capability is organized around the calculations, equipment decisions and documentation needs that vary by sector."
            dark
          />

          <div className="sector-level-key" aria-hidden="true">
            <span>Capability depth</span>
            <div><i /><i /><i /><i /></div>
          </div>
        </div>

        <div className="sector-grid">
          {sectorExpertise.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <motion.article
                className="sector-card"
                key={sector.sector}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.48,
                  delay: reduceMotion ? 0 : index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="sector-card-head">
                  <span className="sector-card-icon" aria-hidden="true">
                    <Icon size={21} strokeWidth={1.45} />
                  </span>
                  <span className="sector-card-number">{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className="sector-card-title">
                  <small>{sector.items.length} focus {sector.items.length === 1 ? 'area' : 'areas'}</small>
                  <h3>{sector.sector}</h3>
                </div>

                <div className="sector-skills">
                  {sector.items.map(([skill, level]) => (
                    <div className="sector-skill" key={skill}>
                      <span>{skill}</span>
                      <LevelBars level={level} />
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
