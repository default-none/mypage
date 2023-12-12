"use client";

import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Intro, About, State } from "./layout/section/index";
import { Aside } from "./layout/index";
import { useScroller } from "@/hooks";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [switchLogic, setSwitchLogic] = useState(false);
  const [progressBar, setProgressBar] = useState(false);
  const [introView, setIntroView] = useState(true);
  const [aboutView, setAboutView] = useState(false);
  const [stateHistoryView, setStateHistoryView] = useState(false);
  const [stateSkillView, setStateSkillView] = useState(false);
  useScroller(() => {
    if (progressBar) return;
    if (switchLogic) setProgressBar(true);
  }, 10);
  return (
    <div id="pageWrap">
      <main className="w-[1440px] max-[1440px]:w-[100%] m-auto h-[300%]">
        <Intro
          switchLogic={switchLogic}
          setSwitchLogic={setSwitchLogic}
          view={introView}
          setView={setIntroView}
        />
        {switchLogic ? (
          <>
            <Aside view={introView} />
            <About view={aboutView} setView={setAboutView} />
            <State
              firstView={stateHistoryView}
              secondView={stateSkillView}
              setFirstView={setStateHistoryView}
              setSecondView={setStateSkillView}
            />
          </>
        ) : null}
        <motion.div
          className="progress-bar"
          style={progressBar ? { scaleX: scrollYProgress } : { scaleX: 0 }}
        />
      </main>
    </div>
  );
}
