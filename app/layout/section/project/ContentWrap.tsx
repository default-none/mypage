import { ProjectNav } from "@/components/button/ProjectNav";
import { ClassText } from "@/components/text/ClassText";
import { LinkTitle } from "@/components/text/LinkTitle";
import { SectionTitle } from "@/components/text/SectionTitle";
import { Content } from "./Content";

type Props = {
  projectType: string;
  projectTitle: string;
  projectTitle2: string;
};

export function ContentWrap({
  projectType,
  projectTitle,
  projectTitle2,
}: Props) {
  return (
    <>
      <div className="w-[100%] flex-col-center items-center mt-[200px]">
        <ClassText text={projectType} />
        <Content text={projectTitle} />
        <Content text={projectTitle2} />
      </div>
    </>
  );
}
