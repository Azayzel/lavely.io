"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type Props = { children: ReactNode; className?: string };

export default function MotionCard({ children, className }: Props) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      className={className}
      whileHover={reducedMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 330, damping: 30 }}
    >
      {children}
    </motion.article>
  );
}
