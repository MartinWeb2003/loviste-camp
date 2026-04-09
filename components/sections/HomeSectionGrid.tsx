"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { HorizontalScroll } from "@/components/ui/HorizontalScroll";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const pages = [
  {
    href: "/story",
    label: "Our Story",
    description: "Four generations of family in Viganj. A home that became a camp.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    alt: "Coastal landscape of Pelješac",
    num: "01",
  },
  {
    href: "/stay",
    label: "Stay With Us",
    description: "Camping plots, guest houses, private house & apartments in Viganj.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80",
    alt: "Stone guest house",
    num: "02",
  },
  {
    href: "/experiences",
    label: "Experiences",
    description: "Surf, kayak, explore Korčula, taste Pelješac wine. Everything is close.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&q=80",
    alt: "Surfing on the Adriatic",
    num: "03",
  },
  {
    href: "/location",
    label: "Location",
    description: "50 m from the beach. 12 min ferry to Korčula. Easy to reach, hard to leave.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    alt: "Clear Adriatic beach",
    num: "04",
  },
  {
    href: "/gallery",
    label: "Gallery",
    description: "See it before you arrive. The light here is like nowhere else.",
    image: "https://images.unsplash.com/photo-1533588789455-c0d2fce789bc?w=1200&q=80",
    alt: "Croatian coastal village",
    num: "05",
  },
];

export function HomeSectionGrid() {
  return (
    <section className="bg-[--color-ink]">
      {/* Heading — scrolls in before horizontal section starts */}
      <div className="py-32 lg:py-44 px-6 text-center">
        <ScrollReveal variant="fade">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/30 mb-10">
            — Explore —
          </p>
        </ScrollReveal>
        <ScrollReveal variant="clip" delay={0.1}>
          <h2
            className="font-display font-bold text-white leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
          >
            Everything You<br />Need to Know
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.2}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/25 mt-12">
            Scroll sideways →
          </p>
        </ScrollReveal>
      </div>

      {/* Horizontal scroll track */}
      <HorizontalScroll panels={pages.length}>
        {pages.map((page, i) => (
          <Link
            key={page.href}
            href={page.href}
            className="relative w-screen h-full flex-shrink-0 group overflow-hidden block"
          >
            {/* Background image */}
            <Image
              src={page.image}
              alt={page.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

            {/* Panel number top-left */}
            <div className="absolute top-12 left-12">
              <span className="font-mono text-xs text-white/25 tracking-[0.3em]">
                {page.num}
              </span>
            </div>

            {/* Content bottom-left */}
            <div className="absolute bottom-0 left-0 right-0 px-12 lg:px-20 pb-20 lg:pb-28">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/40 mb-5">
                {page.label}
              </p>
              <h3
                className="font-display font-bold text-white leading-[0.92] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                {page.label}
              </h3>
              <p className="text-white/50 text-base leading-relaxed max-w-xs mb-8 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                {page.description}
              </p>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/60 group-hover:text-white transition-colors duration-300">
                <span>Explore</span>
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>
            </div>
          </Link>
        ))}
      </HorizontalScroll>
    </section>
  );
}
