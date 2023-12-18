"use client"
import { useScroller } from "@/hooks";
import { useState } from "react";
import { hookLogic } from "typeList";

export function Contect({ sectionRef, view, setView }: hookLogic) {
  const [onContect, setOnContect] = useState(false);
  const [count, setCount] = useState(0);
  // function changeText() {
  //   setOnContect(!onContect)
  //   setCount(prev => prev + 1)
  //   if (count == 2)
  // }
  useScroller(() => {
    if (sectionRef === null || sectionRef === undefined) return;
    if (sectionRef.current === null) return;
    const contectTop = sectionRef.current.offsetTop;
    const contectHeight = sectionRef.current.offsetHeight;
    if (
      window.scrollY < contectTop - contectHeight / 4 ||
      window.scrollY >= contectTop + contectHeight / 2
    ) {
      setView(false);
    }
    if (
      window.scrollY < contectTop + contectHeight / 2 &&
      window.scrollY > contectTop - contectHeight / 4
    ) {
      setView(true);
    }
  }, 300);
  return (
    <>
      <section ref={sectionRef} className="w-[100%] h-[100dvh] flex-col-center">
        <div onClick={() => setOnContect(!onContect)}
          className="text-white-7xl font-serif font-extralight flex justify-center">
          &#123;
          <span
            className={
              (view ? (onContect ? "w-[0%]" : "w-[100%]") : "w-[0%]") +
              " block overflow-hidden duration-[1s]"
            }
          >
            {" "}
            JinsuPark{" "}
          </span>
          &#125;
        </div>
        <div className="text-white-7xl">010-7548-3110</div>
      </section>
    </>
  );
}
