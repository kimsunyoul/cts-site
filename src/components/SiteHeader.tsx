"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const NAV = [
  { href: "/scc", label: "SCC" },  // Safe Coin Center
  { href: "/esd", label: "ESD" },  // Emotion Sentinel Drone
  { href: "/szs", label: "SZS" },  // Safe Zone Shelter
  { href: "/vsi", label: "VSI" },  // Visual Shock Integration
  { href: "/smf", label: "SMF" },  // Smile Manufacturing
];

export default function SiteHeader() {
  const pathname = usePathname();
  const active = useMemo(() => pathname?.split("?")[0] || "/", [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto max-w-screen-xl px-5 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide text-white hover:opacity-90">
          CTS
        </Link>

        <nav className="flex items-center gap-1 overflow-x-auto">
          {NAV.map((item) => {
            const isActive = active === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "px-3 py-1.5 rounded-lg text-sm",
                  "hover:bg-white/10",
                  isActive ? "bg-white text-black" : "text-white/85",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
