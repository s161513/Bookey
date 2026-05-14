import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <img src={logo} alt="Bookey logo" className="h-10 w-auto md:h-12" />
        <p className="text-center font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bookey. Klantcontact radicaal eenvoudiger.
        </p>
        <div className="flex gap-6">
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground">Privacy</a>
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground">Voorwaarden</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
