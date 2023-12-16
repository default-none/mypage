import { ProjectNav } from "@/components/button/ProjectNav";
import { LinkTitle } from "@/components/text/LinkTitle";
import { components } from "typeList";

export function Content({ text }: components) {
  return (
    <>
      <div>
        <LinkTitle text={text} />
        <ProjectNav />
      </div>
    </>
  );
}
