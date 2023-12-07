type Props = {
  text: string;
  size: number;
};

export default function PageButton({ text, size }: Props) {
  return (
    <span
      id="wUp"
      className={
        (size === 30
          ? "text-3xl"
          : size === 24
          ? "text-2xl"
          : size === 20
          ? "text-xl"
          : size === 18
          ? "text-lg"
          : "text-xs") +
        " w-[130px] h-[50px] bg-gradient-to-l bg-[length:300%_100%] from-sub-color1 via-sub-color2 to-sub-color1 flex-center mx-[10px] relative font-[700] duration-[1s] bg-clip-text bg-right hover:bg-left group text-transparent"
      }
    >
      {text}
      <div className="w-[3px] h-[0px] bg-sub-color2 absoulte-content top-[50%] left-[100%] group-hover:h-[40px] duration-[0.5s]"></div>
    </span>
  );
}
