import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-primary bg-[image:var(--gradient-hero)] py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-white drop-shadow-sm lg:text-5xl">
            Maak uw website direct bereikbaar.
            <br />
            <span className="text-cyan-100">Vang meer warme leads op.</span>
          </h2>
          <p className="mb-8 font-body text-lg font-medium text-white/90">
            We zoeken 5 KMO's voor een begeleide pilot. U probeert Bookey 2 maanden gratis
            en ziet meteen hoeveel vragen, afspraken en leads de widget opvangt.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-display text-base font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            Start 2 maanden gratis
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-sm font-medium text-white/70">
            Begeleide onboarding · Daarna 50% pilotkorting op uw maandprijs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
