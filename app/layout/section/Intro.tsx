"use client";

import Image from "next/image";
import { useTyping } from "../../hooks/useTyping";
import { useState, useEffect } from "react";

const Text = ["Hello!", "Who are you?"];

export function Intro() {
  const [name, setName] = useState<string>("");
  const [greet, setGreet] = useState(false);
  const [userName, getUserName] = useState<string[]>(Text);
  const { typingText, selecedText } = useTyping(userName);
  function handleClick() {
    setGreet(true);
    sessionStorage.setItem("name", name);
    // getUserName(["Hello!", "Who are you?", "Wellcome!", name, "반가워요!"]);
  }

  return (
    <section className="w-[100%] h-[100vh] flex flex-col items-end justify-center">
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
          <span className="block w-[100%] text-left">Jinsu&apos;s</span>
          <span className="block w-[100%] text-right">Portfolio</span>
        </h2>
      </div>
      <div>
        <h2 className="w-[410px] text-[#ffffff] text-6xl blinking-cursor">
          {typingText}
        </h2>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          className="w-[100%] my-[50px] text-4xl"
          type="text"
        />
        <button
          onClick={() => handleClick()}
          className="w-[100%] text-[#ffffff] block text-2xl text-center border-[1px] border-solid border-[#ffffff]"
        >
          CLICK
        </button>
        {greet ? (
          <h2 className="w-[410px] text-[#ffffff] text-6xl blinking-cursor">
            {typingText}
          </h2>
        ) : null}
      </div>
    </section>
  );
}
