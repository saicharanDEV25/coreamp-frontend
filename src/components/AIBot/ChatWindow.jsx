import {
  ChevronLeft,
  MessageCircle,
  Phone,
  Send,
  User,
  X,
  Zap,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import ChatMessage from "./ChatMessage";
import "./ChatWindow.css";

const WHATSAPP_NUMBER = "918951262696";

const services = {
  "Electrical Design": [
    "Power Distribution Design",
    "Single Line Diagrams (SLD)",
    "Load Calculations",
    "Equipment Sizing",
    "Cable Sizing & Routing",
    "Grounding & Bonding",
    "Lighting Design",
  ],

  "Power System Studies": [
    "SKM Modeling",
    "Load Flow Analysis",
    "Short Circuit Analysis",
    "Protective Device Coordination",
    "Arc Flash Studies",
  ],

  "MEP Design": [
    "Electrical Engineering",
    "Mechanical / HVAC",
    "Plumbing & Drainage",
    "Fire & Life Safety",
    "ELV / Low Current",
    "Backup Power",
  ],
};

function createWhatsAppLeadLink({
  source = "CoreAMP AI Assistant",
  name,
  phone,
  service,
  requirement,
} = {}) {
  const fields = [
    ["Source", source],
    ["Name", name],
    ["Phone", phone],
    ["Service", service],
    ["Requirement", requirement],
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

export default function ChatWindow({ onClose }) {
  const [step, setStep] = useState("name");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [
    selectedService,
    setSelectedService,
  ] = useState("");

  const [
    selectedRequirement,
    setSelectedRequirement,
  ] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "Hi 👋 Welcome to CoreAMP Engineering. What's your name?",
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, step]);

  const addMessage = (sender, text) => {
    setMessages((previousMessages) => [
      ...previousMessages,
      {
        sender,
        text,
      },
    ]);
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();

    const cleanName = name.trim();

    if (!cleanName) {
      return;
    }

    setName(cleanName);
    addMessage("user", cleanName);

    window.setTimeout(() => {
      addMessage(
        "bot",
        `Hi ${cleanName}! 👋 Nice to meet you. Please share your phone number.`
      );

      setStep("contact");
    }, 300);
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length !== 10) {
      return;
    }

    setPhone(cleanPhone);
    addMessage("user", cleanPhone);

    window.setTimeout(() => {
      addMessage(
        "bot",
        `Thanks ${name}. What service are you looking for?`
      );

      setStep("service");
    }, 300);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);

    addMessage("user", service);

    window.setTimeout(() => {
      addMessage(
        "bot",
        `Great. Please select your requirement under ${service}.`
      );

      setStep("requirement");
    }, 300);
  };

  const handleRequirementSelect = (requirement) => {
    setSelectedRequirement(requirement);

    addMessage("user", requirement);

    window.setTimeout(() => {
      addMessage(
        "bot",
        `Great, ${name}! We can help you with ${requirement}. Would you like to discuss your project with our team?`
      );

      setStep("complete");
    }, 300);
  };

  const getWhatsAppLink = () => {
    return createWhatsAppLeadLink({
      source: "CoreAMP AI Assistant",
      name,
      phone,
      service: selectedService,
      requirement: selectedRequirement,
    });
  };

  const handleBack = () => {
    if (step === "contact") {
      setStep("name");
      return;
    }

    if (step === "service") {
      setStep("contact");
      return;
    }

    if (step === "requirement") {
      setSelectedService("");
      setStep("service");
      return;
    }

    if (step === "complete") {
      setSelectedRequirement("");
      setStep("requirement");
    }
  };

  return (
    <div className="coreamp-chat-window">
      <div className="chat-header">
        <div className="chat-header-left">
          <div className="chat-header-icon">
            <Zap size={19} />
          </div>

          <div>
            <h4>CoreAMP Assistant</h4>

            <span>
              <span className="online-dot" />
              Online
            </span>
          </div>
        </div>

        <button
          type="button"
          className="chat-close-button"
          onClick={onClose}
          aria-label="Close assistant"
        >
          <X size={20} />
        </button>
      </div>

      <div className="chat-body">
        {messages.map((message, index) => (
          <ChatMessage
            key={`${message.sender}-${index}`}
            message={message}
          />
        ))}

        {step === "name" && (
          <form
            className="guided-form"
            onSubmit={handleNameSubmit}
          >
            <div className="guided-input-wrapper">
              <User size={17} />

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                autoComplete="name"
                autoFocus
                required
              />

              <button
                type="submit"
                className="guided-send-button"
                aria-label="Submit name"
              >
                <Send size={17} />
              </button>
            </div>
          </form>
        )}

        {step === "contact" && (
          <form
            className="contact-details-form"
            onSubmit={handleContactSubmit}
          >
            <div className="contact-form-title">
              Your Phone Number
            </div>

            <div className="contact-input-wrapper">
              <Phone size={17} />

              <input
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="10 digit phone number"
                value={phone}
                onChange={(event) => {
                  const onlyNumbers =
                    event.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);

                  setPhone(onlyNumbers);
                }}
                pattern="[0-9]{10}"
                minLength={10}
                maxLength={10}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-continue-button"
            >
              Continue
              <Send size={16} />
            </button>
          </form>
        )}

        {step === "service" && (
          <div className="guided-options">
            {Object.keys(services).map((service) => (
              <button
                key={service}
                type="button"
                className="guided-option-button"
                onClick={() =>
                  handleServiceSelect(service)
                }
              >
                <span className="option-icon">
                  <Zap size={17} />
                </span>

                <span>{service}</span>
              </button>
            ))}
          </div>
        )}

        {step === "requirement" && (
          <div className="guided-options requirement-options">
            {services[selectedService]?.map(
              (requirement) => (
                <button
                  key={requirement}
                  type="button"
                  className="guided-option-button"
                  onClick={() =>
                    handleRequirementSelect(
                      requirement
                    )
                  }
                >
                  <span className="requirement-dot" />
                  <span>{requirement}</span>
                </button>
              )
            )}
          </div>
        )}

        {step === "complete" && (
          <div className="chat-contact-card">
            <div className="chat-contact-summary">
              <span>Selected Service</span>
              <strong>{selectedService}</strong>

              <span>Requirement</span>
              <strong>{selectedRequirement}</strong>
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="chat-whatsapp-button"
            >
              <MessageCircle size={20} />
              Contact Our Team on WhatsApp
            </a>

            <p>
              You&apos;ll be redirected to our CoreAMP
              Engineering team.
            </p>
          </div>
        )}

        {step !== "name" && (
          <button
            type="button"
            className="chat-back-button"
            onClick={handleBack}
          >
            <ChevronLeft size={15} />
            Back
          </button>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-footer">
        CoreAMP Engineering Assistant
      </div>
    </div>
  );
}