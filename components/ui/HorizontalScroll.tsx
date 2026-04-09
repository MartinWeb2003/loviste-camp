"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface HorizontalScrollProps {
  children: React.ReactNode;
  /** How many "panels" wide the track is — used to compute scroll range */
  panels: number;
}

/**
 * Pins the section while the user scrolls, then translates children
 * horizontally, creating a horizontal-scroll-inside-vertical-scroll effect.
 *
 * Wrap equal-width panels as direct children. Each panel should be
 * `w-screen flex-shrink-0` and whatever height you want.
 */
export function HorizontalScroll({ children, panels }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // The sticky container scrolls for (panels - 1) × 100vw worth of vertical scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(panels - 1) * 100}%`]
  );

  return (
    /* Outer: tall enough to give scroll distance */
    <div
      ref={containerRef}
      style={{ height: `${panels * 100}vh` }}
      className="relative"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="flex h-full"
          style={{ x, width: `${panels * 100}vw` }}
          transition={{ type: "tween", ease: "linear" }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
