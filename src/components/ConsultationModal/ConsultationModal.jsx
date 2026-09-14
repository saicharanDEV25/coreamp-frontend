import {
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import {
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  X,
} from "lucide-react";

import "./ConsultationModal.css";

const WHATSAPP_NUMBER = "918951262696";

const CONTACT_SERVICES = [
  "Electrical Design",
  "Power System Studies",
  "MEP Design & Coordination",
  "BIM Services",
  "Lighting Engineering",
  "Critical Power & Distribution",
  "Engineering Review",
];

const FOCUSABLE_ELEMENTS = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function createWhatsAppLeadLink({
  source = "Website consultation dialog",
  name,
  phone,
  email,
  service,
  details,
} = {}) {
  const fields = [
    ["Source", source],
    ["Name", name],
    ["Phone", phone],
    ["Email", email],
    ["Service", service],
    ["Project requirement", details],
  ]
    .map(([label, value]) => [
      label,
      String(value ?? "").trim(),
    ])
    .filter(([, value]) => value);

  const message = [
    "Hello CoreAMP Engineering,",
    "",
    "I would like to discuss an engineering project.",
    "",
    ...fields.map(
      ([label, value]) => `${label}: ${value}`
    ),
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

export default function ConsultationModal({
  open,
  onClose,
}) {
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);

  const titleId = useId();
  const descriptionId = useId();

  const [handoffUrl, setHandoffUrl] =
    useState("");

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previouslyFocused =
      document.activeElement;

    const previousOverflow =
      document.body.style.overflow;

    const focusFrame =
      window.requestAnimationFrame(() => {
        firstFieldRef.current?.focus();
      });

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (
        event.key !== "Tab" ||
        !dialogRef.current
      ) {
        return;
      }

      const focusable = Array.from(
        dialogRef.current.querySelectorAll(
          FOCUSABLE_ELEMENTS
        )
      );

      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last =
        focusable[focusable.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.cancelAnimationFrame(focusFrame);

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow =
        previousOverflow;

      if (
        previouslyFocused instanceof HTMLElement
      ) {
        previouslyFocused.focus();
      }
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setHandoffUrl("");
    }
  }, [open]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(
      event.currentTarget
    );

    const url = createWhatsAppLeadLink({
      source: "Website consultation dialog",
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      details: formData.get("details"),
    });

    setHandoffUrl(url);

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleBackdropMouseDown = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className="consultation-backdrop"
      onMouseDown={handleBackdropMouseDown}
    >
      <div
        ref={dialogRef}
        className="consultation-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <button
          type="button"
          className="consultation-close"
          onClick={onClose}
          aria-label="Close consultation form"
        >
          <X size={20} />
        </button>

        <aside
          className="consultation-aside"
          aria-hidden="true"
        >
          <span className="consultation-aside-number">
            01
          </span>

          <div>
            <span className="consultation-kicker">
              Project intake
            </span>

            <h3>
              Clear inputs create better engineering decisions.
            </h3>

            <p>
              Tell us what you are planning. Your brief is
              prepared for a direct conversation with the
              CoreAMP team.
            </p>
          </div>

          <ul>
            <li>
              <CheckCircle2 size={17} />
              No-obligation first discussion
            </li>

            <li>
              <CheckCircle2 size={17} />
              Electrical and MEP expertise
            </li>

            <li>
              <CheckCircle2 size={17} />
              Direct WhatsApp handoff
            </li>
          </ul>
        </aside>

        <div className="consultation-content">
          <div className="consultation-heading">
            <span className="eyebrow dark">
              Start a project
            </span>

            <h2 id={titleId}>
              Book a consultation.
            </h2>

            <p id={descriptionId}>
              Share the essentials and continue securely with
              our engineering team on WhatsApp.
            </p>
          </div>

          <form
            className="consultation-form"
            onSubmit={handleSubmit}
          >
            <div className="consultation-field">
              <label htmlFor="consultation-name">
                Full name <span>*</span>
              </label>

              <input
                ref={firstFieldRef}
                id="consultation-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="consultation-field">
              <label htmlFor="consultation-phone">
                Phone number <span>*</span>
              </label>

              <input
                id="consultation-phone"
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

            <div className="consultation-field consultation-field-wide">
              <label htmlFor="consultation-email">
                Email address <span>*</span>
              </label>

              <input
                id="consultation-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                required
              />
            </div>

            <div className="consultation-field consultation-field-wide">
              <label htmlFor="consultation-service">
                Service required <span>*</span>
              </label>

              <select
                id="consultation-service"
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select an engineering service
                </option>

                {CONTACT_SERVICES.map(
                  (service) => (
                    <option
                      key={service}
                      value={service}
                    >
                      {service}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="consultation-field consultation-field-wide">
              <label htmlFor="consultation-details">
                Project requirement <span>*</span>
              </label>

              <textarea
                id="consultation-details"
                name="details"
                rows="4"
                placeholder="Project type, location, current stage and support required..."
                minLength={12}
                required
              />
            </div>

            <div className="consultation-submit-row">
              <p>
                <ShieldCheck size={15} />
                Your details stay in your WhatsApp
                conversation.
              </p>

              <button
                type="submit"
                className="consultation-submit"
              >
                <MessageCircle size={18} />
                Continue on WhatsApp
                <ArrowUpRight size={17} />
              </button>
            </div>

            <div
              className="consultation-status"
              aria-live="polite"
            >
              {handoffUrl && (
                <p>
                  Your project brief is ready. If WhatsApp did
                  not open,{" "}
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
    </div>
  );
}