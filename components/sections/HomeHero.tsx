"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";

export function HomeHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const titleWords = ["Camp", "Lovište"];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden flex items-center justify-center"
      style={{ height: "110vh", minHeight: "860px" }}
    >
      {/* Parallax image */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: imageY }}>
        <Image
          src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1920&q=85"
          alt="Aerial view of the Croatian Adriatic coast"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/65" />

      {/* Content column */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
        style={{ y: contentY }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-xs uppercase tracking-[0.35em] text-white/55 mb-12 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-white/30" />
          Viganj · Lovište · Pelješac
          <span className="w-8 h-px bg-white/30" />
        </motion.p>

        {/* Title words only */}
        <h1 className="font-display font-bold text-white leading-[0.92] tracking-tight w-full mb-6">
          <div className="overflow-hidden">
            {titleWords.map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-5 last:mr-0 text-[clamp(4.5rem,13vw,11rem)]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.35 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Subtitle — separate element so margin is reliable */}
        <div className="overflow-hidden mb-20">
          <motion.p
            className="text-[clamp(1.4rem,3.2vw,2.8rem)] font-display font-normal italic text-white/75"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Where the Adriatic begins.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Link
            href="/stay"
            style={{ padding: "16px 44px", fontSize: "1rem" }}
            className="rounded-full bg-white text-[--color-sea] font-semibold hover:bg-white/90 transition-colors duration-300"
          >
            See All Accommodation
          </Link>
          <Link
            href="/story"
            style={{ padding: "16px 44px", fontSize: "1rem" }}
            className="rounded-full border-2 border-white/50 text-white font-semibold hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Our Story
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — pinned to bottom of hero */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
