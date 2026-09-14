import { Bot, X } from "lucide-react";
import { useEffect, useState } from "react";

import ChatWindow from "./ChatWindow";
import "./AIBot.css";

export default function AIBot({ onConsult }) {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => {
      setShowHint(false);
    }, 8000);

    return () => {
      window.clearTimeout(hideTimer);
    };
  }, []);

  const handleBotClick = () => {
    setOpen((previous) => !previous);
    setShowHint(false);
  };

  const handleHintClick = () => {
    setOpen(true);
    setShowHint(false);
  };

  return (
    <>
      {open && (
        <ChatWindow
          onClose={() => setOpen(false)}
          onConsult={onConsult}
        />
      )}

      {showHint && !open && (
        <button
          type="button"
          className="ai-intro-popup"
          onClick={handleHintClick}
          aria-label="Open CoreAMP Virtual Assistant"
        >
          <span
            className="ai-intro-icon"
            aria-hidden="true"
          >
            <Bot size={20} strokeWidth={1.8} />
          </span>

          <span className="ai-intro-content">
            <strong>
              Hi! I&apos;m CoreAMP Assistant
              <span className="ai-wave">👋</span>
            </strong>

            <span className="ai-intro-description">
              Need help choosing the right engineering service?
            </span>

            <small>Tap to start a quick chat</small>
          </span>

          <span
            className="ai-popup-arrow"
            aria-hidden="true"
          />
        </button>
      )}

      <button
        type="button"
        className={`coreamp-ai-button ${
          open ? "ai-open" : ""
        }`}
        onClick={handleBotClick}
        aria-label={
          open
            ? "Close CoreAMP Assistant"
            : "Open CoreAMP Assistant"
        }
        aria-expanded={open}
        title="Chat with CoreAMP Assistant"
      >
        <span
          className="ai-button-ring"
          aria-hidden="true"
        />

        {open ? (
          <X size={27} strokeWidth={1.8} />
        ) : (
          <Bot size={29} strokeWidth={1.8} />
        )}

        {!open && (
          <span
            className="ai-online-indicator"
            aria-hidden="true"
          />
        )}
      </button>
    </>
  );
}