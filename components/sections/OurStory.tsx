"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const chapters = [
  {
    era: "1950s — 1970s",
    title: "Roots in Viganj",
    body: "Our grandparents settled in Viganj before Lovište had a name on any tourist map. They fished the same turquoise waters, tended the same fig trees, and welcomed neighbours under the same stone terrace that still stands today. The land was theirs, and they were the land's.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    alt: "Rocky Croatian coastline at sunrise",
  },
  {
    era: "1980s — 2000s",
    title: "Building Something Real",
    body: "Our parents transformed the family plot into a proper camp — clearing terraces by hand, planting shade trees that would take decades to grow, and building the first guest house stone by stone. They didn't follow a trend. They built for their own children's future.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80",
    alt: "Mediterranean garden with olive trees",
  },
  {
    era: "Today",
    title: "The Camp, Perfected",
    body: "Now it's our turn. We've kept everything that made this place extraordinary — the silence, the fig trees, the feeling of arriving home somewhere you've never been — and added everything a modern traveller needs to feel truly at ease. This is Camp Lovište.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
    alt: "Crystal clear Adriatic water from above",
  },
];

export function OurStory() {
  return (
    <section id="story" className="bg-[--color-sand] py-24 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <SectionLabel>Three Generations · One Place</SectionLabel>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-[--color-ink] max-w-2xl leading-tight">
            A Family Story Rooted in This Soil
          </h2>
        </FadeIn>

        {/* Chapters */}
        <div className="mt-20 space-y-28 lg:space-y-36">
          {chapters.map((chapter, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 !== 0 ? "lg:[&>:first-child]:order-2" : ""
              }`}
            >
              {/* Text */}
              <FadeIn delay={0.1} direction={i % 2 === 0 ? "right" : "left"}>
                <div className="max-w-md">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--color-sea] mb-3">
                    {chapter.era}
                  </p>
                  <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold text-[--color-ink] leading-tight mb-6">
                    {chapter.title}
                  </h3>
                  <p className="text-[--color-muted] text-lg leading-relaxed">
                    {chapter.body}
                  </p>
                  <div className="mt-8 w-16 h-px bg-[--color-sea]" />
                </div>
              </FadeIn>

              {/* Image */}
              <FadeIn delay={0.2} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={chapter.image}
                    alt={chapter.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                      {chapter.era}
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Divider quote */}
        <FadeIn className="mt-28 text-center" delay={0.1}>
          <blockquote className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] italic text-[--color-ink]/60 max-w-3xl mx-auto leading-relaxed">
            &ldquo;In Lovište, time moves at the rhythm of the sea. It always has. It always will.&rdquo;
          </blockquote>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--color-sea] mt-6">
            — The Family
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
