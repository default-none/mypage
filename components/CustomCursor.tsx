"use client";

import { useEffect, useRef, useState } from "react";

type CURSOR_TYPE = {
  [id: string]: string;
};

const CURSOR_POINT: CURSOR_TYPE = {
  sizeup: "w-[40px] h-[40px] rounded-[50%]",
  wup: "w-[40px] h-[20px] rounded-[0%]",
  input: "w-[20px] h-[40px] rounded-[0%]",
  default: "w-[20px] h-[20px] rounded-[50%]",
};

export function CustomCursor() {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState(
    "w-[20px] h-[20px] rounded-[50%]"
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e: any) => {
      if (e.target === null) return;
      //e.target.id말고 다른 방법을 유추할 필요가 있음
      const name = e.target.id.toLocaleLowerCase();
      setCursorState(CURSOR_POINT[name] || CURSOR_POINT["default"]);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`cursor-style bg-white ${cursorState}`}
      ></div>
    </>
  );
}
