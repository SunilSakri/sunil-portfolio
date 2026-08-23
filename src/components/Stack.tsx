import Section from "./Section";
import { coreCompetencies, topSkills } from "@/lib/data";

const items = [...topSkills, ...coreCompetencies];

function Row({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 gap-4" aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="grid h-16 shrink-0 place-items-center rounded-[8px] border bg-white px-5 font-mono text-xs font-semibold whitespace-nowrap text-neutral-600"
          style={{ borderColor: "#6F8CCA40" }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      description="The skills and competencies I reach for, from strategy to delivery."
    >
      <div className="group relative flex gap-4 overflow-hidden fade-mask p-2">
        <div className="animate-marquee pause-on-hover flex shrink-0 gap-4" style={{ ["--duration" as string]: "50s" }}>
          <Row />
        </div>
        <div className="animate-marquee pause-on-hover flex shrink-0 gap-4" style={{ ["--duration" as string]: "50s" }}>
          <Row ariaHidden />
        </div>
      </div>
    </Section>
  );
}
