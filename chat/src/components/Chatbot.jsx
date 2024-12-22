import React, { useState } from "react";
import ChatMessage from "./ChatMessage";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // Add bot reply after a delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            "A message text is a digital message sent between two or more people, usually on mobile devices, but also on computers, tablets, and smartwatches.",
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-gray-700 text-white rounded-full p-4 shadow-lg hover:bg-gray-600 focus:outline-none"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-[600px] h-[600px] bg-black rounded-xl shadow-lg flex flex-col">
          {/* Header */}
          <div className="p-4 bg-gray-800 text-white flex justify-between items-center rounded-t-xl">
            <span className="font-bold">Hello !! User.</span>
            <button
              onClick={toggleChat}
              className="text-gray-400 hover:text-white"
            >
              ✖
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 maxWidth-[200px] overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <ChatMessage key={index} sender={msg.sender} text={msg.text} />
            ))}
          </div>

          {/* Input Field */}
          <div className="p-3 bg-gray-800 flex items-center rounded-b-xl">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow p-3 rounded-l-lg bg-gray-900 text-white border-none outline-none placeholder-gray-500"
              placeholder="Ask me anything!!!"
            />
            <button
              onClick={handleSendMessage}
              className="bg-gray-700 text-white p-3 rounded-r-lg hover:bg-gray-600"
            >
              ➕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
