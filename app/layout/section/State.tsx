import { history, skillSvg } from "@/app/datas/globals";
import { SubTitle } from "@/components/text/SubTitle";
import { useScroller } from "@/hooks";
import { hookLogic } from "typeList";
import { useRef, useState } from "react";
import { SvgBox } from "@/app/layout/section/about/SvgBox";
import { MoreButton } from "@/components/button";

export function State({
  view,
  setView,
}: hookLogic) {
  const stateRef = useRef<HTMLElement>(null);
  const [moreLogic, setMoreLogic] = useState(false);

  //공통되는 useScroller의 형식을 component화 하려 했으나 HTMLElment or HTMLDivElemnt type쪽에서 current속성이 존재하지 않는다고 함.
  useScroller(() => {
    if (stateRef === null) return;
    if (stateRef.current === null) return;
    const stateTop = stateRef.current.offsetTop;
    const stateHeight = stateRef.current.offsetHeight;
    if (
      window.scrollY < stateTop - stateHeight / 4 ||
      window.scrollY >= stateTop + stateHeight / 2
    ) {
      setView(false);
    }
    if (
      window.scrollY < stateTop + stateHeight / 2 &&
      window.scrollY > stateTop - stateHeight / 4
    ) {
      setView(true);
    }
  }, 300);
  return (
    <section
      ref={stateRef}
      className="life w-[100%] h-[100dvh] flex-col-center"
    >
      <div className="history w-[100%]">
        <SubTitle text={"History"} view={view} />
        <ul className="h-[100%] flex flex-col max-md:flex-nowrap flex-wrap gap-x-[80px] max-md:gap-x-[0] gap-y-[20px] overflow-hidden mt-[50px]">
          {history.map((career, id) => {
            return (
              <li
                key={id}
                className={
                  (view
                    ? "translate-y-[0%] opacity-100"
                    : "translate-y-[50%] opacity-0") +
                  " text-white-base flex justify-between w-[calc(50%-40px)] max-md:w-[100%] h-[20%] max-md:h-[max-content] max- duration-[.5s] max-[540px]:justify-center"
                }
              >
                <span>{career.content}</span>
                <span className="md:max-xl:hidden max-[540px]:hidden">{career.day}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="skill w-[100%] mt-[50px] overflow-hidden">
        <div className="flex items-center mb-[50px]">
          <SubTitle text={"Skill"} view={view} />
          <MoreButton
            logic={moreLogic}
            setLogic={setMoreLogic}
            view={view}
          />
        </div>
        <div
          className={
            (view ? "opacity-100" : "opacity-0") +
            " relative h-[220px] duration-[.5s] p-[5px] border-x-[1px] border-solid border-white"
          }
        >
          <ul
            className={
              (moreLogic ? " opacity-100 h-[100%]" : " opacity-0 h-[0%]") +
              " absolute-content m-auto w-[max-content] duration-[.5s] overflow-hidden grid grid-cols-5 max-md:grid-cols-1 gap-y-[20px] top-[50%] left-[50%]"
            }
          >
            {skillSvg.map((svg, id) => {
              return (
                <li
                  key={id}
                  className=" bg-bg-color2 w-[100px] h-[100px] flex-col-center border-white border-solid border-[2px] mx-[50px]"
                >
                  <SvgBox SVG={svg.name} alt={svg.id} />
                </li>
              );
            })}
          </ul>
          <ul
            className={
              (moreLogic ? "h-[0%] opacity-0" : "h-[100%] opacity-100") +
              " flex w-[max-content] duration-[.5s] slide overflow-hidden items-center"
            }
          >
            {skillSvg.map((svg, id) => {
              return (
                <li
                  key={id}
                  className="bg-bg-color2 w-[100px] h-[100px] flex-col-center border-white border-solid border-[2px] mx-[50px]"
                >
                  <SvgBox SVG={svg.name} alt={svg.id} />
                </li>
              );
            })}
            {skillSvg.map((svg) => {
              return (
                <li
                  key={svg.id}
                  className=" bg-bg-color2 w-[100px] h-[100px] flex-col-center border-white border-solid border-[2px] mx-[50px]"
                >
                  <SvgBox SVG={svg.name} alt={svg.id} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
