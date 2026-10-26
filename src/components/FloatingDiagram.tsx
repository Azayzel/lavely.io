"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function FloatingDiagram({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      aria-hidden="true"
      animate={reducedMotion ? undefined : { y: [0, -7, 0] }}
      transition={reducedMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
