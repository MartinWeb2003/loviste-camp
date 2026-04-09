import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { ScrollTextReveal } from "@/components/ui/ScrollTextReveal";
import { DramaticCTA } from "@/components/ui/DramaticCTA";
import {
  FaWater, FaAnchor, FaWineGlass,
  FaPersonBiking, FaPersonSwimming, FaMapLocationDot,
} from "react-icons/fa6";

/* ─────────────────────────────────────────────
   1. SURF — full-viewport image, text at bottom
───────────────────────────────────────────── */
function SurfSection() {
  return (
    <div id="surf">
      <div className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
        <Image
          src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&q=85"
          alt="Surfer riding a wave on the Adriatic"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-12 lg:px-24 pb-24 lg:pb-36 text-center">
          <ScrollReveal variant="fade">
            <div className="flex items-center justify-center gap-4 mb-12">
              <FaWater className="text-white/40" size={18} />
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-white/40">
                20 min by car · Orebić Beach
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="clip" delay={0.1}>
            <h2
              className="font-display font-bold text-white leading-[0.92] tracking-tight mb-12 max-w-3xl mx-auto"
              style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
            >
              Surf School
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade" delay={0.2}>
            <p
              className="text-white/60 leading-[1.95] max-w-sm mx-auto"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
            >
              The Pelješac channel produces reliable conditions that make Orebić one of the best surf spots in the Adriatic. Certified instructors, boards, and wetsuits to hire. Lessons for all levels, morning and afternoon.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   2. KORČULA — editorial text first, image below
───────────────────────────────────────────── */
function KorculaSection() {
  return (
    <div id="korcul" className="bg-white">
      <div className="pt-52 lg:pt-72 pb-28 lg:pb-40 text-center px-6">
        <ScrollReveal variant="fade">
          <div className="flex items-center justify-center gap-4 mb-12">
            <FaAnchor className="text-[--color-sea]" size={18} />
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[--color-sea]">
              12 min by ferry · Day Trip
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="clip" delay={0.1}>
          <h2
            className="font-display font-bold text-[--color-ink] leading-[0.92] tracking-tight max-w-3xl mx-auto mb-20"
            style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
          >
            Korčula Island
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="clip" delay={0.2}>
          <p
            className="font-display italic text-[--color-ink]/55 leading-[1.3] max-w-xl mx-auto mb-18"
            style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.3rem)" }}
          >
            The medieval walled town rises from the sea on its own small peninsula — carved stone, narrow lanes, the smell of grilled fish on the waterfront.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.2}>
          <p
            className="text-[--color-muted] leading-[1.95] max-w-md mx-auto mb-12"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
          >
            The ferry from Orebić takes twelve minutes. Orebić is twenty minutes by car from the camp. Walk the old town walls, visit the Cathedral of Saint Mark, find a konoba in one of the side lanes and eat mussels with local wine.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.3}>
          <p
            className="text-[--color-muted] leading-[1.95] max-w-md mx-auto"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
          >
            Return on the evening ferry with the sun behind you. It is an almost perfect day.
          </p>
        </ScrollReveal>
      </div>

      {/* Image below — parallax */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85"
        alt="Korčula old town rising from the sea"
        aspect="21/9"
        depth={18}
        sizes="100vw"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   3. WINE — wide image, then narrow centered text
───────────────────────────────────────────── */
function WineSection() {
  return (
    <div id="wine" className="bg-[--color-sand]">
      {/* Title */}
      <div className="pt-52 lg:pt-72 pb-24 lg:pb-36 text-center px-6">
        <ScrollReveal variant="fade">
          <div className="flex items-center justify-center gap-4 mb-12">
            <FaWineGlass className="text-[--color-sea]" size={18} />
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[--color-sea]">
              30–40 min by car · Dingač · Postup
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="clip" delay={0.1}>
          <h2
            className="font-display font-bold text-[--color-ink] leading-[0.92] tracking-tight max-w-3xl mx-auto"
            style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
          >
            Pelješac<br />Wine Tour
          </h2>
        </ScrollReveal>
      </div>

      {/* Wide image — parallax */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1920&q=85"
        alt="Terraced Pelješac vineyards on steep hillside"
        aspect="21/8"
        depth={18}
        sizes="100vw"
      />

      {/* Narrow centered text */}
      <div className="py-40 lg:py-56 px-6 text-center">
        <ScrollReveal variant="fade">
          <p
            className="text-[--color-ink] leading-[1.95] max-w-md mx-auto mb-12"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
          >
            The Pelješac peninsula produces some of the finest red wine in Croatia — Plavac Mali from the steep south-facing slopes of Dingač, classified as a protected designation of origin.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.1}>
          <p
            className="text-[--color-muted] leading-[1.95] max-w-md mx-auto mb-12"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
          >
            The drive itself is part of the experience: the road climbs over the spine of the peninsula through terraced vineyards.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.2}>
          <p
            className="text-[--color-muted] leading-[1.95] max-w-md mx-auto"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
          >
            Tastings at the family wineries are informal, generous, and often end with the owner telling you more about the land than any guidebook would. Bring a box for the drive home.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   4. KAYAKING — cinematic split (text left, image right)
───────────────────────────────────────────── */
function KayakingSection() {
  return (
    <div id="kayaking" className="bg-white">
      <div className="pt-52 lg:pt-72 pb-24 lg:pb-36 text-center px-6">
        <ScrollReveal variant="fade">
          <div className="flex items-center justify-center gap-4 mb-12">
            <FaPersonSwimming className="text-[--color-sea]" size={18} />
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[--color-sea]">
              Right at camp · Lovište Bay
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="clip" delay={0.1}>
          <h2
            className="font-display font-bold text-[--color-ink] leading-[0.92] tracking-tight max-w-3xl mx-auto"
            style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
          >
            Sea Kayaking
          </h2>
        </ScrollReveal>
      </div>

      {/* Split: text left, image right */}
      <div className="flex flex-col lg:flex-row" style={{ minHeight: "70vh" }}>
        {/* Text */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-12 lg:px-24 py-28 lg:py-40 bg-white">
          <ScrollReveal variant="slide-left" className="max-w-sm">
            <p
              className="text-[--color-ink] leading-[1.95] mb-12"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
            >
              The bay in front of the camp is one of the calmest stretches of water on the peninsula — clear, shallow, and enclosed enough to feel safe.
            </p>
            <p
              className="text-[--color-muted] leading-[1.95] mb-12"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
            >
              Guided tours take in hidden coves only reachable by water, sea caves along the limestone cliffs, and uninhabited beaches that face south and collect heat all day.
            </p>
            <p
              className="text-[--color-muted] leading-[1.95]"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
            >
              Half-day and full-day tours available. No experience necessary. Double kayaks for families with children.
            </p>
          </ScrollReveal>
        </div>

        {/* Image — right 55 % */}
        <ScrollReveal variant="scale" className="relative w-full lg:w-[55%] overflow-hidden" style={{ minHeight: "50vh" } as React.CSSProperties}>
          <Image
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=85"
            alt="Sea kayaking in crystal clear water"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </ScrollReveal>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   5. CYCLING — large distance stat + text
───────────────────────────────────────────── */
function CyclingSection() {
  return (
    <div id="cycling" className="bg-[--color-ink]">
      <div className="pt-52 lg:pt-72 pb-24 lg:pb-36 text-center px-6">
        <ScrollReveal variant="fade">
          <div className="flex items-center justify-center gap-4 mb-12">
            <FaPersonBiking className="text-[--color-sea]" size={18} />
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-white/40">
              5 min from camp · Coastal Route
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="clip" delay={0.1}>
          <h2
            className="font-display font-bold text-white leading-[0.92] tracking-tight max-w-3xl mx-auto"
            style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
          >
            Cycling the Peninsula
          </h2>
        </ScrollReveal>
      </div>

      {/* Stat + text */}
      <div className="pb-48 lg:pb-64 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start gap-20 lg:gap-32">
          {/* Large distance */}
          <ScrollReveal variant="rise" className="flex-shrink-0 text-center lg:text-left">
            <p
              className="font-display font-bold text-white leading-none"
              style={{ fontSize: "clamp(7rem, 14vw, 14rem)" }}
            >
              45
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[--color-sea] mt-3">
              km of coastal road
            </p>
          </ScrollReveal>
          {/* Description */}
          <div className="max-w-md pt-4">
            <ScrollReveal variant="fade" delay={0.1}>
              <p
                className="text-white/70 leading-[1.95] mb-12"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
              >
                The road west from Lovište follows the coast through a sequence of small bays, olive groves, and fishing hamlets that feel entirely untouched. Bikes for hire in Lovište village.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fade" delay={0.2}>
              <p
                className="text-white/50 leading-[1.95]"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
              >
                For more experienced cyclists, the climb over the spine of the peninsula rewards with extraordinary views. The descent to Dingač is steep — but what you find at the bottom makes it worth the effort.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Full-width image — parallax */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1920&q=85"
        alt="Cyclist on Dalmatian coastal road"
        aspect="21/8"
        depth={18}
        sizes="100vw"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   6. VILLAGES — pure typography, no images
───────────────────────────────────────────── */
function VillagesSection() {
  return (
    <div id="villages" className="bg-[--color-sand]">
      <div className="pt-52 lg:pt-72 pb-24 lg:pb-36 px-6 text-center">
        <ScrollReveal variant="fade">
          <div className="flex items-center justify-center gap-4 mb-12">
            <FaMapLocationDot className="text-[--color-sea]" size={18} />
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[--color-sea]">
              Walking distance
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="clip" delay={0.1}>
          <h2
            className="font-display font-bold text-[--color-ink] leading-[0.92] tracking-tight max-w-3xl mx-auto"
            style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
          >
            Viganj & Lovište Villages
          </h2>
        </ScrollReveal>
      </div>

      <div className="pb-52 lg:pb-72 px-6 text-center">
        {/* Large pull quote — scroll text reveal */}
        <ScrollTextReveal
          text='"Most visitors to Croatia never find this place. That is precisely its value."'
          className="font-display italic text-[--color-ink]/50 max-w-3xl mx-auto mb-28"
          style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
        />

        <ScrollReveal variant="fade" delay={0.1}>
          <p
            className="text-[--color-muted] leading-[1.95] max-w-md mx-auto mb-12"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
          >
            Walk five minutes from the camp to find stone houses unchanged in a century, boats pulled up onto the beach every morning, old men playing cards outside a bar that has operated in the same room for decades.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.2}>
          <p
            className="text-[--color-muted] leading-[1.95] max-w-md mx-auto"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
          >
            This is not a performance of Croatian village life. It is just village life. Come for a morning coffee and stay until lunch.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE WRAPPER
───────────────────────────────────────────── */
export function ExperiencesContent() {
  return (
    <div>
      {/* Intro */}
      <div className="py-48 lg:py-72 px-6 text-center bg-white">
        <ScrollReveal variant="clip">
          <p
            className="text-[--color-muted] leading-[1.95] max-w-xl mx-auto"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
          >
            You will not be bored. The peninsula has enough in it for two weeks of doing something different every day. And if you want to do nothing at all, the bay in front of the camp is reason enough.
          </p>
        </ScrollReveal>
      </div>

      <SurfSection />
      <div className="h-px bg-[--color-stone]" />
      <KorculaSection />
      <div className="h-px bg-[--color-stone]" />
      <WineSection />
      <div className="h-px bg-[--color-stone]" />
      <KayakingSection />
      <div className="h-px bg-[--color-stone]" />
      <CyclingSection />
      <div className="h-px bg-[--color-stone]" />
      <VillagesSection />

      <DramaticCTA
        preheading="The best base on Pelješac"
        title="Book Your"
        titleLine2="Adventure"
        body="Everything here is close. The question is only where to begin."
        ctaText="See Accommodation"
        ctaHref="/stay"
        image="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1920&q=85"
        imageAlt="Aerial view of Pelješac coast"
      />
    </div>
  );
}
