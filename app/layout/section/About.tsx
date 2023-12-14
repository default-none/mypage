"use client";

import Image from "next/image";
import { SectionTitle } from "@/components/text/SectionTitle";
import Profile from "@/public/asset/image/profile.jpg";
import { Profiles } from "@/app/datas/globals";
import { ProfileText } from "./about/ProfileText";
import Logo from "@/components/logo/Logo";
import { useScroller } from "@/hooks";
import { useRef } from "react";
import { hookLogic } from "portfolio";

const TITLE = "About Me";

export function About({ view, setView }: hookLogic) {
  const aboutRef = useRef<HTMLElement>(null);
  useScroller(() => {
    if (aboutRef === null) return;
    if (aboutRef.current === null) return;
    const aboutTop = aboutRef.current.offsetTop;
    const aboutHeight = aboutRef.current.offsetHeight;
    if (
      window.scrollY < aboutTop / 2 ||
      window.scrollY >= aboutTop + aboutHeight / 2
    ) {
      setView(false);
    }
    if (
      window.scrollY < aboutTop + aboutHeight / 2 &&
      window.scrollY > aboutTop - aboutHeight / 2
    ) {
      setView(true);
    }
  }, 300);
  return (
    <>
      <section ref={aboutRef} className="w-[100%] h-[100dvh] flex-col-center">
        <div
          className={
            (view ? "opacity-100" : "opacity-0 ") +
            " AboutScreen w-[100%] h-[70%] duration-[.5s]"
          }
        >
          <SectionTitle text={TITLE} view={view} />
          <div className="w-[100%] h-[100%] flex justify-center items-center relative">
            <div className="absolute-content top-[50%] left-[50%] z-[-1] grayscale opacity-20">
              <Logo size={200} />
            </div>
            <div className="profileImg w-[210px] h-[270px] overflow-hidden absolute translate-y-[-50%] top-[50%] max-md:top-[50%] left-[0%] max-md:left-[50%]">
              <Image
                src={Profile}
                alt={"Profile"}
                fill={true}
                sizes="(max-width: 210px)"
                className=" object-cover"
              />
            </div>
            <div className="w-[100%]">
              {Object.entries(Profiles).map(([key, value]) => (
                <div key={key} className="flex justify-center my-[10px]">
                  <ProfileText content={key} text={value} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
