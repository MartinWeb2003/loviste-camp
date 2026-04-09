"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

type FormData = {
  name: string;
  email: string;
  phone: string;
  stayType: string;
  arrivalDate: string;
  departureDate: string;
  guests: string;
  message: string;
};

export function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    stayType: "",
    arrivalDate: "",
    departureDate: "",
    guests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[--color-stone] bg-white text-[--color-ink] placeholder-[--color-muted]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[--color-sea] focus:border-transparent transition-all duration-200";

  return (
    <section id="contact" className="bg-white py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Form */}
          <div>
            <FadeIn>
              <SectionLabel>Reserve Your Stay</SectionLabel>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-[--color-ink] leading-tight mb-6">
                Start Your Story Here
              </h2>
              <p className="text-[--color-muted] text-lg leading-relaxed mb-10">
                Fill in the form and we&apos;ll get back to you within 24 hours to confirm availability and finalise your booking. We can&apos;t wait to welcome you.
              </p>
            </FadeIn>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[--color-sea-light] border border-[--color-sea]/20 rounded-2xl p-10 text-center"
                >
                  <div className="text-5xl mb-4">🌊</div>
                  <h3 className="font-display text-2xl font-bold text-[--color-ink] mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-[--color-muted] leading-relaxed">
                    Thank you, <strong>{form.name}</strong>. We&apos;ll be in touch within 24 hours. Get ready for Lovište.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[--color-muted] mb-1.5 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Ana Horvat"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[--color-muted] mb-1.5 uppercase tracking-wide">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="ana@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Phone + Stay type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[--color-muted] mb-1.5 uppercase tracking-wide">
                        Phone
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+385..."
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[--color-muted] mb-1.5 uppercase tracking-wide">
                        Type of Stay *
                      </label>
                      <select
                        name="stayType"
                        required
                        value={form.stayType}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select...</option>
                        <option value="camping">Camping Plot (Campervan)</option>
                        <option value="guesthouse">Guest House</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Dates + Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[--color-muted] mb-1.5 uppercase tracking-wide">
                        Arrival *
                      </label>
                      <input
                        name="arrivalDate"
                        type="date"
                        required
                        value={form.arrivalDate}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[--color-muted] mb-1.5 uppercase tracking-wide">
                        Departure *
                      </label>
                      <input
                        name="departureDate"
                        type="date"
                        required
                        value={form.departureDate}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[--color-muted] mb-1.5 uppercase tracking-wide">
                        Guests
                      </label>
                      <select
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select</option>
                        {["1", "2", "3", "4", "5", "6+"].map((n) => (
                          <option key={n} value={n}>{n} {n === "1" ? "guest" : "guests"}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-[--color-muted] mb-1.5 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Any questions, special requests, or just say hello..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-4 bg-[--color-sea] text-white font-semibold rounded-xl hover:bg-[--color-sea-hover] transition-colors duration-200 disabled:opacity-60 text-sm"
                  >
                    {loading ? "Sending..." : "Send Enquiry →"}
                  </motion.button>

                  <p className="text-center text-[--color-muted] text-xs">
                    We typically respond within 24 hours. No booking fees, ever.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Contact details */}
          <FadeIn delay={0.2} direction="left" className="lg:pt-28">
            <div className="space-y-8">
              {/* Address */}
              <div className="p-8 bg-[--color-sand] rounded-2xl">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--color-sea] mb-4">
                  Find Us
                </p>
                <address className="not-italic">
                  <p className="font-display text-2xl font-bold text-[--color-ink] mb-2">Camp Lovište</p>
                  <p className="text-[--color-muted]">Viganj bb</p>
                  <p className="text-[--color-muted]">20269 Lovište</p>
                  <p className="text-[--color-muted]">Pelješac, Croatia</p>
                </address>
                <div className="mt-4 pt-4 border-t border-[--color-stone]">
                  <p className="font-mono text-xs text-[--color-muted]">42.9665° N, 17.0219° E</p>
                </div>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                {[
                  { icon: "📧", label: "Email", value: "info@camploviste.hr", href: "mailto:info@camploviste.hr" },
                  { icon: "📞", label: "Phone", value: "+385 20 123 456", href: "tel:+38520123456" },
                  { icon: "📱", label: "WhatsApp", value: "+385 98 123 4567", href: "https://wa.me/3859812345678" },
                ].map((c) => (
                  <a
                    key={c.href}
                    href={c.href}
                    className="flex items-center gap-4 p-5 rounded-xl hover:bg-[--color-sand] transition-colors duration-200 group"
                  >
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <p className="text-xs text-[--color-muted] uppercase tracking-wide font-mono">{c.label}</p>
                      <p className="text-[--color-ink] font-medium group-hover:text-[--color-sea] transition-colors">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Season info */}
              <div className="p-6 bg-[--color-sea-light] border border-[--color-sea]/20 rounded-2xl">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--color-sea] mb-2">
                  Season
                </p>
                <p className="font-display text-lg font-bold text-[--color-ink]">
                  Open May — September
                </p>
                <p className="text-[--color-muted] text-sm mt-1">
                  Peak season: July & August. Book early — we fill up fast.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
