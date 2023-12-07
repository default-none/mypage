"use client";

type Props = {
  AboutRef: React.ForwardedRef<HTMLElement>;
};

export function About({ AboutRef }: Props) {
  return (
    <section ref={AboutRef}>
      <div className="AboutScreen border-screen w-[100%] h-[80vh]">
        <h3 className="text-white-3xl mt-[30px] ml-[30px]">About Me</h3>
      </div>
    </section>
  );
}
