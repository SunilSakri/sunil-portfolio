import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      <p className="text-sm font-medium uppercase tracking-widest text-teal-600 dark:text-teal-400">
        {profile.location}
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl">
        {profile.name}
      </h1>
      <p className="text-xl font-medium text-slate-600 dark:text-slate-300 sm:text-2xl">
        {profile.title} <span className="text-slate-400 dark:text-slate-500">·</span>{" "}
        {profile.company}
      </p>
      <p className="max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
        {profile.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-600 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
        >
          Get in touch
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-teal-500 hover:text-teal-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-400"
        >
          LinkedIn
        </a>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-teal-500 hover:text-teal-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-400"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
