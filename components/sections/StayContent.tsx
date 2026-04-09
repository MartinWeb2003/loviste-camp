import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { DramaticCTA } from "@/components/ui/DramaticCTA";
import {
  FaBolt, FaDroplet, FaTree, FaWifi, FaFireBurner, FaCar,
  FaKitchenSet, FaSnowflake, FaBed, FaShower, FaBroom,
  FaUmbrellaBeach, FaHouse, FaPeopleGroup, FaLeaf, FaWater,
  FaCity, FaWind,
} from "react-icons/fa6";

/* ─────────────────────────────────────────────
   CAMPING — full-viewport cinematic split
───────────────────────────────────────────── */
function CampingSection() {
  const features = [
    { icon: FaBolt, label: "16A electric hookup" },
    { icon: FaDroplet, label: "Fresh water & drainage" },
    { icon: FaTree, label: "Shade from mature trees" },
    { icon: FaWifi, label: "Wi-Fi across the site" },
    { icon: FaFireBurner, label: "Communal BBQ area" },
    { icon: FaCar, label: "Vehicle stays on-pitch" },
  ];

  return (
    <div id="camping">
      {/* Full-viewport split */}
      <div className="flex flex-col lg:flex-row" style={{ minHeight: "100vh" }}>
        {/* Image — left 55 % */}
        <ScrollReveal variant="scale" className="relative w-full lg:w-[55%] overflow-hidden" style={{ minHeight: "50vh" } as React.CSSProperties}>
          <Image
            src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=1600&q=85"
            alt="Campervan pitched under mature trees"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </ScrollReveal>

        {/* Text — right 45 % */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-12 lg:px-24 py-28 lg:py-40 bg-white">
          <ScrollReveal variant="fade">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[--color-sea] mb-12">
              Bring your van
            </p>
          </ScrollReveal>
          <ScrollReveal variant="clip" delay={0.1}>
            <h2
              className="font-display font-bold text-[--color-ink] leading-[0.92] tracking-tight mb-10 max-w-sm"
              style={{ fontSize: "clamp(3rem, 5vw, 5.5rem)" }}
            >
              Camping Plots
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade" delay={0.15}>
            <p className="font-mono text-sm text-[--color-sea] mb-14">From €35 / night</p>
          </ScrollReveal>

          <ScrollReveal variant="fade" delay={0.2}>
            <p
              className="text-[--color-muted] leading-[1.95] mb-10 max-w-sm"
              style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}
            >
              Spacious, shaded pitches across two terraced levels. Every plot is level, properly connected, and surrounded by trees that have been growing here for decades.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade" delay={0.28}>
            <p
              className="text-[--color-muted] leading-[1.95] max-w-sm"
              style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}
            >
              You are not parked beside your neighbour — each pitch has its own space and its own view of the sea.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Second image full width — parallax */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1600&q=85"
        alt="Campsite at dusk with firepit"
        aspect="21/7"
        depth={16}
        sizes="100vw"
      />

      {/* Feature strip */}
      <div className="bg-[--color-sand] py-32 lg:py-44 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <ScrollReveal key={i} variant="rise" delay={i * 0.07}>
                <div className="flex flex-col items-center text-center gap-4">
                  <Icon className="text-[--color-sea]" size={22} />
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-[--color-muted] leading-snug">
                    {f.label}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GUEST HOUSES — editorial centered column
───────────────────────────────────────────── */
function GuestHousesSection() {
  const features = [
    { icon: FaKitchenSet, label: "Fully equipped kitchen" },
    { icon: FaUmbrellaBeach, label: "Sea-view terrace" },
    { icon: FaSnowflake, label: "Air conditioning" },
    { icon: FaBed, label: "Linen & towels" },
    { icon: FaShower, label: "En-suite bathroom" },
    { icon: FaBroom, label: "Daily housekeeping" },
  ];

  return (
    <div id="guesthouses" className="bg-white">
      {/* Centered title block */}
      <div className="pt-52 lg:pt-72 pb-24 lg:pb-36 text-center px-6">
        <ScrollReveal variant="fade">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[--color-sea] mb-12">
            Fully serviced
          </p>
        </ScrollReveal>
        <ScrollReveal variant="clip" delay={0.1}>
          <h2
            className="font-display font-bold text-[--color-ink] leading-[0.92] tracking-tight max-w-3xl mx-auto"
            style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
          >
            Guest Houses
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.2}>
          <p className="font-mono text-sm text-[--color-sea] mt-12">From €120 / night</p>
        </ScrollReveal>
      </div>

      {/* Wide image — parallax */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=85"
        alt="Stone guest house terrace overlooking the sea"
        aspect="16/7"
        depth={16}
        sizes="100vw"
      />

      {/* Narrow centered editorial text */}
      <div className="py-40 lg:py-56 px-6 text-center">
        <ScrollReveal variant="clip">
          <p
            className="font-display italic text-[--color-ink]/60 leading-[1.3] max-w-xl mx-auto mb-16"
            style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}
          >
            Four stone guest houses built into the hillside, each one facing the sea.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.15}>
          <p
            className="text-[--color-muted] leading-[1.95] max-w-md mx-auto mb-12"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
          >
            Renovated to a high standard while keeping the original character of the stone — thick walls, natural materials, the particular cool that only old buildings have.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.25}>
          <p
            className="text-[--color-muted] leading-[1.95] max-w-md mx-auto"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
          >
            Every house has a private terrace, full kitchen, air conditioning, and daily housekeeping. Sleeps four to six guests comfortably.
          </p>
        </ScrollReveal>
      </div>

      {/* Feature strip */}
      <div className="bg-[--color-sand] py-32 lg:py-44 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <ScrollReveal key={i} variant="rise" delay={i * 0.07}>
                <div className="flex flex-col items-center text-center gap-4">
                  <Icon className="text-[--color-sea]" size={22} />
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-[--color-muted] leading-snug">
                    {f.label}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Image pair */}
      <div className="grid grid-cols-2 gap-px">
        {[
          { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85", alt: "Guest house interior" },
          { src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=900&q=85", alt: "Bedroom in stone house" },
        ].map((img, i) => (
          <ScrollReveal key={i} variant="scale" delay={i * 0.12}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="50vw" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PRIVATE HOUSE — mosaic + large stat
───────────────────────────────────────────── */
function PrivateHouseSection() {
  return (
    <div id="house" className="bg-[--color-sand]">
      {/* Centered title */}
      <div className="pt-52 lg:pt-72 pb-24 lg:pb-36 text-center px-6">
        <ScrollReveal variant="fade">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[--color-sea] mb-12">
            The whole house
          </p>
        </ScrollReveal>
        <ScrollReveal variant="clip" delay={0.1}>
          <h2
            className="font-display font-bold text-[--color-ink] leading-[0.92] tracking-tight max-w-3xl mx-auto"
            style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
          >
            Private House,<br />Lovište
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.2}>
          <p className="font-mono text-sm text-[--color-sea] mt-12">From €850 / week</p>
        </ScrollReveal>
      </div>

      {/* Mosaic: 1 large left, 2 stacked right */}
      <div className="grid grid-cols-2 gap-px">
        <ScrollReveal variant="scale">
          <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=85"
              alt="Private house exterior"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </ScrollReveal>
        <div className="flex flex-col gap-px">
          {[
            { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=85", alt: "House garden and sea" },
            { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=85", alt: "Large kitchen interior" },
          ].map((img, i) => (
            <ScrollReveal key={i} variant="scale" delay={i * 0.12} className="relative overflow-hidden flex-1">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="50vw" />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Large stat + description */}
      <div className="py-40 lg:py-56 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-20 lg:gap-32">
          {/* Big number */}
          <ScrollReveal variant="rise" className="flex-shrink-0 text-center lg:text-left">
            <p
              className="font-display font-bold text-[--color-sea] leading-none tracking-tight"
              style={{ fontSize: "clamp(7rem, 14vw, 14rem)" }}
            >
              10
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[--color-muted] mt-3">
              Guests
            </p>
          </ScrollReveal>
          {/* Text */}
          <div className="max-w-md">
            <ScrollReveal variant="fade" delay={0.1}>
              <p
                className="text-[--color-ink] leading-[1.95] mb-10"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
              >
                This is not a holiday rental converted from something else. It is a house that has belonged to this family for generations, and it feels like it.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fade" delay={0.2}>
              <p
                className="text-[--color-muted] leading-[1.95] mb-10"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
              >
                High ceilings, original stone floors, a kitchen built for actually cooking in. The garden runs down to the sea wall.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fade" delay={0.3}>
              <div className="flex flex-wrap gap-x-10 gap-y-5 pt-8 border-t border-[--color-stone]">
                {[
                  { icon: FaHouse, label: "Exclusive use" },
                  { icon: FaLeaf, label: "Garden to sea" },
                  { icon: FaWater, label: "Waterfront access" },
                  { icon: FaCar, label: "Private parking" },
                ].map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <Icon className="text-[--color-sea]" size={14} />
                      <span className="font-mono text-xs uppercase tracking-[0.15em] text-[--color-muted]">
                        {f.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   APARTMENTS — text-first reveal
───────────────────────────────────────────── */
function ApartmentsSection() {
  return (
    <div id="apartments" className="bg-white">
      {/* Editorial text block */}
      <div className="pt-52 lg:pt-72 pb-40 lg:pb-56 text-center px-6">
        <ScrollReveal variant="fade">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[--color-sea] mb-12">
            Village life in Viganj
          </p>
        </ScrollReveal>
        <ScrollReveal variant="clip" delay={0.1}>
          <h2
            className="font-display font-bold text-[--color-ink] leading-[0.92] tracking-tight max-w-3xl mx-auto mb-18"
            style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
          >
            Apartments in Viganj
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.2}>
          <p className="font-mono text-sm text-[--color-sea] mb-24">From €75 / night</p>
        </ScrollReveal>

        <ScrollReveal variant="clip" delay={0.15}>
          <p
            className="font-display italic text-[--color-ink]/60 leading-[1.3] max-w-xl mx-auto mb-16"
            style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}
          >
            Several self-catering apartments in the neighbouring village of Viganj — the windsurf capital of the Adriatic.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.25}>
          <p
            className="text-[--color-muted] leading-[1.95] max-w-md mx-auto mb-12"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
          >
            Viganj is a different kind of place to Lovište. Livelier, with a long pebble beach and a constant breeze that draws windsurfers from across Europe.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={0.35}>
          <p
            className="text-[--color-muted] leading-[1.95] max-w-md mx-auto"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
          >
            Our apartments range from studios to two-bedroom flats, all with balconies and kitchen facilities. If you want to be in the middle of village life rather than away from it, Viganj is the right choice.
          </p>
        </ScrollReveal>
      </div>

      {/* Panoramic image — parallax */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85"
        alt="Apartment balcony overlooking Viganj village and sea"
        aspect="21/9"
        depth={16}
        sizes="100vw"
      />

      {/* Features */}
      <div className="bg-[--color-sand] py-32 lg:py-44 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12">
          {[
            { icon: FaCity, label: "Village centre" },
            { icon: FaWind, label: "Windsurf beach" },
            { icon: FaKitchenSet, label: "Self-catering" },
            { icon: FaUmbrellaBeach, label: "Private balcony" },
            { icon: FaWifi, label: "Wi-Fi included" },
            { icon: FaWater, label: "50m to beach" },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <ScrollReveal key={i} variant="rise" delay={i * 0.07}>
                <div className="flex flex-col items-center text-center gap-4">
                  <Icon className="text-[--color-sea]" size={22} />
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-[--color-muted] leading-snug">
                    {f.label}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Image pair */}
      <div className="grid grid-cols-2 gap-px">
        {[
          { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=85", alt: "Apartment living area" },
          { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=85", alt: "Viganj beach" },
        ].map((img, i) => (
          <ScrollReveal key={i} variant="scale" delay={i * 0.12}>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="50vw" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE WRAPPER
───────────────────────────────────────────── */
export function StayContent() {
  return (
    <div>
      {/* Intro */}
      <div className="py-48 lg:py-72 px-6 text-center bg-white">
        <ScrollReveal variant="clip">
          <p
            className="text-[--color-muted] leading-[1.95] max-w-xl mx-auto"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
          >
            Four distinct types of accommodation — from a pitch under the fig trees to the full family house on the waterfront. All run by the same family, with the same care.
          </p>
        </ScrollReveal>
      </div>

      <div className="h-px bg-[--color-stone]" />
      <CampingSection />
      <div className="h-px bg-[--color-stone]" />
      <GuestHousesSection />
      <div className="h-px bg-[--color-stone]" />
      <PrivateHouseSection />
      <div className="h-px bg-[--color-stone]" />
      <ApartmentsSection />

      <DramaticCTA
        preheading="The Adriatic is waiting"
        title="Reserve Your"
        titleLine2="Stay"
        body="No booking platforms. No fees. A family who answers the phone. We respond within 24 hours."
        ctaText="Contact Us to Book"
        ctaHref="mailto:info@camploviste.hr"
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85"
        imageAlt="Crystal clear Adriatic sea"
      />
    </div>
  );
}
