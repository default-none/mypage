"use client";

import { MAIN_LIST } from "../datas/globals";

export function Aside() {
  return (
    <aside className="fixed-content left-[100%] top-[40%] translate-x-[-25%] tracking-[0.25rem]">
      <nav>
        <ul className="w-[max-content]">
          {MAIN_LIST.map<JSX.Element>((list, i) => {
            return (
              <li
                id="wUp"
                className="text-white-xl hover:translate-x-[-70%] duration-[0.5s]  p-[15px]"
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
