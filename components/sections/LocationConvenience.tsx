"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion } from "motion/react";

const proximities = [
  {
    icon: "🏖️",
    label: "The Beach",
    detail: "50 m",
    note: "Right across the road. Sandy bay, crystal clear water.",
    highlight: true,
  },
  {
    icon: "🛒",
    label: "Nearest Store",
    detail: "2 km",
    note: "Well-stocked grocery in Lovište village. Open daily.",
    highlight: false,
  },
  {
    icon: "⛴️",
    label: "Korčula Ferry",
    detail: "12 min",
    note: "Ferry from Orebić port — 12 km / 20 min by car.",
    highlight: false,
  },
  {
    icon: "⛽",
    label: "Petrol Station",
    detail: "12 km",
    note: "Orebić town. Full services available.",
    highlight: false,
  },
  {
    icon: "🏥",
    label: "Medical Centre",
    detail: "12 km",
    note: "Orebić health centre. Pharmacy next door.",
    highlight: false,
  },
  {
    icon: "🍽️",
    label: "Restaurants",
    detail: "500 m",
    note: "Several konobas serving fresh seafood and local wine.",
    highlight: false,
  },
  {
    icon: "🏛️",
    label: "Dubrovnik",
    detail: "90 km",
    note: "Old town UNESCO site. Day trip worthy, 1.5h drive.",
    highlight: false,
  },
  {
    icon: "✈️",
    label: "Dubrovnik Airport",
    detail: "95 km",
    note: "International connections. Transfers available.",
    highlight: false,
  },
];

export function LocationConvenience() {
  return (
    <section id="location" className="bg-white py-24 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text + grid */}
          <div>
            <FadeIn>
              <SectionLabel>You&apos;re Here</SectionLabel>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[--color-ink] leading-tight mb-6">
                Everything Close. Nothing Crowded.
              </h2>
              <p className="text-[--color-muted] text-lg leading-relaxed mb-12">
                Lovište sits at the unspoiled western tip of the Pelješac peninsula — quiet enough to feel like you&apos;ve found a secret, yet close enough to everything you could ever want.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {proximities.map((item, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className={`p-5 rounded-2xl transition-colors duration-300 ${
                      item.highlight
                        ? "bg-[--color-sea-light] border border-[--color-sea]/20"
                        : "bg-[--color-sand] hover:bg-[--color-stone]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <p className="font-semibold text-[--color-ink] text-sm">{item.label}</p>
                          <p className="text-[--color-muted] text-xs mt-0.5 leading-snug">{item.note}</p>
                        </div>
                      </div>
                      <span
                        className={`font-mono text-sm font-medium flex-shrink-0 ${
                          item.highlight ? "text-[--color-sea]" : "text-[--color-ink]"
                        }`}
                      >
                        {item.detail}
                      </span>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: Map embed */}
          <FadeIn delay={0.2} direction="left" className="sticky top-24">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.8!2d17.0!3d42.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134ab5fd45bfffff%3A0x400aceff4bbd180!2sLovi%C5%A1te%2C%20Croatia!5e0!3m2!1sen!2shr!4v1700000000000!5m2!1sen!2shr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Camp Lovište location map"
              />
            </div>

            {/* Coordinates */}
            <div className="mt-4 flex items-center justify-between px-2">
              <span className="font-mono text-xs text-[--color-muted]">
                42.9665° N, 17.0219° E
              </span>
              <a
                href="https://maps.google.com/?q=Loviste,Croatia"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[--color-sea] hover:underline"
              >
                Open in Maps ↗
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
