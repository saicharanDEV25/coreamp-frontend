import { motion } from 'framer-motion';
import { mepItems } from '../../data/siteData';
import SectionHeader from '../SectionHeader/SectionHeader';
import './MepOverview.css';

export default function MepOverview({ compact = false }) {
  const items = compact ? mepItems.slice(0, 4) : mepItems;
  return (
    <section className="section section-dark mep-overview">
      <div className="container">
        <SectionHeader
          eyebrow="MEP Engineering"
          title="Electrical-led, fully coordinated MEP."
          text="Electrical engineering remains the core strength while HVAC, plumbing, fire and low-current systems are coordinated as one building-services package."
        />
        <div className="mep-overview-grid">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="mep-overview-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .14 }}
                transition={{ duration: .45, delay: index * .04 }}
              >
                <Icon/><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
