"use client";
import React, { useState } from "react";
import UserMessage from "./UserMessage";
import AImessage from "./AImessage";

const MessageBox = ({messages,active}:{messages:{ sender: string; text: string; }[][],active:number}) => {
  return (
    <div className="px-[5%] max-h-[28rem] grow flex flex-col overflow-y-scroll gap-1 h-[90%] overlow-y-scroll pb-16">
      {messages[active].map((msg,idx) =>
          msg.sender == "AI" ? (
            <AImessage key={idx} text={msg.text} />
          ) : (
            <UserMessage key={idx} text={msg.text} />
          )
        )
      }
    </div>
  );
};

export default MessageBox;
