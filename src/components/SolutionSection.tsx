import { motion } from "framer-motion";
import { Mic, MessageSquare, CalendarCheck, BrainCircuit, Clock, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Widget ontvangt bericht",
    description: "Klanten bellen of spreken rechtstreeks via jouw website  geen app nodig. Direct, persoonlijk contact.",
    order: 1,
  },
  {
    icon: BrainCircuit,
    title: "AI beantwoordt automatisch",
    description: "De AI leert van je FAQ's en eerdere gesprekken. Veelgestelde vragen zijn in seconden beantwoord.",
    order: 2,
  },
  {
    icon: CalendarCheck,
    title: "Afspraken inplannen",
    description: "Klanten plannen zelf in. Jij ziet het direct in je agenda  geen handwerk.",
    order: 3,
  },
  {
    icon: Clock,
    title: "24/7 bereikbaar",
    description: "De widget werkt even hard wanneer jij niet beschikbaar bent. Geen lead gaat verloren.",
    order: 4,
  },
  {
    icon: MessageSquare,
    title: "Centraal dashboard",
    description: "Alle berichten, leads en inzichten op één plek. AI stelt antwoorden voor  jij keurt ze goed.",
    order: 5,
  },
  {
    icon: BarChart3,
    title: "Analytics & inzichten",
    description: "Zie welke vragen het vaakst voorkomen, hoe snel je reageert en hoeveel leads je opvangt.",
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
            Bookey handelt alles <span className="text-accent">automatisch</span> af
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            De Bookey widget vangt vragen op, de AI antwoordt slim, en alles 
            wordt centraal beheerd in jouw dashboard.
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
