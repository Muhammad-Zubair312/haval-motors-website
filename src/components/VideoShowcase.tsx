"use client";

import { useEffect, useRef, useState } from "react";

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            // User scrolled INTO section - play with audio
            video.muted = false;
            video
              .play()
              .then(() => setIsMuted(false))
              .catch(() => {
                // If audio blocked, play muted
                video.muted = true;
                setIsMuted(true);
                video.play().catch(() => {});
              });
            setIsPlaying(true);
          } else {
            // User scrolled OUT of section - pause and reset
            video.pause();
            video.currentTime = 0;
            video.muted = true;
            setIsMuted(true);
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100vw",
        left: "50%",
        transform: "translateX(-50%)",
        height: "85vh",
        overflow: "hidden",
      }}
    >
      {!videoError ? (
        <video
          ref={videoRef}
          playsInline
          preload="metadata"
          loop
          poster="/cars/haval-h6.png"
          onError={() => setVideoError(true)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        >
          <source
            src="https://res.cloudinary.com/kzdq5bo5/video/upload/v1784211581/haval-showcase_mk4oz5.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-bg-card">
          <span className="text-3xl text-gold/40">&#9654;</span>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Showcase video coming soon
          </p>
        </div>
      )}

      {/* Subtle top gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-8"
        style={{ background: "linear-gradient(to bottom, #0A0A0A, transparent)" }}
      />

      {/* Subtle bottom gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-8"
        style={{ background: "linear-gradient(to top, #0A0A0A, transparent)" }}
      />

      {!videoError && (
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          {/* Mute/Unmute button */}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gold/40 bg-black/60 text-sm text-gold backdrop-blur-sm transition-colors hover:bg-gold/20"
          >
            {isMuted ? "🔇" : "🔊"}
          </button>

          {/* Play/Pause button */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gold/40 bg-black/60 text-sm text-gold backdrop-blur-sm transition-colors hover:bg-gold/20"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
        </div>
      )}

      {/* Gold bottom accent line */}
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }}
      />
    </section>
  );
}
