"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DramaticCTA } from "@/components/ui/DramaticCTA";
import { FaXmark, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const categories = ["All", "The Camp", "The Sea", "The Land", "Experiences"];

const photos = [
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85", alt: "Crystal clear Adriatic water", cat: "The Sea" },
  { src: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&q=85", alt: "Aerial view of Pelješac coast", cat: "The Land" },
  { src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=85", alt: "Mediterranean beach with pine trees", cat: "The Sea" },
  { src: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=1200&q=85", alt: "Campervan pitched under mature trees", cat: "The Camp" },
  { src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=85", alt: "Stone guest house with sea view terrace", cat: "The Camp" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85", alt: "Coastal mountains meeting the Adriatic", cat: "The Land" },
  { src: "https://images.unsplash.com/photo-1533588789455-c0d2fce789bc?w=1200&q=85", alt: "Fishing village at dusk", cat: "The Land" },
  { src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=85", alt: "Pelješac vineyard terraces", cat: "The Land" },
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85", alt: "Korčula old town from the sea", cat: "Experiences" },
  { src: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&q=85", alt: "Surfing on the Adriatic", cat: "Experiences" },
  { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=85", alt: "Sea kayaking in clear water", cat: "Experiences" },
  { src: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1200&q=85", alt: "Limestone path at golden hour", cat: "The Land" },
  { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85", alt: "Private house exterior Lovište", cat: "The Camp" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85", alt: "Stone wall with fig tree", cat: "The Camp" },
  { src: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&q=85", alt: "Cyclist on coastal road", cat: "Experiences" },
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85", alt: "Apartment balcony over Viganj village", cat: "The Camp" },
  { src: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=1200&q=85", alt: "Wine tasting with coastal view", cat: "Experiences" },
  { src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&q=85", alt: "Bright white bedroom in stone house", cat: "The Camp" },
  { src: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&q=85", alt: "Sea cave and limestone cliffs", cat: "The Sea" },
  { src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1200&q=85", alt: "Olive trees on Dalmatian hillside", cat: "The Land" },
];

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? photos
    : photos.filter((p) => p.cat === activeCategory);

  const prevPhoto = () => setLightbox((i) => (i !== null && i > 0 ? i - 1 : i));
  const nextPhoto = () => setLightbox((i) => (i !== null && i < filtered.length - 1 ? i + 1 : i));

  return (
    <div className="bg-white">

      {/* Intro */}
      <div className="py-48 lg:py-72 px-6 text-center">
        <ScrollReveal variant="clip">
          <p
            className="text-[--color-muted] leading-[1.95] max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
          >
            Everything you see here is within walking distance, a short drive, or a ferry ride from the camp. This is the world you will wake up to.
          </p>
        </ScrollReveal>
      </div>

      {/* Sticky filter */}
      <div className="sticky top-20 z-30 bg-white/97 backdrop-blur-sm border-b border-[--color-stone]">
        <div className="px-6 lg:px-16 py-7">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs uppercase tracking-[0.22em] px-8 py-4 transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[--color-sea] text-white"
                    : "bg-[--color-sand] text-[--color-muted] hover:bg-[--color-stone]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery sections */}
      {(activeCategory === "All" ? categories.slice(1) : [activeCategory]).map((cat) => {
        const catPhotos = filtered.filter((p) => p.cat === cat);
        if (catPhotos.length === 0) return null;

        return (
          <div key={cat} className="py-36 lg:py-52 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto">

              {/* Category heading */}
              {activeCategory === "All" && (
                <ScrollReveal variant="fade">
                  <div className="mb-18 lg:mb-24 pb-8 border-b border-[--color-stone]">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[--color-sea]">
                      {cat}
                    </p>
                  </div>
                </ScrollReveal>
              )}

              {/* Masonry grid */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
                {catPhotos.map((photo, pi) => {
                  const globalIdx = filtered.indexOf(photo);
                  return (
                    <ScrollReveal key={pi} variant="scale" delay={pi * 0.05} className="break-inside-avoid">
                      <div
                        onClick={() => setLightbox(globalIdx)}
                        className="overflow-hidden cursor-pointer group relative"
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={900}
                          height={675}
                          className="w-full object-cover transition-transform duration-600 group-hover:scale-[1.025]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end justify-start p-6">
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            {photo.alt}
                          </span>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          >
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="relative w-full max-w-5xl px-20 lg:px-28"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={1200}
                height={900}
                className="object-contain max-h-[80vh] w-auto mx-auto"
              />
              <p className="text-center text-white/35 font-mono text-xs mt-6 tracking-[0.15em]">
                {filtered[lightbox].alt}
              </p>
            </motion.div>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              disabled={lightbox === 0}
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors disabled:opacity-15 p-5"
            >
              <FaChevronLeft size={24} />
            </button>
            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              disabled={lightbox === filtered.length - 1}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors disabled:opacity-15 p-5"
            >
              <FaChevronRight size={24} />
            </button>
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-4"
            >
              <FaXmark size={22} />
            </button>
            {/* Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-white/25 tracking-[0.25em]">
              {lightbox + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dramatic CTA */}
      <DramaticCTA
        preheading="Come see it in person"
        title="The Light Here"
        titleLine2="is Like Nowhere Else"
        body="No photograph captures it fully. The only way to understand Lovište is to arrive, sit down, and let the Adriatic do the rest."
        ctaText="Reserve Your Stay"
        ctaHref="/stay"
        image="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&q=85"
        imageAlt="Mediterranean beach at golden hour"
      />
    </div>
  );
}
