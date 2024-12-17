import { useState, useRef } from "react";
import responses from "../../data/responses.json";

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const chatEndRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.trim() === "") return;

    const userMessage = { sender: "user", text: userInput };

    const botResponse = getBotResponse(userInput);

    setMessages((prev) => [...prev, userMessage, botResponse]);

    setUserInput("");

    // Scroll to the latest message
    setTimeout(
      () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }),
      100
    );
  };

  const getBotResponse = (input) => {
    const cleanedInput = input.toLowerCase().replace(/[^a-z\s]/g, "");
    const words = cleanedInput.split(" ");

    const matches = Object.keys(responses).filter((key) =>
      words.includes(key.toLowerCase())
    );

    if (matches.length > 0) {
      const replies = matches.map((key) => {
        const responsesForKey = responses[key];
        const randomReply =
          responsesForKey[Math.floor(Math.random() * responsesForKey.length)];
        return randomReply;
      });

      return { sender: "bot", text: replies.join(" ") };
    }

    return {
      sender: "bot",
      text: "Sorry, I didn't understand that. Can you try again?",
    };
  };

  return (
    <main className="relative w-auto h-auto border-2 flex items-center justify-center flex-col gap-1 bg-gray-800 text-white">
      {/* Messages display */}
      <div className="relative border border-gray-700 w-full h-[70vh] overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${
              msg.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full flex items-center gap-2 p-4 bg-gray-900"
      >
        <input
          type="text"
          placeholder="Type a message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500"
        >
          Send
        </button>
      </form>
    </main>
  );
};

export default Main;
