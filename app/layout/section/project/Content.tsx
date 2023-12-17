import { ProjectNav } from "@/components/button/ProjectNav";
import { LinkTitle } from "@/components/text/LinkTitle";
import { components } from "typeList";

export function Content({ text, view }: components) {
  return (
    <>
      <div
        className={
          (view
            ? "opacity-100"
            : "opacity-0") + " duration-[.5s]"
        }
      >
        <LinkTitle text={text} />
        <ProjectNav />
      </div>
    </>
  );
}
