import { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <h2 className="mb-10 text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
        {title}
      </h2>
      {children}
    </section>
  );
}
