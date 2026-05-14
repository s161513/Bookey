import { motion } from "framer-motion";
import { Mic, MessageSquare, CalendarCheck, BrainCircuit, Clock, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice- en tekstknop",
    description: "Klanten spreken of typen hun vraag rechtstreeks op uw website. Geen app, geen drempel, meteen contact.",
    order: 1,
  },
  {
    icon: BrainCircuit,
    title: "AI herkent de intentie",
    description: "Bookey begrijpt of iemand info zoekt, een afspraak wil maken of support nodig heeft, en geeft direct een passend antwoord.",
    order: 2,
  },
  {
    icon: CalendarCheck,
    title: "Afspraken plannen",
    description: "Wanneer een klant klaar is om te boeken, stelt Bookey beschikbare momenten voor en zet de afspraak in uw agenda.",
    order: 3,
  },
  {
    icon: Clock,
    title: "24/7 bereikbaar",
    description: "Na openingsuren blijft Bookey vragen opvangen, kwalificeren en doorsturen zodat warme leads niet afkoelen.",
    order: 4,
  },
  {
    icon: MessageSquare,
    title: "Centraal dashboard",
    description: "Alle berichten en leads staan op één plek. De AI stelt antwoorden voor en u behoudt controle over belangrijke gesprekken.",
    order: 5,
  },
  {
    icon: BarChart3,
    title: "Concrete leadinzichten",
    description: "Zie welke vragen terugkomen, hoeveel leads Bookey opvangt en waar klanten afhaken of juist willen boeken.",
    order: 6,
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="bg-secondary py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Hoe het werkt
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground lg:text-4xl">
            Zo maakt Bookey uw bedrijf <span className="text-accent">direct bereikbaar</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            De widget verlaagt de drempel om contact op te nemen. De AI beantwoordt
            terugkerende vragen, kwalificeert leads, plant afspraken en bundelt de gesprekken
            overzichtelijk in uw dashboard.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Order badge */}
              <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-display text-xs font-bold">
                {feature.order}
              </div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
