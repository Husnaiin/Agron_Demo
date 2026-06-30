import { ScanSearch, Crosshair, ShieldCheck, LineChart } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const objectives = [
  {
    icon: ScanSearch,
    title: "Detect early stress",
    body: "Identify crop stress before it's visible to the human eye — pinpointing affected zones across the whole field in a single flight, days before damage spreads.",
  },
  {
    icon: Crosshair,
    title: "Act precisely",
    body: "Treat only what needs it — cutting chemical waste, reducing costs, and protecting healthy crop from unnecessary intervention.",
  },
  {
    icon: ShieldCheck,
    title: "Stay safe",
    body: "Safe by design — the drone returns home automatically if anything goes wrong, and every alert is delivered to your phone the moment signal returns.",
  },
  {
    icon: LineChart,
    title: "Show insights clearly",
    body: "Present field health maps, stress reports, mission records, and trend analytics in a form a non-technical farmer can actually act on.",
  },
];

export function Objectives() {
  return (
    <section id="solution" className="bg-ink-900 py-20 sm:py-28">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="The Solution"
          title="Four capabilities. One system."
          description="One autonomous flight delivers everything a farmer needs to know: where to act, where to hold off, and where to watch for next time."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.06]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                  <item.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/65">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
