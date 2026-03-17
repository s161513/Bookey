import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="font-display text-xl font-bold text-foreground">
          Bookey
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#solution" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">
            Oplossing
          </a>
          <a href="#pricing" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">
            Prijzen
          </a>
          <a
            href="#pricing"
            className="rounded-lg bg-accent px-5 py-2 font-display text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            Start pilot
          </a>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#solution" onClick={() => setMobileOpen(false)} className="font-body text-sm text-muted-foreground">Oplossing</a>
            <a href="#pricing" onClick={() => setMobileOpen(false)} className="font-body text-sm text-muted-foreground">Prijzen</a>
            <a href="#pricing" onClick={() => setMobileOpen(false)} className="rounded-lg bg-accent px-5 py-2 text-center font-display text-sm font-semibold text-accent-foreground">Start pilot</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
