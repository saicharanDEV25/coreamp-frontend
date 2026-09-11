import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import MepDesign from './pages/MepDesign';
import Projects from './pages/Projects';
import Design from './pages/Design';
import Contact from './pages/Contact';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const location = useLocation();

 useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, [location.pathname]);

  return (
    <div className="app-shell">
      <Navbar onConsult={() => setConsultationOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Home onConsult={() => setConsultationOpen(true)} />} />
          <Route path="/about" element={<About onConsult={() => setConsultationOpen(true)} />} />
          <Route path="/services" element={<Services onConsult={() => setConsultationOpen(true)} />} />
          <Route path="/services/mep-design" element={<MepDesign onConsult={() => setConsultationOpen(true)} />} />
          <Route path="/projects" element={<Projects onConsult={() => setConsultationOpen(true)} />} />
          <Route path="/design" element={<Design onConsult={() => setConsultationOpen(true)} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
      <ConsultationModal open={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </div>
  );
}
