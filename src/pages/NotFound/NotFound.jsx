import { ArrowLeft, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-grid" aria-hidden="true" />
      <div className="container not-found-inner">
        <div className="not-found-code" aria-hidden="true">
          404
        </div>
        <div className="not-found-copy">
          <span className="eyebrow">Circuit interrupted</span>
          <Compass size={34} strokeWidth={1.4} />
          <h1>This route isn&apos;t connected.</h1>
          <p>
            The page may have moved, but the main CoreAMP network is still
            online.
          </p>
          <Link className="btn btn-gold" to="/">
            <ArrowLeft size={17} /> Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
