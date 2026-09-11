import { motion, useReducedMotion } from "framer-motion";
import "./ProjectCard.css";

export default function ProjectCard({
  project,
  wide = false,
  index = 0,
}) {
  const reduceMotion = useReducedMotion();

  const titleId = `project-type-${index}-${project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;

  return (
    <motion.article
      className={`project-card ${wide ? 'wide' : ''}`}
      aria-labelledby={titleId}
      layout="position"
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 1.25,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="project-card-media" aria-hidden="true">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </div>

      <div className="project-card-meta">
        <span>Representative type</span>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className="project-overlay">
        <span className="project-category">{project.category}</span>
        <h3 id={titleId}>{project.title}</h3>

        {project.tags?.length > 0 && (
          <ul className="project-tags" aria-label="Relevant engineering scope">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}
