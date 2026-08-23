"use client";

import { useEffect, useState } from "react";
import { taglines } from "@/lib/data";

export default function Tagline() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      const timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % taglines.length);
        setVisible(true);
      }, 250);
      return () => clearTimeout(timeout);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  const current = taglines[index];

  return (
    <section className="mx-auto grid w-full max-w-3xl place-items-center px-6 py-6 text-center">
      <div className="flex w-full max-w-2xl flex-col gap-6">
        <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-neutral-900">
          In short
        </h3>
        <div className="relative grid h-12 place-items-center">
          <p
            className="absolute w-full text-3xl tracking-tight text-neutral-500 transition-all duration-300 md:text-4xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "rotateX(0deg)" : "rotateX(-90deg)",
            }}
            suppressHydrationWarning
          >
            {current.text}
            <span className="font-marker" style={{ color: current.color }}>
              {current.highlight}
            </span>
            {current.suffix}
          </p>
        </div>
      </div>
    </section>
  );
}
