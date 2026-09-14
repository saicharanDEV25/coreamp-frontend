import { ArrowUpRight } from "lucide-react";

import "./LetUsKnow.css";

export default function LetUsKnow({ onConsult }) {
  return (
    <section
      id="let-us-know"
      className="let-us-know"
      aria-labelledby="let-us-know-heading"
    >
      <div
        className="let-us-know-grid"
        aria-hidden="true"
      />

      <div
        className="let-us-know-drawing"
        aria-hidden="true"
      >
        <span />
        <i />
      </div>

      <div className="container let-us-know-inner">
        <div
          className="let-us-know-index"
          aria-hidden="true"
        >
          <span>Next</span>
          <strong>→</strong>
          <small>Project dialogue</small>
        </div>

        <div className="let-us-know-copy">
          <span className="let-us-know-kicker">
            Let us know
          </span>

          <h2 id="let-us-know-heading">
            Tell us about your next engineering project.
          </h2>

          <p>
            Share your project stage, engineering scope and
            delivery priorities. A clear brief is enough to
            begin the conversation.
          </p>
        </div>

        <button
          type="button"
          className="let-us-know-action"
          onClick={onConsult}
        >
          <span>Book Consultation</span>

          <i aria-hidden="true">
            <ArrowUpRight
              size={20}
              strokeWidth={1.6}
            />
          </i>
        </button>
      </div>
    </section>
  );
}