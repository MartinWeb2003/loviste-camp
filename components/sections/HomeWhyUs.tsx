"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  FaUmbrellaBeach,
  FaUsers,
  FaWifi,
  FaSun,
  FaFerry,
  FaWater,
} from "react-icons/fa6";

const stats = [
  {
    icon: FaUmbrellaBeach,
    stat: "50",
    unit: "m",
    label: "To the Beach",
    desc: "The Adriatic is right across the road. Sandy bay, crystal clear, warm all summer.",
  },
  {
    icon: FaUsers,
    stat: "4",
    unit: " gen.",
    label: "Family Legacy",
    desc: "Our grandparents first arrived in Viganj long before this stretch of coast was on any map.",
  },
  {
    icon: FaWifi,
    stat: "100",
    unit: "%",
    label: "Private & Quiet",
    desc: "We keep numbers low by design. Space, silence, and serenity are part of the offer.",
  },
  {
    icon: FaSun,
    stat: "2700",
    unit: "h",
    label: "Sun per Year",
    desc: "Lovište sits at 42° North — over 2,700 hours of sunshine per year. Long, golden days.",
  },
  {
    icon: FaFerry,
    stat: "12",
    unit: " min",
    label: "Ferry to Korčula",
    desc: "One of Croatia's finest medieval islands is a 12-minute ferry from Orebić.",
  },
  {
    icon: FaWater,
    stat: "27",
    unit: "°C",
    label: "Sea in Summer",
    desc: "Peak summer water temperature. Crystal clear visibility, calm bay, safe for all ages.",
  },
];

function CountUp({ target, unit }: { target: number; unit: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (!inView) {
      setValue(0);
      return;
    }
    const duration = 1600;
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
      {value.toLocaleString()}
      <span className="text-[--color-sea]">{unit}</span>
    </span>
  );
}

export function HomeWhyUs() {
  return (
    <section className="bg-[--color-ink] text-white py-44 lg:py-64">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center mb-28">
          <ScrollReveal variant="fade">
            <SectionLabel light className="justify-center">Why Lovište</SectionLabel>
          </ScrollReveal>
          <ScrollReveal variant="clip" delay={0.1}>
            <h2 className="font-display text-[clamp(2.8rem,7vw,6rem)] font-bold text-white leading-tight">
              Some Places Are Just Different
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade" delay={0.2}>
            <p className="mt-10 text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">
              Not another resort on the Dalmatian coast. This is a family home that opened its gates.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={i} variant="rise" delay={i * 0.08}>
                <div className="bg-[--color-ink] p-12 lg:p-16 group hover:bg-white/5 transition-colors duration-300 h-full">
                  <Icon className="text-[--color-sea] mb-8" size={28} />
                  <div className="font-display text-[clamp(3.5rem,6vw,5.5rem)] font-bold text-white leading-none mb-4 tracking-tight">
                    <CountUp target={parseInt(s.stat)} unit={s.unit} />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/35 mb-5 group-hover:text-[--color-sea] transition-colors">
                    {s.label}
                  </p>
                  <p className="text-white/45 text-base leading-relaxed group-hover:text-white/60 transition-colors">
                    {s.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
