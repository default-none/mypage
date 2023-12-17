import { components } from "typeList";

export function ClassText({ text, view }: components) {
  return (
    <h3
      className={
        (view ? "opacity-100" : "opacity-0") + " font-serif text-white-2xl duration-[.5s]"
      }
    >
      {text}
    </h3>
  );
}
