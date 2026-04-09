import { useMemo, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Products } from "../Products";
import { getBotResponse } from "../Utils/ChatbotHelpers";

const starterSuggestions = [
  "Show discounted products",
  "What is the cheapest product?",
  "Show new products",
  "Products under 5000",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi! I can help you find products, discounts, new arrivals, and prices.",
    },
  ]);

  const products = useMemo(() => Products || [], []);

  const handleSendMessage = (customMessage) => {
    const messageText = (customMessage ?? input).trim();
    if (!messageText) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: messageText,
    };

    const botMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: getBotResponse(messageText, products),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 bg-[#B88E2F] text-white p-4 rounded-full shadow-lg hover:scale-105 transition cursor-pointer"
        aria-label="Open chatbot"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-18 right-6 z-50 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-[#B88E2F] text-white px-4 py-3">
            <h3 className="font-semibold text-lg">Furniture Assistant</h3>
            <p className="text-sm opacity-90">
              Ask about products, prices, and offers
            </p>
          </div>

          {/* Messages */}
          <div className="h-[380px] overflow-y-auto px-4 py-4 space-y-3 bg-[#FAFAFA]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2 text-sm ${
                    message.sender === "user"
                      ? "bg-[#B88E2F] text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="pt-2">
                <p className="text-xs text-gray-500 mb-2">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {starterSuggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSendMessage(suggestion)}
                      className="text-xs border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-100 transition cursor-pointer"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-3 flex items-center gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about products..."
              className="flex-1 border border-gray-300 rounded-xl px-3 py-2 outline-none focus:border-[#B88E2F]"
            />
            <button
              onClick={() => handleSendMessage()}
              className="bg-[#B88E2F] text-white p-2 rounded-xl hover:opacity-90 transition cursor-pointer"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}