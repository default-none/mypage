"use client";

const SCROLL_SPACE = ["About", "Project", "Contect"];

export function Footer() {
  function scrollTo(section: string) {
    if (section === "About") window.scrollTo();
    if (section === "Project") window.scrollTo();
    if (section === "Contect") window.scrollTo();
  }
  return (
    <aside>
      <nav>
        <ul className="">
          <li className="" onClick={() => scrollTo(SCROLL_SPACE[0])}>
            About
          </li>
          <li className="" onClick={() => scrollTo(SCROLL_SPACE[1])}>
            Project
          </li>
          <li className="" onClick={() => scrollTo(SCROLL_SPACE[2])}>
            Contect
          </li>
        </ul>
      </nav>
    </aside>
  );
}
