import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand"><span className="brand-mark">CA</span><span className="brand-copy"><strong>COREAMP</strong><small>ENGINEERING</small></span></div>
          <p>Electrical engineering, power-system studies and coordinated MEP design built around safety, performance and constructability.</p>
        </div>
        <div><h4>Quick Links</h4><Link to="/about">About</Link><Link to="/projects">Projects</Link><Link to="/services">Services</Link><Link to="/contact">Contact</Link></div>
        <div><h4>Engineering</h4><Link to="/electrical-design">Electrical Design</Link><Link to="/electrical-design#studies">Power System Studies</Link><Link to="/services/mep-design">MEP Design</Link><span>Engineering Review</span></div>
        <div><h4>Contact</h4><span><MapPin size={16}/> Bengaluru, India</span><span><Phone size={16}/> +91 XXXXX XXXXX</span><span><Mail size={16}/> hello@coreamp.in</span></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 CoreAmp Engineering. All rights reserved.</span><span>Engineered for performance.</span></div>
    </footer>
  );
}
