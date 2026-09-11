import { useState } from 'react';
import PageHero from '../components/PageHero';
import { projects } from '../data/siteData';
export default function Projects({onConsult}){
 const [filter,setFilter]=useState('All'); const cats=['All',...new Set(projects.map(p=>p.category))]; const shown=filter==='All'?projects:projects.filter(p=>p.category===filter);
 return <><PageHero eyebrow="Our projects" title="Work that balances form and performance." text="A growing portfolio across residential, commercial, hospitality and interior environments." image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=85"/>
 <section className="section"><div className="container"><div className="filter-row">{cats.map(c=><button className={filter===c?'active':''} onClick={()=>setFilter(c)} key={c}>{c}</button>)}</div><div className="project-grid gallery">{shown.map(p=><article className="project-card" key={p.title}><img src={p.image} alt={p.title}/><div className="project-overlay"><span>{p.category}</span><h3>{p.title}</h3></div></article>)}</div></div></section>
 <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">Your project next</span><h2>Let’s create your signature space.</h2></div><button className="btn btn-light" onClick={onConsult}>Start a Project</button></div></section></>;
}
