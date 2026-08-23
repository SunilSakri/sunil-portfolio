import Section from "./Section";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" eyebrow="About">
      <p className="max-w-2xl leading-relaxed text-neutral-700">{profile.summary}</p>
    </Section>
  );
}
