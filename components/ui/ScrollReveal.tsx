"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type ScrollRevealVariant =
  | "clip"        // title slides up from inside overflow:hidden container — most dramatic
  | "scale"       // image scales down from slightly zoomed in
  | "fade"        // subtle upward fade — body text
  | "slide-left"  // enters from the left
  | "slide-right" // enters from the right
  | "rise";       // strong upward rise — for stats and big numbers

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: ScrollRevealVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const config: Record<
  ScrollRevealVariant,
  { initial: object; animate: object; dur: number; ease: number[] }
> = {
  clip: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    dur: 1.05,
    ease: [0.16, 1, 0.3, 1],
  },
  scale: {
    initial: { scale: 1.08, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    dur: 1.3,
    ease: [0.25, 1, 0.5, 1],
  },
  fade: {
    initial: { y: 36, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    dur: 0.85,
    ease: [0.25, 1, 0.5, 1],
  },
  "slide-left": {
    initial: { x: -70, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    dur: 0.95,
    ease: [0.16, 1, 0.3, 1],
  },
  "slide-right": {
    initial: { x: 70, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    dur: 0.95,
    ease: [0.16, 1, 0.3, 1],
  },
  rise: {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    dur: 0.9,
    ease: [0.16, 1, 0.3, 1],
  },
};

export function ScrollReveal({
  children,
  className,
  variant = "fade",
  delay = 0,
  duration,
  once = true,
}: ScrollRevealProps) {
  const { initial, animate, dur, ease } = config[variant];
  const finalDuration = duration ?? dur;

  if (variant === "clip") {
    return (
      <div className={cn("overflow-hidden", className)}>
        <motion.div
          initial={initial}
          whileInView={animate}
          viewport={{ once, margin: "-50px" }}
          transition={{ duration: finalDuration, delay, ease }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration: finalDuration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
