"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FadeIn } from "@/components/ui/FadeIn";

const pages = [
  {
    href: "/story",
    label: "Our Story",
    description: "Four generations of family in Viganj. A home that became a camp.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    alt: "Coastal landscape of Pelješac",
    span: "lg:col-span-2",
  },
  {
    href: "/stay",
    label: "Stay With Us",
    description: "Camping plots, guest houses, private house & apartments in Viganj.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&q=80",
    alt: "Stone guest house",
    span: "",
  },
  {
    href: "/experiences",
    label: "Experiences",
    description: "Surf, kayak, explore Korčula, taste Pelješac wine. Everything is close.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=900&q=80",
    alt: "Surfing on the Adriatic",
    span: "",
  },
  {
    href: "/location",
    label: "Location",
    description: "50 m from the beach. 12 min ferry to Korčula. Easy to reach, hard to leave.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
    alt: "Clear Adriatic beach",
    span: "",
  },
  {
    href: "/gallery",
    label: "Gallery",
    description: "See it before you arrive. The light here is like nowhere else.",
    image: "https://images.unsplash.com/photo-1533588789455-c0d2fce789bc?w=900&q=80",
    alt: "Croatian coastal village",
    span: "",
  },
];

export function HomeSectionGrid() {
  return (
    <section className="bg-[--color-sand] py-40 lg:py-60">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn className="mb-24 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[--color-sea] mb-8 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[--color-sea]" />
            Explore the Camp
            <span className="w-8 h-px bg-[--color-sea]" />
          </p>
          <h2 className="font-display text-[clamp(2.8rem,7vw,6rem)] font-bold text-[--color-ink] leading-tight">
            Everything You Need to Know
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {pages.map((page, i) => (
            <FadeIn key={page.href} delay={i * 0.08} className={page.span}>
              <Link href={page.href} className="block group relative overflow-hidden aspect-[4/3]">
                <Image
                  src={page.image}
                  alt={page.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 mb-2">
                    {page.label}
                  </p>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white leading-tight mb-3">
                    {page.label}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xs opacity-0 translate-y-4 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
                    {page.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-white font-mono text-xs uppercase tracking-[0.2em]">
                    <span>Explore</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
