import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const options = [
  {
    title: "Camping Plots",
    tag: "Bring your van",
    desc: "Shaded pitches with 16A hookup, water & drainage. Designed for campervans and motorhomes of every size.",
    from: "From €35 / night",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
    alt: "Campervan parked in shade",
  },
  {
    title: "Guest Houses",
    tag: "Fully furnished",
    desc: "Four stone guest houses with private sea-view terraces, full kitchen, and daily housekeeping.",
    from: "From €120 / night",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
    alt: "Stone house with terrace",
  },
  {
    title: "Private House",
    tag: "Sleep the whole family",
    desc: "Our family house in Lovište, available for weekly rental. Space for up to 10 guests, garden, and direct sea access.",
    from: "From €850 / week",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    alt: "Private house in Loviste",
  },
  {
    title: "Apartments in Viganj",
    tag: "Village life",
    desc: "Several self-catering apartments in the neighbouring village of Viganj — windsurf capital of the Adriatic.",
    from: "From €75 / night",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    alt: "Apartment interior with sea view",
  },
];

export function HomeStayTeaser() {
  return (
    <section className="bg-white py-44 lg:py-64">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-28 text-center">
          <ScrollReveal variant="fade">
            <SectionLabel className="justify-center">Where You&apos;ll Sleep</SectionLabel>
          </ScrollReveal>
          <ScrollReveal variant="clip" delay={0.1}>
            <h2 className="font-display text-[clamp(2.8rem,7vw,6rem)] font-bold text-[--color-ink] leading-tight">
              Four Ways to Stay
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade" delay={0.2}>
            <p className="mt-10 text-[--color-muted] text-xl max-w-2xl mx-auto leading-relaxed">
              Whether you arrive in a campervan or want a fully serviced house, we have the right space for you.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[--color-stone]">
          {options.map((opt, i) => (
            <ScrollReveal key={i} variant="scale" delay={i * 0.1}>
              <div className="bg-white group overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={opt.image}
                    alt={opt.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[--color-sea]">
                      {opt.tag}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="p-12 lg:p-14">
                  <h3 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-[--color-ink] leading-tight mb-6">
                    {opt.title}
                  </h3>
                  <p className="text-[--color-muted] text-lg leading-relaxed mb-8">
                    {opt.desc}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-[--color-stone]">
                    <span className="font-mono text-sm text-[--color-sea]">{opt.from}</span>
                    <Link
                      href="/stay"
                      className="font-mono text-xs uppercase tracking-[0.2em] text-[--color-ink] hover:text-[--color-sea] transition-colors flex items-center gap-2"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="rise" delay={0.1}>
          <div className="mt-20 text-center">
            <Link
              href="/stay"
              className="group inline-flex items-center gap-5 bg-[--color-sea] text-white font-semibold uppercase tracking-[0.22em] px-16 py-7 text-xs hover:bg-[--color-sea-hover] transition-all duration-400"
            >
              View All Accommodation
              <span className="transition-transform duration-400 group-hover:translate-x-2 inline-block">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
