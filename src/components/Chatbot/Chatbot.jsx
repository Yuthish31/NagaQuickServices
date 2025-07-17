import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! What service do you need help with?",
      options: ["🚖 Taxi", "🔌 Electrical", "🚿 Plumbing"],
    },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState("service");
  const [userData, setUserData] = useState({});
  const containerRef = useRef();
  const chatWindowRef = useRef(); // Ref to scroll window

  // Close chatbot when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (userInput) => {
    const newUserMsg = { from: "user", text: userInput };
    const newMessages = [...messages, newUserMsg];
    let botMessage = {};

    if (step === "service") {
      const service = userInput.toLowerCase();
      setUserData({ ...userData, service });

      if (service.includes("taxi")) {
        botMessage = { from: "bot", text: "Great! What's your name?" };
        setStep("name");
      } else if (service.includes("electrical") || service.includes("plumbing")) {
        botMessage = { from: "bot", text: "Got it! Can you describe the issue?" };
        setStep("issue");
      } else {
        botMessage = {
          from: "bot",
          text: "Please choose a valid option.",
          options: ["Taxi", "Electrical", "Plumbing"],
        };
      }
    } else if (step === "name") {
      setUserData({ ...userData, name: userInput });
      botMessage = { from: "bot", text: "Thanks! Please enter your pickup location." };
      setStep("pickup");
    } else if (step === "pickup") {
      setUserData({ ...userData, pickup: userInput });
      botMessage = { from: "bot", text: "Now, your drop location?" };
      setStep("drop");
    } else if (step === "drop") {
      setUserData((prev) => ({ ...prev, drop: userInput }));
      botMessage = {
        from: "bot",
        text: "Thank you! We'll send your request via WhatsApp. ✅",
      };
      setStep("done");
    } else if (step === "issue") {
      setUserData((prev) => ({ ...prev, issue: userInput }));
      botMessage = { from: "bot", text: "Thanks! Please share your address." };
      setStep("address");
    } else if (step === "address") {
      setUserData((prev) => ({ ...prev, address: userInput }));
      botMessage = { from: "bot", text: "Your request is saved. 📩" };
      setStep("done");
    } else {
      botMessage = {
        from: "bot",
        text: "Let us know if you need anything else!",
      };
    }

    setMessages([...newMessages, botMessage]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput("");
  };

  return (
    <>
      {isOpen && (
        <div className="chatbot-container" ref={containerRef}>
          <div className="chatbot-content">
            <div className="chat-window" ref={chatWindowRef}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`msg ${msg.from}`}>
                  <div className="icon" />
                  <div>{msg.text}</div>
                  {msg.options && (
                    <div className="quick-actions">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          className="quick-action-btn"
                          onClick={() => sendMessage(opt)}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="input-area">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
              />
              <button onClick={handleSend}>Send</button>
            </div>
          </div>
        </div>
      )}
      <div
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with us"
      />
    </>
  );
};

export default Chatbot;
