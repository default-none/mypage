"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Intro() {
  const [inputName, setInputName] = useState<string>("");
  const [userName, setUserName] = useState<string | null>();
  const [handleText, setHandleText] = useState<boolean>(false);

  function saveUserName() {
    sessionStorage.setItem("Name", inputName);
    setUserName(sessionStorage.getItem("Name"));
    setHandleText(true);
  }
  return (
    <section className="w-[100%] h-[100vh] flex items-center justify-end">
      <div className="bannerWrap">
        <div className="bannerImg w-[300px] h-[300px] absolute overflow-hidden top-[50%] left-[30%] translate-x-[-50%] translate-y-[-50%]">
          <Image
            src="/asset/image/desertFox.png"
            alt="desertFpx"
            fill={true}
            sizes="(max-width: 300px)"
            quality={100}
            priority={true}
            className="grayscale hover:grayscale-0 duration-[1.5s] object-cover"
          ></Image>
        </div>
        <h2 className=" w-[400px] bannerText text-[#ffffff] text-7xl absolute top-[65%] left-[30%] translate-x-[-50%] translate-y-[-50%]">
          <span className="block w-[100%] text-left">Jinsu's</span>
          <span className="block w-[100%] text-right">Portfolio</span>
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <h3
          className={
            (handleText ? "w-[0%]" : "w-[100%]") +
            " text-[#ffffff] text-6xl overflow-hidden duration-[3s]"
          }
        >
          Hello!
        </h3>
        <h3 className="text-[#ffffff] text-6xl">Who are you?</h3>
        <h3 className="text-[#ffffff] text-6xl hidden">Wellcome,</h3>
        <p>{userName}</p>
        <input
          className="w-[300px] bg-transparent text-[#ffffff] text-4xl text-center border-[2px] rounded-md outline-none p-[10px] my-[50px]"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputName(e.target.value)
          }
        />
        <button
          onClick={() => saveUserName()}
          className="text-[#ffffff] text-2xl"
        >
          Enter
        </button>
      </div>
    </section>
  );
}
