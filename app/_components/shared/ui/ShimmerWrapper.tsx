"use client";

import React, { useEffect, useRef } from "react";

interface ShimmerWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function ShimmerWrapper({
  children,
  className = "",
}: ShimmerWrapperProps) {
  const shimmerRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const triggerShimmer = () => {
      if (shimmerRef.current && !isHovered.current) {
        shimmerRef.current.classList.add("shimmer-active");
        setTimeout(() => {
          if (shimmerRef.current) {
            shimmerRef.current.classList.remove("shimmer-active");
          }
        }, 1500);
      }
    };

    // Initial random delay between 2-5 seconds
    const initialDelay = Math.random() * 3000 + 2000;

    let timeoutId: NodeJS.Timeout;

    const scheduleNext = () => {
      triggerShimmer();
      // Schedule next shimmer between 3-8 seconds
      const nextDelay = Math.random() * 5000 + 3000;
      timeoutId = setTimeout(scheduleNext, nextDelay);
    };

    timeoutId = setTimeout(scheduleNext, initialDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      ref={shimmerRef}
      className={`shimmer-container ${className}`}
      onMouseEnter={() => {
        isHovered.current = true;
        if (shimmerRef.current) {
          shimmerRef.current.classList.remove("shimmer-active");
        }
      }}
      onMouseLeave={() => {
        isHovered.current = false;
      }}
    >
      {children}
    </div>
  );
}
