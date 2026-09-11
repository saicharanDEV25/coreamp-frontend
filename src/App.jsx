import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ConsultationModal from "./components/ConsultationModal/ConsultationModal";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat";
import AIBot from "./components/AIBot/AIBot";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import ElectricalDesign from "./pages/ElectricalDesign/ElectricalDesign";
import MepDesign from "./pages/MepDesign/MepDesign";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        document
          .querySelector(location.hash)
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 50);

      return () => clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname, location.hash]);

  const openConsultation = () => {
    setConsultationOpen(true);
  };

  const closeConsultation = () => {
    setConsultationOpen(false);
  };

  return (
    <div className="app-shell">
      <Navbar
        onConsult={openConsultation}
      />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onConsult={openConsultation}
              />
            }
          />

          <Route
            path="/about"
            element={
              <About
                onConsult={openConsultation}
              />
            }
          />

          <Route
            path="/services"
            element={
              <Services
                onConsult={openConsultation}
              />
            }
          />

          <Route
            path="/electrical-design"
            element={
              <ElectricalDesign
                onConsult={openConsultation}
              />
            }
          />

          <Route
            path="/services/mep-design"
            element={
              <MepDesign
                onConsult={openConsultation}
              />
            }
          />

          <Route
            path="/projects"
            element={
              <Projects
                onConsult={openConsultation}
              />
            }
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/design"
            element={
              <Navigate
                to="/electrical-design"
                replace
              />
            }
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />
        </Routes>
      </main>

      <Footer />

      {/* AI Customer Assistant */}
      <AIBot
        onConsult={openConsultation}
      />

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />

      {/* Consultation Modal */}
      <ConsultationModal
        open={consultationOpen}
        onClose={closeConsultation}
      />
    </div>
  );
}