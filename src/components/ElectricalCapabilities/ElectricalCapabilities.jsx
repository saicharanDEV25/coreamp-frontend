import { motion } from 'framer-motion';
import { electricalCapabilities } from '../../data/siteData';
import SectionHeader from '../SectionHeader/SectionHeader';
import './ElectricalCapabilities.css';

export default function ElectricalCapabilities({ compact = false }) {
  const rows = compact ? electricalCapabilities.slice(0, 6) : electricalCapabilities;
  return (
    <section className="section electrical-capabilities">
      <div className="container">
        <SectionHeader
          eyebrow="Electrical Design"
          title="Core electrical capabilities."
          text="A coordinated design scope covering distribution, calculations, equipment, routing, grounding and lighting."
          dark
        />
        <div className="electrical-capability-grid">
          {rows.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                className="electrical-capability-card"
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .15 }}
                transition={{ duration: .45, delay: index * .035 }}
              >
                <div className="electrical-card-top"><Icon/><span>{item.level}</span></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <small>{item.area}</small>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
