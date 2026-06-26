import Image from "next/image";
import { Container } from "../ui/Container";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#system", label: "System" },
  { href: "#research", label: "Research" },
  { href: "#demo", label: "Demo" },
  { href: "#gallery", label: "Gallery" },
];

export function Footer() {
  return (
    <footer className="bg-ink-900">
      <Container className="flex flex-col gap-10 py-14 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Image
            src="/logos/agron-wordmark-white.svg"
            alt="AGRON"
            width={140}
            height={42}
            className="h-8 w-auto"
          />
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-col gap-2 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>AGRON — AI-driven agentic drone system for precision agriculture.</p>
          <p className="text-white/35">Fly Smart, Farm Smarter.</p>
        </div>
      </Container>
    </footer>
  );
}
