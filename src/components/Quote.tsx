import { quote } from "@/lib/data";

export default function Quote() {
  return (
    <section className="mx-auto grid w-full max-w-3xl place-items-center px-6 py-10 text-center">
      <p className="max-w-2xl text-2xl leading-snug font-semibold md:text-4xl">
        <span className="text-neutral-900">{quote.lead}</span>{" "}
        <span className="text-neutral-300">{quote.rest}</span>
      </p>
    </section>
  );
}
