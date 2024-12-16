import { useState, useRef } from "react";

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const chatEndRef = useRef(null);

  return (
    <main className="relative w-auto h-auto border-2 flex items-center justify-center flex-col gap-1">
      {/* messages display here */}

      <div className="relative border-2 border-red-500 w-full h-full overflow-hidden p-2"></div>

      {/* form here */}

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" placeholder="Type a message.." />
        <button type="submit" className="text-white">
          Send
        </button>
      </form>
    </main>
  );
};
export default Main;
