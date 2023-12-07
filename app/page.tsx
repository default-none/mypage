"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { About } from "./layout/section/About";
import { Intro } from "./layout/section/Intro";
import { Aside } from "./layout/index";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [switchLogic, setSwitchLogic] = useState(false);
  const AboutRef = useRef<HTMLElement>(null);

  function Test() {
    if (AboutRef.current === null) return;
    console.log(AboutRef.current.offsetTop);
  }
  useEffect(() => {
    window.addEventListener("scroll", Test);

    return () => {
      window.removeEventListener("scroll", Test);
    };
  });

  return (
    <div id="pageWrap">
      <main className="w-[1440px] max-[1440px]:w-[100%] m-auto h-[300%]">
        <Intro
          switchLogic={switchLogic}
          setSwitchLogic={setSwitchLogic}
        ></Intro>
        {switchLogic ? (
          <>
            <motion.div
              className="progress-bar"
              style={{ scaleX: scrollYProgress }}
            />
            <Aside />
            <About AboutRef={AboutRef}></About>
          </>
        ) : null}
      </main>
    </div>
  );
}
