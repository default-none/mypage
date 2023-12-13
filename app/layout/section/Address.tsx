"use client";

import { useRef } from "react";
import { Title } from "@/components/logo/Title";
import { hookLogic } from "portfolio";
import { useScroller } from "@/hooks";

export function Address({ view, setView, setGlobalLogic }: hookLogic) {
  const addressRef = useRef<HTMLElement>(null);
  useScroller(() => {
    if (addressRef === null) return;
    if (addressRef.current === null) return;
    const addressTop = addressRef.current.offsetTop;
    const addressHeight = addressRef.current.offsetHeight;
    console.log(addressTop - addressHeight / 2);
    console.log(window.scrollY);
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
      setGlobalLogic(true);
    } else {
      setGlobalLogic(false);
    }
  }, 300);
  return (
    <>
      <section
        ref={addressRef}
        className="bg-img w-[100vw] h-[100dvh] absolute-content top-[300vh] left-[0] flex-col-center"
      >
        <Title view={view} />
      </section>
    </>
  );
}
