import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import AIBot from "./components/AIBot/AIBot";
import ConsultationModal from "./components/ConsultationModal/ConsultationModal";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat";
import Home from "./pages/Home/Home";

const routeMeta = {
  "/": {
    title: "CoreAMP Engineering | Electrical Design & Power Studies",
    description:
      "Electrical design, power-system studies and coordinated MEP engineering for reliable, buildable projects.",
  },
};

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const meta = routeMeta[location.pathname] || {
      title: "Page not found | CoreAMP Engineering",
      description: "Return to CoreAMP Engineering to explore our services.",
    };

    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
  }, [location.pathname]);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (location.hash) {
      const timer = window.setTimeout(() => {
        const rawId = location.hash.slice(1);
        let id = rawId;

        try {
          id = decodeURIComponent(rawId);
        } catch {
          id = rawId;
        }

        document.getElementById(id)?.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "start",
        });
      }, 80);

      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar onConsult={() => setConsultationOpen(true)} />

      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route
            path="/"
            element={<Home onConsult={() => setConsultationOpen(true)} />}
          />
          <Route path="/services" element={<Navigate to="/#services" replace />} />
          <Route path="/projects" element={<Navigate to="/#projects" replace />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="/electrical-design" element={<Navigate to="/#services" replace />} />
          <Route path="/services/mep-design" element={<Navigate to="/#services" replace />} />
          <Route path="/design" element={<Navigate to="/#services" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <AIBot onConsult={() => setConsultationOpen(true)} />
      <WhatsAppFloat />
      <ConsultationModal
        open={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
