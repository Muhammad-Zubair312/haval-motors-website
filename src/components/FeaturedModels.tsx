"use client";

import { CarCardHover } from "./CarCardHover";
import { FadeUp } from "./FadeUp";

type Model = {
  imageSrc: string;
  imageAlt: string;
  modelName: string;
  tagline: string;
  specs: string[];
  price: string;
};

const MODELS: Model[] = [
  {
    imageSrc: "/cars/haval-h6.png",
    imageAlt: "Haval H6",
    modelName: "Haval H6",
    tagline: "The Flagship SUV",
    specs: ["2.0L Turbo Engine", "7-Speed DCT Gearbox", "360° Camera System"],
    price: "PKR 8,499,000",
  },
  {
    imageSrc: "/cars/haval-h6-phev.jpg",
    imageAlt: "Haval H6 PHEV",
    modelName: "Haval H6 PHEV",
    tagline: "Hybrid Powerhouse",
    specs: ["1.5L + Electric Motor", "Panoramic Sunroof", "10.25\" Touchscreen"],
    price: "PKR 10,999,000",
  },
  {
    imageSrc: "/cars/tank-500.jpg",
    imageAlt: "Tank 500 PHEV",
    modelName: "Tank 500 PHEV",
    tagline: "Bold Off-Road Power",
    specs: ["3.0L Turbo V6 PHEV", "7-Seat Configuration", "Terrain Select Modes"],
    price: "PKR 18,999,000",
  },
];

export function FeaturedModels() {
  return (
    <section id="models" className="bg-background">
      <div className="py-20 text-center">
        <div className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-gold">
          Featured Lineup
        </div>
        <h2 className="mb-4 font-heading text-[clamp(32px,5vw,56px)] font-bold text-white">
          <span className="text-gold">Featured</span> Models
        </h2>
        <p className="text-white/50">Hover a model to explore its signature details</p>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-[120px]">
        <FadeUp y={60} stagger={0.15} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {MODELS.map((model) => (
            <CarCardHover key={model.modelName} {...model} />
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
