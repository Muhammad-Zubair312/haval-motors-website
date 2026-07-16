"use client";

import { useRef, useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// 5-step cinematic feature tour
const featureTour = [
  {
    id: "popout",
    label: "PREMIUM DESIGN",
    icon: "✦",
    description: "Aerodynamic luxury SUV profile",
    imageScale: 1.15,
    imageY: "-3%",
    imageX: "0%",
    cardRotateX: -6,
    cardRotateY: 4,
    cardZ: 40,
    glowColor: "rgba(201,168,76,0.6)",
    glowPosition: "50% 50%",
    duration: 1200,
  },
  {
    id: "headlights",
    label: "LED MATRIX HEADLIGHTS",
    icon: "💡",
    description: "Adaptive beam technology — sees before you do",
    imageScale: 2.8,
    imageY: "5%",
    imageX: "20%",
    cardRotateX: -3,
    cardRotateY: 6,
    cardZ: 30,
    glowColor: "rgba(150,200,255,0.7)",
    glowPosition: "75% 40%",
    duration: 1400,
  },
  {
    id: "grille",
    label: "SIGNATURE FRONT GRILLE",
    icon: "⬡",
    description: "Diamond-mesh chrome grille — bold & commanding",
    imageScale: 3.0,
    imageY: "8%",
    imageX: "15%",
    cardRotateX: -2,
    cardRotateY: -3,
    cardZ: 25,
    glowColor: "rgba(201,168,76,0.5)",
    glowPosition: "55% 45%",
    duration: 1400,
  },
  {
    id: "wheel",
    label: "FORGED ALLOY WHEELS",
    icon: "◎",
    description: "19\" aerodynamic spoke design — power meets precision",
    imageScale: 3.2,
    imageY: "25%",
    imageX: "-15%",
    cardRotateX: 4,
    cardRotateY: -5,
    cardZ: 20,
    glowColor: "rgba(201,168,76,0.6)",
    glowPosition: "25% 75%",
    duration: 1400,
  },
  {
    id: "reveal",
    label: "EXPERIENCE THE FULL LUXURY",
    icon: "★",
    description: "Every detail. Perfected.",
    imageScale: 1.08,
    imageY: "-5%",
    imageX: "0%",
    cardRotateX: -8,
    cardRotateY: 6,
    cardZ: 50,
    glowColor: "rgba(201,168,76,0.4)",
    glowPosition: "50% 50%",
    duration: 999999, // hold
  },
];

interface CarCardHoverProps {
  imageSrc: string;
  imageAlt: string;
  modelName: string;
  tagline: string;
  specs: string[];
  price: string;
}

export function CarCardHover({
  imageSrc,
  imageAlt,
  modelName,
  tagline,
  specs,
  price,
}: CarCardHoverProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [tourStep, setTourStep] = useState(-1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const current = tourStep >= 0 ? featureTour[tourStep] : null;

  function startTour() {
    let step = 0;
    setTourStep(0);

    function advance() {
      step++;
      if (step < featureTour.length) {
        setTourStep(step);
        if (featureTour[step].duration < 9999) {
          timeoutRef.current = setTimeout(advance, featureTour[step].duration);
        }
      }
    }

    timeoutRef.current = setTimeout(advance, featureTour[0].duration);
  }

  function stopTour() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setTourStep(-1);
  }

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMousePos({ x, y });
  }

  // Dynamic 3D tilt based on current tour step or mouse
  const rotateX = current ? current.cardRotateX : isHovered ? mousePos.y * 0.3 : 0;
  const rotateY = current ? current.cardRotateY : isHovered ? mousePos.x * 0.3 : 0;
  const translateZ = current ? current.cardZ : isHovered ? 20 : 0;

  return (
    <div
      ref={cardRef}
      style={{ perspective: "1000px" }}
      className="relative"
      onMouseEnter={() => {
        setIsHovered(true);
        startTour();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        stopTour();
        setMousePos({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="relative cursor-pointer overflow-hidden rounded-2xl bg-[#0d0d0d]"
        animate={{
          rotateX,
          rotateY,
          z: translateZ,
          scale: isHovered ? 1.03 : 1,
          boxShadow: isHovered
            ? `0 40px 100px ${current?.glowColor ?? "rgba(201,168,76,0.3)"}, 0 0 0 1px rgba(201,168,76,0.2)`
            : "0 8px 32px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)",
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* IMAGE AREA */}
        <div className="relative h-[240px] overflow-hidden bg-[#050505]">
          {/* Dynamic glow that moves to feature location */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-10"
            animate={{
              background: current
                ? `radial-gradient(ellipse 60% 60% at ${current.glowPosition}, ${current.glowColor} 0%, transparent 70%)`
                : "transparent",
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Car image with pan + zoom */}
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: current ? current.imageScale : 1,
              x: current ? current.imageX : "0%",
              y: current ? current.imageY : "0%",
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain object-center p-3"
              style={{
                filter: isHovered
                  ? `drop-shadow(0 20px 40px ${current?.glowColor ?? "rgba(201,168,76,0.4)"})`
                  : "none",
                transition: "filter 0.4s ease",
              }}
            />
          </motion.div>

          {/* Gold top sweep line */}
          <motion.div
            className="absolute left-0 top-0 z-20 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"
            animate={{ width: isHovered ? "100%" : "0%", opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Feature label */}
          <AnimatePresence mode="wait">
            {current && tourStep < featureTour.length - 1 && (
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="absolute left-3 right-3 top-3 z-30"
              >
                <div className="flex items-center gap-2 rounded-xl border border-[#C9A84C]/30 bg-black/80 px-3 py-2 backdrop-blur-xl">
                  <span className="text-base text-[#C9A84C]">{current.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[9px] font-black uppercase tracking-[0.25em] text-[#C9A84C]">
                      {current.label}
                    </div>
                    <div className="truncate text-[10px] text-white/50">
                      {current.description}
                    </div>
                  </div>
                  {/* Step progress */}
                  <div className="flex shrink-0 gap-1">
                    {featureTour.slice(0, -1).map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-1 rounded-full bg-[#C9A84C]/30"
                        animate={{
                          width: i === tourStep ? 16 : 4,
                          backgroundColor:
                            i === tourStep
                              ? "rgba(201,168,76,1)"
                              : i < tourStep
                                ? "rgba(201,168,76,0.4)"
                                : "rgba(201,168,76,0.15)",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Final reveal overlay */}
          <AnimatePresence>
            {tourStep === featureTour.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-30 flex items-end justify-center pb-4"
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="rounded-full border border-[#C9A84C]/50 bg-black/70 px-5 py-2 font-heading text-[10px] tracking-[0.35em] text-[#C9A84C] backdrop-blur-md"
                >
                  &#10022; BOOK YOUR TEST DRIVE &#10022;
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 360 badge when idle */}
          <AnimatePresence>
            {!isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute right-3 top-3 z-20 flex items-center gap-1 rounded-full border border-[#C9A84C]/30 bg-black/60 px-2.5 py-1 text-[10px] text-[#C9A84C]"
              >
                &#8635; VIEW 360&deg;
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CARD INFO */}
        <div className="p-5" style={{ transform: "translateZ(10px)" }}>
          {/* Animated gold line */}
          <motion.div
            className="mb-4 h-px bg-gradient-to-r from-[#C9A84C] via-[#C9A84C]/60 to-transparent"
            animate={{ scaleX: isHovered ? 1 : 0.2, opacity: isHovered ? 1 : 0.3 }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.5 }}
          />

          <h3 className="mb-1 font-heading text-lg font-bold text-white">{modelName}</h3>
          <p className="mb-4 text-xs uppercase tracking-[0.15em] text-[#C9A84C]">{tagline}</p>

          <ul className="mb-5 space-y-2">
            {specs.map((spec, i) => (
              <motion.li
                key={spec}
                className="flex items-center gap-2 text-sm text-white/55"
                animate={{ x: isHovered ? 4 : 0, opacity: isHovered ? 1 : 0.6 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-[#C9A84C]/70" />
                {spec}
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center justify-between border-t border-white/5 pt-4">
            <div>
              <div className="text-[9px] tracking-[0.2em] text-white/30">STARTING FROM</div>
              <div className="text-xl font-bold leading-tight text-white">{price}</div>
            </div>
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.08, backgroundColor: "#C9A84C", color: "#000" }}
              whileTap={{ scale: 0.93 }}
              className="rounded-full border border-[#C9A84C]/60 px-5 py-2.5 font-heading text-[9px] font-bold tracking-[0.2em] text-[#C9A84C] transition-colors duration-300"
            >
              TEST DRIVE
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
