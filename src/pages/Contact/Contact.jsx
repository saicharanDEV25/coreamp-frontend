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

import "./Contact.css";

const CONTACT = {
  whatsappNumber: "918951262696",
  phoneDisplay: "+91 89512 62696",
  phoneHref: "+918951262696",
  email: "hello@coreamp.in",
  office: "Bengaluru, Karnataka, India",
};

const SERVICES = [
  "Electrical Design",
  "Power System Studies",
  "MEP & Coordination",
  "Lighting Engineering",
  "Critical Power & Distribution",
];

const createWhatsAppLink = ({
  name,
  company,
  phone,
  email,
  service,
  timeline,
  details,
}) => {
  const message = [
    "Hello CoreAMP Engineering,",
    "",
    "I would like to discuss an engineering project.",
    "",
    `Name: ${name || "-"}`,
    `Company: ${company || "-"}`,
    `Phone: ${phone || "-"}`,
    `Email: ${email || "-"}`,
    `Service: ${service || "-"}`,
    `Timeline: ${timeline || "-"}`,
    `Project requirement: ${details || "-"}`,
  ].join("\n");

  return `https://wa.me/${
    CONTACT.whatsappNumber
  }?text=${encodeURIComponent(message)}`;
};

export default function Contact() {
  const [handoffUrl, setHandoffUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const url = createWhatsAppLink({
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
    <section
      id="contact"
      className="contact-page"
      aria-labelledby="contact-heading"
    >
      <div className="contact-page-glow" aria-hidden="true" />

      <div className="container contact-grid">
        <div className="contact-intro">
          <span className="contact-kicker">
            Contact CoreAMP
          </span>

          <h2 id="contact-heading">
            Bring the requirement.
            <em> We bring engineering clarity.</em>
          </h2>

          <p className="contact-lead">
            Share your project stage, technical scope and delivery
            priorities. Your requirement goes directly to our
            engineering team through WhatsApp.
          </p>

          <div
            className="contact-promises"
            aria-label="What to expect"
          >
            <div>
              <CheckCircle2 size={17} />
              <span>Practical technical direction</span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>Scope-led consultation</span>
            </div>

            <div>
              <CheckCircle2 size={17} />
              <span>No-obligation first discussion</span>
            </div>
          </div>

          <div className="contact-list">
            <div className="contact-detail">
              <span
                className="contact-detail-icon"
                aria-hidden="true"
              >
                <MapPin size={18} />
              </span>

              <span>
                <strong>Engineering office</strong>
                <small>{CONTACT.office}</small>
              </span>
            </div>

            <a
              className="contact-detail"
              href={`tel:${CONTACT.phoneHref}`}
            >
              <span
                className="contact-detail-icon"
                aria-hidden="true"
              >
                <Phone size={18} />
              </span>

              <span>
                <strong>Call us</strong>
                <small>{CONTACT.phoneDisplay}</small>
              </span>

              <ArrowUpRight
                className="contact-detail-arrow"
                size={17}
              />
            </a>

            <a
              className="contact-detail"
              href={`mailto:${CONTACT.email}`}
            >
              <span
                className="contact-detail-icon"
                aria-hidden="true"
              >
                <Mail size={18} />
              </span>

              <span>
                <strong>Email us</strong>
                <small>{CONTACT.email}</small>
              </span>

              <ArrowUpRight
                className="contact-detail-arrow"
                size={17}
              />
            </a>
          </div>

          <div className="contact-response-note">
            <Clock3 size={17} />

            <p>
              <strong>Direct project handoff</strong>
              Your completed brief opens in WhatsApp, ready to send.
            </p>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-accent" aria-hidden="true" />

          <div className="contact-form-heading">
            <div>
              <span>Project enquiry</span>
              <h3>Tell us what you are building.</h3>
            </div>

            <span className="contact-form-index">
              01 / 01
            </span>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-field">
              <label htmlFor="contact-name">
                Full name <span>*</span>
              </label>

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
              <label htmlFor="contact-company">
                Company / organisation
              </label>

              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Company name"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-phone">
                Phone number <span>*</span>
              </label>

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
              <label htmlFor="contact-email">
                Email address <span>*</span>
              </label>

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
              <label htmlFor="contact-service">
                Service required <span>*</span>
              </label>

              <select
                id="contact-service"
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>

                {SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-timeline">
                Project timeline
              </label>

              <select
                id="contact-timeline"
                name="timeline"
                defaultValue=""
              >
                <option value="" disabled>
                  Select timeline
                </option>
                <option value="Immediately">Immediately</option>
                <option value="Within 2 weeks">Within 2 weeks</option>
                <option value="Within 1 month">Within 1 month</option>
                <option value="Planning stage">Planning stage</option>
                <option value="Not decided">Not decided</option>
              </select>
            </div>

            <div className="contact-field contact-field-wide">
              <label htmlFor="contact-details">
                Project requirement <span>*</span>
              </label>

              <textarea
                id="contact-details"
                name="details"
                rows="5"
                placeholder="Project type, location, current stage and engineering support required..."
                minLength={12}
                required
              />
            </div>

            <div className="contact-form-footer contact-field-wide">
              <p>
                <ShieldCheck size={16} />
                Your details stay inside your WhatsApp
                conversation.
              </p>

              <button
                className="contact-submit"
                type="submit"
              >
                <MessageCircle size={18} />
                <span>Continue on WhatsApp</span>
                <ArrowUpRight size={17} />
              </button>
            </div>

            <div
              className="contact-form-status contact-field-wide"
              aria-live="polite"
            >
              {handoffUrl && (
                <p>
                  Your project brief is ready. If WhatsApp did not
                  open,{" "}
                  <a
                    href={handoffUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    open it here
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}