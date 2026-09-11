import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServiceCard.css';

export default function ServiceCard({ service, index, light = false }) {
  const Icon = service.icon;
  return (
    <motion.article
      className={`service-card ${light ? 'light' : ''}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .12 }}
      transition={{ duration: .5, delay: index * .04 }}
    >
      <Icon />
      <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
      {service.path && <Link to={service.path}>Explore service <ChevronRight size={16}/></Link>}
    </motion.article>
  );
}
