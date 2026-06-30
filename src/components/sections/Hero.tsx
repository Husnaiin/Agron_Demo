"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, PlayCircle } from "lucide-react";
import { Container } from "../ui/Container";
import { Stat } from "../ui/Stat";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-ink-900">
      <Image
        src="/images/photos/field-survey-aerial.jpeg"
        alt="Aerial drone view of a crop field captured by AGRON"
        fill
        priority
        className="object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/75 to-ink-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/60 via-transparent to-ink-900/40" />
      <div className="bg-noise absolute inset-0 opacity-30" />

      <Container className="relative z-10 pt-28 pb-16 sm:pt-32">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-200"
          >
            Precision Agriculture · Autonomous · Offline-First
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-balance text-white sm:text-6xl lg:text-7xl"
          >
            See more.{" "}
            <span className="text-brand-300">Spray less.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            AGRON autonomously surveys your fields, maps every health zone, and
            pinpoints exactly where stress is emerging — so you treat only what
            needs it, with no internet connection required.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-900/40 transition-colors hover:bg-brand-400"
            >
              <PlayCircle className="h-5 w-5" />
              Watch the Demo
            </a>
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              See How It Works
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            <Stat tone="dark" value="~10 ac" label="Covered per autonomous flight on a single charge" />
            <Stat tone="dark" value="$1.5K" label="System cost — 93% less than commercial alternatives" />
            <Stat tone="dark" value="30–50%" label="Reduction in pesticide use with targeted treatment" />
            <Stat tone="dark" value="0" label="Internet required — works in the most remote fields" />
          </motion.div>
        </motion.div>
      </Container>

      <a
        href="#problem"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/50 transition-colors hover:text-white"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}
