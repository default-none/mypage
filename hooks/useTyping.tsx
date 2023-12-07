"use client";

import { useEffect, useState } from "react";

// PHASE SETTING
enum Phase {
  Typing,
  Pausing,
  Deleting,
}

// TIME SETTING
const TYPING_INTERVAL = 100;
const PAUSE_TIME = 500;
const DELETE_INTERVAL = 25;

// HOOKS
export function useTyping(text: string[]): {
  typingText: string;
  selecedText: string;
  phase: Phase;
} {
  // ANIMATION END
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(Phase.Typing);
  const [typingText, setTypingText] = useState<string>("");
  const [OnOff, setOnOff] = useState(true);
  const PAUSE_LOGIC = text.length - 1;

  useEffect(() => {
    if (
      selectedIndex === PAUSE_LOGIC &&
      typingText.length === text[PAUSE_LOGIC].length
    ) {
      setOnOff(false);
    }
    if (OnOff) {
      switch (phase) {
        case Phase.Typing: {
          const nextTypingText = text[selectedIndex].slice(
            0,
            typingText.length + 1
          );

          if (nextTypingText === typingText) {
            setPhase(Phase.Pausing);
            return;
          }

          const timeout = setTimeout(() => {
            setTypingText(nextTypingText);
          }, TYPING_INTERVAL);
          return () => clearTimeout(timeout);
        }

        case Phase.Deleting: {
          if (!typingText) {
            const nextIndex = selectedIndex + 1;
            setSelectedIndex(text[nextIndex] ? nextIndex : 0);
            setPhase(Phase.Typing);
            return;
          }
          const nextRetypingText = text[selectedIndex].slice(
            0,
            typingText.length - 1
          );

          const timeout = setTimeout(() => {
            setTypingText(nextRetypingText);
          }, DELETE_INTERVAL);
          return () => clearTimeout(timeout);
        }
        case Phase.Pausing:
        default:
          const timeout = setTimeout(() => {
            setPhase(Phase.Deleting);
          }, PAUSE_TIME);
          return () => clearTimeout(timeout);
      }
    }
  }, [OnOff, PAUSE_LOGIC, phase, selectedIndex, text, typingText]);
  return { typingText, selecedText: text[selectedIndex], phase };
}
