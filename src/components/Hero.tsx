"use client";

import { motion } from "framer-motion";
import { ParticleField } from "./ParticleField";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(55% 50% at 75% 40%, rgba(201,168,76,0.14) 0%, rgba(10,10,10,0) 70%), radial-gradient(40% 40% at 10% 90%, rgba(201,168,76,0.08) 0%, rgba(10,10,10,0) 70%)",
        }}
      />

      <ParticleField className="pointer-events-none absolute inset-0" />

      {/* VIDEO - absolutely positioned, right half, full height, edge to edge */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] lg:block lg:w-[52%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full"
          style={{
            objectFit: "cover",
            objectPosition: "center center",
            filter: "drop-shadow(-20px 0 60px rgba(201,168,76,0.2))",
          }}
        >
          <source src="/video/car-rotate.mp4" type="video/mp4" />
        </video>

        {/* Bottom fade - hides turntable platform */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0"
          style={{
            height: "35%",
            background: "linear-gradient(to top, #0A0A0A 0%, #0A0A0A 15%, transparent 100%)",
          }}
        />

        {/* Top fade */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0"
          style={{
            height: "15%",
            background: "linear-gradient(to bottom, #0A0A0A 0%, transparent 100%)",
          }}
        />

        {/* Left fade - blends into text */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0"
          style={{
            width: "25%",
            background: "linear-gradient(to right, #0A0A0A 0%, transparent 100%)",
          }}
        />

        {/* Gold ambient glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 40% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Light streak */}
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{
            width: "2px",
            background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.5), transparent)",
            filter: "blur(3px)",
            animation: "lightStreak 7s ease-in-out infinite",
            animationDelay: "3s",
          }}
        />
      </div>

      {/* TEXT - left side in normal container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full min-w-0 text-left lg:w-[48%]"
        >
          <motion.span
            variants={item}
            className="mb-6 inline-block rounded-full border border-gold/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-gold"
          >
            Official Haval Dealership &mdash; Pakistan
          </motion.span>

          <h1 className="font-heading font-bold leading-[1.05]">
            <motion.span
              variants={item}
              className="block text-[clamp(60px,10vw,140px)] text-gold lg:text-[clamp(56px,8vw,112px)]"
            >
              HAVAL
            </motion.span>
            <motion.span
              variants={item}
              className="block text-[clamp(60px,10vw,140px)] text-white lg:text-[clamp(56px,8vw,112px)]"
            >
              MOTORS
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-base uppercase tracking-[0.25em] text-gold/70"
          >
            Experience Luxury Redefined
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 h-[2px] w-40 origin-left bg-gradient-to-r from-gold via-gold-soft to-transparent"
          />

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="shimmer-btn cursor-pointer rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0a0a0a] transition-transform duration-300 hover:scale-105"
            >
              Book Test Drive
            </a>
            <a
              href="#models"
              className="shimmer-btn cursor-pointer rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-gold hover:text-gold"
            >
              Explore Models
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
