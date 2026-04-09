import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface DramaticCTAProps {
  preheading: string;
  title: string;
  titleLine2?: string;
  body: string;
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

export function DramaticCTA({
  preheading,
  title,
  titleLine2,
  body,
  ctaText,
  ctaHref,
  image,
  imageAlt,
}: DramaticCTAProps) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "92vh" }}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black/85" />

      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-40"
        style={{ minHeight: "92vh" }}
      >
        <ScrollReveal variant="fade" delay={0.1}>
          <p className="font-mono text-[10px] uppercase tracking-[0.6em] text-white/25 mb-20">
            {preheading}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="clip" delay={0.2}>
          <h2
            className="font-display font-bold text-white leading-[0.88] tracking-tight mb-14 max-w-5xl mx-auto"
            style={{ fontSize: "clamp(4.5rem, 14vw, 12rem)" }}
          >
            {title}
            {titleLine2 && (
              <>
                <br />
                <span className="italic font-normal text-white/65">
                  {titleLine2}
                </span>
              </>
            )}
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={0.35}>
          <p
            className="text-white/45 max-w-xs mx-auto leading-[2] mb-24"
            style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}
          >
            {body}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={0.5}>
          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-6 bg-white text-[--color-sea] font-semibold uppercase tracking-[0.25em] px-20 py-8 text-xs hover:bg-[--color-sea] hover:text-white transition-all duration-500"
          >
            {ctaText}
            <span className="transition-transform duration-400 group-hover:translate-x-2 inline-block">
              →
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
