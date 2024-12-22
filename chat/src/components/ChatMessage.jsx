import React from "react";

const ChatMessage = ({ sender, text }) => {
  const isUser = sender === "user";

  return (
    <div
      className={`mb-4 flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`p-3 rounded-lg text-white ${
          isUser ? "bg-blue-600" : "bg-gray-700"
        } max-w-[55%] inline-block`}
        style={{
          wordBreak: "break-word",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
