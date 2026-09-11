import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  ['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/services', 'Services'], ['/design', 'Design'], ['/contact', 'Contact']
];

export default function Navbar({ onConsult }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn); fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link className="brand" to="/" onClick={() => setOpen(false)}>
        <span className="brand-mark">CA</span>
        <span><strong>COREAMP</strong><small>ENGINEERING</small></span>
      </Link>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}
        <button className="btn btn-gold nav-cta" onClick={() => { setOpen(false); onConsult(); }}>Book Consultation</button>
      </nav>
      <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</button>
    </header>
  );
}
