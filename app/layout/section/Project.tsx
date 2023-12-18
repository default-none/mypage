import { hookLogic } from "typeList";
import { SectionTitle } from "@/components/text/SectionTitle";
import { ContentWrap } from "./project/ContentWrap";
import { useRef } from "react";
import { useScroller } from "@/hooks";
const TITLE = "Project";
export function Project({
  firstView,
  setFirstView,
  secondView,
  setSecondView,
  sectionRef,
}: hookLogic) {
  const teamRef = useRef<HTMLElement>(null);

  useScroller(() => {
    if (sectionRef === null || sectionRef === undefined) return;
    if (sectionRef.current === null) return;
    const projectTop = sectionRef.current.offsetTop;
    console.log(window.scrollY);
    const projectHeight = sectionRef.current.offsetHeight;
    console.log(projectTop - projectHeight / 2);
    console.log(projectHeight);
    if (
      window.scrollY < projectTop - projectHeight / 4 ||
      window.scrollY >= projectTop + projectHeight / 2
    ) {
      setFirstView(false);
    }
    if (
      window.scrollY < projectTop + projectHeight / 2 &&
      window.scrollY > projectTop - projectHeight / 4
    ) {
      setFirstView(true);
    }
  }, 300);

  useScroller(() => {
    if (teamRef === null || teamRef === undefined) return;
    if (teamRef.current === null) return;
    const teamTop = teamRef.current.offsetTop;
    const teamHeight = teamRef.current.offsetHeight;
    if (
      window.scrollY < teamTop - teamHeight / 4 ||
      window.scrollY >= teamTop + teamHeight / 2
    ) {
      setSecondView(false);
    }
    if (
      window.scrollY < teamTop + teamHeight / 2 &&
      window.scrollY > teamTop - teamHeight / 4
    ) {
      setSecondView(true);
    }
  }, 300);
  return (
    <>
      <section ref={sectionRef}>
        <div className="w-[100%] duration-[.5s] pt-[10%]">
          <SectionTitle text={TITLE} view={firstView} />
          <ContentWrap
            projectType={"Personal Project"}
            projectTitle={"광주 Country Club 리모델링"}
            name={"personal1"}
            projectTitle2="미디어 유통 사이트 제작"
            view={firstView}
          />
        </div>
      </section>
      <section ref={teamRef} className="w-[100%] flex-col-center h-[100dvh]">
        <div>
          <ContentWrap
            projectType={"Team Project"}
            projectTitle={"밤을걷다 고궁 축제 FestivalSite 제작"}
            name={"team1"}
            projectTitle2={"독:수리 초등학교 고학년 수학 학습 Site 제작"}
            name2={"team2"}
            view={secondView}
          />
        </div>
      </section>
    </>
  );
}
