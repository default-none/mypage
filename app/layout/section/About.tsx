"use client";

import Image from "next/image";
import { SectionTitle } from "@/components/text/SectionTitle";
import Profile from "@/public/asset/image/profile.jpg";
import { Profiles, history } from "@/app/datas/globals";
import { ProfileText } from "./About/ProfileText";
import Logo from "@/components/logo/Logo";

type Props = {
  AboutRef: React.ForwardedRef<HTMLElement>;
};

const TITLE = "About Me";

export function About({ AboutRef }: Props) {
  return (
    <>
      <section ref={AboutRef} className="w-[100%] h-[100dvh] flex-col-center">
        <div className="AboutScreen w-[100%] h-[70%]">
          <SectionTitle text={TITLE} />
          <div className="w-[100%] h-[100%] flex justify-center items-center relative">
            <div className="absoulte-content top-[50%] left-[50%] z-[-1] grayscale opacity-20">
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
      <section className="skill w-[100%] h-[100dvh] flex-col-center">
        <div className="history w-[100%] h-[50%]">
          <ul className="h-[100%] flex flex-col flex-wrap">
            {history.map((career, id) => {
              return (
                <li key={id} className="text-white-lg flex justify-between items-center w-[calc(50%-40px)] h-[20%] mr-[20px] my-[5px] ">
                  <span>- {career.content}</span>
                  <span>{career.day}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="skill">
          <h3>skill</h3>
        </div>
      </section>
    </>
  );
}
