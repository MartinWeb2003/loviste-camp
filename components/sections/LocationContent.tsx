import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DramaticCTA } from "@/components/ui/DramaticCTA";
import {
  FaUmbrellaBeach, FaBasketShopping, FaFerry, FaGasPump,
  FaHospital, FaUtensils, FaLandmark, FaPlane,
  FaBus, FaCar, FaRoad,
} from "react-icons/fa6";

const nearbyItems = [
  { icon: FaUmbrellaBeach, label: "The Beach",      dist: "50 m",   note: "Sandy bay directly across the road. Warm, clear, shallow.", highlight: true },
  { icon: FaBasketShopping, label: "Grocery Store", dist: "2 km",   note: "Well-stocked shop in Lovište village. Open daily in season.", highlight: false },
  { icon: FaFerry,          label: "Korčula Ferry",  dist: "12 min", note: "Drive to Orebić (20 min), then 12-min ferry.", highlight: false },
  { icon: FaGasPump,        label: "Petrol Station", dist: "12 km",  note: "Orebić town, full services.", highlight: false },
  { icon: FaHospital,       label: "Medical Centre", dist: "12 km",  note: "Orebić health centre. Pharmacy next door.", highlight: false },
  { icon: FaUtensils,       label: "Restaurants",    dist: "500 m",  note: "Several konobas — fresh seafood, local wine.", highlight: false },
  { icon: FaLandmark,       label: "Dubrovnik",      dist: "90 km",  note: "UNESCO Old Town. Day trip. 1.5 h drive.", highlight: false },
  { icon: FaPlane,          label: "Airport",         dist: "95 km", note: "Dubrovnik Airport. International connections.", highlight: false },
];

const routes = [
  {
    icon: FaCar,
    number: "01",
    title: "By Car",
    route: "From Dubrovnik",
    desc: "Take the coastal road north through Ston, then follow the peninsula road through Orebić and continue west along the coast to Lovište.",
    note: "Total approximately 90 minutes. The road is scenic — allow extra time.",
    mono: "GPS: 42.9665° N, 17.0219° E",
  },
  {
    icon: FaFerry,
    number: "02",
    title: "By Ferry",
    route: "From Split",
    desc: "Ferry from Split direct to Trpanj on Pelješac (90 min), then drive 45 minutes west to Lovište. Alternatively, via Stari Grad on Hvar.",
    note: "Check jadrolinija.hr for current timetables.",
    mono: "Split → Trpanj: 90 min sailing",
  },
  {
    icon: FaBus,
    number: "03",
    title: "By Bus",
    route: "From Dubrovnik or Split",
    desc: "Intercity buses serve Orebić from both Dubrovnik and Split. From Orebić, hire car or taxi for the final stretch to Lovište.",
    note: "We can arrange a pick-up from Orebić — just ask when booking.",
    mono: "Bus: Dubrovnik → Orebić",
  },
  {
    icon: FaRoad,
    number: "04",
    title: "From Zagreb",
    route: "Via the Pelješac Bridge",
    desc: "Take the A1 motorway south to Split, then the Pelješac Bridge (opened 2022) connects the peninsula to the mainland — no ferry crossing needed from the north.",
    note: "Total journey from Zagreb approximately 5–6 hours.",
    mono: "A1 motorway → Pelješac Bridge",
  },
];

