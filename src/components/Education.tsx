import Section from "./Section";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education">
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((e) => (
          <div key={e.school} className="rounded-2xl border border-black/10 bg-white p-6">
            <h3 className="font-semibold text-neutral-900">{e.school}</h3>
            <p className="mt-1 text-sm text-neutral-600">{e.degree}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-neutral-400">
              {e.period}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
