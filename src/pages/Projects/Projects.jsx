import { useState } from 'react';
import PageHero from '../../components/PageHero/PageHero';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import CTA from '../../components/CTA/CTA';
import { projects } from '../../data/siteData';
import './Projects.css';

export default function Projects({ onConsult }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const shown = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Project sectors"
        title="Engineering across commercial, critical and building environments."
        text="Representative project categories based on the client’s electrical capability profile and sector experience."
        image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="section projects-page">
        <div className="container">
          <div className="filter-row">
            {categories.map(category => <button className={filter === category ? 'active' : ''} onClick={() => setFilter(category)} key={category}>{category}</button>)}
          </div>
          <div className="projects-grid">{shown.map(project => <ProjectCard key={project.title} project={project}/>)}</div>
        </div>
      </section>
      <CTA eyebrow="Your project next" title="Bring the electrical and MEP scope into focus early." button="Start a Project" onClick={onConsult}/>
    </>
  );
}