export function LocationContent() {
  return (
    <div className="bg-white">

      {/* Intro */}
      <div className="py-48 lg:py-72 px-6 text-center">
        <ScrollReveal variant="clip">
          <p
            className="text-[--color-muted] leading-[1.95] max-w-xl mx-auto"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
          >
            Lovište sits at the very tip of the Pelješac peninsula — the end of the road in the best possible sense. Quiet, unhurried, and perfectly positioned for everything the region has to offer.
          </p>
        </ScrollReveal>
      </div>

      {/* Full-width map */}
      <ScrollReveal variant="scale">
        <div className="w-full overflow-hidden" style={{ height: "65vh", minHeight: "420px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.8!2d17.0!3d42.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134ab5fd45bfffff%3A0x400aceff4bbd180!2sLovi%C5%A1te%2C%20Croatia!5e0!3m2!1sen!2shr!4v1700000000000!5m2!1sen!2shr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Camp Lovište location"
          />
        </div>
        <div className="bg-[--color-sand] px-6 lg:px-16 py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-mono text-xs text-[--color-muted] tracking-[0.15em]">
              42.9665° N, 17.0219° E · Lovište, Pelješac, Croatia
            </p>
            <a
              href="https://maps.google.com/?q=Loviste,Croatia"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[--color-sea] hover:underline tracking-[0.15em]"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Distances ─────────────────────── */}
      <div className="py-48 lg:py-72 bg-white px-6 lg:px-16">
        <div className="mb-24 lg:mb-36 text-center">
          <ScrollReveal variant="fade">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[--color-sea] mb-12">
              Everything Close
            </p>
          </ScrollReveal>
          <ScrollReveal variant="clip" delay={0.1}>
            <h2
              className="font-display font-bold text-[--color-ink] leading-[0.93] tracking-tight max-w-3xl mx-auto"
              style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
            >
              Nothing Far Away
            </h2>
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[--color-stone]">
          {nearbyItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={i} variant="rise" delay={i * 0.06}>
                <div
                  className={`h-full p-12 lg:p-14 ${item.highlight ? "bg-[--color-sea-light]" : "bg-white"} hover:bg-[--color-sand] transition-colors duration-300`}
                >
                  <Icon className="text-[--color-sea] mb-10" size={20} />
                  <p
                    className="font-display font-bold text-[--color-ink] leading-tight mb-4"
                    style={{ fontSize: "clamp(2rem, 3vw, 3rem)" }}
                  >
                    {item.dist}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--color-sea] mb-6">
                    {item.label}
                  </p>
                  <p
                    className="text-[--color-muted] leading-[1.85]"
                    style={{ fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)" }}
                  >
                    {item.note}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* ── Aerial quote image ─────────────── */}
      <ScrollReveal variant="scale">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21/8" }}>
          <Image
            src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1920&q=80"
            alt="Aerial view of Pelješac peninsula"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45 flex items-center justify-center px-6">
            <ScrollReveal variant="clip">
              <p
                className="font-display italic text-white text-center max-w-3xl mx-auto leading-[1.2]"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
              >
                &ldquo;The end of the road in the best possible sense.&rdquo;
              </p>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>

      {/* ── How to Reach Us ─── */}
      <div className="bg-[--color-sand] py-48 lg:py-72 px-6 lg:px-16">
        <div className="mb-24 lg:mb-36 text-center">
          <ScrollReveal variant="fade">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[--color-sea] mb-12">
              Getting Here
            </p>
          </ScrollReveal>
          <ScrollReveal variant="clip" delay={0.1}>
            <h2
              className="font-display font-bold text-[--color-ink] leading-[0.93] tracking-tight max-w-3xl mx-auto"
              style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
            >
              How to Reach Us
            </h2>
          </ScrollReveal>
        </div>

        {/* Stacked rows */}
        <div className="max-w-4xl mx-auto divide-y divide-[--color-stone]">
          {routes.map((route, i) => {
            const Icon = route.icon;
            return (
              <ScrollReveal key={i} variant="fade" delay={i * 0.1}>
                <div className="py-20 lg:py-28 flex flex-col sm:flex-row gap-12 sm:gap-20 items-start">
                  {/* Number + icon */}
                  <div className="flex-shrink-0 flex flex-col items-center sm:items-start gap-4 sm:w-24">
                    <p className="font-mono text-[--color-sea] text-lg tracking-[0.1em]">
                      {route.number}
                    </p>
                    <Icon className="text-[--color-sea]" size={22} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 max-w-lg">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-[--color-muted] mb-5">
                      {route.route}
                    </p>
                    <h3
                      className="font-display font-bold text-[--color-ink] leading-tight mb-10"
                      style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
                    >
                      {route.title}
                    </h3>
                    <p
                      className="text-[--color-muted] leading-[1.95] mb-8"
                      style={{ fontSize: "clamp(1rem, 1.3vw, 1.1rem)" }}
                    >
                      {route.desc}
                    </p>
                    <p
                      className="text-[--color-muted]/65 leading-[1.85] mb-10"
                      style={{ fontSize: "clamp(0.9rem, 1.1vw, 0.95rem)" }}
                    >
                      {route.note}
                    </p>
                    <p className="font-mono text-xs text-[--color-sea] tracking-[0.15em]">
                      {route.mono}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Dramatic CTA */}
      <DramaticCTA
        preheading="The journey is part of it"
        title="Ready to"
        titleLine2="Make the Trip?"
        body="Once you find Lovište, you'll understand why people keep coming back. Year after year, generation after generation."
        ctaText="Reserve Your Stay"
        ctaHref="/stay"
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85"
        imageAlt="Crystal clear Adriatic sea"
      />
    </div>
  );
}
