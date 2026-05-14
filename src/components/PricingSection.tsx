import { motion } from "framer-motion";
import { Check, Gift } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "€19",
    pilotPrice: "€9,50",
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
    pilotPrice: "€24,50",
    period: "/maand",
    description: "Voor KMO's die willen groeien",
    users: "2-5 gebruikers",
    features: [
      "Alle Starter-functies",
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
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Pilotaanbod
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground lg:text-4xl">
            Probeer Bookey 2 maanden gratis
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            We zoeken 5 KMO's die Bookey willen testen op hun website. Tijdens de pilot
            krijgt u begeleide onboarding en kunt u zonder risico zien hoeveel leads,
            vragen en afspraken Bookey opvangt.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 flex max-w-3xl items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 p-5 text-center shadow-card"
        >
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1 font-display text-xs font-bold uppercase tracking-wider text-accent-foreground">
              <Gift className="h-4 w-4" />
              Tijdelijk pilotvoordeel
            </div>
            <p className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Eerste 2 maanden gratis proberen
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Daarna behoudt u als pilotklant 50% korting op uw maandprijs.
            </p>
          </div>
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

              <div className="mb-6 rounded-xl bg-secondary p-4">
                <div className="mb-1 text-sm font-medium text-muted-foreground">
                  Na de gratis pilot
                </div>
                <div className="flex items-end gap-3">
                  <span className="font-display text-2xl font-bold text-muted-foreground line-through">
                    {plan.price}
                  </span>
                  <span className="font-display text-4xl font-bold text-foreground">
                    {plan.pilotPrice}
                  </span>
                  <span className="pb-1 text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-accent">50% pilotkorting</p>
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
                Start 2 maanden gratis
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
