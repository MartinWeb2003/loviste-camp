"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const experiences = [
  {
    title: "Surf School",
    subtitle: "Orebić Beach",
    distance: "12 km",
    duration: "20 min by car",
    description:
      "Learn to ride the Adriatic waves with certified instructors. Lessons for all levels, boards for hire. The best wind conditions in Croatia.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&q=80",
    alt: "Surfer catching a wave",
    color: "from-blue-900/60",
  },
  {
    title: "Korčula Island",
    subtitle: "Day Trip by Ferry",
    distance: "12 min",
    duration: "By ferry from Orebić",
    description:
      "Marco Polo's alleged birthplace. A medieval walled town rising from the sea, with the best mussels, wine bars, and sunsets in the region.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80",
    alt: "Medieval walled city on island",
    color: "from-amber-900/60",
  },
  {
    title: "Pelješac Wine Tour",
    subtitle: "Dingač & Postup",
    distance: "30 km",
    duration: "40 min by car",
    description:
      "The Pelješac peninsula produces some of Croatia's finest red wines. Tour family vineyards, taste Plavac Mali straight from the barrel.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=700&q=80",
    alt: "Vineyard on hillside",
    color: "from-purple-900/60",
  },
  {
    title: "Sea Kayaking",
    subtitle: "Lovište Bay",
    distance: "0 m",
    duration: "Right at the camp",
    description:
      "Paddle out from our own beach into the glassy bay. Guided tours to hidden coves, sea caves, and uninhabited beaches along the peninsula.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=80",
    alt: "Sea kayaking in clear water",
    color: "from-teal-900/60",
  },
  {
    title: "Cycling Pelješac",
    subtitle: "Coastal Route",
    distance: "5 km",
    duration: "Bike hire in Lovište",
    description:
      "Follow the coast road through olive groves, tiny fishing villages, and viewpoints overlooking Korčula. Flat coastal stretches and optional climbs.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=700&q=80",
    alt: "Cyclist on coastal road",
    color: "from-green-900/60",
  },
  {
    title: "Fishing Villages",
    subtitle: "Viganj & Beyond",
    distance: "Walking distance",
    duration: "5 min walk",
    description:
      "Step into a Croatia most visitors never find. Stone houses, sleeping cats, boats pulled ashore — this is Viganj on a Tuesday morning.",
    image: "https://images.unsplash.com/photo-1533588789455-c0d2fce789bc?w=700&q=80",
    alt: "Small Croatian coastal village",
    color: "from-slate-900/60",
  },
];

export function NearbyExperiences() {
  return (
    <section id="experiences" className="bg-[--color-sand] py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mb-14">
          <SectionLabel>Beyond the Camp</SectionLabel>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-[--color-ink] max-w-2xl leading-tight">
            Endless Adventures, All Nearby
          </h2>
          <p className="mt-6 text-[--color-muted] text-lg max-w-xl leading-relaxed">
            Lovište is the perfect base for exploring one of Croatia&apos;s most unspoiled corners. Here&apos;s what&apos;s waiting for you.
          </p>
        </FadeIn>

        {/* Scrollable card row */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:-mx-8 lg:px-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="flex-shrink-0 w-72 lg:w-80 snap-start rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-500 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="320px"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${exp.color} to-transparent`} />

                {/* Distance badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[--color-sea]">
                    {exp.distance}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[--color-sea] mb-1">
                  {exp.subtitle}
                </p>
                <h3 className="font-display text-xl font-bold text-[--color-ink] mb-2">
                  {exp.title}
                </h3>
                <p className="text-[--color-muted] text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-[--color-muted]">
                  <span className="w-1 h-1 rounded-full bg-[--color-sea]" />
                  {exp.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint */}
        <FadeIn className="mt-6 flex items-center gap-3 text-[--color-muted]">
          <span className="font-mono text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
          <motion.span
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[--color-sea]"
          >
            →
          </motion.span>
        </FadeIn>
      </div>
    </section>
  );
}
