import { history, skillSvg } from "@/app/datas/globals";
import { SubTitle } from "@/components/text/SubTitle";
import { useScroller } from "@/hooks";
import { hookLogic } from "portfolio";
import { useRef, useState } from "react";
import { SvgBox } from "./about/SvgBox";
import { MoreButton } from "@/components/button";

export function State({
  firstView,
  setFirstView,
  secondView,
  setSecondView,
}: hookLogic) {
  const stateHistoryRef = useRef<HTMLDivElement>(null);
  const stateSkillRef = useRef<HTMLDivElement>(null);
  const [moreLogic, setMoreLogic] = useState(false);

  //공통되는 useScroller의 형식을 component화 하려 했으나 HTMLElment or HTMLDivElemnt type쪽에서 current속성이 존재하지 않는다고 함.
  useScroller(() => {
    if (stateHistoryRef === null) return;
    if (stateHistoryRef.current === null) return;
    const historyTop = stateHistoryRef.current.offsetTop;
    const historyHeight = stateHistoryRef.current.offsetHeight;
    if (
      window.scrollY < historyTop + historyHeight / 2 ||
      window.scrollY >= historyTop + historyHeight / 2
    ) {
      setFirstView(false);
    }
    if (
      window.scrollY < historyTop + historyHeight / 2 &&
      window.scrollY > historyTop / 2
    ) {
      setFirstView(true);
    }
  }, 500);

  useScroller(() => {
    if (stateSkillRef === null) return;
    if (stateSkillRef.current === null) return;
    const skillTop = stateSkillRef.current.offsetTop;
    const skillHeight = stateSkillRef.current.offsetHeight;
    if (
      window.scrollY < skillTop + skillHeight / 2 ||
      window.scrollY >= skillTop + skillHeight / 2
    ) {
      setSecondView(false);
    }
    if (
      window.scrollY < skillTop + skillHeight / 2 &&
      window.scrollY > skillTop / 2
    ) {
      setSecondView(true);
    }
  }, 500);
  return (
    <section className="life w-[100%] h-[100dvh] flex-col-center">
      <div ref={stateHistoryRef} className="history w-[100%] h-[50%]">
        <ul className="h-[100%] flex flex-col flex-wrap gap-x-[80px] overflow-hidden">
          {history.map((career, id) => {
            return (
              <li
                key={id}
                className={
                  (firstView
                    ? "translate-y-[0%] opacity-100"
                    : "translate-y-[50%] opacity-0") +
                  " text-white-lg flex justify-between w-[calc(50%-40px)] h-[20%] my-[5px] duration-[1s]"
                }
              >
                <span>- {career.content}</span>
                <span>{career.day}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        ref={stateSkillRef}
        className="skill w-[100%] mt-[50px] overflow-hidden"
      >
        <div className="flex items-center">
          <SubTitle text={"Skill"} view={secondView} />
          <MoreButton logic={moreLogic} setLogic={setMoreLogic} />
        </div>
        <ul className="flex w-[max-content] slide">
          {skillSvg.map((svg, id) => {
            return (
              <li
                id="skill"
                key={id}
                className=" bg-bg-color2 w-[200px] h-[200px] flex-col-center border-white border-solid border-[2px] mx-[50px]"
              >
                <SvgBox SVG={svg.name} alt={svg.id} />
              </li>
            );
          })}
          {skillSvg.map((svg, id) => {
            return (
              <li
                id="skill"
                key={id}
                className="bg-bg-color2 w-[200px] h-[200px] flex-col-center border-white border-solid border-[2px] mx-[50px]"
              >
                <SvgBox SVG={svg.name} alt={svg.id} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
