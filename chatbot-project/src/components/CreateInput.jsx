import { useState, useRef, useEffect } from "react";
import { Chatbot } from "supersimpledev";

export function CreateInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);

  function SaveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        key: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        key: crypto.randomUUID(),
      },
    ]);
    setInputText("");
    inputRef.current?.focus();
  }

  useEffect(() => {
    function handleGlobalKeyDown(e) {
      // Ignore if already typing in input
      if (document.activeElement !== inputRef.current) {
        // Ignore special keys (Shift, Ctrl, etc)
        if (e.key.length === 1) {
          inputRef.current?.focus();
        }
      }
    }

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      window.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, []);

  return (
    <div className="input-container">
      <input
        ref={inputRef}
        className="search-bar"
        placeholder="Send a message to chatbot"
        size="30"
        onChange={SaveInputText}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
        value={inputText}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}
