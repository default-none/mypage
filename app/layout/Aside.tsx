"use client";

import { useState } from "react";
import Logo from "../components/logo/Logo";

export function Header() {
  const [handle, setHandle] = useState<boolean>(false);
  function handleNavigaitor() {
    setHandle(!handle);
  }
  return (
    <header
      className={
        (handle ? "grayscale" : "grayscale-0") +
        " w-[100%] flex-col-center py-10 fixed-header z-10 cursor-pointer duration-[0.5s]"
      }
    >
      <h1 onClick={handleNavigaitor}>
        <Logo />
      </h1>
      <nav
        className={
          (handle ? "h-[50px]" : "h-[0px]") + " overflow-hidden duration-[0.5s]"
        }
      >
        <ul className="flex justify-around">
          <li className="w-[100px] mx-[50px] my-[10px] text-white-xl">About</li>
          <li className="w-[100px] mx-[50px] my-[10px] text-white-xl">
            Project
          </li>
          <li className="w-[100px] mx-[50px] my-[10px] text-white-xl">Plan</li>
        </ul>
      </nav>
    </header>
  );
}
