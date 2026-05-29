"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const isNavigating = useRef(false);
  const startTimeRef = useRef(null);
  const MIN_SHOW = 500;

  useEffect(() => {
    if (!isNavigating.current) return;

    const elapsed = Date.now() - (startTimeRef.current || 0);
    const remaining = Math.max(0, MIN_SHOW - elapsed);

    const timer = setTimeout(() => {
      isNavigating.current = false;
      setLoading(false);
    }, remaining);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (
        href.startsWith("http") ||
        href.startsWith("//") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href === "#" ||
        href.startsWith("#")
      )
        return;

      const targetPath = href.split("?")[0].split("#")[0] || "/";
      if (targetPath === window.location.pathname) return;

      isNavigating.current = true;
      startTimeRef.current = Date.now();
      setLoading(true);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
    >
      <div className="cube-scene">
        <div className="cube">
          <div className="cube-face cube-front" />
          <div className="cube-face cube-back" />
          <div className="cube-face cube-left" />
          <div className="cube-face cube-right" />
          <div className="cube-face cube-top" />
          <div className="cube-face cube-bottom" />
        </div>
      </div>

      <div style={{ marginTop: "36px", textAlign: "center" }}>
        <p
          style={{
            margin: 0,
            fontWeight: 800,
            fontSize: "1.4rem",
            letterSpacing: "-0.02em",
            color: "#0f172a",
          }}
        >
          Doc
          <span
            style={{
              background: "linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Appoint
          </span>
        </p>
        <p
          style={{
            margin: "6px 0 0 0",
            fontSize: "0.72rem",
            color: "#94a3b8",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Loading...
        </p>
      </div>

      <style>{`
        .cube-scene {
          perspective: 300px;
          width: 72px;
          height: 72px;
        }
        .cube {
          width: 72px;
          height: 72px;
          position: relative;
          transform-style: preserve-3d;
          animation: cube-flip 1.6s ease-in-out infinite;
        }
        .cube-face {
          position: absolute;
          width: 72px;
          height: 72px;
          border-radius: 10px;
          border: 3px solid rgba(255,255,255,0.6);
        }
        .cube-front  { background: linear-gradient(135deg,#3b82f6,#06b6d4); transform: translateZ(36px); }
        .cube-back   { background: linear-gradient(135deg,#6366f1,#3b82f6); transform: rotateY(180deg) translateZ(36px); }
        .cube-left   { background: linear-gradient(135deg,#06b6d4,#6366f1); transform: rotateY(-90deg) translateZ(36px); }
        .cube-right  { background: linear-gradient(135deg,#3b82f6,#8b5cf6); transform: rotateY(90deg)  translateZ(36px); }
        .cube-top    { background: linear-gradient(135deg,#38bdf8,#3b82f6); transform: rotateX(90deg)  translateZ(36px); }
        .cube-bottom { background: linear-gradient(135deg,#6366f1,#06b6d4); transform: rotateX(-90deg) translateZ(36px); }

        @keyframes cube-flip {
          0%   { transform: rotateX(0deg)   rotateY(0deg);   }
          25%  { transform: rotateX(90deg)  rotateY(90deg);  }
          50%  { transform: rotateX(180deg) rotateY(180deg); }
          75%  { transform: rotateX(270deg) rotateY(270deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}
