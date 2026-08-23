import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience">
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-8 lg:p-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(120% 120% at 80% 0%, #EAF0FA 0%, #ffffff 60%)",
          }}
        />
        <div className="relative z-10 space-y-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-wide text-[#6F8CCA]">
            Software Engineer → Product Manager
          </p>
          <p className="max-w-2xl leading-relaxed tracking-tight text-neutral-700">
            Four years of writing code at{" "}
            <span className="font-semibold text-neutral-900">Ernst &amp; Young</span> — across US
            Tax, Wealth Management, and fraud dispute systems — taught me how software actually
            gets built, line by line. That instinct followed me into product: first untangling
            payments recovery workflows at{" "}
            <span className="font-semibold text-neutral-900">Optum</span>, then owning the
            ordering engine behind one of the UK&rsquo;s largest grocery networks at{" "}
            <span className="font-semibold text-neutral-900">Tesco Technology</span>. What
            changed wasn&rsquo;t the drive to build — it&rsquo;s that I now spend most of my time
            figuring out what&rsquo;s worth building in the first place.
          </p>
        </div>
      </div>
    </Section>
  );
}
