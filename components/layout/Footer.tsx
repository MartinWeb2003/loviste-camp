import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";

const nav = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/story" },
  { label: "Stay With Us", href: "/stay" },
  { label: "Experiences", href: "/experiences" },
  { label: "Location & How to Reach", href: "/location" },
  { label: "Gallery", href: "/gallery" },
];

const stay = [
  { label: "Camping Plots", href: "/stay#camping" },
  { label: "Guest Houses", href: "/stay#guesthouses" },
  { label: "Private House", href: "/stay#house" },
  { label: "Apartments in Viganj", href: "/stay#apartments" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0d0d0d" }} className="text-white">
      {/* Sea-coloured top accent */}
      <div className="h-[3px] bg-[--color-sea]" />

      {/* Brand hero row */}
      <div className="mx-auto max-w-7xl px-8 lg:px-16 pt-24 lg:pt-36 pb-20 lg:pb-28 border-b border-white/8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          <div>
            <Link href="/">
              <span className="font-display font-bold text-white leading-[0.9]" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
                Camp Lovište
              </span>
            </Link>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[--color-sea] mt-5">
              Viganj · Lovište · Pelješac · Croatia
            </p>
          </div>
          <p className="text-white/35 leading-[1.9] max-w-xs" style={{ fontSize: "0.9rem" }}>
            A family haven at the unspoiled tip of the Pelješac peninsula. Four generations, one home, fifty metres from the Adriatic.
          </p>
        </div>
      </div>

      {/* Main link grid */}
      <div className="mx-auto max-w-7xl px-8 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 pb-20 border-b border-white/8">

          {/* Explore */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[--color-sea] mb-10">
              Explore
            </p>
            <ul className="space-y-6">
              {nav.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/40 text-sm hover:text-white transition-colors duration-200 flex items-center gap-4 group"
                  >
                    <span className="w-4 h-px bg-white/12 group-hover:bg-[--color-sea] group-hover:w-6 transition-all duration-300 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Accommodation */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[--color-sea] mb-10">
              Accommodation
            </p>
            <ul className="space-y-6">
              {stay.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/40 text-sm hover:text-white transition-colors duration-200 flex items-center gap-4 group"
                  >
                    <span className="w-4 h-px bg-white/12 group-hover:bg-[--color-sea] group-hover:w-6 transition-all duration-300 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-14 pt-10 border-t border-white/8">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[--color-sea] mb-5">
                Season
              </p>
              <p className="text-white/50 text-sm mb-2">May — September</p>
              <p className="text-white/25 text-xs">Open daily · 08:00 – 22:00</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[--color-sea] mb-10">
              Contact
            </p>
            <div className="space-y-8">
              <a href="mailto:info@camploviste.hr" className="flex items-start gap-5 group">
                <FaEnvelope size={14} className="text-[--color-sea] mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm leading-relaxed group-hover:text-white transition-colors">
                  info@camploviste.hr
                </span>
              </a>
              <a href="tel:+38520123456" className="flex items-start gap-5 group">
                <FaPhone size={14} className="text-[--color-sea] mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm group-hover:text-white transition-colors">
                  +385 20 123 456
                </span>
              </a>
              <div className="flex items-start gap-5">
                <FaLocationDot size={14} className="text-[--color-sea] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/40 text-sm">Viganj bb, 20269 Lovište</p>
                  <p className="text-white/25 text-xs mt-2">Pelješac Peninsula, Croatia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Book / Social */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[--color-sea] mb-10">
              Reserve
            </p>
            <p className="text-white/35 text-sm leading-[1.85] mb-8">
              No booking platforms. No middlemen. Contact us directly and we respond within 24 hours.
            </p>
            <Link
              href="mailto:info@camploviste.hr"
              className="inline-flex items-center gap-3 border border-white/18 px-8 py-5 text-white/50 text-xs font-mono uppercase tracking-[0.22em] hover:border-[--color-sea] hover:text-white transition-all duration-300"
            >
              Send an Enquiry →
            </Link>

            <div className="flex gap-4 mt-12">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-10 h-10 border border-white/12 flex items-center justify-center text-white/25 hover:text-white hover:border-white/40 transition-all duration-300"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-10 h-10 border border-white/12 flex items-center justify-center text-white/25 hover:text-white hover:border-white/40 transition-all duration-300"
              >
                <FaFacebook size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="font-mono text-[10px] text-white/18 uppercase tracking-[0.2em]">
            © {year} Camp Lovište. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-white/12 uppercase tracking-[0.2em]">
            42.9665° N · 17.0219° E
          </p>
        </div>
      </div>
    </footer>
  );
}
