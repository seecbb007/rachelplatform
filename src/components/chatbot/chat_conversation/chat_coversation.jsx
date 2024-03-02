import React, { useState } from "react";
import "./chat_conversation.css";
import ConversationCard from "./conversationCard";
import { QUESTION_LIST } from "../../MOCK_DATA";

export default function Chatcoversation({ messages }) {
  const [userChat, setUserChat] = useState({});

  console.log("aaa", messages);
  return (
    <div className="chatcoversation_main">
      <div className="allChat">
        {messages.map((eachMessage) => {
          return (
            <ConversationCard messages={eachMessage} key={eachMessage.id} />
          );
        })}
      </div>

      <div className="questionsList_Containers">
        {QUESTION_LIST.map((eachQuestion) => {
          return (
            <div className="listOfquestions" key={eachQuestion}>
              {eachQuestion}
            </div>
          );
        })}
      </div>
    </div>
  );
}
