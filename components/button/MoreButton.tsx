import { Dispatch, SetStateAction } from "react";

type Props = {
  logic: boolean;
  setLogic: Dispatch<SetStateAction<boolean>>;
};

export function MoreButton({ logic, setLogic }: Props) {
  return (
    <div
      onClick={() => setLogic((prev) => !prev)}
      className=" relative w-[30px] h-[30px]"
    >
      <div
        className={
          (logic ? "rotate-90" : "") +
          " absoulte-content top-[50%] left-[50%] w-[3px] h-[20px] bg-white origin-center duration-[.5s]"
        }
      ></div>
      <div
        className={
          (logic ? "rotate-90" : "") +
          " absoulte-content top-[50%] left-[50%] w-[20px] h-[3px] bg-white origin-center duration-[.5s]"
        }
      ></div>
    </div>
  );
}
