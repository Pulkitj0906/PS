"use client";
import React, { useState } from "react";
import Header from "./_components/Header";
import Input from "./_components/Input";
import MessageBox from "./_components/MessageBox";

export default function Home() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  return (
    <main className="flex flex-col  bg-purple-400">
      {/* <Header /> */}
      {/* <MessageBox messages={messages} />
      <Input messages={messages} setMessages={setMessages} /> */}
    </main>
  );
}
