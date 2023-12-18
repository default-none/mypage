import { useScroller } from "@/hooks";
import { hookLogic } from "typeList";

export function Contect({ sectionRef, view, setView }: hookLogic) {
  useScroller(() => {
    if (sectionRef === null || sectionRef === undefined) return;
    if (sectionRef.current === null) return;
    const contectTop = sectionRef.current.offsetTop;
    const contectHeight = sectionRef.current.offsetHeight;
    if (
      window.scrollY < contectTop - contectHeight / 4 ||
      window.scrollY >= contectTop + contectHeight / 2
    ) {
      setView(false);
    }
    if (
      window.scrollY < contectTop + contectHeight / 2 &&
      window.scrollY > contectTop - contectHeight / 4
    ) {
      setView(true);
    }
  }, 300);
  return (
    <>
      <section ref={sectionRef} className="w-[100%] h-[100dvh] flex-col-center">
        <div className="text-white-7xl font-serif font-extralight flex justify-center">
          &#123;
          <span
            className={
              (view ? "w-[100%]" : "w-[0%]") +
              " block overflow-hidden duration-[1s]"
            }
          >
            {" "}
            JinsuPark{" "}
          </span>
          &#125;
        </div>
        <form action="">
          <label htmlFor="Name">성함</label>
          <input id="Name" />
        </form>
      </section>
    </>
  );
}
