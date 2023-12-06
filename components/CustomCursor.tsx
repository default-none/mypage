"use client";

import { useEffect, useRef, useState } from "react";

type CURSOR_TYPE = {
  [id: string]: string;
};

const CURSOR_POINT: CURSOR_TYPE = {
  sizeup: "w-[50px] h-[50px] rounded-[50%]",
  wup: "w-[50px] h-[25px] rounded-[0%]",
  input: "w-[25px] h-[50px] rounded-[0%]",
  default: "w-[25px] h-[25px] rounded-[50%]",
};

export function CustomCursor() {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState(
    "w-[25px] h-[25px] rounded-[50%]"
  );

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e: any) => {
      const name = e.target.id.toLocaleLowerCase();
      setCursorState(CURSOR_POINT[name] || CURSOR_POINT["default"]);
      console.log(name);
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
