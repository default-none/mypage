import Image from "next/image";

type Props = {
  SVG: string;
  alt: string;
};

export function SvgBox({ SVG, alt }: Props) {
  return (
    <div className="relative w-[75px] h-[75px]">
      <Image src={SVG} alt={alt} fill />
    </div>
  );
}