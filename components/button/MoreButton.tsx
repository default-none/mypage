import { hookLogic } from "portfolio";
import { Dispatch, SetStateAction } from "react";

type Props = {
  logic: boolean;
  setLogic: Dispatch<SetStateAction<boolean>>;
  view?: boolean;
};

export function MoreButton({ logic, setLogic, view }: Props) {
  return (
    <div
      onClick={() => setLogic((prev) => !prev)}
      className={
        (view ? "opacity-100" : "opacity-0") + " relative w-[30px] h-[30px]"
      }
    >
      <div
        className={
          (logic ? "rotate-90" : "") +
          " absolute-content top-[50%] left-[50%] w-[3px] h-[15px] bg-white origin-center duration-[.5s]"
        }
      ></div>
      <div className=" absolute-content top-[50%] left-[50%] w-[15px] h-[3px] bg-white origin-center duration-[.5s]"></div>
    </div>
  );
}
