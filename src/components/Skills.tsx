import Section from "./Section";
import { topSkills, coreCompetencies, certifications, honors, languages } from "@/lib/data";

function Badge({ children, accent = false }: { children: string; accent?: boolean }) {
  return (
    <span
      className={`rounded-full px-3.5 py-1.5 text-sm font-medium ${
        accent
          ? "bg-teal-600 text-white dark:bg-teal-500 dark:text-slate-950"
          : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
      }`}
    >
      {children}
    </span>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Certifications">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Top Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {topSkills.map((s) => (
              <Badge key={s} accent>
                {s}
              </Badge>
            ))}
          </div>

          <h3 className="mb-3 mt-8 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-2">
            {coreCompetencies.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Certifications
          </h3>
          <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
            {certifications.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                {c}
              </li>
            ))}
          </ul>

          <h3 className="mb-3 mt-8 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Honors & Awards
          </h3>
          <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
            {honors.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                {h}
              </li>
            ))}
          </ul>

          <h3 className="mb-3 mt-8 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Languages
          </h3>
          <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
            {languages.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between gap-4 text-sm">
                <span className="font-medium text-slate-800 dark:text-slate-200">{l.name}</span>
                <span className="text-slate-500 dark:text-slate-400">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
