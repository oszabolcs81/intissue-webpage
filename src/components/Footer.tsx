import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-background border-t border-border py-6">
    <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
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
  </footer>
);

export default Footer;
