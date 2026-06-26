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
    title: "Full System Demo",
    description:
      "End-to-end walkthrough: mission planning on the mobile GCS, autonomous drone flight, and live results on the analytics dashboard.",
    youtubeId: "QLaP6_D4XU8",
    poster: "/images/photos/field-survey-aerial.jpeg",
    durationHint: "Full demo",
  },
  {
    id: "drone-flight",
    title: "Autonomous Drone Flight",
    description:
      "The drone executing a boustrophedon survey mission over a real rice field, capturing synchronized RGB and NoIR imagery.",
    youtubeId: "B-ZxedSz7Ow",
    poster: "/images/photos/rgb-nir-orthomosaic.jpeg",
    durationHint: "Flight demo",
  },
  {
    id: "mobile-gcs",
    title: "Mobile Ground Control Station",
    description:
      "Drawing field boundaries, selecting mission types, generating waypoints, and monitoring live telemetry from the Flutter app.",
    youtubeId: "0Eo5fRf2hWM",
    poster: "/images/gallery/ndvi-health-zones.png",
    durationHint: "App walkthrough",
  },
  {
    id: "dashboard",
    title: "Web Analytics Dashboard",
    description:
      "Reviewing past surveys, RGB vs NDVI map layers, crop-health trends, and the Comparison Lab for tracking change over time.",
    youtubeId: "Qk7hytJj7_o",
    poster: "/images/gallery/stress-detection-map.jpeg",
    durationHint: "Dashboard walkthrough",
  },
  {
    id: "dataset-outputs",
    title: "Dataset & Model Outputs",
    description:
      "A look at the self-collected RGB/NoIR dataset and the resulting NDVI, clustering, and autoencoder anomaly outputs.",
    youtubeId: "IouzTgqVh3s",
    poster: "/images/gallery/autoencoder-anomaly-map.png",
    durationHint: "Research outputs",
  },
  {
    id: "highlight-clip",
    title: "Quick Highlight Clip",
    description: "A short highlight clip of AGRON in the field.",
    youtubeId: "bcjIDWA5Myk",
    poster: "/images/gallery/crop-segmentation-mask.png",
    durationHint: "Highlight",
  },
];
