import { ChevronRight, Sparkles, Music, GraduationCap, TrendingUp, Zap, Award, LucideIcon } from "lucide-react";
import AppCard from "./AppCard";
import { motion } from "framer-motion";
import { AppData } from "@/data/mockApps";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  music: Music,
  "graduation-cap": GraduationCap,
  "trending-up": TrendingUp,
  zap: Zap,
  award: Award,
};

interface AppSectionProps {
  title: string;
  apps: AppData[];
  variant?: "default" | "featured";
  icon?: string;
}

const AppSection = ({ title, apps, variant = "default", icon }: AppSectionProps) => {
  const IconComponent = icon ? iconMap[icon] : null;

  const TitleWithIcon = () => (
    <div className="flex items-center gap-2">
      {IconComponent && (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 glow-sm">
          <IconComponent className="h-4 w-4 text-primary" />
        </div>
      )}
      <h2 className="text-lg font-bold text-foreground">{title}</h2>
    </div>
  );

  if (variant === "featured") {
    return (
      <section className="py-4">
        <div className="flex items-center justify-between px-4 mb-3">
          <TitleWithIcon />
          <button className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            See all
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {apps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} variant="featured" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="px-4 py-4"
    >
      <div className="flex items-center justify-between mb-3">
        <TitleWithIcon />
        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          See all
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-2">
        {apps.map((app, index) => (
          <AppCard key={app.id} app={app} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default AppSection;
