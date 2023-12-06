type Props = {
  text: string;
};

export default function PageButton({ text }: Props) {
  return (
    <span id="wUp"
     className=" group flex-center text-center w-[130px] h-[50px] text-transparent font-[700] text-3xl bg-gradient-to-l from-sub-color1 via-sub-color2 to-sub-color1 relative bg-[length:300%_100%] bg-clip-text bg-right hover:bg-left duration-[1s] cursor-pointer ">
      {text}
      <div className="ml-[10px] bg-sub-color2 w-[3px] h-[0px] group-hover:h-[50px] duration-[0.5s]"></div>
    </span>
  );
}
