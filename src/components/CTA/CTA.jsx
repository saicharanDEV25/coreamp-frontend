import { ArrowRight } from 'lucide-react';
import './CTA.css';

export default function CTA({ eyebrow = 'Have a project?', title, button = 'Start your project', onClick }) {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
        <button className="btn btn-light" onClick={onClick}>{button} <ArrowRight size={18}/></button>
      </div>
    </section>
  );
}
