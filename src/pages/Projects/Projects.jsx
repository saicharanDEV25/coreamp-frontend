import {
  useMemo,
  useState,
} from "react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  GraduationCap,
  HeartPulse,
  Home,
  Server,
} from "lucide-react";

import "./Projects.css";

const WHATSAPP_NUMBER = "918951262696";

const projects = [
  {
    number: "01",
    title: "Commercial Power Infrastructure",
    category: "Commercial",
    description:
      "Coordinated electrical distribution and lighting systems designed for efficient commercial environments.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=88",
    tags: [
      "Power Distribution",
      "Lighting Design",
      "Load Calculations",
    ],
    icon: Building2,
  },
  {
    number: "02",
    title: "Mission Critical Electrical Systems",
    category: "Mission Critical",
    description:
      "Reliable critical-power architecture supported by protection, fault and arc-flash engineering studies.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=88",
    tags: [
      "Arc Flash",
      "Short Circuit",
      "Relay Coordination",
    ],
    icon: Server,
  },
  {
    number: "03",
    title: "Healthcare MEP Coordination",
    category: "Healthcare",
    description:
      "Integrated MEP coordination focused on safe operation, resilience and clear multidisciplinary interfaces.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=88",
    tags: [
      "Switchgear Sizing",
      "MEP Coordination",
      "Critical Power",
    ],
    icon: HeartPulse,
  },
  {
    number: "04",
    title: "Residential Electrical Design",
    category: "Residential",
    description:
      "Practical electrical and lighting solutions developed around safety, comfort and constructability.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=88",
    tags: [
      "Lighting",
      "Cable Sizing",
      "Short Circuit",
    ],
    icon: Home,
  },
  {
    number: "05",
    title: "Education Campus Utilities",
    category: "Education",
    description:
      "Campus-wide electrical utilities coordinated for dependable operation and future system growth.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=88",
    tags: [
      "Load Flow",
      "Electrical Schedules",
      "Utility Planning",
    ],
    icon: GraduationCap,
  },
];

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
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

function createProjectWhatsAppLink(project) {
  const message = project
    ? [
        "Hello CoreAMP Engineering,",
        "",
        `I would like to discuss ${project.title}.`,
        "",
        `Project sector: ${project.category}`,
        `Required scope: ${project.tags.join(", ")}`,
        "",
        "Please share more information about this service.",
      ].join("\n")
    : [
        "Hello CoreAMP Engineering,",
        "",
        "I would like to discuss an engineering project.",
        "",
        "Please share the next steps.",
      ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

function ProjectCard({
  project,
  reduceMotion,
}) {
  const Icon = project.icon;

  return (
    <motion.article
      className="premium-project-card"
      variants={
        reduceMotion
          ? undefined
          : cardVariants
      }
    >
      <div className="premium-project-image">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
        />

        <div
          className="premium-project-overlay"
          aria-hidden="true"
        />

        <span className="premium-project-number">
          {project.number}
        </span>
      </div>

      <div className="premium-project-content">
        <div className="premium-project-icon-row">
          <span
            className="premium-project-icon"
            aria-hidden="true"
          >
            <Icon
              size={22}
              strokeWidth={1.5}
            />
          </span>

          <span className="premium-project-line" />
        </div>

        <span className="premium-project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="premium-project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <a
          href={createProjectWhatsAppLink(project)}
          target="_blank"
          rel="noopener noreferrer"
          className="premium-project-action"
          aria-label={`Discuss ${project.title} on WhatsApp`}
        >
          Discuss project

          <ArrowUpRight
            size={15}
            strokeWidth={1.6}
          />
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] =
    useState("All");

  const reduceMotion =
    useReducedMotion();

  const categories = useMemo(
    () => [
      "All",
      ...new Set(
        projects.map(
          (project) => project.category
        )
      ),
    ],
    []
  );

  const shownProjects = useMemo(() => {
    if (filter === "All") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === filter
    );
  }, [filter]);

  return (
    <section
      id="projects"
      className="premium-projects"
      aria-labelledby="projects-heading"
    >
      <div className="container premium-projects-inner">
        <motion.div
          className="premium-projects-heading"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <span className="premium-projects-kicker">
              Capability portfolio
            </span>

            <h2 id="projects-heading">
              Engineering for
              <br />

              <em>
                demanding environments.
              </em>
            </h2>
          </div>

          <div className="premium-projects-heading-copy">
            <span aria-hidden="true" />

            <p>
              Explore representative project environments
              where coordinated electrical and MEP
              engineering supports safety, reliability and
              constructability.
            </p>

            <a
              href={createProjectWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss your project

              <ArrowRight
                size={16}
                strokeWidth={1.6}
              />
            </a>
          </div>
        </motion.div>

<div className="premium-project-filter">
  <div className="premium-filter-label">
    <span>Filter projects</span>

    <small>
      {String(
        shownProjects.length
      ).padStart(2, "0")}{" "}
      environments
    </small>
  </div>

  {/* Laptop / Desktop buttons */}
  <div
    className="premium-filter-buttons"
    role="group"
    aria-label="Filter projects by sector"
  >
    {categories.map((category) => (
      <button
        type="button"
        key={category}
        className={
          filter === category
            ? "active"
            : ""
        }
        onClick={() =>
          setFilter(category)
        }
        aria-pressed={
          filter === category
        }
      >
        <span>{category}</span>
      </button>
    ))}
  </div>

  {/* Mobile dropdown */}
  <div className="premium-filter-mobile">
    <label htmlFor="project-filter">
      Select project sector
    </label>

    <div className="premium-filter-select">
      <select
        id="project-filter"
        value={filter}
        onChange={(event) =>
          setFilter(event.target.value)
        }
      >
        {categories.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>

      <span aria-hidden="true">
        ↓
      </span>
    </div>
  </div>
</div>

        <motion.div
          key={filter}
          className={`premium-projects-grid ${
            filter !== "All"
              ? "filtered"
              : ""
          }`}
          variants={
            reduceMotion
              ? undefined
              : containerVariants
          }
          initial={
            reduceMotion
              ? false
              : "hidden"
          }
          animate="visible"
        >
          {shownProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>

        <div className="premium-projects-footer">
          <span>
            Electrical engineering
          </span>

          <i aria-hidden="true" />

          <span>
            Power-system studies
          </span>

          <i aria-hidden="true" />

          <span>
            MEP coordination
          </span>
        </div>
      </div>
    </section>
  );
}