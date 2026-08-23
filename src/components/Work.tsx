import Section from "./Section";

export default function Work() {
  return (
    <Section
      id="work"
      eyebrow="Work"
      description="Projects land here as I build them through the cohort."
    >
      <div className="rounded-2xl border border-dashed border-neutral-200 bg-white/60 p-10 text-center">
        <p className="font-mono text-sm uppercase tracking-wide text-neutral-300">Coming soon</p>
      </div>
    </Section>
  );
}
