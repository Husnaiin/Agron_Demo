import {
  Smartphone,
  Cloud,
  MapPinned,
  WifiOff,
  Radio,
  BatteryWarning,
  RotateCcw,
  LayoutDashboard,
  GitCompareArrows,
} from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const groups = [
  {
    title: "On the Ground",
    subtitle: "Mobile Command App",
    chip: "bg-brand-50 text-brand-700",
    items: [
      { icon: MapPinned, text: "Draw a boundary — a full flight plan is ready in seconds." },
      { icon: WifiOff, text: "No internet? No problem. Everything runs offline and syncs when signal returns." },
      { icon: Smartphone, text: "Live status in plain language — no drone experience needed." },
    ],
  },
  {
    title: "In the Air",
    subtitle: "Autonomous Flight System",
    chip: "bg-brand-50 text-brand-700",
    items: [
      { icon: Radio, text: "Fully autonomous from takeoff to landing — no pilot needed." },
      { icon: BatteryWarning, text: "Smart power monitoring brings the drone home before battery runs low." },
      { icon: RotateCcw, text: "Interrupted? The mission resumes exactly where it left off." },
    ],
  },
  {
    title: "In the Cloud",
    subtitle: "Sync & Web Dashboard",
    chip: "bg-brand-50 text-brand-700",
    items: [
      { icon: Cloud, text: "Data syncs automatically once connected — no manual uploads." },
      { icon: LayoutDashboard, text: "All surveys, health maps, and mission history in one dashboard." },
      { icon: GitCompareArrows, text: "Compare any two surveys side by side to track field recovery over time." },
    ],
  },
];


export function SystemArchitecture() {
  return (
    <section id="system" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Platform"
          title="One system. Three layers. Built for the field."
          description="A stress-detection capability only matters if it can actually fly, land, and report back. AGRON pairs a farmer-friendly mobile app with an autonomous flight system and a cloud dashboard — designed from the ground up for low-connectivity environments."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {groups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.1}>
              <div className="h-full rounded-3xl border border-ink-900/8 bg-white p-7 shadow-sm shadow-ink-900/5">
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${group.chip}`}>
                  {group.title}
                </span>
                <h3 className="font-display mt-4 text-xl font-bold text-ink-900">
                  {group.subtitle}
                </h3>
                <ul className="mt-5 space-y-4">
                  {group.items.map((item) => (
                    <li key={item.text} className="flex gap-3">
                      <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                        <item.icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <span className="mt-1.5 text-sm leading-relaxed text-ink-600">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

      </Container>
    </section>
  );
}
