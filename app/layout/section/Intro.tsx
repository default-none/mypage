"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { TypingText } from "./intro/TypingText";
import Info from "@/components/icon/Contect";
import { PageButton } from "@/components/button";
import DesertFox from "@/public/asset/image/desertFox.png";
import { MAIN_LIST } from "@/app/datas/globals";
import { useScroller } from "@/hooks/useScroller";
import { components, hookLogic } from "typeList";

const TYPING_TEXT: string[] = ["Hello!", "Who are you?"];
const LIST_SIZE: number = 30;

export function Intro(
  { switchLogic, setSwitchLogic, view, setView ,space}: hookLogic
) {
  const [name, setName] = useState<string>("");
  const [errorLogic, setErrorLogic] = useState(false);
  const [userName, getUserName] = useState<string[]>([""]);
  const introRef = useRef<HTMLElement>(null);

  function callText() {
    if (name.length >= 1 && name.length <= 20) {
      sessionStorage.setItem("name", name);
      getUserName(["Wellcome!", name + "님 환영합니다!"]);
      setSwitchLogic(true);
    }
    if (name.length < 1 || name.length > 20) {
      setErrorLogic(true);
      getUserName(["1자 이상 혹은 20자 이하로 작성해주세요!"]);
    }
  }
  function handleClick() {
    callText();
  }
  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleClick();
    }
  }
  function handleTop(i: number) {
    console.log(i)
    console.log(space)
    if (space === undefined) return;
    window.scrollTo(0, space[i]);
  }

  useScroller(() => {
    if (introRef === null) return;
    if (introRef.current === null) return;
    const introTop = introRef.current.offsetTop;
    const introHeight = introRef.current.offsetHeight;

    if (window.scrollY >= introTop + introHeight / 2) {
      setView(false);
    }
    if (window.scrollY < introTop + introHeight / 2) {
      setView(true);
    }
  }, 500);

  return (
    <section ref={introRef} className="w-[100%] h-[100dvh] flex-col-center">
      <div
        className={
          (view ? "opacity-100" : "opacity-0") +
          " IntroScreen border-screen w-[100%] h-[70%] relative overflow-hidden duration-[.5s]"
        }
      >
        <div className="bannerWrap">
          <div className="bannerImg w-[300px] max-md:w-[200px] h-[300px] max-md:h-[200px] overflow-hidden absolute-content top-[50%] max-md:top-[80%] left-[30%] max-md:left-[50%]">
            <Image
              src={DesertFox}
              alt="desertFpx"
              fill={true}
              sizes="(max-width: 300px)"
              quality={100}
              priority={true}
              className={
                (switchLogic ? "grayscale-0" : "grayscale") +
                " duration-[10s] object-cover"
              }
            />
          </div>
          <h2
            className={
              (switchLogic ? "opacity-100" : "opacity-0") +
              " w-[400px] bannerText text-white-7xl absolute-content top-[75%] max-md:top-[70%]  left-[30%] max-md:left-[50%] duration-[5s]"
            }
          >
            <span className="block w-[100%] text-left text-shadow-theme">
              Jinsu&apos;s
            </span>
            <span className="block w-[100%] text-right text-shadow-theme">
              Portfolio
            </span>
          </h2>
        </div>

        <div className="absolute-content top-[50%] max-md:top-[20%] left-[70%] max-md:left-[50%] flex-col-center ">
          {switchLogic ? (
            <>
              <TypingText text={userName} size={48} />
            </>
          ) : null}
          {switchLogic ? null : <TypingText text={TYPING_TEXT} size={60} />}
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
              className=" w-[200px] bg-[#444444] my-[50px] max-md:my-[20px] py-[10px] text-white-2xl text-center"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
                handleEnter(e)
              }
              type="text"
            />
            <button
              id="sizeUp"
              onClick={() => handleClick()}
              className="w-[100px] text-white-2xl block text-center border-[1px] border-solid border-[#ffffff]"
            >
              CLICK
            </button>
          </div>
          <ul
            className={
              (switchLogic ? "h-[50px]" : "h-[0px]") +
              " absolute-content top-[50%] left-[50%] overflow-hidden flex delay-[2s] duration-[1s]"
            }
          >
            {MAIN_LIST.map<JSX.Element>((list, i) => {
              return (
                <li key={i} onClick={()=>handleTop(i)}>
                  <PageButton text={list} size={LIST_SIZE} />
                </li>
              );
            })}
          </ul>
          <i
            className={
              (switchLogic ? "h-[50px] opacity-100" : "h-[0px] opacity-0") +
              " absolute-content top-[80%] left-[50%] overflow-hidden delay-[2s] duration-[1s] cursor-pointer max-md:hidden"
            }
          >
            <Info />
          </i>
        </div>
      </div>
    </section>
  );
}
