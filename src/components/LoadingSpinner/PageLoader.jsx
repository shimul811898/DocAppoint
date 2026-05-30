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
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
        <span className="text-xs text-slate-500">Loading...</span>
      </div>
    </div>
  );
}