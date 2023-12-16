import { ClassText } from "@/components/text/ClassText";
import { SectionTitle } from "@/components/text/SectionTitle";
import { Content } from "./Content";

const TITLE = "Project";
export function Personal() {
  return (
    <>
      <section className="w-[100%] h-[100dvh] flex-col-center">
        <div className="PersonalScreen w-[100%] h-[70%] duration-[.5s]">
          <SectionTitle text={TITLE} view={true} />
          <div className="w-[100%] h-[100%] flex-col-center items-center">
            <ClassText text="Personal Project"/>
            <Content text="광주 Country Club 리모델링"/>
            <Content text="미디어 유통 사이트 제작"/>
          </div>
        </div>
      </section>
    </>
  );
}
