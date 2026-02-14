import RobotImage from "../assets/robot.png";
import UserImage from "../assets/user.png";

export function CreateMessage(props) {
  const { message, sender } = props;
  return (
    <div className={`chat-message-container-${sender}`}>
      {sender === "robot" ? (
        <img className="chat-profile" src={RobotImage} width="30px" />
      ) : (
        ""
      )}
      <div className="chat-message">{message}</div>
      {sender === "user" ? (
        <img className="chat-profile" src={UserImage} width="30px" />
      ) : (
        ""
      )}
    </div>
  );
}
