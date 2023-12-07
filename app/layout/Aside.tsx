"use client";

export function Aside() {
  return (
    <aside className="fixed-content left-[100%] top-[15%] translate-x-[-25%] tracking-[0.25rem]">
      <nav>
        <ul className="w-[max-content]">
          <li
            id="wUp"
            className="text-white-xl translate-x-[0%] hover:translate-x-[-70%] duration-[0.5s] p-[15px]"
          >
            About
          </li>
          <li
            id="wUp"
            className="text-white-xl hover:translate-x-[-70%] duration-[0.5s]  p-[15px]"
          >
            Project
          </li>
          <li
            id="wUp"
            className="text-white-xl hover:translate-x-[-70%] duration-[0.5s]  p-[15px]"
          >
            Contect
          </li>
        </ul>
      </nav>
    </aside>
  );
}
