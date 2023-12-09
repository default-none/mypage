import { useTyping } from "@/hooks/useTyping";


type Props = {
  text: string[];
  size: number;
};

export function TypingText({ text, size }: Props) {
  const { typingText } = useTyping(text);
  return (
    <h2
      className={
        (size === 60
          ? "text-white-6xl"
          : size === 48
          ? "text-white-5xl"
          : size === 20
          ? "text-white-xl"
          : null) +
        " text-center blinking-cursor whitespace-nowrap my-5"
      }
    >
      {typingText}
    </h2>
  );
}
