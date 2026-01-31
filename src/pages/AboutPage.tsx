import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Github, Linkedin } from "lucide-react";
import appaloyLogo from "@/assets/appaloy-logo-new.png";
import BottomNav from "@/components/BottomNav";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 glass-nav px-4 py-3"
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50 text-foreground transition-colors hover:bg-secondary"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">About Us</h1>
        </div>
      </motion.header>

      <main className="px-4 py-6 safe-bottom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center mb-8"
        >
          <img
            src={appaloyLogo}
            alt="Appaloy"
            className="h-28 w-28 object-contain mb-4"
          />
          <h2 className="text-2xl font-bold gradient-text">Appaloy</h2>
          <p className="text-muted-foreground mt-1">Version 1.0.0</p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-6 mb-6"
        >
          <h3 className="text-lg font-bold text-foreground mb-3">Why Appaloy?</h3>
          <p className="text-muted-foreground leading-relaxed">
            Most of my apps were built to solve my own everyday problems. Over time, I realized 
            I needed a single platform where I could access all my creations from anywhere in the 
            world and easily share them with others. Appaloy was born from that vision—a personal 
            hub that doubles as a gateway for anyone who wants to explore and use these apps.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-6 mb-6"
        >
          <h3 className="text-lg font-bold text-foreground mb-3">What We Offer</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Curated selection of high-quality apps</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Verified developers and secure downloads</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Honest user reviews and ratings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Regular updates and new app discoveries</span>
            </li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-2xl p-6 mb-6"
        >
          <h3 className="text-lg font-bold text-foreground mb-3">Developer Contact</h3>
          <div className="space-y-3">
            <a 
              href="mailto:mahatirtusher@gmail.com" 
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span>mahatirtusher@gmail.com</span>
            </a>
            <a 
              href="https://github.com/Mahatir-Ahmed-Tusher" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5 text-primary" />
              <span>Mahatir-Ahmed-Tusher</span>
            </a>
            <a 
              href="https://in.linkedin.com/in/mahatir-ahmed-tusher-5a5524257" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              <span>Mahatir Ahmed Tusher</span>
            </a>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xs text-muted-foreground">
            © Appaloy. All Rights Reserved.
          </p>
        </motion.section>

        <div className="h-8" />
      </main>

      <BottomNav />
    </div>
  );
};

export default AboutPage;
