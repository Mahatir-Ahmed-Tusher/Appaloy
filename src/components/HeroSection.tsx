import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HERO_BG_URL = "https://i.postimg.cc/VvyLBWGr/Untitled-design.gif";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden px-4 py-8"
      style={{
        background: isMobile 
          ? undefined 
          : 'linear-gradient(135deg, hsl(24 40% 12%) 0%, hsl(20 30% 8%) 50%, hsl(18 25% 6%) 100%)',
      }}
    >
      {/* Mobile GIF background */}
      {isMobile && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${HERO_BG_URL})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/80" />
          <div className="absolute inset-0 bg-primary/15" />
        </>
      )}

      {/* Glow orbs - only on desktop */}
      {!isMobile && (
        <>
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/2 h-24 w-24 rounded-full bg-primary/15 blur-2xl" />
        </>
      )}
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 mb-3"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary glow-sm">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold text-primary">Discover Apps</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold text-foreground mb-2"
        >
          Discover apps{" "}
          <span className="gradient-text">crafted for you</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground text-sm max-w-xs"
        >
          Curated, secure, and tailored to your needs. Find your next favorite app today.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default HeroSection;
