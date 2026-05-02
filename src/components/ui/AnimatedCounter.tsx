"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const ref     = useRef<HTMLSpanElement>(null);
  const inView  = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent =
            prefix + Math.round(value).toString() + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, target, duration, prefix, suffix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}