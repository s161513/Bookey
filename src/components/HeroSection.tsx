import { motion } from "framer-motion";
import { ArrowRight, Mic } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-body text-sm text-accent">Nu in pilot — 5 KMO's gezocht</span>
            </div>

            <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-primary-foreground lg:text-6xl">
              Stop met leads{" "}
              <span className="text-accent">verliezen.</span>
              <br />
              Blijf altijd bereikbaar.
            </h1>

            <p className="mb-8 max-w-lg font-body text-lg text-primary-foreground/70">
              Bookey geeft jouw bedrijf een slimme contactknop voice-first 
              gekoppeld aan een AI-helpdesk die FAQ's, afspraken en berichten 
              automatisch afhandelt. Ook na sluitingstijd.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-display text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                Start gratis pilot
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#solution"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 font-display text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Bekijk hoe het werkt
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-primary-foreground/50">
              <div className="flex items-center gap-2">
                <Mic className="h-4 w-4 text-accent" />
                <span>Voice first</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>AI antwoorden</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>24/7 bereikbaar</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <img
              src={heroImage}
              alt="Bookey voice first contactwidget illustratie"
              className="w-full rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
