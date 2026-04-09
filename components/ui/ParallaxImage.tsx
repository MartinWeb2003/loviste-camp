"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  /** Aspect ratio string e.g. "21/8" or "16/9" */
  aspect?: string;
  /** How far the image travels in % (parallax depth). Default 18 */
  depth?: number;
  sizes?: string;
  /** Optional text overlay — rendered centred on top of the image */
  overlay?: React.ReactNode;
  className?: string;
}

export function ParallaxImage({
  src,
  alt,
  aspect = "21/8",
  depth = 18,
  sizes = "100vw",
  overlay,
  className,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${depth}%`, `${depth}%`]);

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden ${className ?? ""}`}
      style={{ aspectRatio: aspect }}
    >
      <motion.div className="absolute inset-[-20%]" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
        />
      </motion.div>
      {overlay && (
        <div className="absolute inset-0 flex items-center justify-center">
          {overlay}
        </div>
      )}
    </div>
  );
}
