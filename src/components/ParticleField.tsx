"use client";

import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

async function initEngine(engine: Engine) {
  await loadSlim(engine);
}

const options: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  particles: {
    number: {
      value: 30,
      density: { enable: true, width: 1200, height: 800 },
    },
    color: { value: ["#c9a84c", "#e0c274", "#ffffff"] },
    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: { enable: true, speed: 0.6, sync: false },
    },
    size: { value: { min: 0.5, max: 2 } },
    move: {
      enable: true,
      speed: 0.3,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },
    },
    links: { enable: false },
  },
  detectRetina: true,
};

export function ParticleField({ className = "" }: { className?: string }) {
  return (
    <ParticlesProvider init={initEngine}>
      <Particles id="haval-particles" options={options} className={className} />
    </ParticlesProvider>
  );
}
