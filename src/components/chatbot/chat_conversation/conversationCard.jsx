import React, { useState } from "react";
import "./conversationCard.css";

export default function ConversationCard({ messageData }) {
  const { user, message, id } = messageData;

  return (
    <>
      <div className="chat userChat rachelChat" key={id}>
        <div className="chatIcon_Container">
          {user === "You" ? (
            <div className="chatIcon">
              <svg
                t="1709365422429"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4258"
                width="15"
                height="15"
              >
                <path
                  d="M1024 962.752 0 962.752l0-87.424C0 726.656 120 606.72 268.544 606.72l486.464 0c148.48 0 268.992 119.936 268.992 268.544L1024 962.752zM51.008 911.232l921.472 0 0-35.968c0-120.064-97.024-217.472-217.472-217.472L268.544 657.792c-120 0-217.536 97.408-217.536 217.472L51.008 911.232zM512 598.72c-148.48 0-268.992-120-268.992-268.48S363.52 61.248 512 61.248s268.416 120.512 268.416 268.992C780.416 476.224 660.48 598.72 512 598.72zM512 112.768c-120.512 0-217.984 97.024-217.984 217.472 0 120.512 97.472 217.472 217.984 217.472 120 0 217.472-96.96 217.472-217.472C729.472 209.728 632 112.768 512 112.768z"
                  fill="#ffffff"
                  p-id="4259"
                ></path>
              </svg>
            </div>
          ) : (
            <div className=" RachaelIcon">
              <div></div>
            </div>
          )}
        </div>
        <div className="conversation_Container">
          <h2 className="conversation_user">
            {user === "You" ? "You" : "Rachel"}
          </h2>
          <div className="conversation_content">{message}</div>
        </div>
      </div>
    </>
  );
}
