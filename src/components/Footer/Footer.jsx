import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./Footer.css";

const CONTACT = {
  phoneDisplay: "+91 89512 62696",
  phoneHref: "+918951262696",
  email: "hello@coreamp.in",
};

const DEVELOPER_WHATSAPP = "919959345608";

const developerMessage = encodeURIComponent(
  "Hello Sai Charan, I visited the CoreAmp Design Consultants website. I would like to discuss website development."
);

const developerWhatsAppUrl =
  `https://wa.me/${DEVELOPER_WHATSAPP}?text=${developerMessage}`;

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const doScroll = () => {
      const section =
        document.getElementById(sectionId);

      if (!section) {
        return false;
      }

      const navbar =
        document.querySelector(".navbar");

      const navbarHeight =
        navbar?.offsetHeight || 75;

      const sectionTop =
        section.getBoundingClientRect().top +
        window.scrollY;

      window.scrollTo({
        top: sectionTop - navbarHeight - 10,
        behavior: "smooth",
      });

      return true;
    };

    /*
      Already on homepage
    */
    if (location.pathname === "/") {
      window.history.pushState(
        null,
        "",
        `/#${sectionId}`
      );

      requestAnimationFrame(() => {
        doScroll();
      });

      return;
    }

    /*
      User is on another page.
      First navigate home, then find section.
    */
    navigate(`/#${sectionId}`);

    let attempts = 0;

    const waitForSection = () => {
      const success = doScroll();

      if (success) {
        return;
      }

      attempts += 1;

      if (attempts < 30) {
        setTimeout(
          waitForSection,
          50
        );
      }
    };

    setTimeout(
      waitForSection,
      50
    );
  };

  return (
    <footer className="footer">

      <div
        className="footer-grid-pattern"
        aria-hidden="true"
      />

      <div className="container footer-grid">

        {/* =========================
            BRAND / OVERVIEW
        ========================== */}

        <div className="footer-overview">

          <Link
            to="/"
            className="footer-brand"
            aria-label="CoreAMP home"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >

            <span className="footer-brand-mark">

              <img
                src="/images/coreamp-logo.png"
                alt="CoreAMP Engineering logo"
                className="footer-brand-logo"
              />

            </span>

            <span className="footer-brand-copy">

              <strong>
                 CoreAmp Design Consultants
              </strong>

              <small>
                Design Consultants
              </small>

            </span>

          </Link>

          <p>
            Electrical engineering, power-system studies and
            coordinated MEP design built around safety,
            performance and constructability.
          </p>

        </div>

        {/* =========================
            NAVIGATION
        ========================== */}

        <nav
          className="footer-column"
          aria-label="Footer navigation"
        >

          <h3>
            Navigate
          </h3>

          <button
            type="button"
            className="footer-section-link"
            onClick={() =>
              scrollToSection("about")
            }
          >
            About
          </button>

          <button
            type="button"
            className="footer-section-link"
            onClick={() =>
              scrollToSection("projects")
            }
          >
            Project sectors
          </button>

          <button
            type="button"
            className="footer-section-link"
            onClick={() =>
              scrollToSection("services")
            }
          >
            Services
          </button>

          <button
            type="button"
            className="footer-section-link"
            onClick={() =>
              scrollToSection("contact")
            }
          >
            Contact
          </button>

        </nav>

        {/* =========================
            ENGINEERING
        ========================== */}

        <nav
          className="footer-column"
          aria-label="Engineering services"
        >

          <h3>
            Engineering
          </h3>

          <button
            type="button"
            className="footer-section-link"
            onClick={() =>
              scrollToSection("services")
            }
          >
            Electrical design
          </button>

          <button
            type="button"
            className="footer-section-link"
            onClick={() =>
              scrollToSection("services")
            }
          >
            Power-system studies
          </button>

          <button
            type="button"
            className="footer-section-link"
            onClick={() =>
              scrollToSection("services")
            }
          >
            MEP design
          </button>
        </nav>

        {/* =========================
            CONTACT
        ========================== */}

        <div className="footer-column footer-contact">

          <h3>
            Contact
          </h3>

          <span>

            <MapPin size={15} />

            Bengaluru, India

          </span>

          <a
            href={`tel:${CONTACT.phoneHref}`}
          >

            <Phone size={15} />

            {CONTACT.phoneDisplay}

          </a>

          <a
            href={`mailto:${CONTACT.email}`}
          >

            <Mail size={15} />

            {CONTACT.email}

          </a>

        </div>

      </div>

      {/* =========================
          BOTTOM FOOTER
      ========================== */}

      <div className="container footer-bottom">

        <span className="footer-copyright">
          &copy; 2026 CoreAmp Design Consultants
          All rights reserved.
        </span>

        <div className="footer-developer">

          <span className="footer-developer-text">

            Website by

            <strong>
              Sai Charan
            </strong>

          </span>

          <a
            className="footer-whatsapp"
            href={developerWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact website developer Sai Charan on WhatsApp"
          >

            <svg
              viewBox="0 0 32 32"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16.04 3C8.85 3 3 8.78 3 15.9c0 2.51.73 4.95 2.12 7.04L3.1 30l7.3-1.91a13.12 13.12 0 0 0 5.63 1.28h.01C23.23 29.37 29 23.59 29 16.47 29 9.35 23.23 3 16.04 3Zm0 24.18h-.01c-1.73 0-3.43-.46-4.91-1.33l-.35-.2-4.33 1.13 1.16-4.2-.23-.36a10.67 10.67 0 0 1-1.65-5.75c0-5.9 4.65-10.72 10.34-10.72 5.7 0 10.35 4.82 10.35 10.72 0 5.9-4.67 10.71-10.37 10.71Zm5.68-8.02c-.31-.15-1.84-.89-2.12-.99-.29-.1-.5-.15-.71.15-.21.31-.81.99-.99 1.19-.18.2-.36.23-.67.08-.31-.15-1.31-.47-2.49-1.5a9.23 9.23 0 0 1-1.73-2.12c-.18-.3-.02-.47.14-.62.14-.14.31-.36.46-.54.16-.18.21-.31.31-.51.11-.21.05-.39-.02-.54-.08-.15-.71-1.68-.97-2.3-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.06-1.1 2.59 0 1.52 1.13 3 1.28 3.2.16.2 2.21 3.32 5.36 4.66.75.32 1.34.51 1.8.65.76.24 1.44.2 1.99.12.61-.09 1.84-.74 2.1-1.45.26-.72.26-1.33.18-1.46-.08-.13-.29-.21-.6-.36Z" />
            </svg>

          </a>

        </div>

      </div>

    </footer>
  );
}