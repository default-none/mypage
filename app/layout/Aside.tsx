"use client";

import { useAppSelector } from "@/hooks";
import { MAIN_LIST } from "../datas/globals";
import { hookLogic } from "portfolio";

export function Aside({ view }: hookLogic) {
  const scrollState = useAppSelector((state) => state.scroll.value);
  return (
    <aside
      className={
        (view ? "opacity-0" : "opacity-100") +
        " fixed-content left-[100%] top-[50%] translate-x-[-25%] tracking-[0.25rem] duration-[.5s]"
      }
    >
      <nav>
        <ul className="w-[max-content]">
          {MAIN_LIST.map<JSX.Element>((list, i) => {
            return (
              <li
                id="wUp"
                className={
                  (scrollState ? "text-black-xl" : "text-white-xl") +
                  " hover:translate-x-[-70%] duration-[0.5s]  p-[15px]"
                }
                key={i}
              >
                {list}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
