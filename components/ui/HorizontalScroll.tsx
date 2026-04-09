"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

interface HorizontalScrollProps {
  children: React.ReactNode;
  panels: number;
}

/**
 * Pins the section while the user scrolls and translates children horizontally.
 * - Uses a spring on scrollYProgress so movement glides to a stop
 * - Container is 150 vh per panel so horizontal travel is slow and deliberate
 * - Both the outer container and the sticky div carry the ink background so
 *   no white ever bleeds through
 */
export function HorizontalScroll({ children, panels }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Spring turns instant scroll updates into smooth glide
  // Low stiffness = lazy response, damping prevents endless bounce
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 22,
    mass: 1.4,
    restDelta: 0.0001,
  });

  // Explicit vw units — each panel is 100vw, total travel = (panels-1) × 100vw
  const x = useTransform(
    springProgress,
    [0, 1],
    ["0vw", `-${(panels - 1) * 100}vw`]
  );

  return (
    // 150 vh per panel → 30 % more scroll distance, slower horizontal travel
    // bg-[--color-ink] prevents any white bleed-through underneath the sticky
    <div
      ref={containerRef}
      style={{ height: `${panels * 150}vh` }}
      className="relative bg-[--color-ink]"
    >
      {/* sticky viewport — same background so gaps are never white */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[--color-ink]">
        <motion.div
          className="flex h-full"
          style={{ x, width: `${panels * 100}vw` }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
