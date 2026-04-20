import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground lg:text-5xl">
            Stop met leads verliezen.
            <br />
            <span className="text-accent">Start vandaag.</span>
          </h2>
          <p className="mb-8 font-body text-lg text-primary-foreground/70">
            We zoeken 5 KMO's voor onze gratis pilot. Start vandaag en laat 
            Bookey je klantencontact automatiseren.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-display text-base font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            Join de pilot
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-sm text-primary-foreground/40">
            Geen creditcard nodig · Gratis tijdens pilotfase
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
