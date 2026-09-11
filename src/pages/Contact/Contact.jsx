import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import PageHero from "../../components/PageHero/PageHero";
import {
  CONTACT_SERVICES,
  COREAMP_CONTACT,
  createWhatsAppLeadLink,
} from "../../data/contact";
import "./Contact.css";

export default function Contact() {
  const [handoffUrl, setHandoffUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const url = createWhatsAppLeadLink({
      source: "Contact page",
      name: formData.get("name"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      timeline: formData.get("timeline"),
      details: formData.get("details"),
    });

    setHandoffUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact CoreAMP"
        title="Let's discuss your engineering requirement."
        text="Share the project stage, technical scope and delivery priorities. We will help define a clear next step."
        image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="section contact-page">
        <div className="contact-page-glow" aria-hidden="true" />

        <div className="container contact-grid">
          <div className="contact-intro">
            <span className="eyebrow dark">Start a conversation</span>
            <h2>Bring the requirement. We will bring the engineering clarity.</h2>
            <p className="contact-lead">
              Whether you need a focused electrical study or coordinated MEP
              support, begin with a short project brief. It goes directly into
              a WhatsApp conversation with our team.
            </p>

            <div className="contact-promises" aria-label="What to expect">
              <div><CheckCircle2 size={18} /><span>Practical technical direction</span></div>
              <div><CheckCircle2 size={18} /><span>Scope-led consultation</span></div>
              <div><CheckCircle2 size={18} /><span>No-obligation first discussion</span></div>
            </div>

            <div className="contact-list">
              <div className="contact-detail">
                <span className="contact-detail-icon"><MapPin size={19} /></span>
                <span><strong>Engineering office</strong>{COREAMP_CONTACT.office}</span>
              </div>

              <a className="contact-detail" href={`tel:${COREAMP_CONTACT.phoneHref}`}>
                <span className="contact-detail-icon"><Phone size={19} /></span>
                <span><strong>Call us</strong>{COREAMP_CONTACT.phoneDisplay}</span>
                <ArrowUpRight className="contact-detail-arrow" size={16} />
              </a>

              <a className="contact-detail" href={`mailto:${COREAMP_CONTACT.email}`}>
                <span className="contact-detail-icon"><Mail size={19} /></span>
                <span><strong>Email us</strong>{COREAMP_CONTACT.email}</span>
                <ArrowUpRight className="contact-detail-arrow" size={16} />
              </a>
            </div>

            <div className="contact-response-note">
              <Clock3 size={17} />
              <p><strong>Direct handoff</strong> Your brief opens in WhatsApp, ready to send.</p>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <div>
                <span>Project enquiry</span>
                <h3>Tell us what you are building.</h3>
              </div>
              <span className="contact-form-index">01 / 01</span>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label htmlFor="contact-name">Full name <span>*</span></label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-company">Company / organisation</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Company name"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">Phone number <span>*</span></label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+91 00000 00000"
                  minLength={7}
                  maxLength={20}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email address <span>*</span></label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-service">Service required <span>*</span></label>
                <select id="contact-service" name="service" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  {CONTACT_SERVICES.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-timeline">Project timeline</label>
                <select id="contact-timeline" name="timeline" defaultValue="">
                  <option value="">Select a timeline</option>
                  <option>Immediate / urgent</option>
                  <option>Within 1 month</option>
                  <option>1 - 3 months</option>
                  <option>3+ months</option>
                  <option>Early planning</option>
                </select>
              </div>

              <div className="contact-field contact-field-wide">
                <label htmlFor="contact-details">Project brief <span>*</span></label>
                <textarea
                  id="contact-details"
                  name="details"
                  rows="6"
                  placeholder="Project type, location, current stage, system scope and the support you need..."
                  minLength={12}
                  required
                />
              </div>

              <div className="contact-form-footer contact-field-wide">
                <p><ShieldCheck size={16} /> Your information is only added to your WhatsApp message.</p>
                <button type="submit" className="contact-submit">
                  <MessageCircle size={19} />
                  Continue on WhatsApp
                  <ArrowUpRight size={17} />
                </button>
              </div>

              <div className="contact-form-status contact-field-wide" aria-live="polite">
                {handoffUrl && (
                  <p>
                    Your brief is ready. If WhatsApp did not open, {" "}
                    <a href={handoffUrl} target="_blank" rel="noopener noreferrer">
                      continue here
                    </a>.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
