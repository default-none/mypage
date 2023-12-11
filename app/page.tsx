"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Intro, About } from "./layout/section/index";
import { Aside } from "./layout/index";
import { useScroller } from "@/hooks";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [switchLogic, setSwitchLogic] = useState(false);
  const [progressBar, setProgressBar] = useState(false);
  const AboutRef = useRef<HTMLElement>(null);
  const [introView, setIntroView] = useState(true);
  useScroller(() => {
    if(progressBar) return;
    if (switchLogic) setProgressBar(true);
  },10);
  return (
    <div id="pageWrap">
      <main className="w-[1440px] max-[1440px]:w-[100%] m-auto h-[300%]">
        <Intro
          switchLogic={switchLogic}
          setSwitchLogic={setSwitchLogic}
          introView={introView}
          setIntroView={setIntroView}
        />
        {switchLogic ? (
          <>
            <Aside introView={introView} />
            <About AboutRef={AboutRef}></About>
          </>
        ) : null}
        <motion.div
          className="progress-bar"
          style={progressBar ? { scaleX: scrollYProgress } : {scaleX: 0}}
        />
      </main>
    </div>
  );
}
