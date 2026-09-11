import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import "./Navbar.css";

const HOME_SECTIONS = [
  "home",
  "services",
  "electrical",
  "mep",
  "projects",
  "about",
  "contact",
];

const PATH_SECTION_MAP = {
  "/": "home",
  "/services": "services",
  "/electrical-design": "electrical",
  "/services/mep-design": "mep",
  "/projects": "projects",
  "/about": "about",
  "/contact": "contact",
};

export default function Navbar({
  onConsult,
}) {
  const location = useLocation();

  const [activeSection, setActiveSection] =
    useState("home");

  const ticking = useRef(false);

  useEffect(() => {
    /*
      SEPARATE PAGE ACTIVE STATE
    */
    if (location.pathname !== "/") {
      setActiveSection(
        PATH_SECTION_MAP[
          location.pathname
        ] || ""
      );

      return;
    }

    /*
      HOME PAGE SCROLL SPY
    */
    const updateActiveSection = () => {
      const navbarHeight = 92;

      /*
        Viewport lo roughly upper 25%
        daggara unna section active avuthundi.
      */
      const marker =
        navbarHeight +
        window.innerHeight * 0.24;

      let current = "home";

      for (
        let index = 0;
        index < HOME_SECTIONS.length;
        index += 1
      ) {
        const id =
          HOME_SECTIONS[index];

        const element =
          document.getElementById(id);

        if (!element) continue;

        const rect =
          element.getBoundingClientRect();

        /*
          Marker section lopala unte
          exact active section.
        */
        if (
          rect.top <= marker &&
          rect.bottom > marker
        ) {
          current = id;
          break;
        }

        /*
          Marker section ni cross chesina
          latest section remember chestham.
        */
        if (rect.top <= marker) {
          current = id;
        }
      }

      /*
        Page bottom ki reach ayithe
        Contact compulsory active.
      */
      const pageBottom =
        window.innerHeight +
        window.scrollY;

      const documentHeight =
        document.documentElement
          .scrollHeight;

      if (
        documentHeight -
          pageBottom <
        20
      ) {
        current = "contact";
      }

      setActiveSection(
        (previous) =>
          previous === current
            ? previous
            : current
      );

      ticking.current = false;
    };

    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      window.requestAnimationFrame(
        updateActiveSection
      );
    };

    /*
      Initial active state
    */
    updateActiveSection();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, [location.pathname]);

  return (
    <header className="navbar">
      <div className="container navbar-inner">

        {/* BRAND */}
        <Link
          to="/"
          className="navbar-brand"
        >
          <span className="navbar-logo-box">
            CA
          </span>

          <span className="navbar-brand-text">
            <strong>
              COREAMP
            </strong>

            <small>
              ENGINEERING
            </small>
          </span>
        </Link>

        {/* NAV */}
        <nav className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${
              activeSection === "home"
                ? "active"
                : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/services"
            className={`nav-link ${
              activeSection ===
              "services"
                ? "active"
                : ""
            }`}
          >
            Services
          </Link>

          <Link
            to="/electrical-design"
            className={`nav-link ${
              activeSection ===
              "electrical"
                ? "active"
                : ""
            }`}
          >
            Electrical
          </Link>

          <Link
            to="/services/mep-design"
            className={`nav-link ${
              activeSection === "mep"
                ? "active"
                : ""
            }`}
          >
            MEP
          </Link>

          <Link
            to="/projects"
            className={`nav-link ${
              activeSection ===
              "projects"
                ? "active"
                : ""
            }`}
          >
            Projects
          </Link>

          <Link
            to="/about"
            className={`nav-link ${
              activeSection === "about"
                ? "active"
                : ""
            }`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`nav-link ${
              activeSection ===
              "contact"
                ? "active"
                : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="navbar-consult"
          onClick={onConsult}
        >
          Book Consultation
        </button>
      </div>
    </header>
  );
}