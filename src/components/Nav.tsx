"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

export default function Nav() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: profile.timeZone,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="relative mx-auto w-full max-w-3xl px-6 pt-8">
      <div className="glow-soft pointer-events-none absolute inset-x-0 top-0 mx-auto h-40 w-[90vw] max-w-3xl" />
      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1 font-mono text-sm font-semibold uppercase text-neutral-300 sm:flex-row sm:items-center sm:gap-2.5">
          <span suppressHydrationWarning>{time ?? "--:--:--"}</span>
          <span>{profile.location}</span>
        </div>
        <a
          href={profile.resume}
          download
          className="inline-flex items-center gap-2 rounded-[8px] border border-black/15 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-black/5"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Resume
        </a>
      </div>
    </header>
  );
}
