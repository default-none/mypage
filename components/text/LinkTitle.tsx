"use client";

import { use, useEffect, useRef, useState } from "react";
type Props = {
  text: string;
  view?: boolean;
};
export function LinkTitle({ text }: Props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [test, setTest] = useState(false);

  function handleImgMove(e: React.MouseEvent) {
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
        className={"text-white-7xl w-[max-content] duration-[.3s]"}
      >
        {text}
      </h2>
      <div
        style={{ top: position.y, left: position.x }}
        onMouseOver={() => setTest(true)}
        onMouseLeave={() => setTest(false)}
        className={
          (test ? " opacity-100" : " opacity-0") +
          " absolute-content w-[300px] h-[300px] bg-red-600 z-50 duration-[.3s]"
        }
      ></div>
    </>
  );
}
