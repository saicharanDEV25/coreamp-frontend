import { motion } from 'framer-motion';
import { sectorExpertise } from '../../data/siteData';
import SectionHeader from '../SectionHeader/SectionHeader';
import './SectorExpertise.css';

function LevelBars({ level }) {
  return <span className="level-bars" aria-label={`Skill level ${level} of 4`}>{[1,2,3,4].map(i => <i key={i} className={i <= level ? 'active' : ''} />)}</span>;
}

export default function SectorExpertise() {
  return (
    <section className="section sector-expertise soft-bg">
      <div className="container">
        <SectionHeader
          eyebrow="Sector Expertise"
          title="Electrical experience across project types."
          text="The client capability data is translated here into clear sector-focused expertise instead of an internal employee table."
          dark
        />
        <div className="sector-grid">
          {sectorExpertise.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <motion.article
                className="sector-card"
                key={sector.sector}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .12 }}
                transition={{ duration: .45, delay: index * .04 }}
              >
                <div className="sector-card-head"><Icon/><h3>{sector.sector}</h3></div>
                <div className="sector-skills">
                  {sector.items.map(([skill, level]) => (
                    <div className="sector-skill" key={skill}>
                      <span>{skill}</span>
                      <LevelBars level={level}/>
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
