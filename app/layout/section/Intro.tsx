"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { TypingText } from "./intro/TypingText";
import Info from "@/app/components/icon/Info";

const Text = ["Hello!", "Who are you?"];

export function Intro() {
  const [name, setName] = useState<string>("");
  const [switchLogic, setSwitchLogic] = useState(false);
  const [errorLogic, setErrorLogic] = useState(false);
  const [userName, getUserName] = useState<string[]>([""]);
  function handleClick() {
    if (name.length >= 1 && name.length <= 20) {
      setSwitchLogic(true);
      sessionStorage.setItem("name", name);
      getUserName(["Wellcome!", "환영합니다! " + name + "님"]);
    }
    if (name.length < 1 || name.length > 20) {
      setErrorLogic(true);
      getUserName(["1자 이상 혹은 20자 이하로 작성해주세요!"]);
    }
  }

  return (
    <section className="w-[100%] h-[100vh] flex-col-center">
      <div className="IntroScreen border-screen w-[100%] h-[60%] relative">
        <div className="bannerWrap">
          <div className="bannerImg w-[300px] h-[300px] overflow-hidden absoulte-content top-[50%] left-[30%]">
            <Image
              src="/asset/image/desertFox.png"
              alt="desertFpx"
              fill={true}
              sizes="(max-width: 300px)"
              quality={100}
              priority={true}
              className={
                (switchLogic ? "grayscale-0" : "grayscale") +
                " duration-[10s] object-cover"
              }
            ></Image>
          </div>
          <h2
            className={
              (switchLogic ? "opacity-100" : "opacity-0") +
              " w-[400px] bannerText text-white-7xl absoulte-content top-[75%] left-[30%] duration-[10s]"
            }
          >
            <span className="block w-[100%] text-left">Jinsu&apos;s</span>
            <span className="block w-[100%] text-right">Portfolio</span>
          </h2>
        </div>

        <div className="absoulte-content top-[50%] left-[70%]">
          {switchLogic ? (
            <>
              <TypingText text={userName} size={48} />
              <i>
                <Info />
              </i>
            </>
          ) : null}
          {switchLogic ? null : <TypingText text={Text} size={60} />}
          {switchLogic ? null : errorLogic ? (
            <TypingText text={userName} size={20} />
          ) : null}
          <div
            className={
              (switchLogic ? "h-[0px] opacity-0" : "h-[200px] opacity-100") +
              " overflow-hidden duration-1000 flex-col-center"
            }
          >
            <input
              className=" w-[200px] bg-[#444444] my-[50px] py-[10px] text-white-2xl text-center"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              type="text"
            />
            <button
              onClick={() => handleClick()}
              className="w-[100px] text-white-2xl block text-center border-[1px] border-solid border-[#ffffff]"
            >
              CLICK
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
