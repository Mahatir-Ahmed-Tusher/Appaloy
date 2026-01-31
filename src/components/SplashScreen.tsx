import { motion, AnimatePresence } from "framer-motion";
import appaloyLogo from "@/assets/appaloy-logo-new.png";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Background gradient effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1 }}
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full gradient-primary blur-[100px]"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-accent blur-[80px]"
            />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: 0.2 
            }}
            className="relative z-10"
          >
          <motion.div
              animate={{ 
                filter: [
                  "drop-shadow(0 0 20px hsl(24 95% 53% / 0.4))",
                  "drop-shadow(0 0 50px hsl(24 95% 53% / 0.6))",
                  "drop-shadow(0 0 20px hsl(24 95% 53% / 0.4))"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img 
                src={appaloyLogo} 
                alt="Appaloy" 
                className="h-40 w-40 object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 text-3xl font-bold gradient-text"
          >
            Appaloy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-2 text-muted-foreground text-sm"
          >
            Discover amazing apps
          </motion.p>

          {/* Loading indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            className="mt-12 flex gap-1.5"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 0.8, 
                  repeat: Infinity,
                  delay: i * 0.2 
                }}
                className="h-2 w-2 rounded-full gradient-primary"
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
