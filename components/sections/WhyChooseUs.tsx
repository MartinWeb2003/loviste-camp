"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const benefits = [
  {
    stat: "50",
    unit: "m",
    label: "To the Beach",
    description: "The Adriatic is literally across the road. No driving, no searching — just morning swims at your doorstep.",
  },
  {
    stat: "4",
    unit: " gen.",
    label: "Family Legacy",
    description: "Four generations have called this land home. That's not a marketing line — it's who we are.",
  },
  {
    stat: "100",
    unit: "%",
    label: "Private & Peaceful",
    description: "Small-scale by design. We keep our numbers low so every guest has space, silence, and serenity.",
  },
  {
    stat: "42",
    unit: "°N",
    label: "Mediterranean Sun",
    description: "At 42° North, Lovište enjoys over 2,700 hours of sunshine per year. Long, golden, warm days.",
  },
  {
    stat: "12",
    unit: " min",
    label: "Ferry to Korčula",
    description: "One of Croatia's most beautiful medieval islands is a 12-minute ferry ride from Orebić.",
  },
  {
    stat: "27",
    unit: "°C",
    label: "Sea Temperature",
    description: "The sea reaches 27°C in peak summer. Crystal clarity, warm water — perfect for families.",
  },
];

function CountUp({ target, unit }: { target: number; unit: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value}
      <span className="text-[--color-sea]">{unit}</span>
    </span>
  );
}

export function WhyChooseUs() {
  return (
    <section id="why" className="bg-[--color-ink] text-white py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionLabel light>Why Lovište</SectionLabel>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-white max-w-2xl leading-tight">
            Some Places Are Just Different
          </h2>
          <p className="mt-6 text-white/60 text-lg max-w-xl leading-relaxed">
            Not just another camp on the Dalmatian coast. Here&apos;s what sets Camp Lovište apart from everything else you&apos;ve considered.
          </p>
        </FadeIn>

        <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {benefits.map((b, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-[--color-ink] p-8 lg:p-10 hover:bg-white/5 transition-colors duration-300 h-full group">
                {/* Stat */}
                <div className="font-display text-[clamp(3rem,6vw,5rem)] font-bold text-white leading-none mb-2 tracking-tight">
                  <CountUp
                    target={parseInt(b.stat)}
                    unit={b.unit}
                  />
                </div>
                {/* Label */}
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-3 group-hover:text-[--color-sea] transition-colors">
                  {b.label}
                </p>
                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  {b.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
