import { useState } from "react";
import { Chatbot } from "supersimpledev";

export function CreateInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

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
  }

  return (
    <div className="input-container">
      <input
        className="search-bar"
        placeholder="Send a message to chatbot"
        size="30"
        onChange={SaveInputText}
        value={inputText}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}
