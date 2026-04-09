"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    alt: "Crystal clear Adriatic waters",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80",
    alt: "Aerial view of Croatian coastline",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    alt: "Mediterranean beach scene",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
    alt: "Campervan in nature",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
    alt: "Stone guest house",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Coastal mountains and water",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1533588789455-c0d2fce789bc?w=800&q=80",
    alt: "Adriatic village",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80",
    alt: "Pelješac vineyard",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    alt: "Korčula island old town",
    span: "row-span-2",
  },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-[--color-sand] py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mb-14">
          <SectionLabel>The View From Here</SectionLabel>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-[--color-ink] max-w-2xl leading-tight">
            A Picture Tells Our Story Best
          </h2>
        </FadeIn>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <motion.div
                layoutId={`photo-${i}`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelected(i)}
                className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer relative group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-2xl">
                    ⊕
                  </span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.div
              layoutId={`photo-${selected}`}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selected].src}
                alt={photos[selected].alt}
                width={1200}
                height={900}
                className="rounded-2xl object-contain max-h-[85vh] w-auto mx-auto"
              />
            </motion.div>

            {/* Nav arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); setSelected((s) => Math.max(0, (s ?? 0) - 1)); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl transition-colors"
            >
              ‹
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setSelected((s) => Math.min(photos.length - 1, (s ?? 0) + 1)); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl transition-colors"
            >
              ›
            </button>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl transition-colors"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
