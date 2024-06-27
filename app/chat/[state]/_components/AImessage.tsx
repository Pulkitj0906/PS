import React from "react";

const AImessage = ({ text }: { text: string }) => {
  return (
    <div className="text-xs relative bg-gray-200 rounded-2xl p-2 w-fit max-w-[70%] anim">
      {text == "" ? (
        <div className="typing-indicator flex gap-1">
          <div className="size-2 rounded-full bg-black/10"></div>
          <div className="size-2 rounded-full bg-black/10"></div>
          <div className="size-2 rounded-full bg-black/10"></div>
        </div>
      ) : (
        text
      )}
      <div className="size-3 -scale-x-100 bg-gray-200 absolute bottom-[0.1rem] -left-[0.3rem] curv">
        <div className="size-full relative">
          <div className="absolute h-3 w-[0.3rem] bg-white right-0 curv"></div>
        </div>
      </div>
    </div>
  );
};

export default AImessage;
