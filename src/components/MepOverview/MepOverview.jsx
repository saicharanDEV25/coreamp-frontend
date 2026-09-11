import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mepItems } from '../../data/siteData';
import SectionHeader from '../SectionHeader/SectionHeader';
import './MepOverview.css';

export default function MepOverview({ compact = false }) {
  const reduceMotion = useReducedMotion();
  const items = compact ? mepItems.slice(0, 4) : mepItems;

  return (
    <section className={`section section-dark mep-overview${compact ? ' is-compact' : ''}`}>
      <div className="container">
        <div className="mep-overview-heading">
          <SectionHeader
            eyebrow="MEP Engineering"
            title="Electrical-led, fully coordinated MEP."
            text="Electrical engineering remains the core strength while HVAC, plumbing, fire and low-current systems are coordinated as one building-services package."
          />

          <div className="mep-overview-principle">
            <span>Coordination principle</span>
            <p>Resolve system interfaces while design decisions are still flexible.</p>
          </div>
        </div>

        <div className="mep-overview-grid">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                className="mep-overview-card"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.48,
                  delay: reduceMotion ? 0 : index * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mep-card-head">
                  <span className="mep-card-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.45} />
                  </span>
                  <span className="mep-card-number">{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className="mep-card-copy">
                  <small>Building system</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <span className="mep-card-line" aria-hidden="true" />
              </motion.article>
            );
          })}
        </div>

        {compact && (
          <Link className="mep-overview-link" to="/#services">
            <span>View services</span>
            <i aria-hidden="true"><ArrowRight size={17} strokeWidth={1.6} /></i>
          </Link>
        )}
      </div>
    </section>
  );
}
