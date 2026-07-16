"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Get In Touch</div>
          <h2 className="mb-4 font-heading text-4xl font-bold text-white lg:text-5xl">
            <span className="text-gold">Contact</span> Us
          </h2>
          <p className="mx-auto max-w-xl text-base text-white/50">
            Visit our showroom or reach out — our team is ready to assist you.
          </p>
        </motion.div>

        {/* 3 contact cards */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-gold/10 bg-white/[0.02] p-8 text-center transition-all duration-300 hover:border-gold/40"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.08]">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="mb-2 font-heading text-sm font-bold tracking-wider text-white">
              CALL US
            </h3>
            <p className="mb-3 text-xs tracking-wider text-white/40">Mon–Sat, 9am–7pm</p>
            <a
              href="tel:+923001234567"
              className="text-lg font-bold text-gold transition-colors hover:text-white"
            >
              +92 300 1234567
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-gold/20 bg-gold/[0.04] p-8 text-center transition-all duration-300 hover:border-gold/50"
          >
            {/* Featured card glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(201,168,76,0.08) 0%, transparent 60%)",
              }}
            />
            <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-gold/[0.15]">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="relative mb-2 font-heading text-sm font-bold tracking-wider text-white">
              SHOWROOM
            </h3>
            <p className="relative mb-3 text-xs tracking-wider text-white/40">Visit Us</p>
            <p className="relative text-sm leading-relaxed text-white">
              Main Boulevard, DHA Phase 5
              <br />
              <span className="text-gold">Lahore, Pakistan</span>
            </p>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-gold/10 bg-white/[0.02] p-8 text-center transition-all duration-300 hover:border-gold/40"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.08]">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="#25D366" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.148 1.525 5.9L.057 23.57a.75.75 0 00.918.919l5.718-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 01-4.95-1.355l-.355-.212-3.668.937.965-3.595-.232-.371A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
            </div>
            <h3 className="mb-2 font-heading text-sm font-bold tracking-wider text-white">
              WHATSAPP
            </h3>
            <p className="mb-3 text-xs tracking-wider text-white/40">Quick Response</p>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-gold transition-colors hover:text-white"
            >
              Chat Now &rarr;
            </a>
          </motion.div>
        </div>

        {/* Google Maps embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-hidden rounded-2xl border border-gold/15"
          style={{ height: "380px" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEzLjQiTiA3NMKwMjEnMzEuMyJF!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(80%) invert(10%) contrast(90%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Haval Motors Location"
          />
        </motion.div>
      </div>
    </section>
  );
}
