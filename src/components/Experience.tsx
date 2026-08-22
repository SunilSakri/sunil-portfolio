import Section from "./Section";
import { experience } from "@/lib/data";

export default function Experience() {
  const featured = experience.filter((e) => e.featured);
  const early = experience.filter((e) => !e.featured);

  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-10 border-l border-slate-200 pl-8 dark:border-slate-800">
        {featured.map((entry) => (
          <li key={entry.company} className="relative">
            <span className="absolute -left-[2.28rem] top-1.5 h-3 w-3 rounded-full border-2 border-teal-500 bg-white dark:bg-slate-950" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {entry.company}
            </h3>
            {entry.span && (
              <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">{entry.span}</p>
            )}

            <div className={`space-y-6 ${entry.span ? "mt-4" : "mt-2"}`}>
              {entry.roles.map((role) => (
                <div key={role.role}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="font-medium text-slate-800 dark:text-slate-200">
                      {role.role}
                    </h4>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {role.period}
                      {role.location ? ` · ${role.location}` : ""}
                    </span>
                  </div>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-600 dark:text-slate-400">
                    {role.bullets.map((b, i) => (
                      <li key={i} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>

      {early.length > 0 && (
        <div className="mt-14">
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Earlier experience
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {early.map((entry) => (
              <div
                key={entry.company + entry.roles[0].role}
                className="rounded-lg border border-slate-200 p-5 dark:border-slate-800"
              >
                <h4 className="font-medium text-slate-800 dark:text-slate-200">
                  {entry.roles[0].role}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {entry.company} · {entry.roles[0].period}
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
                  {entry.roles[0].bullets.map((b, i) => (
                    <li key={i} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
