import { ArrowUpRight, ChevronDown, Menu, X, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { label: "Home", to: "/", section: "home" },
  { label: "Services", to: "/#services", section: "services" },
  { label: "Projects", to: "/#projects", section: "projects" },
  { label: "About", to: "/#about", section: "about" },
  { label: "Contact", to: "/#contact", section: "contact" },
];

const serviceMenu = [
  {
    label: "Electrical Design",
    children: ["Power Distribution", "Single Line Diagrams", "Load Calculations", "Cable Sizing", "Grounding Design", "Lighting Design"],
  },
  { label: "Power System Studies", children: ["SKM Modeling", "Load Flow Analysis", "Short Circuit Analysis", "Protection Coordination", "Arc Flash Studies", "Harmonic Analysis"] },
  { label: "MEP Coordination", children: ["HVAC Coordination", "Plumbing Coordination", "Fire & Life Safety", "Electrical Coordination", "Clash Detection", "Combined Services"] },
  { label: "BIM Services", children: ["3D BIM Modeling", "BIM Coordination", "Clash Detection", "Scan to BIM", "Shop Drawings", "As-Built Models"] },
  { label: "Lighting Engineering", children: ["Indoor Lighting", "Outdoor Lighting", "DIALux Calculations", "Emergency Lighting", "Lighting Controls", "Photometric Studies"] },
  { label: "Critical Power", children: ["UPS Systems", "Backup Generators", "ATS Systems", "Critical Switchgear", "Redundancy Planning", "Mission-Critical Distribution"] },
];

export default function Navbar({ onConsult }) {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    setMenuOpen(false);

    if (location.pathname === "/" && location.hash) {
      setActiveSection(location.hash.slice(1));
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.classList.toggle("menu-locked", menuOpen);

    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.classList.remove("menu-locked");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    const updateNavigation = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(scrollTop > 28);
      setScrollProgress(maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0);

      if (location.pathname === "/") {
        const marker =
          (window.innerWidth > 1050 ? 88 : 78) + window.innerHeight * 0.22;
        let current = "home";

        for (const item of navItems) {
          const element = document.getElementById(item.section);
          if (!element) continue;

          const rect = element.getBoundingClientRect();
          if (rect.top <= marker) current = item.section;
          if (rect.top <= marker && rect.bottom > marker) break;
        }

        if (
          document.documentElement.scrollHeight -
            (window.innerHeight + window.scrollY) <
          24
        ) {
          current = "contact";
        }

        setActiveSection((previous) =>
          previous === current ? previous : current
        );
      }

      ticking.current = false;
    };

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(updateNavigation);
    };

    updateNavigation();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname]);

  const handleConsult = () => {
    setMenuOpen(false);
    onConsult();
  };

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" aria-label="CoreAMP home">
          <span className="navbar-logo-box" aria-hidden="true">
            <Zap size={20} strokeWidth={1.7} />
            <i />
          </span>
          <span className="navbar-brand-text">
            <strong>COREAMP</strong>
            <small>ENGINEERING</small>
          </span>
        </Link>

        <nav
          id="primary-navigation"
          className={`navbar-links ${menuOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          <div className="navbar-mobile-head">
            <span>Navigate CoreAMP</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
            >
              <X size={22} />
            </button>
          </div>

          {navItems.map((item, index) => {
            const active = activeSection === item.section;
            if (item.section === "services") {
              return (
                <div className="nav-services" key={item.to}>
                  <Link
                    to={item.to}
                    className={`nav-link ${active ? "active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="nav-mobile-index">02</span>
                    Services <ChevronDown className="nav-services-chevron" size={15} />
                  </Link>
                  <div className="nav-services-menu">
                    <div className="nav-services-menu-head">
                      <span>Engineering capabilities</span>
                      <strong>Explore services</strong>
                    </div>
                    <div className="nav-services-grid">
                      {serviceMenu.map((service, serviceIndex) => (
                        <div
                          className={`nav-service-item ${activeService === serviceIndex ? "is-active" : ""}`}
                          key={service.label}
                          onMouseEnter={() => setActiveService(serviceIndex)}
                          onFocus={() => setActiveService(serviceIndex)}
                        >
                          <Link to="/#services" onClick={() => setMenuOpen(false)}>
                            <span>{String(serviceIndex + 1).padStart(2, "0")}</span>
                            {service.label}
                            <ArrowUpRight size={14} />
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="nav-service-flyout">
                      <small>{serviceMenu[activeService].label}</small>
                      <strong>Related capabilities</strong>
                      {serviceMenu[activeService].children.map((child) => (
                        <Link key={child} to="/#services" onClick={() => setMenuOpen(false)}>
                          {child}<ArrowUpRight size={13} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link ${active ? "active" : ""}`}
                aria-current={active && location.pathname === "/" ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                <span className="nav-mobile-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            );
          })}

          <button
            type="button"
            className="navbar-mobile-consult"
            onClick={handleConsult}
          >
            Start a project <ArrowUpRight size={17} />
          </button>
        </nav>

        <button
          type="button"
          className="navbar-consult"
          onClick={handleConsult}
        >
          Book Consultation <ArrowUpRight size={15} />
        </button>

        <button
          type="button"
          className="navbar-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <span
        className="navbar-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />

      {menuOpen && (
        <button
          type="button"
          className="navbar-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation"
        />
      )}
    </header>
  );
}
