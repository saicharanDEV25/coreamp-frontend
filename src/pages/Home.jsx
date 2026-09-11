import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, projects } from '../data/siteData';

const reveal = { initial:{opacity:0,y:24}, whileInView:{opacity:1,y:0}, viewport:{once:true, amount:.18}, transition:{duration:.6} };

export default function Home({ onConsult }) {
  return <>
    <section className="hero">
      <div className="hero-media" />
      <div className="hero-grid-overlay" />
      <div className="container hero-content">
        <motion.div initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.85}}>
          <span className="eyebrow">Engineering spaces that perform</span>
          <h1>Design.<br/>Engineer. <em>Build.</em></h1>
          <p>Integrated engineering, MEP, architecture and interior solutions for commercial, residential and hospitality projects.</p>
          <div className="hero-actions"><Link className="btn btn-gold" to="/projects">View Projects <ArrowRight size={18}/></Link><button className="btn btn-outline" onClick={onConsult}>Book Consultation</button></div>
        </motion.div>
        <div className="hero-side-note"><span>01</span><p>One team.<br/>One coordinated vision.<br/>From concept to completion.</p></div>
      </div>
      <div className="scroll-label">SCROLL <span/></div>
    </section>

    <section className="section about-split"><div className="container split-grid">
      <motion.div {...reveal}><span className="eyebrow dark">About CoreAmp</span><h2>Precision engineering meets premium design.</h2></motion.div>
      <motion.div {...reveal}><p className="lead">We bring architecture, engineering, MEP, interiors and project execution under one coordinated workflow — reducing gaps, improving quality and keeping every detail aligned.</p><Link className="text-link" to="/about">Discover our approach <ArrowRight size={17}/></Link></motion.div>
    </div></section>

    <section className="section section-dark"><div className="container">
      <motion.div className="section-head" {...reveal}><div><span className="eyebrow">Our capabilities</span><h2>Full-spectrum expertise.</h2></div><Link className="text-link light" to="/services">Explore all services <ArrowRight size={17}/></Link></motion.div>
      <div className="service-grid">{services.map((s,i)=><motion.article className="service-card" key={s.title} {...reveal} transition={{duration:.55,delay:i*.04}}><s.icon/><span className="card-index">0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p>{s.path ? <Link to={s.path}>Explore service <ChevronRight size={16}/></Link> : <span className="muted-link">Integrated solution</span>}</motion.article>)}</div>
    </div></section>

    <section className="section"><div className="container">
      <motion.div className="section-head" {...reveal}><div><span className="eyebrow dark">Selected work</span><h2>Projects shaped with intent.</h2></div><Link className="text-link" to="/projects">View all projects <ArrowRight size={17}/></Link></motion.div>
      <div className="project-grid">{projects.slice(0,4).map((p,i)=><motion.article className={`project-card ${i===0?'wide':''}`} key={p.title} {...reveal}><img src={p.image} alt={p.title}/><div className="project-overlay"><span>{p.category}</span><h3>{p.title}</h3></div></motion.article>)}</div>
    </div></section>

    <section className="section process-section"><div className="container">
      <motion.div className="center-head" {...reveal}><span className="eyebrow dark">How we work</span><h2>From first idea to final handover.</h2></motion.div>
      <div className="process-line">{['Consultation','Design','Coordination','Execution','Handover'].map((p,i)=><motion.div className="process-step" key={p} {...reveal}><span>{String(i+1).padStart(2,'0')}</span><h3>{p}</h3><p>{['Understand scope, goals and budget.','Develop concept and detailed design.','Coordinate architecture, structure and MEP.','Execute with quality and site control.','Testing, documentation and closure.'][i]}</p></motion.div>)}</div>
    </div></section>

    <section className="stats-band"><div className="container stats-grid">{[['50+','Projects'],['6+','Core Disciplines'],['100%','Project Focus'],['1','Integrated Team']].map(([n,l])=><div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></section>

    <section className="section section-dark"><div className="container testimonial-layout"><motion.div {...reveal}><span className="eyebrow">Why CoreAmp</span><h2>Coordination is the difference.</h2><p className="lead dark-lead">Beautiful projects fail when disciplines work in silos. We coordinate design decisions early, engineer them carefully and execute with a single performance standard.</p></motion.div><motion.div className="check-panel" {...reveal}>{['Integrated multidisciplinary workflow','Performance-first MEP engineering','Transparent project coordination','Premium materials & detailing','Responsive design for every project scale'].map(x=><div key={x}><Check/><span>{x}</span></div>)}</motion.div></div></section>

    <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">Have a project?</span><h2>Let’s build something exceptional.</h2></div><button className="btn btn-light" onClick={onConsult}>Start your project <ArrowRight size={18}/></button></div></section>
  </>;
}
