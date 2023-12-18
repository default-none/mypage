"use client";

import Logo from "@/components/logo/Logo";
import { useAppSelector } from "@/hooks";
import { useState } from "react";
import { GLOBAL_LIST } from "../datas/globals";

export function Header() {
  const scrollState = useAppSelector((state) => state.scroll.value);
  const [handle, setHandle] = useState<boolean>(false);
  function handleNavigaitor() {
    setHandle(!handle);
  }
  return (
    <header
      className={
        (handle ? "grayscale" : "grayscale-0") +
        " w-[100%] flex-col-center py-10 fixed-header z-10 duration-[0.5s] text-center max-md:static"
      }
    >
      <h1 onClick={handleNavigaitor} className="cursor-pointer">
        <Logo size={60} />
      </h1>
      <nav
        className={
          (handle ? "h-[50px]" : "h-[0px]") + " overflow-hidden duration-[0.5s]"
        }
      >
        <ul className="flex justify-around">
          {GLOBAL_LIST.map<JSX.Element>((list, i) => {
            return (
              <li
                key={i}
                id="wUp"
                className={
                  (scrollState ? "text-black-xl" : "text-white-xl") +
                  " w-[100px] mx-[50px] my-[10px] duration-[.5s]"
                }
              >
                {list}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
