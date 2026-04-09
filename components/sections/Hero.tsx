"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.4, 0.7]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const words = ["Where", "the", "Adriatic", "Begins"];

  return (
    <section ref={ref} id="home" className="relative h-screen min-h-[600px] overflow-hidden flex items-center">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ y: imageY }}
      >
        <Image
          src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1920&q=85"
          alt="Adriatic coast aerial view"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full"
        style={{ y: contentY }}
      >
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-white/60 mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-white/40" />
            Viganj · Lovište · Pelješac
          </motion.p>

          {/* Main heading — animated word by word */}
          <h1 className="font-display font-bold text-white leading-[0.95] mb-6">
            <div className="text-[clamp(3.5rem,10vw,9rem)] overflow-hidden">
              {["Camp", "Lovište"].map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-4 last:mr-0"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.4 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="text-[clamp(1.5rem,3.5vw,3rem)] font-normal italic text-white/80 overflow-hidden">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-2 last:mr-0"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.7 + i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            A family haven generations in the making — your gateway to the clearest waters, warmest sunsets, and the most peaceful corner of Croatia.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="#contact" variant="primary" size="lg">
              Reserve Your Stay
            </Button>
            <Button href="#story" variant="ghost" size="lg">
              Our Story
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">Scroll</span>
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
