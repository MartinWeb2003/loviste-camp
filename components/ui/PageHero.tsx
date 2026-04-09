"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
}

export function PageHero({ eyebrow, title, subtitle, image, imageAlt }: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ height: "85vh", minHeight: "600px" }}>
      {/* Parallax image */}
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: 1.1 }}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient — heavier at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

      {/* All text centered both axes */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-mono text-[11px] uppercase tracking-[0.35em] text-white/50 mb-7 flex items-center gap-4"
        >
          <span className="w-10 h-px bg-white/30" />
          {eyebrow}
          <span className="w-10 h-px bg-white/30" />
        </motion.p>

        <div className="overflow-hidden mb-7">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-white leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(4rem, 11vw, 10rem)" }}
          >
            {title}
          </motion.h1>
        </div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="text-white/65 max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
