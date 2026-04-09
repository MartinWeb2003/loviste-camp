"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { motion } from "motion/react";

const accommodations = [
  {
    type: "Camping Plots",
    tagline: "Your van, your freedom, our paradise.",
    description:
      "Spacious, shaded pitches designed for campervans and motorhomes of all sizes. Every plot comes with a private 16A hookup, fresh water connection, and direct drainage — plus unrestricted access to everything the camp has to offer.",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=900&q=80",
    alt: "Campervan parked in a shaded Mediterranean setting",
    features: [
      "16A electric hookup",
      "Fresh water & drainage",
      "Shaded by mature trees",
      "Level, spacious pitches",
      "Wi-Fi throughout",
      "Communal BBQ area",
    ],
    cta: "View Plots",
    accent: "--color-sea",
    badge: "From €35 / night",
  },
  {
    type: "Guest Houses",
    tagline: "A private retreat with nothing left to want.",
    description:
      "Four fully furnished stone guest houses built into the hillside, each with a private terrace overlooking the Adriatic. Air-conditioned, fully equipped, and designed to disappear you into the landscape.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&q=80",
    alt: "Stone guest house with sea view terrace",
    features: [
      "Private sea-view terrace",
      "Full kitchen equipped",
      "Air conditioning",
      "En-suite bathroom",
      "Bed linen & towels",
      "Daily housekeeping",
    ],
    cta: "View Houses",
    accent: "--color-gold",
    badge: "From €120 / night",
  },
];

export function Accommodations() {
  return (
    <section id="accommodations" className="bg-white py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mb-16 lg:mb-24">
          <SectionLabel>Where You&apos;ll Stay</SectionLabel>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-[--color-ink] max-w-2xl leading-tight">
            Two Ways to Call Lovište Home
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {accommodations.map((acc, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group rounded-3xl overflow-hidden bg-[--color-sand] shadow-md hover:shadow-xl transition-shadow duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={acc.image}
                    alt={acc.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[--color-ink] font-mono text-xs uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
                    {acc.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--color-sea] mb-2">
                    {acc.type}
                  </p>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-[--color-ink] mb-3 leading-tight">
                    {acc.tagline}
                  </h3>
                  <p className="text-[--color-muted] text-base leading-relaxed mb-8">
                    {acc.description}
                  </p>

                  {/* Features grid */}
                  <ul className="grid grid-cols-2 gap-2 mb-8">
                    {acc.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm text-[--color-ink]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[--color-sea] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button href="#contact" variant="primary" size="md">
                    {acc.cta} →
                  </Button>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
