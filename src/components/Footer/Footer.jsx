import { Mail, MapPin, Phone, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { COREAMP_CONTACT } from "../../data/contact";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid-pattern" aria-hidden="true" />

      <div className="container footer-grid">
        <div className="footer-overview">
          <Link to="/" className="footer-brand" aria-label="CoreAMP home">
            <span className="footer-brand-mark" aria-hidden="true">
              <Zap size={20} strokeWidth={1.6} />
            </span>
            <span className="footer-brand-copy">
              <strong>COREAMP</strong>
              <small>ENGINEERING</small>
            </span>
          </Link>
          <p>
            Electrical engineering, power-system studies and coordinated MEP
            design built around safety, performance and constructability.
          </p>
        </div>

        <nav className="footer-column" aria-label="Footer navigation">
          <h3>Navigate</h3>
          <Link to="/#about">About</Link>
          <Link to="/#projects">Project sectors</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#contact">Contact</Link>
        </nav>

        <nav className="footer-column" aria-label="Engineering services">
          <h3>Engineering</h3>
          <Link to="/#services">Electrical design</Link>
          <Link to="/#services">Power-system studies</Link>
          <Link to="/#services">MEP design</Link>
          <Link to="/#contact">Engineering review</Link>
        </nav>

        <div className="footer-column footer-contact">
          <h3>Contact</h3>
          <span><MapPin size={15} /> Bengaluru, India</span>
          <a href={`tel:${COREAMP_CONTACT.phoneHref}`}>
            <Phone size={15} /> {COREAMP_CONTACT.phoneDisplay}
          </a>
          <a href={`mailto:${COREAMP_CONTACT.email}`}>
            <Mail size={15} /> {COREAMP_CONTACT.email}
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>&copy; 2026 CoreAMP Engineering. All rights reserved.</span>
        <span>Electrical / Power Systems / MEP</span>
      </div>
    </footer>
  );
}
