import Image from "next/image";
import clsx from "clsx";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const steps = [
  {
    title: "Self-collected dual-camera dataset",
    body: "Public crop datasets are handheld, ground-level RGB only — none matched our aerial RGB+NoIR rig. So we flew our own missions at 20m AGL, ~10km/h, fixed exposure, across 30+ field sessions over a full year, building a 10K+ image dataset with GPS- and timestamp-encoded filenames for later NDVI registration.",
    image: "/images/photos/field-survey-aerial.jpeg",
    alt: "Raw aerial RGB capture from an AGRON survey flight",
  },
  {
    title: "Registration & orthomosaic stitching",
    body: "RGB and NoIR frames from the two cameras are registered and aligned, then geotagged images from the flight are stitched together into a single field-level orthomosaic — replacing image-by-image inspection with one complete view of the whole field.",
    image: "/images/photos/rgb-nir-orthomosaic.jpeg",
    alt: "Stitched RGB/NoIR orthomosaic map of a crop field",
  },
  {
    title: "NDVI calculation",
    body: "Vegetation health is scored using Red and NIR reflectance: NDVI = (NIR − Red) / (NIR + Red). Higher values mean healthier vegetation; lower values can signal stress, disease, water issues, or pest damage.",
    image: "/images/gallery/ndvi-output-1.png",
    alt: "NDVI false-color map computed from a stitched field orthomosaic",
    formula: "NDVI = (NIR − Red) / (NIR + Red)",
  },
  {
    title: "Clustering into health zones",
    body: "NDVI output is clustered into healthy, moderate, weak, and stressed zones by percentile thresholds. A Roboflow-annotated set of field images supplies the ground truth used to validate those clusters before they feed the anomaly models.",
    image: "/images/gallery/ndvi-health-zones.png",
    alt: "NDVI health-zone map with color-coded legend",
  },
  {
    title: "Autoencoder anomaly & crop segmentation",
    body: "A denoising autoencoder trained only on healthy RGB+NIR patches flags stress through reconstruction error — stressed patches reconstruct poorly. A separate crop-segmentation autoencoder, trained on rice-only patches, masks out roads, soil, and boundaries so stress is ever only flagged inside real crop regions.",
    image: "/images/gallery/crop-segmentation-mask.png",
    alt: "Crop versus non-crop segmentation mask over a field orthomosaic",
  },
  {
    title: "Final stress map",
    body: "The two autoencoders' outputs combine into a farmer-readable stress map with a percentile-based legend. In this session, the pipeline flagged 15 stressed zones covering roughly 48% of the surveyed field.",
    image: "/images/gallery/stress-zone-comparison.png",
    alt: "Final stress detection map with legend and field statistics",
  },
];

export function ResearchPipeline() {
  return (
    <section id="research" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Research Phase"
          title="From raw drone pixels to an actionable stress map"
          description="Six stages turn two cheap camera feeds into a field-level diagnosis — combining classic remote-sensing techniques (NDVI, orthomosaics) with deep learning (autoencoders) trained on a self-collected, 10K+ image dataset."
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
                  {step.formula ? (
                    <p className="mt-4 inline-block rounded-lg bg-brand-50 px-4 py-2 font-mono text-sm font-medium text-brand-700">
                      {step.formula}
                    </p>
                  ) : null}
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
