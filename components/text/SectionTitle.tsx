type Props = {
  text: string;
  view?: boolean;
};
export function SectionTitle({ text, view }: Props) {
  return (
    <>
      <h2
        className={
          (view ? "opacity-100" : "opacity-0") +
          " text-white-3xl w-[max-content] duration-[1s]"
        }
      >
        {text}
      </h2>
      <div
        className={
          (view ? "translate-x-[-90%]" : "translate-x-[-120%]") +
          " bg-white w-[100%] h-[1px] duration-[1s]"
        }
      ></div>
    </>
  );
}
