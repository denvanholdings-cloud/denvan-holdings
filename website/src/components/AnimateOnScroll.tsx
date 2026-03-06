"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  style = {},
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animations: Record<string, React.CSSProperties> = {
    "fade-up": {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
    },
    "fade-left": {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateX(0)" : "translateX(-40px)",
    },
    "fade-right": {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateX(0)" : "translateX(40px)",
    },
    scale: {
      opacity: visible ? 1 : 0,
      transform: visible ? "scale(1)" : "scale(0.92)",
    },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...animations[animation],
        transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
