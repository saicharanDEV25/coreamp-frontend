import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./Footer.css";

const CONTACT = {
  phoneDisplay: "+91 89512 62696",
  phoneHref: "+918951262696",
  email: "hello@coreamp.in",
};

const DEVELOPER_WHATSAPP = "919959345608";

const developerMessage = encodeURIComponent(
  "Hello Sai Charan, I visited the CoreAMP Engineering website. I would like to discuss website development."
);

const developerWhatsAppUrl =
  `https://wa.me/${DEVELOPER_WHATSAPP}?text=${developerMessage}`;

export default function Footer() {
  return (
    <footer className="footer">
      <div
        className="footer-grid-pattern"
        aria-hidden="true"
      />

      <div className="container footer-grid">
        <div className="footer-overview">
          <Link
            to="/"
            className="footer-brand"
            aria-label="CoreAMP home"
          >
            <span className="footer-brand-mark">
              <img
                src="/images/coreamp-logo.png"
                alt="CoreAMP Engineering logo"
                className="footer-brand-logo"
              />
            </span>

            <span className="footer-brand-copy">
              <strong>COREAMP</strong>
              <small>ENGINEERING</small>
            </span>
          </Link>

          <p>
            Electrical engineering, power-system studies and
            coordinated MEP design built around safety,
            performance and constructability.
          </p>
        </div>

        <nav
          className="footer-column"
          aria-label="Footer navigation"
        >
          <h3>Navigate</h3>

          <Link to="/#about">About</Link>
          <Link to="/#projects">Project sectors</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#contact">Contact</Link>
        </nav>

        <nav
          className="footer-column"
          aria-label="Engineering services"
        >
          <h3>Engineering</h3>

          <Link to="/#services">Electrical design</Link>
          <Link to="/#services">Power-system studies</Link>
          <Link to="/#services">MEP design</Link>
          <Link to="/#contact">Engineering review</Link>
        </nav>

        <div className="footer-column footer-contact">
          <h3>Contact</h3>

          <span>
            <MapPin size={15} />
            Bengaluru, India
          </span>

          <a href={`tel:${CONTACT.phoneHref}`}>
            <Phone size={15} />
            {CONTACT.phoneDisplay}
          </a>

          <a href={`mailto:${CONTACT.email}`}>
            <Mail size={15} />
            {CONTACT.email}
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          &copy; 2026 CoreAMP Engineering. All rights reserved.
        </span>

        <a
          className="footer-developer"
          href={developerWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact website developer Sai Charan on WhatsApp"
        >
          <span>Website by</span>
          <strong>Sai Charan</strong>

          <i aria-hidden="true">
  <svg
    viewBox="0 0 32 32"
    width="18"
    height="18"
    fill="currentColor"
  >
    <path d="M16.04 3C8.85 3 3 8.78 3 15.9c0 2.51.73 4.95 2.12 7.04L3.1 30l7.3-1.91a13.12 13.12 0 0 0 5.63 1.28h.01C23.23 29.37 29 23.59 29 16.47 29 9.35 23.23 3 16.04 3Zm0 24.18h-.01c-1.73 0-3.43-.46-4.91-1.33l-.35-.2-4.33 1.13 1.16-4.2-.23-.36a10.67 10.67 0 0 1-1.65-5.75c0-5.9 4.65-10.72 10.34-10.72 5.7 0 10.35 4.82 10.35 10.72 0 5.9-4.67 10.71-10.37 10.71Zm5.68-8.02c-.31-.15-1.84-.89-2.12-.99-.29-.1-.5-.15-.71.15-.21.31-.81.99-.99 1.19-.18.2-.36.23-.67.08-.31-.15-1.31-.47-2.49-1.5a9.23 9.23 0 0 1-1.73-2.12c-.18-.3-.02-.47.14-.62.14-.14.31-.36.46-.54.16-.18.21-.31.31-.51.11-.21.05-.39-.02-.54-.08-.15-.71-1.68-.97-2.3-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.06-1.1 2.59 0 1.52 1.13 3 1.28 3.2.16.2 2.21 3.32 5.36 4.66.75.32 1.34.51 1.8.65.76.24 1.44.2 1.99.12.61-.09 1.84-.74 2.1-1.45.26-.72.26-1.33.18-1.46-.08-.13-.29-.21-.6-.36Z" />
  </svg>
</i>
        </a>
      </div>
    </footer>
  );
}