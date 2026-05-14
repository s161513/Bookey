import { motion } from "framer-motion";
import { Clock, PhoneOff, TrendingDown } from "lucide-react";

const stats = [
  {
    icon: PhoneOff,
    value: "85%",
    label: "van Fortune 500-bedrijven toont geen telefoonnummer op de homepagina",
    color: "text-warning" as const,
  },
  {
    icon: Clock,
    value: "24/7",
    label: "verwachting: klanten willen antwoord wanneer hun intentie het hoogst is",
    color: "text-accent" as const,
  },
  {
    icon: TrendingDown,
    value: "59%",
    label: "van consumenten haakt af na een slechte klantervaring",
    color: "text-destructive" as const,
  },
];

const ProblemSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Het probleem
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground lg:text-4xl">
            Elke gemiste vraag kan een <span className="text-warning">verloren klant</span> zijn
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Moderne klanten verwachten snelle, laagdrempelige communicatie. Als een KMO
            niet meteen bereikbaar is op het moment dat iemand wil boeken, kopen of vragen
            stellen, gaat die lead vaak naar een concurrent.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, i) => {
            // Fix: React componenten moeten met een hoofdletter beginnen
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-lg"
              >
                <Icon className={`mb-4 h-8 w-8 ${stat.color}`} />
                <div className={`mb-2 font-display text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="font-body text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;