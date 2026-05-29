"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const BoxSpinner = () => {
  return (
    <div className="flex items-center justify-center h-40">
      <div className="relative w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg animate-spin shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
    </div>
  );
};

export default function PageTransitionLoader() {
  const [isPending, setIsPending] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsPending(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleLinkClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.getAttribute("target") === "_blank"
      ) {
        return;
      }

      const currentUrl = new URL(window.location.href);
      const targetUrl = new URL(href, window.location.href);

      if (currentUrl.pathname !== targetUrl.pathname || currentUrl.search !== targetUrl.search) {
        setIsPending(true);
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, []);

  if (!isPending) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/10 backdrop-blur-[0.5px] pointer-events-none transition-all duration-300">
      <BoxSpinner />
    </div>
  );
}
