import { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-3xl px-6">
      <div className="space-y-2">
        <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-neutral-900">
          {eyebrow}
        </h3>
        {description && (
          <p className="tracking-tight text-neutral-700">{description}</p>
        )}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
