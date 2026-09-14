import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowUpRight,
  Cable,
  Layers3,
  Lightbulb,
  Network,
  Zap,
} from "lucide-react";

import "./Services.css";

const WHATSAPP_NUMBER = "918951262696";

const services = [
  {
    icon: Zap,
    title: "Electrical Design",
    text:
      "Power Distribution, SLDs, Load Calculations, Equipment Sizing, Cable Routing, Grounding and Lighting.",
    image:
      "/images/services/electrical-design.png",
  },
  {
    icon: Network,
    title: "Power System Studies",
    text:
      "SKM Modeling, Load Flow, Short Circuit, Protection Coordination and Arc-Flash Studies.",
    image:
      "/images/services/power-system-studies.png",
  },
  {
    icon: Layers3,
    title: "BIM & Coordination",
    text:
      "Integrated Mechanical, Electrical, Plumbing, Fire and Low-Current Engineering with coordinated BIM models, clash detection and construction-ready documentation.",
    image:
      "/images/services/mep-coordination.png",
  },
  {
    icon: Lightbulb,
    title: "Lighting Engineering",
    text:
      "Indoor Lighting, Outdoor Lighting, Lighting Calculations and Multidisciplinary Coordination.",
    image:
      "/images/services/lighting-engineering.png",
  },
  {
    icon: Cable,
    title: "Critical Power & Distribution",
    text:
      "Transformers, UPS, Generators, Switchgear and Distribution Strategy for Reliable Critical Systems.",
    image:
      "/images/services/critical-power.png",
  },
];

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function createWhatsAppLink(service) {
  const message = [
    "Hello CoreAMP Engineering,",
    "",
    `I would like to enquire about ${service.title}.`,
    "",
    `Service: ${service.title}`,
    `Scope: ${service.text}`,
    "",
    "Please share more information about this service.",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="services-section"
      aria-labelledby="services-heading"
    >
      <div className="container services-inner">
        <motion.div
          className="services-section-heading"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 28,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div>
            <span className="services-kicker">
              Our capabilities
            </span>

            <h2 id="services-heading">
              Integrated engineering.
              <br />

              <em>
                Clear technical direction.
              </em>
            </h2>
          </div>

          <p>
            Explore CoreAMP&apos;s Electrical,
            Power-System, MEP, BIM, Lighting and
            Critical-Power engineering capabilities.
          </p>
        </motion.div>

        <motion.div
          className="services-card-grid"
          variants={containerVariants}
          initial={
            reduceMotion
              ? false
              : "hidden"
          }
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                className="services-card"
                variants={cardVariants}
              >
                <div className="services-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />

                  <span className="services-card-index">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>
                </div>

                <div className="services-card-body">
                  <div className="services-card-icon-row">
                    <span
                      className="services-card-icon"
                      aria-hidden="true"
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                      />
                    </span>

                    <span className="services-card-line" />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <a
                    href={createWhatsAppLink(service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="services-card-action"
                    aria-label={`Enquire about ${service.title} on WhatsApp`}
                  >
                    Start enquiry

                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}