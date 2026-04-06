import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Freelance", href: "#freelance" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="container px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <svg width="160" height="64" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="nav-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:"#4F46E5",stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:"#06B6D4",stopOpacity:1}} />
              </linearGradient>
            </defs>
            <g transform="translate(20,20)">
              <circle cx="40" cy="40" r="35" stroke="url(#nav-grad)" strokeWidth="3" fill="none"/>
              <line x1="25" y1="40" x2="55" y2="40" stroke="url(#nav-grad)" strokeWidth="2"/>
              <line x1="40" y1="25" x2="40" y2="55" stroke="url(#nav-grad)" strokeWidth="2"/>
              <circle cx="25" cy="40" r="3" fill="#06B6D4"/>
              <circle cx="55" cy="40" r="3" fill="#06B6D4"/>
              <circle cx="40" cy="25" r="3" fill="#4F46E5"/>
              <circle cx="40" cy="55" r="3" fill="#4F46E5"/>
              <circle cx="40" cy="40" r="10" stroke="#4F46E5" strokeWidth="2" fill="none"/>
            </g>
            <text x="100" y="55" fontFamily="Arial, sans-serif" fontSize="22" fill="currentColor" fontWeight="600">
              RAJ AHIRWAR
            </text>
            <text x="100" y="80" fontFamily="Arial, sans-serif" fontSize="12" fill="#6B7280">
              Build • Automate • Scale
            </text>
          </svg>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-xs tracking-wide text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
