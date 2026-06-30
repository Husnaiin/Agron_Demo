export type VideoEntry = {
  id: string;
  title: string;
  description: string;
  /** YouTube video ID — the 11-character code from the share URL, e.g. "dQw4w9WgXcQ".
   *  Upload each clip to YouTube as Unlisted, then paste its ID here. */
  youtubeId: string;
  /** Local poster image shown before the video is played. */
  poster: string;
  durationHint?: string;
};

export const videos: VideoEntry[] = [
  {
    id: "full-demo",
    title: "End-to-End Demo",
    description:
      "Plan a field, launch the drone, and receive a finished health report — the complete AGRON workflow in a single session.",
    youtubeId: "QLaP6_D4XU8",
    poster: "/images/photos/field-survey-aerial.jpeg",
    durationHint: "Full demo",
  },
  {
    id: "drone-flight",
    title: "Autonomous Field Survey",
    description:
      "The drone covers the entire field from takeoff to landing — no pilot input, no missed patches.",
    youtubeId: "B-ZxedSz7Ow",
    poster: "/images/photos/field1-orthomosaic.jpeg",
    durationHint: "Flight",
  },
];
