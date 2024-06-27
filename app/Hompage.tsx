"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import {
  IoIosArrowBack,
  IoIosBatteryFull,
  IoIosVolumeLow,
  IoIosWifi,
  IoMdSearch,
  IoMdSettings,
} from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { TbAntennaBars5 } from "react-icons/tb";
import Iphone from "./chat/[state]/_components/Iphone";
import Particles from "./chat/[state]/_components/Particles";
import { BorderBeam } from "./chat/[state]/_components/BorderBeam";
interface StateImages {
  [key: string]: {
    name: string;
    bgImg: string;
    photoImg: string;
    emoji: string;
    disc: string;
  };
}
const cities = [
  "Delhi",
  "Punjab",
  "Girlfriend",
  "Motivational Coach",
  "GujjuBusinessman",
];
const Hompage = () => {
  const [active, setActive] = useState(0);
  const [translate, setTranslate] = useState(0);
  const baapRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const state = usePathname().slice(6);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enter, setEnter] = useState(false);

  const stateImages: StateImages = {
    Delhi: {
      name: "Friend from Delhi",
      bgImg: "delhi-bg.jpg",
      photoImg: "/delhi.png",
      emoji: "/delhi-emoji.png",
      disc: "Rajeev, a 21-year-old who rides a KTM and is also known as Chapri, loves to eat Momos. Talk to him if you want to feel like you are in West Delhi, but don't mind his language!",
    },
    Punjab: {
      name: "Friend from Punjab",
      bgImg: "punjab-bg.jpg",
      photoImg: "/Punjab.png",
      emoji: "/punjab-emoji.png",
      disc: "Harkirat, a 23-year-old full of life, loves his bhangra and lassi. Known for his friendly nature and loud laughter, he can brighten up any room. Talk to him if you want to experience the lively and vibrant spirit of Punjab, but be ready for some hearty Punjabi humor and expressions!",
    },
    Girlfriend: {
      name: "Imaginary Girlfriend",
      bgImg: "gf-bg.jpeg",
      photoImg: "/gf.png",
      emoji: "/gf-emoji1.png",
      disc: "Your friendly and supportive girlfriend who always knows how to cheer you up. Her affectionate and caring nature will make you feel special. Talk to her if you need some encouragement, a laugh, or just a friendly ear to listen.",
    },
    "Motivational Coach": {
      name: "Motivational Coach",
      bgImg: "gf-bg.jpeg",
      photoImg: "/motivat(1).png",
      emoji: "/moti-icon(1).png",
      disc: "Your personal motivational coach. Always full of inspirational and uplifting language, he mixes Hindi and English to deliver powerful messages. Talk to him if you need a boost of motivation, practical advice, or just some positive affirmations to get you going.",
    },
    GujjuBusinessman: {
      name: "Businessman from Gujarat",
      bgImg: "gf-bg.jpeg",
      photoImg: "/busi(1).png",
      emoji: "/guju-emoji.png",
      disc: "A savvy businessman from Gujarat, is full of practical business insights and entrepreneurial advice. Known for his confident and optimistic demeanor, he mixes Gujarati and Hinglish with business terminology to guide you. Talk to him if you want to learn about the business-oriented culture of Gujarat and gain some entrepreneurial wisdom."
    },
  };

  useEffect(() => {
    if (baapRef.current && activeRef.current) {
      setTranslate(activeRef.current.offsetLeft - baapRef.current.offsetLeft);
    }
  }, [active]);

  useEffect(() => {
    const changeaudio = new Audio("/change2.mp3");
    changeaudio.volume = 0.2;
    const handleKeyDown = (event: any) => {
      if (event.key === "ArrowRight") {
        setActive((prevActive) => Math.min(prevActive + 1, 4));
        changeaudio.play();
      } else if (event.key === "ArrowLeft") {
        setActive((prevActive) => Math.max(prevActive - 1, 0));
        changeaudio.play();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const currentTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
  };

  useEffect(() => {
    //play audio
    const audio = new Audio("/home.mp3");
    if (audioRef.current) return;
    audioRef.current = audio;
    audio.volume = 0.1;
    audio.play();
    return;
  }, []);

  const toggleMute = () => {
    if (audioRef.current?.volume === 0) {
      audioRef.current.volume = 0.1;
    } else {
      audioRef.current && (audioRef.current.volume = 0);
    }
  };

  const [checking, setChecking] = useState(false);

  const EnterHomescreen = () => {
    setChecking(true);
    setTimeout(() => {
      setEnter(true);
    }, 1200);
  };

  // if (!enter) {
  //   return (
  //     <div onClick={EnterHomescreen} className={`bg-black h-screen relative flex-center flex-col gap-20 {'size-0':'size-full'}`}>
  //     <h1 className={`${checking?'text-[0px]':'text-xl'} text-white/40`}>Click anywhere to get started.</h1>
  //       <Particles
  //         className={`absolute inset-0 transition-opacity duration-1000 ${checking?'opacity-0':'opacity-50'} `}
  //         color="c9a227"
  //         vx={0.2}
  //         vy={-0.1}
  //         size={2}
  //         quantity={300}
  //       />
  //       <div className={`${checking?'size-0':'size-20'} duration-1000 pop2 rounded-full bg-white z-10 flex-center relative`}>
  //         <span className="pop absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
  //         <Image
  //           alt=""
  //           src={"/ps.png"}
  //           height={99}
  //           width={99}
  //           className="size-"
  //         />
  //       </div>
  //       <h1 className={`${checking?'text-[0px]':'text-2xl'} duration-1000 text-white`}>People Simulator</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="h-screen overflow-clip relative">
      <div className="px-12 pt-10 flex justify-between ">
        <div className="text-3xl flex gap-4  text-slate-100">
          <h1>Characters</h1>
          <h1 className="text-slate-100/50">About</h1>
        </div>
        <div className="text-3xl flex gap-10  text-slate-100">
          <h1>
            <IoMdSearch />
          </h1>
          <h1 className="">
            <IoMdSettings />
          </h1>
          <h1>{currentTime()}</h1>
        </div>
      </div>
      <div
        ref={baapRef}
        style={{ transform: `translateX(-${translate}px)` }}
        className={`p-10 flex gap-4 ml-10 transition-transform duration-700`}
      >
        {Object.keys(stateImages).map((ele, idx) => (
          <div
            ref={idx == active ? activeRef : null}
            key={idx}
            onClick={() => setActive(idx)}
            className={` ring-white relative transition-[height,width] duration-700 bg-[#111]/10 backdrop-blur text-white flex items-center justify-center rounded-xl -all ${
              idx == active ? "size-28" : "size-20 ring-1 "
            }`}
          >
            <Image 
              alt=""
              src={stateImages[ele].emoji}
              height={99}
              width={99}
              className={`transition-transform duration-700 size-12 ${
                idx == active && "scale-150"
              }`}
            />
            {idx == active && (
              <>
              <BorderBeam borderWidth={4} size={100} duration={12}/>
              <p className="absolute left-[110%] bottom-0 w-96 line-clamp-1">
                {stateImages[ele].name}
              </p>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="h-full w-[50%] pt-[10%] ml-32 flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center text-center text-white">
          <p>
          {stateImages[cities[active]].disc}
          </p>
        </div>
        <div
          onClick={() =>
            router.push("/chat/" + stateImages[cities[active]].name)
          }
          className="w-fit self-center rounded-xl active:scale-90 cursor-pointer bg-orange-300 p-2 text-slate-100"
        >
          Have a conversation now!
        </div>
      </div>
      <div
        className={`absolute -bottom-1 right-10 overflow-clip z-10 transition-transform duration-1000 ${
          state && "scale-150"
        } `}
      >
        <Image
          alt=""
          height={999999}
          width={99999}
          src={stateImages[cities[active]]?.photoImg}
          className="size-[15rem] md:size-[30rem]"
        />
      </div>
      <div className="absolute inset-0 size-full bg-gradient-to-br from-[#111]  to-red-100 -z-20"></div>
      <div className="absolute inset-0 size-full -z-10">
        <Image
          src={"/" + stateImages[cities[active]]?.bgImg}
          alt=""
          height={9999}
          width={9999}
          className="opacity-30 size-full"
        />
      </div>
      {state}
      <div
        className={`absolute inset-0 bg-black size-full transition-transform duration-1000 ${
          state ? "translate-x-0" : "translate-y-full"
        }`}
      >
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color="#ffffff"
          refresh
        />
        <Iphone currentTime={currentTime} active={active} />
      </div>
      <div
        onClick={toggleMute}
        className="absolute z-10 cursor-pointer bottom-0 right-0 text-white p-4"
      >
        <IoIosVolumeLow size={40} />
        {audioRef.current?.volume == 0 && (
          <div className="absolute h-8 w-[0.1rem] bg-white top-[30%] -rotate-45 right-[50%]"></div>
        )}
      </div>
    </div>
  );
};

export default Hompage;
