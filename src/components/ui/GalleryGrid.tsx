"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Expand } from "lucide-react";
import { Reveal } from "./Reveal";

export type GalleryImage = {
  src: string;
  title: string;
  caption: string;
};

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((image, i) => (
          <Reveal key={image.src} delay={(i % 4) * 0.06}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-xl bg-ink-800 text-left"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/0 to-ink-900/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Expand className="absolute right-3 top-3 h-5 w-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-semibold text-white">{image.title}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((image) => ({
          src: image.src,
          title: image.title,
          description: image.caption,
        }))}
        styles={{ container: { backgroundColor: "rgba(10, 15, 8, 0.96)" } }}
      />
    </>
  );
}
