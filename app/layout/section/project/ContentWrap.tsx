import { ClassText } from "@/components/text/ClassText";
import { Content } from "./Content";

type Props = {
  projectType: string;
  projectTitle: string;
  projectTitle2: string;
  view?: boolean;
};

export function ContentWrap({
  projectType,
  projectTitle,
  projectTitle2,
  view,
}: Props) {
  return (
    <>
      <div className="w-[100%] h-[100%] flex-col-center pt-[5%]">
        <ClassText text={projectType} view={view}/>
        <Content text={projectTitle} view={view}/>
        <Content text={projectTitle2} view={view}/>
      </div>
    </>
  );
}
