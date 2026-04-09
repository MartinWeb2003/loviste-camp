"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface ScrollTextRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [10, 0]);
  return (
    <motion.span
      style={{ opacity, y, display: "inline-block", marginRight: "0.26em", verticalAlign: "bottom" }}
    >
      {word}
    </motion.span>
  );
}

/**
 * Reveals text word-by-word as the user scrolls through the section.
 * The parent element should have enough height to drive the scroll.
 *
 * Usage: place inside a tall wrapper and pass the desired text.
 */
export function ScrollTextReveal({ text, className, style }: ScrollTextRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "end 0.45"],
  });

  const words = text.split(" ");
  const total = words.length;

  return (
    <p ref={ref} className={className} style={{ lineHeight: 1.7, textAlign: "center", ...style }}>
      {words.map((word, i) => {
        const start = i / total;
        const end = (i + 1) / total;
        return (
          <Word
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}
