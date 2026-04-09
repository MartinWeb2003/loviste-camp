"use client";

import { motion, TargetAndTransition } from "motion/react";
import { cn } from "@/lib/utils";
import React from "react";

export type ScrollRevealVariant =
  | "clip"        // title slides up from inside overflow:hidden container
  | "scale"       // image scales down from slightly zoomed in
  | "fade"        // subtle upward fade — body text
  | "slide-left"  // enters from the left
  | "slide-right" // enters from the right
  | "rise";       // strong upward rise — for stats and big numbers

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: ScrollRevealVariant;
  delay?: number;
  duration?: number;
  /** once=false means animation reverses when scrolling back (default) */
  once?: boolean;
}

type BezierCurve = [number, number, number, number];

interface AnimConfig {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  dur: number;
  ease: BezierCurve;
}

const EASE_SPRING: BezierCurve = [0.16, 1, 0.3, 1];
const EASE_OUT: BezierCurve = [0.25, 1, 0.5, 1];

const config: Record<ScrollRevealVariant, AnimConfig> = {
  clip:         { initial: { y: 90, opacity: 0 },    animate: { y: 0, opacity: 1 },    dur: 1.05, ease: EASE_SPRING },
  scale:        { initial: { scale: 1.1, opacity: 0 }, animate: { scale: 1, opacity: 1 }, dur: 1.3,  ease: EASE_OUT },
  fade:         { initial: { y: 40, opacity: 0 },    animate: { y: 0, opacity: 1 },    dur: 0.85, ease: EASE_OUT },
  "slide-left": { initial: { x: -80, opacity: 0 },   animate: { x: 0, opacity: 1 },    dur: 1.0,  ease: EASE_SPRING },
  "slide-right":{ initial: { x: 80, opacity: 0 },    animate: { x: 0, opacity: 1 },    dur: 1.0,  ease: EASE_SPRING },
  rise:         { initial: { y: 70, opacity: 0 },    animate: { y: 0, opacity: 1 },    dur: 0.9,  ease: EASE_SPRING },
};

export function ScrollReveal({
  children,
  className,
  style,
  variant = "fade",
  delay = 0,
  duration,
  once = false,
}: ScrollRevealProps) {
  const { initial, animate: anim, dur, ease } = config[variant];
  const finalDuration = duration ?? dur;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const easeAny = ease as any;

  const transition = {
    duration: finalDuration,
    delay,
    ease: easeAny,
  };

  if (variant === "clip") {
    return (
      <div className={cn("overflow-hidden", className)} style={style}>
        <motion.div
          initial={initial}
          whileInView={anim}
          viewport={{ once, margin: "-60px" }}
          transition={transition}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={initial}
      whileInView={anim}
      viewport={{ once, margin: "-60px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
