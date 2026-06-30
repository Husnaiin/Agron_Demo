import Image from "next/image";
import clsx from "clsx";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

type Step = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

const steps: Step[] = [
  {
    title: "Complete aerial field map",
    body: "One autonomous flight covers the entire field and assembles every frame into a single seamless overhead view — replacing manual patch-by-patch inspection with a complete picture you can pan, zoom, and analyze instantly.",
    image: "/images/photos/field1-orthomosaic.jpeg",
    alt: "Complete aerial field map assembled from a single autonomous survey flight",
  },
  {
    title: "Health zone classification",
    body: "Every part of the field is scored and grouped into four zones — healthy, moderate, weak, and stressed — giving you a color-coded map you can read in seconds. No agronomist degree required.",
    image: "/images/gallery/field1-health-zones.png",
    alt: "Color-coded field health map showing four severity zones across a real crop field",
  },
  {
    title: "Precision stress map",
    body: "The final output: a targeted map showing exactly where to treat and where to leave alone. In one real mission, 15 stressed zones were identified across 48% of the field — caught before any visible symptoms appeared on the ground.",
    image: "/images/gallery/field1-final-stress-map.png",
    alt: "Final stress detection map with annotated zones ready for targeted treatment",
  },
];

export function ResearchPipeline() {
  return (
    <section id="research" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Field Intelligence"
          title="One flight. A complete field diagnosis."
          description="AGRON goes up, covers the field, and comes back with a ready-to-act health report. No manual inspection. No guesswork."
        />

        <div className="mt-16 space-y-16 sm:space-y-24">
          {steps.map((step, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={step.title}
                className={clsx(
                  "flex flex-col gap-8 lg:items-center lg:gap-14",
                  reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                )}
              >
                <Reveal className="lg:w-1/2">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl shadow-ink-900/10">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.1} className="lg:w-1/2">
                  <span className="font-display text-5xl font-bold text-brand-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-3 text-2xl font-bold text-ink-900 sm:text-[1.7rem]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-600">
                    {step.body}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
