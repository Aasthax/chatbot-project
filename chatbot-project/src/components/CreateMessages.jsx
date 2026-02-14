import { CreateMessage } from "./CreateMessage";

export function CreateMessages({ chatMessages }) {
  return (
    <>
      {[...chatMessages].reverse().map((chatMessage) => {
        return (
          <CreateMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.key}
          />
        );
      })}
    </>
  );
}
