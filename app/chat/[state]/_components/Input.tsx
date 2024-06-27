"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
const cities = ["Delhi", "Punjab", "Girlfriend", "Motivational Coach", "GujjuBusinessman"];

const Input = ({
  messages,
  setMessages,
  active,
}: {
  messages: { sender: string; text: string; }[][];
  setMessages: Dispatch<SetStateAction<{ sender: string; text: string }[][]>>;
  active: number;
}) => {
  const [text, setText] = useState("");
  const [prompt, setPrompt] = useState("");

  const fetchData = async () => {
    let tempMess=[...messages]
    tempMess[active]=[...messages[active], { sender: "person", text: prompt },{sender: "AI", text: '' }]
    setMessages(tempMess);
    setPrompt("");
    try {
      const response = await fetch("https://back-gy7x.vercel.app/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          { question: prompt,
            //  character: 'MotivationalCoach'
             character: cities[active] 
            }),
      });

      if (!response.body) {
        throw new Error("ReadableStream not yet supported in this browser.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedChunks = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });

        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages[active]];
          const lastMessage = updatedMessages[updatedMessages.length - 1];
          if (lastMessage && lastMessage.sender === "AI") {
            if (accumulatedChunks != chunk) lastMessage.text += chunk;
            accumulatedChunks = chunk;
          } else {
            updatedMessages.push({ sender: "AI", text: chunk });
          }
          let tempmess=[...messages]
          tempmess[active]=updatedMessages
          return tempmess;
        });
      }

      setText(accumulatedChunks);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="absolute bottom-4 w-full flex items-center justify-center">
      <div className="w-[90%] border border-gray-300 rounded-3xl relative">
        <input
          type="text"
          value={prompt}
          className="p-2 rounded-3xl w-full"
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key == "Enter" && fetchData()}
        />
        <button
          onClick={fetchData}
          className="absolute right-2 top-1 bg-blue-400 rounded-full p-1 cursor-pointer  text-white"
        >
          <BiUpArrowAlt size={20} />
        </button>
      </div>
    </div>
  );
};

export default Input;
