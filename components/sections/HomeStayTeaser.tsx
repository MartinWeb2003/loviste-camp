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
    <section className="bg-white pt-44 lg:pt-64 pb-0">
      {/* Header — inline styles guarantee centering regardless of motion.div wrapper */}
      <div className="mb-28 px-6">
        <ScrollReveal variant="fade">
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
            <SectionLabel>Where You&apos;ll Sleep</SectionLabel>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="clip" delay={0.1}>
          <h2
            className="font-display font-bold text-[--color-ink] leading-tight"
            style={{ fontSize: "clamp(2.8rem,7vw,6rem)", textAlign: "center" }}
          >
            Four Ways to Stay
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.2}>
          <p
            className="text-[--color-muted] text-xl leading-relaxed"
            style={{ textAlign: "center", maxWidth: "38rem", marginLeft: "auto", marginRight: "auto", marginTop: "2rem", marginBottom: "80px" }}
          >
            Whether you arrive in a campervan or want a fully serviced house, we have the right space for you.
          </p>
        </ScrollReveal>
      </div>

      {/* Cards — wider container, full width cards */}
      <div className="mx-auto px-6 lg:px-16 flex flex-col gap-6" style={{ maxWidth: "1400px" }}>
        {options.map((opt, i) => (
          <ScrollReveal key={i} variant="fade" delay={i * 0.08} className="w-full">
            <div
              className="group overflow-hidden bg-white flex flex-col lg:flex-row"
              style={{ boxShadow: "0 2px 24px 0 rgba(26,26,26,0.09)" }}
            >
              {/* Image — full width on mobile, 45% on desktop */}
              <div className="relative w-full lg:w-[45%] flex-shrink-0 overflow-hidden" style={{ minHeight: "300px", aspectRatio: "16/10" }}>
                <Image
                  src={opt.image}
                  alt={opt.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                {/* Top gradient so tag text stays legible */}
                <div
                  className="absolute inset-x-0 top-0 pointer-events-none"
                  style={{ height: "20%", background: "linear-gradient(to bottom, rgba(0,0,0,0.62) 0%, transparent 100%)" }}
                />
                {/* Tag — white text, no background */}
                <div className="absolute top-5 left-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white">
                    {opt.tag}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center px-12 lg:px-20 xl:px-28 py-14 lg:py-12 flex-1">
                <h3 className="font-display text-[clamp(1.8rem,2.8vw,2.6rem)] font-bold text-[--color-ink] leading-tight mb-5">
                  {opt.title}
                </h3>
                <p className="text-[--color-muted] text-lg leading-relaxed mb-8 max-w-md">
                  {opt.desc}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-[--color-stone] max-w-md">
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

      {/* CTA — dark band, clearly distinct from white section above */}
      <div className="bg-[--color-ink] mt-24 py-32 lg:py-44 px-6">
        <ScrollReveal variant="fade">
          <p
            className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/30"
            style={{ textAlign: "center", marginBottom: "1.5rem" }}
          >
            Your Adriatic summer starts here
          </p>
        </ScrollReveal>
        <ScrollReveal variant="clip" delay={0.1}>
          <h3
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2.2rem,5vw,4.5rem)", textAlign: "center", marginBottom: "2.5rem" }}
          >
            Ready to Book?
          </h3>
        </ScrollReveal>
        <ScrollReveal variant="rise" delay={0.2}>
          <div style={{ textAlign: "center" }}>
            <Link
              href="/stay"
              className="group inline-flex items-center gap-5 bg-white text-[--color-sea] font-semibold uppercase tracking-[0.22em] px-16 py-7 text-xs hover:bg-[--color-sea] hover:text-white transition-all duration-500"
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
