import { Bot, X } from "lucide-react";
import {
  useEffect,
  useState,
} from "react";

import ChatWindow from "./ChatWindow";
import "./AIBot.css";

export default function AIBot({
  onConsult,
}) {
  const [open, setOpen] = useState(false);

  const [showHint, setShowHint] =
    useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 10000);

    return () =>
      clearTimeout(timer);
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
          onClose={() =>
            setOpen(false)
          }
          onConsult={onConsult}
        />
      )}

      {/* INTRO POPUP */}
      {showHint && !open && (
        <button
          type="button"
          className="ai-intro-popup"
          onClick={handleHintClick}
        >
          <div className="ai-intro-icon">
            <Bot size={19} />
          </div>

          <div className="ai-intro-content">
            <strong>
              Hi! I'm CoreAMP Virtual
              Assistant 👋
            </strong>

            <span>
              Confused about your
              project? Chat with us —
              I’ll help you find the
              right solution.
            </span>
          </div>

          <span className="ai-popup-arrow" />
        </button>
      )}

      {/* AI BOT BUTTON */}
      <button
        type="button"
        className={`coreamp-ai-button ${
          open ? "ai-open" : ""
        }`}
        onClick={handleBotClick}
        aria-label="Open CoreAMP Assistant"
        title="Chat with CoreAMP Assistant"
      >
        <span className="ai-button-ring" />

        {open ? (
          <X
            size={27}
            strokeWidth={1.8}
          />
        ) : (
          <Bot
            size={29}
            strokeWidth={1.8}
          />
        )}

        {!open && (
          <span className="ai-online-indicator" />
        )}
      </button>
    </>
  );
}