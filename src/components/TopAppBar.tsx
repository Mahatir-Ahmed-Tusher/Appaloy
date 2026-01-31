import { Search } from "lucide-react";
import appaloyLogo from "@/assets/appaloy-logo-new.png";
import { motion } from "framer-motion";
import { MenuButton } from "./MenuDrawer";
import { useState, useEffect } from "react";

interface TopAppBarProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

const TopAppBar = ({ onMenuClick, onSearchClick }: TopAppBarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`sticky top-0 z-50 px-4 py-1 transition-all duration-300 ${
        scrolled 
          ? "glass-nav shadow-lg" 
          : "gradient-primary"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        {/* Logo and Title */}
        <div className="flex items-center gap-2 -my-1">
          <img 
            src={appaloyLogo} 
            alt="Appaloy" 
            className="h-10 w-10 object-contain"
          />
          <span 
            className="text-xl font-bold text-primary-foreground"
            style={{ fontFamily: "'Righteous', cursive", letterSpacing: "0.02em" }}
          >
            Appaloy
          </span>
        </div>

        {/* Search and Menu */}
        <div className="flex items-center gap-2">
          <button 
            onClick={onSearchClick}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-colors hover:bg-primary-foreground/25"
          >
            <Search className="h-4 w-4" />
          </button>
          <MenuButton onClick={onMenuClick} />
        </div>
      </div>
    </motion.header>
  );
};

export default TopAppBar;
