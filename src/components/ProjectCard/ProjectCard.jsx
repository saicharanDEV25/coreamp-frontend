import { motion } from 'framer-motion';
import './ProjectCard.css';

export default function ProjectCard({ project, wide = false }) {
  return (
    <motion.article
      className={`project-card ${wide ? 'wide' : ''}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .15 }}
      transition={{ duration: .55 }}
    >
      <img src={project.image} alt={project.title}/>
      <div className="project-overlay">
        <span>{project.category}</span>
        <h3>{project.title}</h3>
        {project.tags && <div className="project-tags">{project.tags.map(tag => <small key={tag}>{tag}</small>)}</div>}
      </div>
    </motion.article>
  );
}
