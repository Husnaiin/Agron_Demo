import clsx from "clsx";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span
            className={clsx(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
              tone === "light"
                ? "border-brand-600/20 bg-brand-50 text-brand-700"
                : "border-white/15 bg-white/5 text-brand-200"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.08}>
        <h2
          className={clsx(
            "font-display mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.6rem]",
            tone === "light" ? "text-ink-900" : "text-white"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.14}>
          <p
            className={clsx(
              "mt-4 text-base leading-relaxed sm:text-lg",
              tone === "light" ? "text-ink-600" : "text-white/70"
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
