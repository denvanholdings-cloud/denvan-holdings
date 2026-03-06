"use client";

const categoryStyles: Record<string, { gradient: string; icon: React.ReactNode }> = {
  "Business Strategy": {
    gradient: "linear-gradient(135deg, #1B2A4A 0%, #2A3F6A 50%, #3B5998 100%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  "Company News": {
    gradient: "linear-gradient(135deg, #1B2A4A 0%, #1E3A5F 50%, #2A3F6A 100%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  "Management": {
    gradient: "linear-gradient(135deg, #1B2A4A 0%, #2C3E6B 50%, #445B8C 100%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  "Industry Insights": {
    gradient: "linear-gradient(135deg, #1B2A4A 0%, #1B2A4A 50%, #344B6E 100%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
};

const defaultStyle: { gradient: string; icon: React.ReactNode } = {
  gradient: "linear-gradient(135deg, #1B2A4A, #2A3F6A)",
  icon: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C5A55A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
};

interface PostImageProps {
  category: string;
  height?: number;
  size?: "small" | "medium" | "large";
}

export default function PostImage({ category, height = 180, size = "medium" }: PostImageProps) {
  const style = categoryStyles[category] || defaultStyle;
  const iconScale = size === "large" ? 1.5 : size === "small" ? 0.8 : 1;

  return (
    <div
      style={{
        height,
        background: style.gradient,
        borderRadius: size === "large" ? 16 : 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          backgroundImage: `radial-gradient(circle at 25% 25%, #FFFFFF 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "-40%",
          right: "-20%",
          width: "60%",
          height: "80%",
          background: "radial-gradient(circle, rgba(197, 165, 90, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Icon container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          transform: `scale(${iconScale})`,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(4px)",
          }}
        >
          {style.icon}
        </div>
        {size === "large" && (
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.5)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {category}
          </span>
        )}
      </div>
    </div>
  );
}
