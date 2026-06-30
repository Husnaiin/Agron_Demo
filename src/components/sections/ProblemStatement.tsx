import Image from "next/image";
import { Clock3, Droplets, WifiOff, DollarSign } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const problems = [
  {
    icon: Clock3,
    title: "Detection comes too late",
    body: "By the time crop stress is visible to the human eye, a large part of the field may already be affected. Manual inspection is slow and impractical at scale.",
  },
  {
    icon: Droplets,
    title: "Blanket spraying wastes chemicals",
    body: "Farmers spray entire fields even when only a small region is affected — raising costs, harming soil health, and degrading crop quality over time.",
  },
  {
    icon: DollarSign,
    title: "Commercial tools price out small farms",
    body: "Existing precision agriculture systems cost $20K–$25K or more — putting them entirely out of reach for smallholder farmers.",
  },
  {
    icon: WifiOff,
    title: "Rural fields lack reliable internet",
    body: "Cloud-dependent platforms fail where connectivity is weak or absent — exactly the conditions most agricultural fields operate in.",
  },
];

export function ProblemStatement() {
  return (
    <section id="problem" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Problem"
          title="Precision agriculture wasn't built for the farmers who need it most"
          description="Pakistan imported roughly $193M worth of pesticides in 2024 — much of it sprayed across entire fields when only patches were ever at risk. AGRON makes early detection and targeted treatment accessible to every farm, at a fraction of the cost."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-ink-900/8 bg-white p-6 shadow-sm shadow-ink-900/5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/gallery/concept-illustration.jpg"
                alt="Illustrative concept graphic of a drone identifying stressed crop zones in a field"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-xl font-semibold leading-snug text-ink-900 sm:text-2xl">
              Precision agriculture should work for every farmer — not just those with a six-figure budget.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-600">
              Built for under $1,500. No internet. No drone license. One flight — and a farmer knows exactly where to treat.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
