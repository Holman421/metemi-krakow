"use client";

import React, { useEffect, useCallback } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-16 right-16 md:top-32 md:right-32 z-[1001] text-white hover:text-gray-300 transition-colors cursor-pointer"
        aria-label="Close modal"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Video container */}
      <div
        className="relative z-[1001] w-[90vw] max-w-[1200px] aspect-square md:aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={videoSrc}
          controls
          autoPlay
          className="size-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
