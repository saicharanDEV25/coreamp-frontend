import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

export default function ServiceCard({
  service,
  index = 0,
}) {
  const Icon = service.icon;
  const reduceMotion = useReducedMotion();

  const titleId = `service-card-${index}-${service.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;

  const description =
    service.description ||
    service.text ||
    "";

  const serviceLink =
    service.path ||
    service.link ||
    service.href ||
    "/#contact";

  const items =
    service.items || [];

  return (
    <motion.article
      className="service-card"
      aria-labelledby={titleId}
      initial={reduceMotion ? false : { opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.13 }}
      transition={{ duration: 1.25, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {service.image && (
        <div className="service-card-media">
          <img src={service.image} alt="" loading="lazy" />
          <span aria-hidden="true" />
        </div>
      )}
      <div
        className="service-card-accent"
        aria-hidden="true"
      />

      <div className="service-card-top">
        <span className="service-card-number">
          {String(index + 1).padStart(
            2,
            "0"
          )}
        </span>

        {Icon && (
          <div className="service-card-icon">
            <Icon
              size={23}
              strokeWidth={1.5}
            />
          </div>
        )}
      </div>

      <div className="service-card-content">
        <h3 id={titleId}>{service.title}</h3>

        {description && (
          <p>{description}</p>
        )}

        {items.length > 0 && (
          <div className="service-card-items">
            {items
              .slice(0, 4)
              .map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}
          </div>
        )}
      </div>

      <div className="service-card-bottom">
        <Link
          to={serviceLink}
          className="service-card-link"
          aria-label={`Explore ${service.title}`}
        >
          Start enquiry
          <ArrowUpRight
            size={16}
            strokeWidth={1.7}
          />
        </Link>

        <span
          className="service-card-line"
          aria-hidden="true"
        />
      </div>

      <div
        className="service-card-glow"
        aria-hidden="true"
      />
    </motion.article>
  );
}
