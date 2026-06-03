import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-background border-t border-border">
    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} InTissue. All rights reserved.</p>
      <nav className="flex gap-4">
        <Link to="/legal" className="hover:text-foreground transition-colors">
          Privacy Policy
        </Link>
        <Link to="/legal?tab=imprint" className="hover:text-foreground transition-colors">
          Imprint
        </Link>
      </nav>
    </div>
    <div className="border-t border-border/60 bg-muted/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <span>Website designed &amp; developed by</span>
        <a
          href="https://illu.hu"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-foreground hover:text-primary transition-colors"
        >
          Illu Kft.
        </a>
        <span className="hidden sm:inline">&mdash; intellectual property of Illu Kft.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
