import clsx from "clsx";
import { Reveal } from "./Reveal";

export function Stat({
  value,
  label,
  tone = "light",
  delay = 0,
}: {
  value: string;
  label: string;
  tone?: "light" | "dark";
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div>
        <p
          className={clsx(
            "font-display text-3xl font-bold tracking-tight sm:text-4xl",
            tone === "light" ? "text-brand-700" : "text-brand-300"
          )}
        >
          {value}
        </p>
        <p
          className={clsx(
            "mt-1 text-sm leading-snug sm:text-[0.95rem]",
            tone === "light" ? "text-ink-600" : "text-white/65"
          )}
        >
          {label}
        </p>
      </div>
    </Reveal>
  );
}
