"use client";

import { useEffect, useRef } from "react";
import useThrottle from "./useThrottle";

export function useSectionScroller(action: Function, time: number) {
  const throttle = useThrottle(action, time);

  useEffect(() => {
    window.addEventListener("scroll", throttle);
    return () => {
      window.removeEventListener("scroll", throttle);
    };
  }, [throttle]);
}
