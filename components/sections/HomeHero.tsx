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
  const subWords = ["Where", "the", "Adriatic", "begins."];

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] overflow-hidden flex items-center justify-center">
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/65" />

      {/* Centered content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ y: contentY }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-xs uppercase tracking-[0.35em] text-white/55 mb-8 flex items-center justify-center gap-3"
        >
          <span className="w-8 h-px bg-white/30" />
          Viganj · Lovište · Pelješac
          <span className="w-8 h-px bg-white/30" />
        </motion.p>

        {/* Main title */}
        <h1 className="font-display font-bold text-white leading-[0.92] tracking-tight mb-6">
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
          <div className="overflow-hidden mt-1">
            {subWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3 last:mr-0 text-[clamp(1.4rem,3.2vw,2.8rem)] font-normal italic text-white/75"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.7 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="text-white/65 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          A family-run campsite four generations deep, on the unspoiled western tip of Pelješac. Camping plots, guest houses, private house & apartments — all steps from the sea.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/stay"
            className="px-9 py-4 bg-white text-[--color-sea] font-semibold text-sm hover:bg-white/90 transition-colors duration-300 inline-block"
          >
            See All Accommodation
          </Link>
          <Link
            href="/story"
            className="px-9 py-4 border-2 border-white/50 text-white font-semibold text-sm hover:border-white hover:bg-white/10 transition-all duration-300 inline-block"
          >
            Our Story
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">Scroll</span>
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
