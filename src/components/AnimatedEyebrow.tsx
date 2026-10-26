"use client";

import { useReducedMotion } from "motion/react";
import { Typewriter } from "motion-plus/react";

const text = "INDEPENDENT ENGINEERING & PRODUCT WORK";

export default function AnimatedEyebrow() {
  const reducedMotion = useReducedMotion();
  return (
    <div className="eyebrow">
      <span className="eyebrow__dot" aria-hidden="true" />
      {reducedMotion
        ? text
        : <span className="eyebrow__animated"><Typewriter speed="fast">{text}</Typewriter></span>}
    </div>
  );
}
