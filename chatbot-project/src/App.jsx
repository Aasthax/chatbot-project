import { useState } from "react";
import { CreateInput } from "./components/CreateInput";
import { CreateMessages } from "./components/CreateMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([]);

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
