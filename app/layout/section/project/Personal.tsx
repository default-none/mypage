import { LinkTitle } from "@/components/text/LinkTitle";
import { SectionTitle } from "@/components/text/SectionTitle";

const TITLE = "Project";
export function Personal() {
  return (
    <>
      <section className="w-[100%] h-[100dvh] flex-col-center">
        <div className="PersonalScreen w-[100%] h-[70%] duration-[.5s]">
          <SectionTitle text={TITLE} view={true} />
          <div className="w-[100%] h-[100%] flex justify-center items-center">
            <LinkTitle text="광주 Country Club 리모델링" />
          </div>
        </div>
      </section>
    </>
  );
}
