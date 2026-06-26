import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows phones/tablets on the same Wi-Fi to load the dev server via its LAN IP.
  // Without this, Next.js blocks cross-origin dev requests and the page never hydrates
  // on any device other than the machine running `npm run dev`. Next.js matches these
  // as dot-segment wildcards (not CIDR), so each octet is matched individually.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
};

export default nextConfig;
