"use client";

import { useRef } from "react";
import { Title } from "@/components/logo/Title";
import { hookLogic } from "portfolio";
import { useAppDispatch, useScroller } from "@/hooks";
import { offState, onState } from "@/state/scrollSlice";

export function Address({ view, setView }: hookLogic) {
  const scrollDispatch = useAppDispatch();
  const addressRef = useRef<HTMLElement>(null);
  useScroller(() => {
    if (addressRef === null) return;
    if (addressRef.current === null) return;
    const addressTop = addressRef.current.offsetTop;
    const addressHeight = addressRef.current.offsetHeight;
    if (
      window.scrollY < addressTop / 2 ||
      window.scrollY >= addressTop + addressHeight / 2
    ) {
      setView(false);
    }
    if (
      window.scrollY < addressTop + addressHeight / 2 &&
      window.scrollY > addressTop - addressHeight / 2
    ) {
      setView(true);
    }
    if (
      window.scrollY >= addressTop - addressHeight / 2 &&
      window.scrollY <= addressTop + addressHeight / 2
    ) {
      scrollDispatch(onState());
    } else {
      scrollDispatch(offState());
    }
  }, 300);
  return (
    <>
      <section
        ref={addressRef}
        className="bg-img w-[100vw] h-[100dvh] top-[300vh] left-[0] flex-col-center"
      >
        <div></div>
        <Title view={view} />
      </section>
    </>
  );
}
