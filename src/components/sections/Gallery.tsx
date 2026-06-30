import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { GalleryGrid, type GalleryImage } from "../ui/GalleryGrid";

const images: GalleryImage[] = [
  {
    src: "/images/gallery/field1-final-stress-map.png",
    title: "Stress Detection — Field 1",
    caption: "15 stressed zones identified across 48% of this field — color-coded and ready for targeted action.",
  },
  {
    src: "/images/gallery/field2-final-stress-map.png",
    title: "Stress Detection — Field 2",
    caption: "An independent session, same result quality — demonstrating reliability across real field conditions.",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="In the Field"
          title="Real fields. Real results."
          description="From live survey flights to finished health maps."
        />
        <div className="mt-14">
          <GalleryGrid images={images} />
        </div>
      </Container>
    </section>
  );
}
