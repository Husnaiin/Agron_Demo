import Image from "next/image";
import { ScanSearch, Crosshair, ShieldCheck, LineChart } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const objectives = [
  {
    icon: ScanSearch,
    title: "Detect early stress",
    body: "Fuse RGB and NoIR drone imagery with deep learning to identify stress before it's visible to the human eye — turning raw aerial pixels into NDVI crop-health maps.",
  },
  {
    icon: Crosshair,
    title: "Act precisely",
    body: "Move from blanket spraying toward targeted inspection and, eventually, selective intervention — treating only the zones that actually need it.",
  },
  {
    icon: ShieldCheck,
    title: "Stay safe",
    body: "Battery-aware return-to-launch, a persistent alert queue, and robust flight control keep autonomous missions safe even over patchy connections.",
  },
  {
    icon: LineChart,
    title: "Show insights clearly",
    body: "Present NDVI maps, stress reports, mission records, and dashboard analytics in a form a non-technical farmer can actually act on.",
  },
];

export function Objectives() {
  return (
    <section id="solution" className="bg-ink-900 py-20 sm:py-28">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="The Solution"
          title="One drone ecosystem, four jobs to do"
          description="AGRON is a low-cost, offline-first precision agriculture ecosystem that uses deep learning on RGB + NoIR drone imagery, NDVI analytics, and clustering to detect crop stress early — delivering field-level insight without requiring technical drone expertise."
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

        <Reveal delay={0.3}>
          <div className="mx-auto mt-16 grid max-w-4xl gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:grid-cols-2 sm:items-center sm:p-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/gallery/rg-nir-composite.jpg"
                alt="Illustrative concept graphic of a drone scanning a field and surfacing a crop-stress zone"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-white">
                The idea, in one picture
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                A conceptual illustration of what AGRON does: fly over a field,
                fuse what the cameras see, and surface exactly where stress is
                hiding — before it spreads. The real, field-collected version
                of this is in the Research and Gallery sections below.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
