import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand"><span className="brand-mark">CA</span><span><strong>COREAMP</strong><small>ENGINEERING</small></span></div>
          <p>Integrated engineering, MEP, architectural, interior and execution solutions built around performance, precision and premium design.</p>
        </div>
        <div><h4>Quick Links</h4><Link to="/about">About</Link><Link to="/projects">Projects</Link><Link to="/services">Services</Link><Link to="/design">Design</Link><Link to="/contact">Contact</Link></div>
        <div><h4>Core Services</h4><Link to="/services/mep-design">MEP Design</Link><span>Architecture</span><span>Interiors</span><span>Structural</span><span>Turnkey Execution</span></div>
        <div><h4>Contact</h4><span><MapPin size={16}/> Bengaluru, India</span><span><Phone size={16}/> +91 XXXXX XXXXX</span><span><Mail size={16}/> hello@coreamp.in</span></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 CoreAmp Engineering. All rights reserved.</span><span>Designed for performance.</span></div>
    </footer>
  );
}
