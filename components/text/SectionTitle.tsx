type Props = {
  text: string;
};
export function SectionTitle({ text }: Props) {
  return (
    <>
      <h2 className="text-white-3xl w-[max-content]">{text}</h2>
      <div className="bg-white w-[100%] translate-x-[-90%] h-[1px]"></div>
    </>
  );
}
