import "./QuickReplies.css";

export default function QuickReplies({
  options,
  onSelect,
}) {
  return (
    <div className="quick-replies">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className="quick-reply-button"
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}