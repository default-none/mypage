import {
  CSS,
  Figma,
  Git,
  HTML,
  JavaScript,
  NextJs,
  ReactJs,
  Sass,
  TailWind,
  TypeScript,
} from "@/public/asset/image";
type Props = {
  SVG: string | null;
  alt: string;
};

export function SvgBox({ SVG }: Props) {
  return (
    <div className="relative w-[75px] h-[75px]">
      {SVG === "HTML" ? (
        <HTML />
      ) : SVG === "CSS" ? (
        <CSS />
      ) : SVG === "JavaScript" ? (
        <JavaScript />
      ) : SVG === "Sass" ? (
        <Sass />
      ) : SVG === "Git" ? (
        <Git />
      ) : SVG === "ReactJs" ? (
        <ReactJs />
      ) : SVG === "TypeScript" ? (
        <TypeScript />
      ) : SVG === "NextJs" ? (
        <NextJs />
      ) : SVG === "TailWind" ? (
        <TailWind />
      ) : SVG === "Figma" ? (
        <Figma />
      ) : null}
    </div>
  );
}
