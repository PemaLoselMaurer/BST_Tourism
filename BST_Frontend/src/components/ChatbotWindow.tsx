"use client";
import { useState } from "react";

export default function ChatbotWindow() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className="message">{m}</div>
        ))}
      </div>
      <form
        className="chat-input"
        onSubmit={(e) => {
          e.preventDefault();
          if (!input) return;
          setMessages((prev) => [...prev, input]);
          setInput("");
        }}
      >
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about Bhutan..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
