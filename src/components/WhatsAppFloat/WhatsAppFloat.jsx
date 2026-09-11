import "./WhatsAppFloat.css";

export default function WhatsAppFloat() {
  const phoneNumber = "919999999999"; // client WhatsApp number replace cheyi
  const message =
    "Hello CoreAmp Engineering, I would like to discuss a project.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      className="coreamp-whatsapp-float"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CoreAmp Engineering on WhatsApp"
    >
      <svg
        className="coreamp-whatsapp-icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M12.04 2C6.52 2 2.05 6.46 2.05 11.98c0 1.76.46 3.48 1.33 5L2 22l5.16-1.35a9.94 9.94 0 0 0 4.87 1.24h.01c5.52 0 10-4.46 10-9.98C22.04 6.46 17.56 2 12.04 2Zm0 18.2h-.01a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.06.8.82-2.98-.2-.31a8.2 8.2 0 1 1 6.95 3.82Zm4.5-6.15c-.25-.13-1.47-.72-1.7-.8-.23-.08-.39-.13-.55.13-.17.25-.64.8-.79.96-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.58.12.17 1.76 2.69 4.27 3.77.6.26 1.06.41 1.43.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.57.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z"
        />
      </svg>
    </a>
  );
}