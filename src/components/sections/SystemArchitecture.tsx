import {
  Smartphone,
  Cloud,
  MapPinned,
  Route,
  WifiOff,
  Radio,
  BatteryWarning,
  BellRing,
  RotateCcw,
  Camera,
  Database,
  LayoutDashboard,
  GitCompareArrows,
  PenLine,
  Hexagon,
  ScanLine,
  Waypoints,
  Save,
} from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const groups = [
  {
    title: "On the Ground",
    subtitle: "Flutter Mobile GCS App",
    accent: "text-brand-700",
    chip: "bg-brand-50 text-brand-700",
    items: [
      { icon: MapPinned, text: "Mark field boundaries and auto-generate coverage waypoints" },
      { icon: Route, text: "Mission-type-aware path planning — boustrophedon sweeps for dense inspection, boundary routes, or custom waypoints" },
      { icon: WifiOff, text: "Offline-first: missions, fields, and schedules are stored locally and synced when a connection returns" },
      { icon: Smartphone, text: "Live telemetry, mission progress, and drone status without needing drone expertise" },
    ],
  },
  {
    title: "In the Air",
    subtitle: "Raspberry Pi + Pixhawk",
    accent: "text-brand-700",
    chip: "bg-brand-50 text-brand-700",
    items: [
      { icon: Radio, text: "Raspberry Pi FastAPI server bridges the app and flight controller — MAVLink commands drive the Pixhawk over pymavlink" },
      { icon: BatteryWarning, text: "Battery-aware safety uses a sliding voltage window, not single readings, to avoid false return-to-launch triggers" },
      { icon: BellRing, text: "A persistent message queue stores safety alerts during disconnects and delivers them the moment the app reconnects" },
      { icon: RotateCcw, text: "Mission resumption from the last completed waypoint after an interruption — saving battery, time, and duplicate captures" },
      { icon: Camera, text: "Synchronized RGB + NoIR capture, each frame tagged with GPS, altitude, timestamp, and mission ID" },
    ],
  },
  {
    title: "In the Cloud",
    subtitle: "Sync & Web Dashboard",
    accent: "text-brand-700",
    chip: "bg-brand-50 text-brand-700",
    items: [
      { icon: Cloud, text: "Mission data and imagery upload to Firebase and cloud storage once connectivity is available — never required mid-flight" },
      { icon: LayoutDashboard, text: "Web dashboard for reviewing surveys, field details, mission metadata, and RGB vs. NDVI map layers" },
      { icon: GitCompareArrows, text: "Comparison Lab overlays two missions from the same field — this week vs. last, or before vs. after spraying" },
      { icon: Database, text: "A self-collected, geotagged RGB/NoIR dataset underpins every NDVI, clustering, and autoencoder result" },
    ],
  },
];

const flow = [
  "Mobile App",
  "WebSocket",
  "Raspberry Pi (FastAPI)",
  "MAVLink",
  "Pixhawk",
  "Drone",
];

const pathPlanning = [
  { icon: PenLine, label: "Draw a Boundary", text: "Tap a few corner points on the map — no surveying equipment or GPS markers needed." },
  { icon: Hexagon, label: "Camera Footprint", text: "AGRON calculates each camera's ground coverage and overlap needed for a clean orthomosaic." },
  { icon: ScanLine, label: "Scan Pattern", text: "A boustrophedon (back-and-forth) flight path is generated to cover the full area with no gaps." },
  { icon: Waypoints, label: "Mission Waypoints", text: "The path is smoothed and optimized into the final waypoint list the drone actually flies." },
];

const resilience = [
  { icon: BatteryWarning, label: "Battery critical or interrupted", text: "A sliding voltage window — not a single noisy reading — detects when the drone genuinely needs to stop." },
  { icon: Save, label: "Saves progress, lands safely", text: "The current waypoint index is saved to memory and the drone returns-to-launch or lands locally." },
  { icon: RotateCcw, label: "Resumes exactly where it left off", text: "After a recharge, AGRON skips every completed waypoint and continues the same survey — no wasted battery or duplicate passes." },
];

export function SystemArchitecture() {
  return (
    <section id="system" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Development Phase"
          title="An end-to-end system, not just a model"
          description="A crop-stress model only matters if it can actually fly, land, and report back. AGRON pairs a farmer-friendly mobile app with an onboard flight computer and a cloud dashboard — the engineering platform that the NDVI research pipeline (up next) runs on, designed from the ground up for low-connectivity environments."
        />

        <Reveal>
          <div className="mt-12 overflow-x-auto">
            <div className="flex min-w-max items-center gap-2 rounded-2xl border border-ink-900/8 bg-white p-3 shadow-sm shadow-ink-900/5 sm:gap-3">
              {flow.map((node, i) => (
                <div key={node} className="flex items-center gap-2 sm:gap-3">
                  <span className="whitespace-nowrap rounded-xl bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-700">
                    {node}
                  </span>
                  {i < flow.length - 1 ? (
                    <span className="text-ink-900/30">→</span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

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
                      <item.icon className={`mt-0.5 h-5 w-5 flex-shrink-0 ${group.accent}`} strokeWidth={1.75} />
                      <span className="text-sm leading-relaxed text-ink-600">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-ink-900/8 bg-white p-7 shadow-sm shadow-ink-900/5">
              <h3 className="font-display text-xl font-bold text-ink-900">
                Smart path planning
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                The app turns a hand-drawn boundary into a full flight plan automatically.
              </p>
              <div className="mt-6 space-y-5">
                {pathPlanning.map((step, i) => (
                  <div key={step.label} className="flex gap-3">
                    <div className="flex flex-shrink-0 flex-col items-center">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                        <step.icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      {i < pathPlanning.length - 1 ? (
                        <span className="mt-1 h-full w-px flex-1 bg-ink-900/10" />
                      ) : null}
                    </div>
                    <div className="pb-1">
                      <p className="text-sm font-semibold text-ink-900">{step.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-600">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-ink-900/8 bg-white p-7 shadow-sm shadow-ink-900/5">
              <h3 className="font-display text-xl font-bold text-ink-900">
                Built to survive the field
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Rural flights lose power and connectivity — AGRON treats that as the normal case, not an edge case.
              </p>
              <div className="mt-6 space-y-5">
                {resilience.map((step, i) => (
                  <div key={step.label} className="flex gap-3">
                    <div className="flex flex-shrink-0 flex-col items-center">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                        <step.icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      {i < resilience.length - 1 ? (
                        <span className="mt-1 h-full w-px flex-1 bg-ink-900/10" />
                      ) : null}
                    </div>
                    <div className="pb-1">
                      <p className="text-sm font-semibold text-ink-900">{step.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-600">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
