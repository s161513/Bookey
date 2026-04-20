import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "€19",
    period: "/maand",
    description: "Perfect voor kleine zelfstandigen",
    users: "1 gebruiker",
    features: [
      "Voice & tekst widget",
      "Basis AI-antwoorden",
      "Inbox dashboard",
      "E-mail notificaties",
      "Bookey branding",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "€49",
    period: "/maand",
    description: "Voor KMO's die willen groeien",
    users: "2-5 gebruikers",
    features: [
      "Alles van Starter",
      "Automatische afspraken",
      "Analytics & rapportage",
      "CRM-integratie",
      "Eigen branding",
      "Prioritaire support",
    ],
    highlighted: true,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Prijzen
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground lg:text-4xl">
            Eenvoudige, transparante prijzen
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Geen verborgen kosten. Start vandaag met de gratis pilot.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-2xl border p-8 transition-shadow hover:shadow-lg ${
                plan.highlighted
                  ? "border-accent bg-card shadow-widget"
                  : "border-border bg-card shadow-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 font-display text-xs font-semibold text-accent-foreground">
                  Populairst
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-1 font-display text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
                <p className="mt-1 text-sm text-muted-foreground">{plan.users}</p>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                    <Check className="h-4 w-4 flex-shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-lg py-3 font-display text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground"
                    : "border border-border bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                Start gratis pilot
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
