import Section from "./Section";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((e) => (
          <div
            key={e.school}
            className="rounded-lg border border-slate-200 p-5 dark:border-slate-800"
          >
            <h3 className="font-medium text-slate-800 dark:text-slate-200">{e.school}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{e.degree}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">{e.period}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
