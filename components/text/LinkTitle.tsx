"use client";

interface Props {
  x: number | string | undefined;
  y: number | string | undefined;
}

import { useState } from "react";
import { components } from "typeList";
export function LinkTitle({ text, imgName }: components) {
  const [position, setPosition] = useState<Props>({
    x: undefined,
    y: undefined,
  });
  const [test, setTest] = useState(false);

  function handleImgMove(e: React.MouseEvent) {
    console.log(e);
    setPosition({
      x: e.clientX,
      y: e.pageY,
    });
  }
  return (
    <>
      <h2
        onMouseMove={handleImgMove}
        onMouseOver={() => setTest(true)}
        onMouseLeave={() => setTest(false)}
        className={"text-white-7xl w-[max-content] my-[100px] duration-[.3s]"}
      >
        {text}
      </h2>
      <div
        style={{ top: position.y, left: position.x }}
        onMouseOver={() => setTest(true)}
        onMouseLeave={() => setTest(false)}
        className={
          (test ? " opacity-100 blur-none" : " opacity-0 blur-3xl") +
          " absolute-content w-[320px] h-[180px] z-50 duration-[.3s]" +
          (imgName === "team1"
            ? " bg-team1-desktop"
            : imgName === "team2"
            ? " bg-team2-desktop"
            : imgName === "personal1"
            ? " bg-personal1-desktop"
            : " bg-slate-700")
        }
      ></div>
    </>
  );
}
