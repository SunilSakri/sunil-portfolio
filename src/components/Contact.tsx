import Section from "./Section";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-col items-start gap-6 rounded-2xl bg-slate-900 p-8 dark:bg-slate-900/60 sm:p-10">
        <p className="max-w-xl text-lg leading-relaxed text-slate-200">
          Open to conversations about product strategy, supply chain systems, and
          building platforms that scale. Reach out any time.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-400"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-teal-400 hover:text-teal-300"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </Section>
  );
}
