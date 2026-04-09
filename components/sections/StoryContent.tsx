import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DramaticCTA } from "@/components/ui/DramaticCTA";

const chapters = [
  {
    era: "1950s — 1970s",
    title: "Roots in Viganj",
    intro: "Our grandparents arrived in Viganj when the village had no road, no electricity, and no name on any tourist map.",
    paragraphs: [
      "They came for the fishing and stayed for the land — the fig trees, the limestone terraces dropping to the sea, the particular quality of the light in the late afternoon when the Adriatic turns the colour of old bronze.",
      "The family plot was cleared by hand, stone by stone. A small house was built into the hillside in the way people had been building here for centuries: thick walls to hold the cool in summer, a south-facing terrace to catch the winter sun.",
      "They had no ambition to build a business. They built a home. Everything else came later.",
    ],
    imageWide: {
      src: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1600&q=85",
      alt: "Stone path along the Dalmatian coast at golden hour",
      caption: "The coastline our grandparents walked every morning.",
    },
    imagePortrait: {
      src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=85",
      alt: "Mediterranean bay with clear water and pine trees",
      caption: "The bay in front of the camp — unchanged.",
    },
  },
  {
    era: "1980s — 2000s",
    title: "Building Something Real",
    intro: "Our parents grew up swimming in that same bay, climbing those same fig trees, knowing every fisherman in the village by name.",
    paragraphs: [
      "When they took over the land in the 1980s, they didn't want to leave it. So they didn't.",
      "The first guest house went up in 1986, carved from the same limestone as the family home. Then a second. Then the first camping pitches were cleared — level, shaded terraces with room for a van and a view of the water.",
      "The camp filled slowly, word of mouth. The same families returned every summer. Children who arrived as toddlers came back as teenagers, then as parents themselves.",
    ],
    imageWide: {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85",
      alt: "Rocky coastal mountains above the Adriatic sea",
      caption: "The view from the upper terraces of the camp.",
    },
    imagePortrait: {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
      alt: "Old stone wall with climbing plants",
      caption: "The original stone walls that still define the camp.",
    },
  },
  {
    era: "Today",
    title: "The Camp, Perfected",
    intro: "Now it's our turn. We've kept everything that made this place worth coming back to — and added everything a modern traveller needs.",
    paragraphs: [
      "The silence. The fig trees. The feeling of arriving somewhere familiar for the first time. These we have kept exactly as they were.",
      "The camping pitches are now fully serviced with electric hookups and water connections. The guest houses have proper kitchens, air conditioning, and private sea-view terraces. Our family house in Lovište is available for larger groups.",
      "For guests who want to be in the heart of village life, we have apartments in the neighbouring settlement of Viganj — steps from the beach and the windsurfers.",
    ],
    imageWide: {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85",
      alt: "Crystal clear turquoise Adriatic water from above",
      caption: "The water across the road from the camp.",
    },
    imagePortrait: {
      src: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=900&q=85",
      alt: "Campervan in a peaceful shaded clearing",
      caption: "The camp today — space, shade, and sea.",
    },
  },
];

export function StoryContent() {
  return (
    <div className="bg-white">

      {/* Opening quote */}
      <div className="py-52 lg:py-72 px-6 text-center">
        <ScrollReveal variant="clip">
          <blockquote
            className="font-display italic text-[--color-ink]/60 leading-[1.25] max-w-3xl mx-auto"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
          >
            &ldquo;In Lovište, time moves at the rhythm of the sea.
            <br />
            It always has. It always will.&rdquo;
          </blockquote>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.25}>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[--color-sea] mt-14">
            — The Family, Viganj
          </p>
        </ScrollReveal>
      </div>

      {/* Chapters */}
      {chapters.map((ch, ci) => (
        <div key={ci} className={ci % 2 === 0 ? "bg-white" : "bg-[--color-sand]"}>

          {/* Era + Title */}
          <div className="pt-52 lg:pt-72 pb-24 lg:pb-36 px-6 text-center">
            <ScrollReveal variant="fade">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-[--color-sea] mb-12">
                {ch.era}
              </p>
            </ScrollReveal>
            <ScrollReveal variant="clip" delay={0.1}>
              <h2
                className="font-display font-bold text-[--color-ink] leading-[0.93] tracking-tight max-w-4xl mx-auto"
                style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
              >
                {ch.title}
              </h2>
            </ScrollReveal>
          </div>

          {/* Wide image — edge to edge */}
          <ScrollReveal variant="scale">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21/8" }}>
              <Image
                src={ch.imageWide.src}
                alt={ch.imageWide.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="px-6 lg:px-16 pt-6 pb-0">
              <p className="font-mono text-xs text-[--color-muted] tracking-[0.12em] max-w-7xl mx-auto">
                {ch.imageWide.caption}
              </p>
            </div>
          </ScrollReveal>

          {/* Chapter intro */}
          <div className="py-40 lg:py-56 px-6 text-center">
            <ScrollReveal variant="clip">
              <p
                className="font-display italic text-[--color-ink]/70 leading-[1.35] max-w-2xl mx-auto"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                {ch.intro}
              </p>
            </ScrollReveal>
          </div>

          {/* Text + portrait image */}
          <div className="pb-52 lg:pb-72 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start">

              {/* Text */}
              <div className="space-y-12 max-w-md">
                {ch.paragraphs.map((p, pi) => (
                  <ScrollReveal key={pi} variant="fade" delay={pi * 0.1}>
                    <p
                      className="text-[--color-muted] leading-[1.95]"
                      style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
                    >
                      {p}
                    </p>
                  </ScrollReveal>
                ))}
                <ScrollReveal variant="fade" delay={0.3}>
                  <div className="pt-8">
                    <div className="w-16 h-px bg-[--color-sea]" />
                  </div>
                </ScrollReveal>
              </div>

              {/* Portrait image */}
              <ScrollReveal variant="slide-right" delay={0.15} className="lg:sticky lg:top-32">
                <div className="relative overflow-hidden w-full" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={ch.imagePortrait.src}
                    alt={ch.imagePortrait.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <p className="font-mono text-xs text-[--color-muted] tracking-[0.12em] mt-6">
                  {ch.imagePortrait.caption}
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Chapter transition */}
          {ci < chapters.length - 1 && (
            <FadeIn>
              <div className="px-6 lg:px-16 pb-0">
                <div className="max-w-7xl mx-auto flex items-center gap-8">
                  <div className="flex-1 h-px bg-[--color-stone]" />
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[--color-muted]">
                    {chapters[ci + 1].era}
                  </span>
                  <div className="flex-1 h-px bg-[--color-stone]" />
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      ))}

      {/* Dramatic CTA */}
      <DramaticCTA
        preheading="Ready to visit?"
        title="Be Part of"
        titleLine2="the Story"
        body="A place like this doesn't stay a secret forever. Come while it's still exactly as we describe it."
        ctaText="See Where You'll Stay"
        ctaHref="/stay"
        image="https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1920&q=85"
        imageAlt="Golden light on the Dalmatian coast"
      />
    </div>
  );
}
