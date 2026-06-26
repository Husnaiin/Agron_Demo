import Link from "next/link";
import { WifiOff, Sprout, PiggyBank, Mic, ArrowRight, FileImage } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const highlights = [
  {
    icon: WifiOff,
    title: "Offline-first",
    body: "Plans, flies, and captures missions with zero connectivity — syncs to the cloud only once a connection is available.",
  },
  {
    icon: Sprout,
    title: "Less chemical waste",
    body: "Only the flagged 10–20% of a field gets sprayed — cutting pesticide costs and protecting soil health over time.",
  },
  {
    icon: PiggyBank,
    title: "Cost-effective",
    body: "A dual RGB/NoIR camera rig replaces multispectral sensors that cost many times more.",
  },
  {
    icon: Mic,
    title: "Built for the field",
    body: "Designed for non-technical farmers today — with a future Urdu voice interface on the roadmap.",
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
              Detect early. Act precisely. Farm smarter.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              AGRON closes the loop from spotting crop stress to planning the
              next survey — without asking farmers to become drone experts.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-400"
              >
                Watch the Demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/images/poster.jpeg"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <FileImage className="h-4 w-4" />
                View Research Poster
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
