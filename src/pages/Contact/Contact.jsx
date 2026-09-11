import { Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '../../components/PageHero/PageHero';
import './Contact.css';

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s discuss your engineering requirement."
        text="Share the project type, electrical scope or MEP requirement and we’ll define the next step."
        image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=85"
      />
      <section className="section contact-page">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow dark">Get in touch</span>
            <h2 className="section-title">Start with the system requirement.</h2>
            <p className="lead">Electrical design, power-system studies, MEP coordination or engineering review — tell us what the project needs.</p>
            <div className="contact-list">
              <div><MapPin/><span><strong>Office</strong>Bengaluru, Karnataka, India</span></div>
              <div><Phone/><span><strong>Phone</strong>+91 XXXXX XXXXX</span></div>
              <div><Mail/><span><strong>Email</strong>hello@coreamp.in</span></div>
            </div>
          </div>
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <input placeholder="Full name"/>
            <input placeholder="Phone number"/>
            <input type="email" placeholder="Email address"/>
            <select defaultValue=""><option value="" disabled>Service required</option><option>Electrical Design</option><option>Power System Studies</option><option>MEP Design & Coordination</option><option>Engineering Review</option></select>
            <textarea rows="7" placeholder="Tell us about your project"/>
            <button className="btn btn-dark">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
