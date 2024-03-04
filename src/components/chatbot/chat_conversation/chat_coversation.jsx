import React, { useState } from "react";
import "./chat_conversation.css";
import ConversationCard from "./conversationCard";
import { QUESTION_LIST } from "../../MOCK_DATA";
import { useSelector } from "react-redux";

export default function Chatcoversation() {
  const chatMessage = useSelector((state) => {
    return state.chatbotReducer.chatMessage;
  });
  console.log("chatMessage,", chatMessage);
  return (
    <div className="chatcoversation_main">
      <div className="allChat">
        {chatMessage.map((eachMessage) => {
          return <ConversationCard messageData={eachMessage} />;
        })}
      </div>
    </div>
  );
}
