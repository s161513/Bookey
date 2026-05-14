import { motion } from "framer-motion";
import { ArrowRight, Mic, Calendar, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary bg-[image:var(--gradient-hero)] py-20 lg:py-28">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Trigger Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-1.5 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="font-body text-xs font-semibold tracking-wide uppercase text-cyan-100">
                2 maanden gratis · 5 KMO's gezocht
              </span>
            </div>

            {/* Headline: Verfijnd naar 3xl/4xl voor fullscreen balans */}
            <h1 className="mb-6 max-w-3xl font-display text-3xl font-bold leading-tight text-white drop-shadow-sm md:text-4xl lg:text-5xl">
              Klanten willen nu contact.
              <br />
              <span className="text-cyan-100">Bookey vangt ze meteen op.</span>
            </h1>

            {/* Subtekst: Max-width strakker en tekst kleiner (sm/base) */}
            <p className="mb-10 max-w-2xl font-body text-sm font-medium leading-relaxed text-white/90 md:text-base">
              Bookey zet een voice- en tekstknop op uw website. Klanten stellen hun vraag,
              krijgen direct een AI-antwoord en kunnen meteen een afspraak inplannen — ook
              buiten de openingsuren.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-display text-sm font-semibold text-accent-foreground transition-all hover:scale-105 hover:shadow-lg"
              >
                Start 2 maanden gratis
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#solution"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Bekijk de oplossing
              </a>
            </div>

            {/* Minimal Features List */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-[12px] font-semibold uppercase tracking-wider text-white/70">
              <div className="flex items-center gap-2">
                <Mic className="h-4 w-4 text-cyan-100" />
                <span>Voice AI</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-cyan-100" />
                <span>Auto-Booking</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-cyan-100" />
                <span>24/7 Respons</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;