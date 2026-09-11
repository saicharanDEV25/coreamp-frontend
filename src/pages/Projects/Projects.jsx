import { useState } from "react";
import PageHero from "../../components/PageHero/PageHero";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import CTA from "../../components/CTA/CTA";
import { projects } from "../../data/siteData";
import "./Projects.css";

export default function Projects({ onConsult }) {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const shown =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Capability portfolio"
        title="Representative project types across demanding built environments."
        text="A visual overview of the sectors and engineering scopes CoreAMP is equipped to support."
        image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=85"
      />

      <section
        className="section projects-page"
        aria-labelledby="projects-heading"
      >
        <div className="projects-page-grid" aria-hidden="true" />

        <div className="container projects-page-inner">
          <div className="projects-intro">
            <div>
              <span className="eyebrow dark">Representative environments</span>
              <h2 id="projects-heading">
                Explore the systems we are equipped to engineer.
              </h2>
            </div>

            <div className="projects-intro-copy">
              <span aria-hidden="true" />
              <p id="projects-portfolio-note">
                These capability profiles organize electrical and MEP scope by
                project environment, helping teams identify the right starting
                point for a clear project brief.
              </p>
            </div>
          </div>

          <div className="projects-filter-panel">
            <div className="projects-filter-heading">
              <strong id="project-filter-label">Filter by sector</strong>
              <span>Capability portfolio</span>
            </div>

            <div
              className="filter-row"
              role="group"
              aria-labelledby="project-filter-label"
            >
              {categories.map((category) => (
                <button
                  type="button"
                  className={filter === category ? "active" : ""}
                  onClick={() => setFilter(category)}
                  aria-pressed={filter === category}
                  key={category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <p className="projects-result-count" aria-live="polite">
            Showing {shown.length} representative project
            {shown.length === 1 ? " type" : " types"}
          </p>

          <div
            className={`projects-grid ${
              filter === "All" ? "" : "is-filtered"
            }`}
            aria-describedby="projects-portfolio-note"
          >
            {shown.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                wide={
                  filter === "All" &&
                  (index === 0 || index === shown.length - 1)
                }
              />
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Discuss your requirement"
        title="Bring the electrical and MEP scope into focus early."
        button="Start a Project"
        onClick={onConsult}
      />
    </>
  );
}
