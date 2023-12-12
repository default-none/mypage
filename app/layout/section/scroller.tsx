import { useScroller } from "@/hooks";
import { hookLogic } from "portfolio";

type scroll = {
  Ref: HTMLElement | HTMLDivElement | null;
  setView: hookLogic;
};

export function scroller({ Ref, setView }: scroll) {
  useScroller(() => {
    if (Ref === null) return;
    if (Ref.current === null) return;
    const Top = Ref.current.offsetTop;
    const Height = Ref.current.offsetHeight;
    if (window.scrollY < Top / 2 || window.scrollY >= Top + Height / 2) {
      setView(false);
    }
    if (window.scrollY < Top + Height / 2 && window.scrollY > Top / 2) {
      setView(true);
    }
  }, 500);
}
