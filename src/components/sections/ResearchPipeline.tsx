import Image from "next/image";
import clsx from "clsx";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

type StepImage = { src: string; alt: string; label: string };

type SingleImageStep = {
  title: string;
  body: string;
  image: string;
  alt: string;
  images?: undefined;
  formula?: string;
  notes?: string[];
};

type MultiImageStep = {
  title: string;
  body: string;
  image?: undefined;
  alt?: undefined;
  images: StepImage[];
  imageLayout?: "grid" | "stack";
  formula?: string;
  notes?: string[];
};

type Step = SingleImageStep | MultiImageStep;

const steps: Step[] = [
  {
    title: "Preprocessing — building the RG-NIR composite",
    body: "RGB and NoIR come from two separate cameras, so they're first registered into pixel alignment. Then the NoIR frame's Red channel — which is where the near-infrared signal actually lives — is extracted and swapped into the RGB frame's Blue channel, fusing both cameras into one RG-NIR composite per shot.",
    images: [
      { src: "/images/photos/raw-rgb-sample.jpg", alt: "Raw RGB capture from the AGRON camera rig", label: "RGB" },
      { src: "/images/photos/raw-noir-sample.jpg", alt: "Raw NoIR capture from the AGRON camera rig", label: "NoIR" },
      { src: "/images/gallery/rg-nir-composite.jpg", alt: "RG-NIR composite after the channel swap", label: "RG-NIR Composite" },
    ],
    notes: [
      "Stitching RGB and NoIR separately, then merging, takes too long and compounds errors at every step",
      "RGB alone can't reveal crop stress before it's visible to the eye",
      "The channel swap binds NIR information at the pixel level without breaking the visualization",
    ],
  },
  {
    title: "Orthomosaic stitching",
    body: "Geotagged RG-NIR composite frames from the flight are stitched together into a single field-level orthomosaic — replacing image-by-image inspection with one complete view of the whole field.",
    image: "/images/photos/field1-orthomosaic.jpeg",
    alt: "Stitched RG-NIR orthomosaic map of a crop field",
  },
  {
    title: "NDVI calculation",
    body: "Vegetation health is scored using Red and NIR reflectance: NDVI = (NIR − Red) / (NIR + Red). Higher values mean healthier vegetation; lower values can signal stress, disease, water issues, or pest damage.",
    image: "/images/gallery/field1-ndvi.png",
    alt: "NDVI false-color map computed from a stitched field orthomosaic",
    formula: "NDVI = (NIR − Red) / (NIR + Red)",
  },
  {
    title: "Clustering into health zones",
    body: "NDVI output is clustered into healthy, moderate, weak, and stressed zones by percentile thresholds. A Roboflow-annotated set of field images supplies the ground truth used to validate those clusters before they feed the anomaly models.",
    image: "/images/gallery/field1-health-zones.png",
    alt: "NDVI health-zone map with color-coded legend",
  },
  {
    title: "Autoencoder anomaly & crop segmentation",
    body: "Because real stressed-crop examples are scarce, a DCGAN trained on real healthy patches generates synthetic ones — filtered by NDVI and spectral-consistency checks — to grow the healthy training set. A denoising autoencoder trained only on those healthy RGB+NIR patches then flags stress through reconstruction error: stressed patches simply reconstruct poorly. A separate crop-segmentation autoencoder, trained on rice-only patches, masks out roads, soil, and boundaries so stress is ever only flagged inside real crop regions.",
    images: [
      { src: "/images/gallery/slide-augmenting-data.png", alt: "DCGAN-based healthy patch augmentation pipeline with quality filtering", label: "Augmenting the Healthy Dataset" },
      { src: "/images/gallery/slide-denoising-autoencoder.png", alt: "Denoising autoencoder training setup with loss curve", label: "Training the Denoising Autoencoder" },
    ],
    imageLayout: "stack",
  },
  {
    title: "Final stress map",
    body: "The two autoencoders' outputs combine into a farmer-readable stress map with a percentile-based legend. In this session, the pipeline flagged 15 stressed zones covering roughly 48% of the surveyed field.",
    image: "/images/gallery/field1-final-stress-map.png",
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
          description="Six stages turn two cheap camera feeds — drawn from a self-collected, 10K+ image dataset across 30+ field sessions — into a field-level diagnosis, combining classic remote-sensing techniques (NDVI, orthomosaics) with deep learning (autoencoders)."
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
                  {step.images ? (
                    step.imageLayout === "stack" ? (
                      <div className="space-y-4">
                        {step.images.map((img) => (
                          <div key={img.src}>
                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl shadow-ink-900/10">
                              <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                              />
                            </div>
                            <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.08em] text-ink-600">
                              {img.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 gap-2.5">
                        {step.images.map((img) => (
                          <div key={img.src}>
                            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl shadow-ink-900/10">
                              <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 17vw, 33vw"
                              />
                            </div>
                            <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.08em] text-ink-600">
                              {img.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )
                  ) : (
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl shadow-ink-900/10">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    </div>
                  )}
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
                  {step.notes ? (
                    <ul className="mt-4 space-y-1.5">
                      {step.notes.map((note) => (
                        <li key={note} className="flex gap-2 text-sm leading-relaxed text-ink-600">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brand-400" />
                          {note}
                        </li>
                      ))}
                    </ul>
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
