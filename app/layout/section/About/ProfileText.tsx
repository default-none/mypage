type Props = {
  content: string;
  text: string;
};

export function ProfileText({ content, text }: Props) {
  return (
    <>
      <h4 className="text-white-xl text-right w-[50%] mr-[50px]">
        {content}
      </h4>
      <p className="text-white-lg text-left w-[50%] ml-[50px]">{text}</p>
    </>
  );
}
