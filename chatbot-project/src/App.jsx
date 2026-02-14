import { useState } from "react";
import { CreateInput } from "./components/CreateInput";
import { CreateMessages } from "./components/CreateMessages";
import { Chatbot } from "supersimpledev";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "Hello",
      sender: "user",
      key: crypto.randomUUID(),
    },
    {
      message: Chatbot.getResponse("hello"),
      sender: "robot",
      key: crypto.randomUUID(),
    },
  ]);

  return (
    <div className="main-body">
      <div className="messages-container">
        <CreateMessages chatMessages={chatMessages} />
      </div>
      <CreateInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
