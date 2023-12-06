"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { TypingText } from "./intro/TypingText";
import Info from "@/components/icon/Contect";
import PageButton from "@/components/button/PageButton";

const Text = ["Hello!", "Who are you?"];

const scrollList = ["About", "Project", "Contect"];

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
  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  return (
    <section className="w-[100%] h-[100vh] flex-col-center">
      <div className="IntroScreen border-screen w-[100%] h-[60%] relative overflow-hidden">
        <div className="bannerWrap">
          <div className="bannerImg w-[300px] h-[300px] overflow-hidden absoulte-content top-[50%] left-[30%]">
            <Image
              src="./asset/image/desertFox.png"
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
              " w-[400px] bannerText text-white-7xl absoulte-content top-[75%] left-[30%] duration-[5s]"
            }
          >
            <span className="block w-[100%] text-left text-shadow-theme">Jinsu&apos;s</span>
            <span className="block w-[100%] text-right text-shadow-theme">Portfolio</span>
          </h2>
        </div>

        <div className="absoulte-content top-[50%] left-[70%] flex-col-center w-[50%] h-[50%]">
          {switchLogic ? (
            <>
              <TypingText text={userName} size={48} />
            </>
          ) : null}
          {switchLogic ? null : <TypingText text={Text} size={60} />}
          {switchLogic ? null : errorLogic ? (
            <TypingText text={userName} size={20} />
          ) : null}
          <div
            className={
              (switchLogic ? "w-[0px] opacity-0" : "w-[200px] opacity-100") +
              " overflow-hidden duration-[1s] flex-col-center"
            }
          >
            <input
              id="input"
              className=" w-[200px] bg-[#444444] my-[50px] py-[10px] text-white-2xl text-center"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
                handleEnter(e)
              }
              type="text"
            />
            <button id="sizeUp"
              onClick={() => handleClick()}
              className="w-[100px] text-white-2xl block text-center border-[1px] border-solid border-[#ffffff]"
            >
              CLICK
            </button>
          </div>
          <ul
            className={
              (switchLogic ? "h-[50px]" : "h-[0px]") +
              " absoulte-content top-[50%] left-[50%] overflow-hidden flex delay-[2s] duration-[1s]"
            }
          >
            <li className="mx-[20px]">
              <PageButton text={scrollList[0]} />
            </li>
            <li className="mx-[20px]">
              <PageButton text={scrollList[1]} />
            </li>
            <li className="mx-[20px]">
              <PageButton text={scrollList[2]} />
            </li>
          </ul>
          <i className={(switchLogic ? "h-[50px] opacity-100":"h-[0px] opacity-0")+" absoulte-content top-[80%] left-[50%] overflow-hidden delay-[2s] duration-[1s] cursor-pointer"}>
            <Info />
          </i>
        </div>
      </div>
    </section>
  );
}
