"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Our Story", href: "/story" },
  { label: "Stay", href: "/stay" },
  { label: "Experiences", href: "/experiences" },
  { label: "Location", href: "/location" },
  { label: "Gallery", href: "/gallery" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On sub-pages the header is always opaque
  const alwaysOpaque = !isHome;
  const opaque = alwaysOpaque || scrolled;

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          opaque ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none">
              <span
                className={cn(
                  "font-display text-xl font-bold tracking-tight transition-colors duration-300",
                  opaque ? "text-[--color-ink]" : "text-white"
                )}
              >
                Camp Lovište
              </span>
              <span
                className={cn(
                  "font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300",
                  opaque ? "text-[--color-sea]" : "text-white/60"
                )}
              >
                Pelješac · Croatia
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "font-body text-sm font-medium transition-colors duration-300 relative group",
                      active
                        ? "text-[--color-sea]"
                        : opaque
                        ? "text-[--color-ink] hover:text-[--color-sea]"
                        : "text-white hover:text-white/70"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-px bg-[--color-sea] transition-all duration-300",
                        active ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                );
              })}
              <Link
                href="/stay#contact"
                className={cn(
                  "px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                  opaque
                    ? "bg-[--color-sea] text-white hover:bg-[--color-sea-hover]"
                    : "bg-white text-[--color-sea] hover:bg-white/90"
                )}
              >
                Reserve
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className={cn(
                  "block w-6 h-0.5 transition-colors duration-300",
                  opaque ? "bg-[--color-ink]" : "bg-white"
                )}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className={cn(
                  "block w-6 h-0.5 transition-colors duration-300",
                  opaque ? "bg-[--color-ink]" : "bg-white"
                )}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className={cn(
                  "block w-6 h-0.5 transition-colors duration-300",
                  opaque ? "bg-[--color-ink]" : "bg-white"
                )}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-5xl font-bold text-[--color-ink] hover:text-[--color-sea] transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
            >
              <Link
                href="/stay#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-8 py-4 bg-[--color-sea] text-white text-lg font-semibold hover:bg-[--color-sea-hover] transition-colors inline-block"
              >
                Reserve Your Stay
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
