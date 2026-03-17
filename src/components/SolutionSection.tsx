import { motion } from "framer-motion";
import { Mic, MessageSquare, CalendarCheck, BrainCircuit, Clock, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice-first contactknop",
    description: "Klanten spreken een bericht in of typen — direct op jouw website. Geen wachtrij, geen telefoonstress.",
  },
  {
    icon: BrainCircuit,
    title: "AI-helpdesk",
    description: "Veelgestelde vragen worden automatisch beantwoord. De AI leert van jouw FAQ's en eerdere gesprekken.",
  },
  {
    icon: CalendarCheck,
    title: "Automatische afspraken",
    description: "Klanten plannen zelf een afspraak in via de widget. Jij krijgt het in je agenda zonder moeite.",
  },
  {
    icon: MessageSquare,
    title: "Dashboard met AI-suggesties",
    description: "Bekijk alle berichten en leads in één dashboard. AI stelt antwoorden voor — jij keurt ze goed.",
  },
  {
    icon: Clock,
    title: "Bereikbaar na sluitingstijd",
    description: "De widget vangt berichten op wanneer jij niet beschikbaar bent. Geen enkele lead gaat verloren.",
  },
  {
    icon: BarChart3,
    title: "Analytics & inzichten",
    description: "Zie hoeveel leads je opvangt, welke vragen vaak terugkomen en hoe snel je reageert.",
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
            De oplossing
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground lg:text-4xl">
            Eén knop. <span className="text-accent">Alles geregeld.</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Bookey combineert een slimme contactwidget met een AI-aangedreven dashboard — 
            zodat jij je kunt focussen op je werk.
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
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lg"
            >
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
