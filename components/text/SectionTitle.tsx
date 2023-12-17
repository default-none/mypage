import { components } from "typeList";

export function SectionTitle({ text, view }: components) {
  return (
    <>
      <h2
        className={
          (view ? "opacity-100" : "opacity-0") +
          " text-white-3xl text-end w-[130px] duration-[.5s] max-sm:m-[auto]"
        }
      >
        {text}
      </h2>
      <div
        className={
          (view ? "translate-x-[-90%] max-sm:translate-x-[0%] " : "translate-x-[-120%]") +
          " bg-white w-[100%] h-[1px] duration-[.5s]"
        }
      ></div>
    </>
  );
}
