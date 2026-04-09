import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[--color-ink] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 pb-14 border-b border-white/10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold mb-3">Camp Lovište</h3>
            <p className="font-mono text-xs text-white/40 tracking-[0.18em] uppercase mb-5">
              Viganj, Lovište · Pelješac · Croatia
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              A family haven at the tip of the Pelješac peninsula. Four generations, one home.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/30 mb-5">Explore</p>
            <ul className="space-y-3">
              {[
                ["Our Story", "/story"],
                ["Stay With Us", "/stay"],
                ["Experiences", "/experiences"],
                ["Location", "/location"],
                ["Gallery", "/gallery"],
                ["Contact & Reserve", "/stay#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/30 mb-5">Contact</p>
            <div className="space-y-4">
              <div>
                <p className="text-white/30 text-xs mb-1">Address</p>
                <p className="text-white/60 text-sm">Viganj bb, 20269 Lovište</p>
                <p className="text-white/60 text-sm">Pelješac, Croatia</p>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-1">Email</p>
                <a href="mailto:info@camploviste.hr" className="text-sm text-white/60 hover:text-white transition-colors">
                  info@camploviste.hr
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-1">Phone</p>
                <a href="tel:+38520123456" className="text-sm text-white/60 hover:text-white transition-colors">
                  +385 20 123 456
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-1">Coordinates</p>
                <p className="font-mono text-xs text-white/40">42.9665° N, 17.0219° E</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-mono">
            © {year} Camp Lovište. All rights reserved.
          </p>
          <p className="text-white/15 text-xs">
            A family-run business in Lovište since generations.
          </p>
        </div>
      </div>
    </footer>
  );
}
