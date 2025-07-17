import React from "react";
import "./Chatbot.css";

const MessageBubble = ({ from, text }) => {
  const isUser = from === "user";

  return (
    <div className={`message-bubble ${isUser ? "user" : "bot"}`}>
      <div className="bubble-text">{text}</div>
    </div>
  );
};

export default MessageBubble;
