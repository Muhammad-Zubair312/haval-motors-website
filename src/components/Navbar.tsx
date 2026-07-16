"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { CloseIcon, MenuIcon } from "./icons";

const NAV_LINKS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Models", href: "#models", id: "models" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const navRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!navRef.current) return;

      gsap.set(navRef.current, {
        backgroundColor: "rgba(10,10,10,0)",
        backdropFilter: "blur(0px)",
        borderColor: "rgba(255,255,255,0)",
      });

      const scrollTrigger = ScrollTrigger.create({
        start: 50,
        end: 99999,
        onEnter: () => {
          gsap.to(navRef.current, {
            backgroundColor: "rgba(10,10,10,0.85)",
            backdropFilter: "blur(24px)",
            borderColor: "rgba(255,255,255,0.1)",
            duration: 0.4,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(navRef.current, {
            backgroundColor: "rgba(10,10,10,0)",
            backdropFilter: "blur(0px)",
            borderColor: "rgba(255,255,255,0)",
            duration: 0.4,
            ease: "power2.out",
          });
        },
      });

      let sectionTriggers: ScrollTrigger[] = [];
      const rafId = requestAnimationFrame(() => {
        sectionTriggers = NAV_LINKS.filter((link) => document.getElementById(link.id)).map(
          (link) =>
            ScrollTrigger.create({
              trigger: `#${link.id}`,
              start: "top center",
              end: "bottom center",
              onToggle: (self) => {
                if (self.isActive) setActive(link.id);
              },
            })
        );
      });

      return () => {
        scrollTrigger.kill();
        cancelAnimationFrame(rafId);
        sectionTriggers.forEach((t) => t.kill());
      };
    },
    { scope: navRef }
  );

  return (
    <header
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent py-4"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <a
          href="#home"
          className="shrink-0 whitespace-nowrap text-base font-bold tracking-[0.15em] text-gold sm:text-lg"
        >
          HAVAL MOTORS
        </a>

        <ul className="hidden items-center gap-8 md:flex lg:gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className="group relative text-sm font-medium text-text-muted transition-colors duration-200 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
              {active === link.id && (
                <span className="absolute -bottom-3 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_8px_rgba(201,168,76,0.9)]" />
              )}
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          className="hidden shrink-0 cursor-pointer items-center whitespace-nowrap rounded-full border border-gold px-5 py-2 text-sm font-medium text-gold transition-all duration-300 hover:bg-gold hover:text-[#0a0a0a] md:inline-flex"
        >
          Book Test Drive
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 cursor-pointer text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-base text-text-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className="block cursor-pointer rounded-full border border-gold px-5 py-2.5 text-center text-sm font-medium text-gold transition-all duration-300 hover:bg-gold hover:text-[#0a0a0a]"
                >
                  Book Test Drive
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
