"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "./icons";

const TESTIMONIALS = [
  {
    quote:
      "Buying my H6 from Haval Motors was effortless. The team walked me through every detail and the after-sales service has been outstanding.",
    name: "Ahmed Raza",
    city: "Lahore",
    initials: "AR",
  },
  {
    quote:
      "The financing plan made it possible to own the Jolion sooner than I expected. Professional staff, zero pressure, genuinely helpful.",
    name: "Sana Malik",
    city: "Islamabad",
    initials: "SM",
  },
  {
    quote:
      "My H9 handles beautifully and Haval's service center keeps it running perfectly. Best dealership experience I've had in Pakistan.",
    name: "Bilal Hussain",
    city: "Karachi",
    initials: "BH",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const t = TESTIMONIALS[index];

  return (
    <section className="bg-background py-20 lg:py-[120px]">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Testimonials
          </span>
          <h2 className="mt-4 font-heading text-[clamp(32px,5vw,56px)] font-bold text-white">
            <span className="text-gold">What</span> Our Customers Say
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-2xl border border-gold/20 bg-white/[0.03] p-8 text-center backdrop-blur-md sm:p-12"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-bg-card-alt text-lg font-bold text-gold">
                  {t.initials}
                </div>

                <div className="mt-4 flex justify-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-6 text-lg italic leading-relaxed text-white/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-6 text-sm font-bold tracking-wide text-gold">{t.name}</p>
                <p className="text-sm text-text-muted">{t.city}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-1 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-[#0a0a0a]/60 text-white backdrop-blur-sm transition-colors duration-200 hover:border-gold hover:text-gold lg:-left-14"
          >
            <ArrowLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-[#0a0a0a]/60 text-white backdrop-blur-sm transition-colors duration-200 hover:border-gold hover:text-gold lg:-right-14"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((testimonial, i) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-gold" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
