import io from "socket.io-client";
import { useState } from "react";
import Chat from "../components/Chat";
import Button from "../components/Button";

const socket = io.connect("http://localhost:3001");

function Chatpage() {
  const [room] = useState("");
  const [userName, setUserName] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (userName !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <section className="ChatPage">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Rejoindre</h3>
          <input
            type="text"
            placeholder="Votre nom"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <button type="button" onClick={joinRoom}>
            {" "}
            Join room
          </button>
        </div>
      ) : (
        <>
          <Chat socket={socket} username={userName} room={room} />
          <Button link="/validation" text="C'est bon" />
        </>
      )}
    </section>
  );
}
export default Chatpage;
