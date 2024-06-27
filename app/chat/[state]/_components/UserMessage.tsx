import React from "react";

const UserMessage = ({ text }: { text: string }) => {
  return (
    <div className="bg-[#1c8ffd] relative text-white text-xs rounded-2xl p-2 w-fit max-w-[70%] self-end anim">
      {text}
      <div className="size-3 bg-[#1c8ffd] absolute bottom-[0.1rem] -right-[0.3rem] curv">
        <div className="size-full relative">
          <div className="absolute h-3 w-[0.3rem] bg-white right-0 curv"></div>
        </div>
      </div>
    </div>
  );
};

export default UserMessage;
