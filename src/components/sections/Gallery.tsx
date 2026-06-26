import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { GalleryGrid, type GalleryImage } from "../ui/GalleryGrid";

const images: GalleryImage[] = [
  {
    src: "/images/photos/field-survey-aerial.jpeg",
    title: "Field Survey Flight",
    caption: "Raw aerial RGB capture from an AGRON survey mission over a real agricultural field.",
  },
  {
    src: "/images/photos/rgb-nir-orthomosaic.jpeg",
    title: "Stitched Orthomosaic",
    caption: "Hundreds of overlapping RGB/NoIR drone frames registered and stitched into a single field-level map.",
  },
  {
    src: "/images/gallery/orthomosaic-composite-1.png",
    title: "NDVI Output — Field Session 1",
    caption: "Vegetation index values computed from Red and NIR reflectance across one surveyed field.",
  },
  {
    src: "/images/gallery/orthomosaic-composite-2.png",
    title: "NDVI Output — Field Session 2",
    caption: "A second field session's NDVI map, ready for clustering and stress analysis.",
  },
  {
    src: "/images/gallery/ndvi-output-1.png",
    title: "NDVI Output — Field Session 3",
    caption: "A third field session, showing contrast between healthy and weak vegetation.",
  },
  {
    src: "/images/gallery/ndvi-output-2.png",
    title: "NDVI Output — Field Session 4",
    caption: "A fourth field session's NDVI pass from the same processing pipeline.",
  },
  {
    src: "/images/gallery/autoencoder-anomaly-map.png",
    title: "NDVI Output — High-Stress Session",
    caption: "A field session with markedly more stressed vegetation than usual, visible directly in the NDVI signal.",
  },
  {
    src: "/images/gallery/ndvi-health-zones.png",
    title: "NDVI Health Zones",
    caption: "NDVI output clustered into discrete health zones for at-a-glance field assessment.",
  },
  {
    src: "/images/gallery/crop-segmentation-mask.png",
    title: "Crop Segmentation Mask",
    caption: "Crop vs. non-crop separation, ensuring stress is only ever flagged inside actual rice crop regions.",
  },
  {
    src: "/images/gallery/stress-zone-comparison.png",
    title: "Final Stress Detection Map",
    caption: "The finished output: stressed zones (NDVI 0.05–0.12) against healthy crop (NDVI ≥ 0.12) — 15 stressed zones across 48% of this field.",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Research Gallery"
          title="Every stage of the pipeline, visualized"
          description="From raw aerial captures to the final stress map — click any image to view it full-size."
        />
        <div className="mt-14">
          <GalleryGrid images={images} />
        </div>
      </Container>
    </section>
  );
}
