"use client";

import Logo from "@/components/logo/Logo";
import { useState } from "react";

export function Header() {
  const [handle, setHandle] = useState<boolean>(false);
  function handleNavigaitor() {
    setHandle(!handle);
  }
  return (
    <header
      className={
        (handle ? "grayscale" : "grayscale-0") +
        " w-[100%] flex-col-center py-10 fixed-header z-10 duration-[0.5s] text-center"
      }
    >
      <h1 onClick={handleNavigaitor} className="cursor-pointer">
        <Logo />
      </h1>
      <nav
        className={
          (handle ? "h-[50px]" : "h-[0px]") + " overflow-hidden duration-[0.5s]"
        }
      >
        <ul className="flex justify-around">
          <li id="wUp" className="w-[100px] mx-[50px] my-[10px] text-white-xl">
            Portfolio
          </li>
          <li id="wUp" className="w-[100px] mx-[50px] my-[10px] text-white-xl">
            Program
          </li>
          <li id="wUp" className="w-[100px] mx-[50px] my-[10px] text-white-xl">
            Plan
          </li>
        </ul>
      </nav>
    </header>
  );
}
