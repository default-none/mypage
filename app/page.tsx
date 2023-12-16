"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Intro, About, State, Address, Project } from "./layout/section/index";
import { Aside } from "./layout/index";
import { useScroller } from "@/hooks";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [switchLogic, setSwitchLogic] = useState(false);
  const [progressBar, setProgressBar] = useState(false);
  const [spaceTop, setSpaceTop] = useState<number[]>([]);

  const [introView, setIntroView] = useState(true);
  const [aboutView, setAboutView] = useState(false);
  const [stateHistoryView, setStateHistoryView] = useState(false);
  const [stateSkillView, setStateSkillView] = useState(false);
  const [addressView, setAddressView] = useState(false);

  const aboutRef = useRef<HTMLElement>();
  const projectRef = useRef<HTMLElement>();
  const contectRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function LoadTop() {
      if (switchLogic) {
        if (aboutRef.current && projectRef.current)
          setSpaceTop([
            aboutRef.current?.offsetTop,
            projectRef.current?.offsetTop,
          ]);
      }
    }
    LoadTop();
    return;
  }, [switchLogic]);
  useScroller(() => {
    if (progressBar) return;
    if (switchLogic) setProgressBar(true);
  }, 10);
  return (
    <main className=" overflow-hidden">
      <Intro
        switchLogic={switchLogic}
        setSwitchLogic={setSwitchLogic}
        view={introView}
        setView={setIntroView}
        space={spaceTop}
      />
      {switchLogic ? (
        <>
          <div
            id="pageWrap"
            className="w-[1440px] max-[1440px]:w-[100%] m-auto"
          >
            <Aside view={introView} space={spaceTop} />
            <About
              switchLogic={switchLogic}
              view={aboutView}
              setView={setAboutView}
              sectionRef={aboutRef}
            />
            <State
              firstView={stateHistoryView}
              secondView={stateSkillView}
              setFirstView={setStateHistoryView}
              setSecondView={setStateSkillView}
            />
          </div>
          <Address view={addressView} setView={setAddressView} />
          <div className="w-[1440px] max-[1440px]:w-[100%] m-auto">
            <Project sectionRef={projectRef}/>
          </div>
        </>
      ) : null}
      <motion.div
        className="progress-bar"
        style={progressBar ? { scaleX: scrollYProgress } : { scaleX: 0 }}
      />
    </main>
  );
}
