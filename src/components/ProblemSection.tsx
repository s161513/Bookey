import { motion } from "framer-motion";
import { PhoneOff, UserX, TrendingDown } from "lucide-react";

const stats = [
  {
    icon: PhoneOff,
    value: "85%",
    label: "Fortune 500 bedrijven hebben géén telefoonnummer op hun homepagina",
    color: "text-warning" as const,
  },
  {
    icon: UserX,
    value: "59%",
    label: "van klanten verlaat een bedrijf na een slechte customer experience",
    color: "text-destructive" as const,
  },
  {
    icon: TrendingDown,
    value: "23%",
    label: "heeft nergens op hun website een telefoonnummer staan",
    color: "text-warning" as const,
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
            Bedrijven zijn <span className="text-warning">onbereikbaar</span> en verliezen klanten
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Bel angst bij jongere generaties, trage reacties en gemiste oproepen na 
            sluitingstijd kosten KMO's dagelijks leads en omzet.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-lg"
            >
              <stat.icon className={`mb-4 h-8 w-8 ${stat.color}`} />
              <div className={`mb-2 font-display text-4xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <p className="font-body text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
