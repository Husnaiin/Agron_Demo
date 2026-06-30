import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { YouTubeEmbed } from "../ui/YouTubeEmbed";
import { videos } from "@/lib/videos";

export function VideoShowcase() {
  return (
    <section id="demo" className="bg-ink-900 py-20 sm:py-28">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="See It In Action"
          title="Watch AGRON work"
          description="Live footage from real AGRON missions in the field."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {videos.map((video, i) => (
            <Reveal key={video.id} delay={i * 0.1}>
              <div>
                <YouTubeEmbed
                  youtubeId={video.youtubeId}
                  poster={video.poster}
                  title={video.title}
                />
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {video.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                      {video.description}
                    </p>
                  </div>
                  {video.durationHint ? (
                    <span className="flex-shrink-0 whitespace-nowrap rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/50">
                      {video.durationHint}
                    </span>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
