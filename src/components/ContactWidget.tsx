import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, X, Send, MessageSquare } from "lucide-react";

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"idle" | "recording" | "text">("idle");
  const [text, setText] = useState("");

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 overflow-hidden rounded-2xl border border-border bg-card shadow-widget"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-primary px-5 py-4">
              <div>
                <h4 className="font-display text-sm font-semibold text-primary-foreground">
                  Bookey
                </h4>
                <p className="text-xs text-primary-foreground/60">
                  Hoe kunnen we helpen?
                </p>
              </div>
              <button
                onClick={() => { setIsOpen(false); setMode("idle"); }}
                className="rounded-full p-1 text-primary-foreground/60 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              {mode === "idle" && (
                <div className="space-y-3">
                  <button
                    onClick={() => setMode("recording")}
                    className="flex w-full items-center gap-3 rounded-xl border border-border bg-secondary p-4 text-left transition-colors hover:bg-muted"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Mic className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-display text-sm font-semibold text-foreground">
                        Spraakbericht
                      </span>
                      <p className="text-xs text-muted-foreground">
                        Houd ingedrukt om te spreken
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => setMode("text")}
                    className="flex w-full items-center gap-3 rounded-xl border border-border bg-secondary p-4 text-left transition-colors hover:bg-muted"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-display text-sm font-semibold text-foreground">
                        Tekstbericht
                      </span>
                      <p className="text-xs text-muted-foreground">
                        Typ je vraag of bericht
                      </p>
                    </div>
                  </button>
                </div>
              )}

              {mode === "recording" && (
                <div className="flex flex-col items-center py-6">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 animate-pulse-ring rounded-full bg-accent/30" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Mic className="h-8 w-8" />
                    </div>
                  </div>
                  <p className="mb-1 font-display text-sm font-semibold text-foreground">
                    Aan het luisteren...
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Spreek nu je bericht in
                  </p>
                  <button
                    onClick={() => setMode("idle")}
                    className="mt-4 text-xs text-accent hover:underline"
                  >
                    Annuleren
                  </button>
                </div>
              )}

              {mode === "text" && (
                <div>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Typ je vraag..."
                    className="mb-3 h-24 w-full resize-none rounded-xl border border-border bg-secondary p-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => { setMode("idle"); setText(""); }}
                      className="text-xs text-muted-foreground hover:text-foreground"
                    >
                      Terug
                    </button>
                    <button className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-display text-sm font-semibold text-accent-foreground transition-transform hover:scale-105">
                      Versturen
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-widget"
      >
        {!isOpen && (
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent/40" />
        )}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div key="mic" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Mic className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ContactWidget;
