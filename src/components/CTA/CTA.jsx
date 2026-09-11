import { ArrowUpRight } from 'lucide-react';
import './CTA.css';

export default function CTA({
  eyebrow = 'Have a project?',
  title,
  button = 'Start your project',
  onClick,
  text = 'Share the project stage and engineering scope. A clear brief is enough to begin the conversation.',
}) {
  return (
    <section className="cta-section" aria-label="Start a project">
      <div className="cta-drawing" aria-hidden="true">
        <span />
        <i />
      </div>

      <div className="container cta-inner">
        <div className="cta-index" aria-hidden="true">
          <span>Next</span>
          <strong>→</strong>
          <small>Project dialogue</small>
        </div>

        <div className="cta-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>

        <button className="cta-action" type="button" onClick={onClick}>
          <span>{button}</span>
          <i aria-hidden="true">
            <ArrowUpRight size={20} strokeWidth={1.6} />
          </i>
        </button>
      </div>
    </section>
  );
}
