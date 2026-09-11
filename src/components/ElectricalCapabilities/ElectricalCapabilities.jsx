import { motion, useReducedMotion } from 'framer-motion';
import { electricalCapabilities } from '../../data/siteData';
import SectionHeader from '../SectionHeader/SectionHeader';
import './ElectricalCapabilities.css';

export default function ElectricalCapabilities({ compact = false }) {
  const reduceMotion = useReducedMotion();
  const rows = compact ? electricalCapabilities.slice(0, 6) : electricalCapabilities;

  return (
    <section className={`section electrical-capabilities${compact ? ' is-compact' : ''}`}>
      <div className="container">
        <div className="electrical-capabilities-heading">
          <SectionHeader
            eyebrow="Electrical Design"
            title="Core electrical capabilities."
            text="A coordinated design scope covering distribution, calculations, equipment, routing, grounding and lighting."
            dark
          />

          <div className="electrical-capabilities-count" aria-label={`${rows.length} capability areas shown`}>
            <strong>{String(rows.length).padStart(2, '0')}</strong>
            <span>Capability<br />areas</span>
          </div>
        </div>

        <div className="electrical-capability-grid">
          {rows.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="electrical-capability-card"
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.48,
                  delay: reduceMotion ? 0 : index * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="electrical-card-top">
                  <span className="electrical-card-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="electrical-card-icon" aria-hidden="true">
                    <Icon size={23} strokeWidth={1.45} />
                  </span>
                </div>

                <div className="electrical-card-copy">
                  <small>{item.area}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <div className="electrical-card-footer">
                  <span>Capability</span>
                  <strong>{item.level}</strong>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
