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
    useState(false);

  useEffect(() => {
    const isSmallScreen = window.matchMedia(
      "(max-width: 760px)"
    ).matches;

    let hintSeen = false;

    try {
      hintSeen = window.sessionStorage.getItem(
        "coreamp-assistant-hint"
      ) === "seen";
    } catch {
      hintSeen = false;
    }

    if (isSmallScreen || hintSeen) return undefined;

    const showTimer = window.setTimeout(() => {
      setShowHint(true);

      try {
        window.sessionStorage.setItem(
          "coreamp-assistant-hint",
          "seen"
        );
      } catch {
        // The hint still works when storage is unavailable.
      }
    }, 6500);

    const hideTimer = window.setTimeout(() => {
      setShowHint(false);
    }, 13500);

    return () => {
      window.clearTimeout(showTimer);
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
              Assistant {"\u{1F44B}"}
            </strong>

            <span>
              Confused about your
              project? Chat with us -
              I'll help you find the
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
        aria-label={open ? "Close CoreAMP Assistant" : "Open CoreAMP Assistant"}
        aria-expanded={open}
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
