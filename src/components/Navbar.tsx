import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";


const navItems = [
  { label: "Home", path: "/" },
  { label: "Videos", path: "/videos" },
  { label: "Veterinary", path: "/animal" },
  { label: "Connective Layer", path: "/production" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];


const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);


  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <img src="/images/it_logo.jpg" alt="InTissue" className="h-16 w-auto object-contain" />
        </Link>


        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
