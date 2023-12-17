"use client";

import Image from "next/image";
import { SectionTitle } from "@/components/text/SectionTitle";
import Profile from "@/public/asset/image/profile.jpg";
import { Profiles } from "@/app/datas/globals";
import { ProfileText } from "./about/ProfileText";
import Logo from "@/components/logo/Logo";
import { useScroller } from "@/hooks";
import { hookLogic } from "typeList";

const TITLE = "About Me";

export function About({view, setView, sectionRef}: hookLogic) {

  useScroller(() => {
    if (sectionRef === null || sectionRef === undefined) return;
    if (sectionRef.current === null) return;
    const aboutTop = sectionRef.current.offsetTop;
    const aboutHeight = sectionRef.current.offsetHeight;
    if (
      window.scrollY < aboutTop - aboutHeight / 4 ||
      window.scrollY >= aboutTop + aboutHeight / 2
    ) {
      setView(false);
    }
    if (
      window.scrollY < aboutTop + aboutHeight / 2 &&
      window.scrollY > aboutTop - aboutHeight / 4
    ) {
      setView(true);
    }
  }, 300);
  return (
    <>
      <section ref={sectionRef} className="w-[100%] h-[100dvh]">
        <div
          className={
            (view ? "opacity-100" : "opacity-0 ") +
            " AboutScreen w-[100%] h-[100%] pt-[10%] duration-[.5s]"
          }
        >
          <SectionTitle text={TITLE} view={view} />
          <div className="w-[100%] h-[100%] flex justify-center items-center relative max-md:flex-col-center">
            <div className="absolute-content top-[50%] left-[50%] z-[-1] grayscale opacity-20">
              <Logo size={200} />
            </div>
            <div className="profileImg w-[210px] h-[270px] max-md:w-[140px] max-md:h-[180px] max-md:mb-[50px] overflow-hidden absolute max-md:static translate-y-[-50%] max-md:translate-y-[0%] top-[50%] left-[0%]">
              <Image
                src={Profile}
                alt="Profile"
                fill={true}
                sizes="(max-width: 210px)"
                quality={100}
                priority={true}
                className=" object-cover"
              />
            </div>
            <div className="w-[100%]">
              {Object.entries(Profiles).map(([key, value]) => (
                <div key={key} className="flex justify-center my-[10px] max-md:justify-between">
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
