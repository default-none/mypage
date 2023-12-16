import { hookLogic } from "typeList";
import { Personal } from "./project/Personal";
import { SectionTitle } from "@/components/text/SectionTitle";
import { ContentWrap } from "./project/ContentWrap";
const TITLE = "Project";
export function Project({ sectionRef }: hookLogic) {
  return (
    <section ref={sectionRef} className="w-[100%] flex-col-center">
      <div className="w-[100%] duration-[.5s] my-[15%]" >
        <SectionTitle text={TITLE} view={true} />
        <ContentWrap
          projectType={"Personal Project"}
          projectTitle={"광주 Country Club 리모델링"}
          projectTitle2="미디어 유통 사이트 제작"
        />
        <ContentWrap
          projectType={"Team Project"}
          projectTitle={"밤을걷다 고궁 축제 FestivalSite 제작"}
          projectTitle2="독:수리 초등학교 고학년 수학 학습 Site 제작"
        />
      </div>
    </section>
  );
}
