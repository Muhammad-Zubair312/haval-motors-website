"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

type Variant = "default" | "hover";

function subscribe() {
  return () => {};
}
function getSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}
function getServerSnapshot() {
  return false;
}

export function MagneticCursor() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<Variant>("default");

  useEffect(() => {
    if (!enabled) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const outer = { x: pos.x, y: pos.y };
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    const loop = () => {
      outer.x += (pos.x - outer.x) * 0.15;
      outer.y += (pos.y - outer.y) * 0.15;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${outer.x}px, ${outer.y}px, 0) translate(-50%, -50%)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(loop);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setVariant("hover");
      }
    };
    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setVariant("default");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    rafId = requestAnimationFrame(loop);
    document.body.classList.add("magnetic-cursor-active");

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      document.body.classList.remove("magnetic-cursor-active");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={outerRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[200] h-8 w-8 rounded-full border border-gold opacity-50 transition-[width,height,opacity] duration-200 will-change-transform ${
          variant === "hover" ? "h-11 w-11 opacity-80" : ""
        }`}
      />
      <div
        ref={innerRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[200] h-1.5 w-1.5 rounded-full bg-gold will-change-transform"
      />
    </>
  );
}
