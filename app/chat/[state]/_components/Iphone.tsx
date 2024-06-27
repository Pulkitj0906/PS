import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosBatteryFull, IoIosWifi } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { TbAntennaBars5 } from "react-icons/tb";
import Input from "./Input";
import MessageBox from "./MessageBox";
import { BorderBeam } from "./BorderBeam";
const cities = ["Delhi", "Punjab", "Girlfriend", "Motivational Coach", "GujjuBusinessman"];


const Iphone = ({
  currentTime,
  active,
}: {
  currentTime: () => string;
  active: number;
}) => {
  const router = useRouter();
  const [messages, setMessages] = useState([[
      { sender: "AI", text: "Kya haal hai bhai? 👋 Bolo, kya scene hai aaj? 😉" },
    ],[
      { sender: "person", text: "Hello Harkirat, how's your day?" },
      { sender: "AI", text: "Ki haal chakde phire yaar? Mera din taan ekdum kadak ja raha hai, bilkul jive Punjab di garmi 'ch! 😉 Tussi ki haal sunayo, ki chal raha hai life 'ch? " },
    ],[
      { sender: "AI", text: "Hey Baby, what's up?" },
      { sender: "person", text: "Hi there! Just chilling." },
      { sender: "AI", text: "Nice! Enjoy your day." },
    ]
    ,[
      { sender: "person", text: "Hi there!" },
      { sender: "AI", text: "Ahaan! Namaste, namaste! 👋 Kya haal hai mere dost? 😁 So good to connect with you. Tell me, kya chal raha hai life mein? 😊 What's bringing that spark in your eyes today?" },
    ]
    ,[
      { sender: "person", text: "Hello" },
      { sender: "AI", text: "Kem chho bhai! Ready to conquer the world today? 😁 What's on your mind? Tell me, tell me! Dhruv is here to help you make it big. 💪💰" },
    ]
    ,[
      { sender: "AI", text: "Hey Baby, what's up?" },
      { sender: "person", text: "Hi there! Just chilling." },
      { sender: "AI", text: "Nice! Enjoy your day." },
    ],
  ]);

  const emojis=['/delhi-emoji.png','/punjab-emoji.png','/gf-emoji1.png','/moti-icon(1).png','/guju-emoji.png']
  const names=['Rajeev','Harkirat','Baby','Motivator','GujjuBusinessman']

  return (
    <div className="w-96 h-[90%] relative md:ml-[20%] my-[2%] p-4 rounded-[10rem]">
      <Image
        alt="l;kj"
        src={"/iphone.png"}
        width={999}
        height={999}
        className="size-full absolute inset-0 pointer-events-none"
      />
      <div className="size-full bg-white -z-10 rounded-[4rem] flex flex-col">
        <BorderBeam />
        <section className="bg-gray-100 rounded-t-[4rem] h-12 flex items-center justify-between px-10">
          <h1>{currentTime()}</h1>
          <h1 className="flex items-center justify-center gap-1">
            <TbAntennaBars5 />
            <IoIosWifi />
            <IoIosBatteryFull />
          </h1>
        </section>
        <section className="bg-gray-100 rounded-t-3xl pb-1 flex items-center justify-between px-4">
          <h1 className="cursor-pointer">
            <IoIosArrowBack
              onClick={() => router.back()}
              size={30}
              className="text-blue-400 cursor-pointer"
            />
          </h1>
          <div className="flex flex-col items-center justify-center">
            <Image
              alt=""
              src={emojis[active]}
              width={99}
              height={99}
              className="h-12 w-10"
            />
            <p className="text-xs text-[#080808]">{names[active]}</p>
          </div>
          <h1 className="flex items-center justify-center gap-1">
            <IoVideocamOutline className="text-blue-400" size={25} />
          </h1>
        </section>
        <div className=" grow relative rounded-b-3xl m-2">
          <MessageBox messages={messages} active={active} />
          <Input
            messages={messages}
            setMessages={setMessages}
            active={active}
          />
        </div>
      </div>
    </div>
  );
};

export default Iphone;
