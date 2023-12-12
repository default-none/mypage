type Props = {
  text: string;
  view?: boolean;
};
export function SubTitle({ text, view }: Props) {
  return (
    <>
      <h2
        className={
          (view ? "opacity-100" : "opacity-0") +
          " text-white-2xl w-[max-content] duration-[1s] text-left"
        }
      >
        {text}
      </h2>
    </>
  );
}
