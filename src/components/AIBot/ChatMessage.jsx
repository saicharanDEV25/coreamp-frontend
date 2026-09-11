import { Bot } from "lucide-react";
import "./ChatMessage.css";

export default function ChatMessage({ message }) {
  const isBot = message.sender === "bot";

  return (
    <div
      className={`chat-message-row ${
        isBot ? "bot-message-row" : "user-message-row"
      }`}
    >
      {isBot && (
        <div className="chat-bot-avatar">
          <Bot size={16} />
        </div>
      )}

      <div
        className={`chat-message ${
          isBot ? "bot-message" : "user-message"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}