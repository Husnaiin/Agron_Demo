"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import clsx from "clsx";

export function YouTubeEmbed({
  youtubeId,
  poster,
  title,
  className,
}: {
  youtubeId: string;
  poster: string;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const notConfigured = youtubeId.startsWith("REPLACE_WITH");

  return (
    <div
      className={clsx(
        "group relative aspect-video w-full overflow-hidden rounded-2xl bg-ink-900",
        className
      )}
    >
      {playing && !notConfigured ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerate; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          disabled={notConfigured}
          className={clsx(
            "absolute inset-0 h-full w-full cursor-pointer",
            notConfigured && "cursor-not-allowed"
          )}
          aria-label={`Play ${title}`}
        >
          <Image
            src={poster}
            alt={title}
            fill
            className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/20 to-ink-900/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/90 shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-110">
              <Play className="h-7 w-7 fill-white text-white" strokeWidth={1} />
            </span>
            {notConfigured ? (
              <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white/80">
                Video link coming soon
              </span>
            ) : null}
          </div>
        </button>
      )}
    </div>
  );
}
