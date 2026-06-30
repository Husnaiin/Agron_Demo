import { WifiOff, Sprout, BadgeDollarSign, UserCheck, ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const highlights = [
  {
    icon: Sprout,
    title: "Up to 50% less chemical spend",
    body: "Only flagged zones get treated — typically 10–20% of the field. Less waste, lower costs, healthier soil.",
  },
  {
    icon: BadgeDollarSign,
    title: "A fraction of the cost",
    body: "Built for under $1,500 — while commercial systems start at $20,000–$25,000 and require recurring subscriptions.",
  },
  {
    icon: UserCheck,
    title: "No training required",
    body: "Any farmer can plan, launch, and review a full survey. No drone license, no technical background, no help needed.",
  },
  {
    icon: WifiOff,
    title: "Works anywhere",
    body: "Remote fields, no signal, no problem — every mission runs fully offline and syncs when connectivity returns.",
  },
];

export function WhyAgron() {
  return (
    <section className="bg-ink-900 py-20 sm:py-28">
      <Container>
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Why AGRON"
          title="Closing the loop from detection to action"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
                <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-display mt-4 text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/15 via-white/[0.03] to-transparent p-8 text-center sm:p-12">
            <p className="font-display text-2xl font-bold text-white sm:text-3xl">
              See more. Spray less.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              One autonomous flight. A complete field health report. Targeted
              action — without asking farmers to become drone experts.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-400"
              >
                Watch the Demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
