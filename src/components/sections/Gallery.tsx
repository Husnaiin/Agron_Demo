import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { GalleryGrid, type GalleryImage } from "../ui/GalleryGrid";

const images: GalleryImage[] = [
  {
    src: "/images/photos/field-survey-aerial.jpeg",
    title: "Field Survey Flight",
    caption: "Aerial capture from an AGRON survey mission over a real agricultural field.",
  },
  {
    src: "/images/photos/field1-orthomosaic.jpeg",
    title: "Orthomosaic — Field 1",
    caption: "RG-NIR composite frames from a Field 1 survey, registered and stitched into a single field-level map.",
  },
  {
    src: "/images/gallery/field2-orthomosaic.png",
    title: "Orthomosaic — Field 2",
    caption: "The same stitching pipeline applied to an independent second field session.",
  },
  {
    src: "/images/gallery/field1-ndvi.png",
    title: "NDVI Map — Field 1",
    caption: "Vegetation index values computed from Red and NIR reflectance across Field 1.",
  },
  {
    src: "/images/gallery/field2-ndvi.png",
    title: "NDVI Map — Field 2",
    caption: "Field 2's NDVI map, ready for clustering and stress analysis.",
  },
  {
    src: "/images/gallery/field1-health-zones.png",
    title: "NDVI Health Zones — Field 1",
    caption: "Field 1's NDVI output clustered into healthy, moderate, weak, and stressed zones.",
  },
  {
    src: "/images/gallery/field2-health-zones.png",
    title: "NDVI Health Zones — Field 2",
    caption: "The same clustering applied to Field 2, isolating its own stress pattern.",
  },
  {
    src: "/images/gallery/slide-augmenting-data.png",
    title: "Augmenting the Healthy Dataset",
    caption: "A DCGAN trained on real healthy patches generates synthetic ones; NDVI and spectral-consistency checks filter them before they join the autoencoder's training set.",
  },
  {
    src: "/images/gallery/slide-denoising-autoencoder.png",
    title: "Training the Denoising Autoencoder",
    caption: "The autoencoder learns to reconstruct clean healthy patches from corrupted versions — reconstruction error becomes the anomaly signal.",
  },
  {
    src: "/images/gallery/field1-crop-segmentation-mask.png",
    title: "Crop Segmentation Mask",
    caption: "Crop vs. non-crop separation, ensuring stress is only ever flagged inside actual rice crop regions.",
  },
  {
    src: "/images/gallery/field1-final-stress-map.png",
    title: "Final Stress Map — Field 1",
    caption: "The finished output: stressed zones (NDVI 0.05–0.12) against healthy crop (NDVI ≥ 0.12) — 15 stressed zones across 48% of this field.",
  },
  {
    src: "/images/gallery/field2-final-stress-map.png",
    title: "Final Stress Map — Field 2",
    caption: "The same pipeline's finished stress map for Field 2 — an independent session, same method.",
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
