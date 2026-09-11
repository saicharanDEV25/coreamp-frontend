import PageHero from '../components/PageHero';
import { services } from '../data/siteData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function Services({onConsult}){
 return <><PageHero eyebrow="Our services" title="Design, engineering and execution under one roof." text="From concept design to coordinated MEP systems and final execution, we build complete project solutions." image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85"/>
 <section className="section"><div className="container"><div className="service-grid light-cards">{services.map((s,i)=><article className="service-card light" key={s.title}><s.icon/><span className="card-index">0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p>{s.path?<Link to={s.path}>View details <ArrowRight size={16}/></Link>:<span className="text-link">Custom scope available</span>}</article>)}</div></div></section>
 <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">Need a custom scope?</span><h2>We’ll shape the right team around your project.</h2></div><button className="btn btn-light" onClick={onConsult}>Discuss Project</button></div></section></>;
}
