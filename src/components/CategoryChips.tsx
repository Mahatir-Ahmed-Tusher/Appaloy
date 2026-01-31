import { motion } from "framer-motion";
import { Gamepad2, BookOpen, Music, Camera, Wallet, Heart, Briefcase, Palette } from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: null },
  { id: "games", label: "Games", icon: Gamepad2 },
  { id: "education", label: "Education", icon: BookOpen },
  { id: "music", label: "Music", icon: Music },
  { id: "photo", label: "Photo", icon: Camera },
  { id: "finance", label: "Finance", icon: Wallet },
  { id: "health", label: "Health", icon: Heart },
  { id: "business", label: "Business", icon: Briefcase },
  { id: "art", label: "Art", icon: Palette },
];

interface CategoryChipsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryChips = ({ selectedCategory, onCategoryChange }: CategoryChipsProps) => {
  return (
    <section className="px-4 py-4">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;
          
          return (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              onClick={() => onCategoryChange(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all ${
                isSelected
                  ? "gradient-primary text-primary-foreground shadow-lg"
                  : "glass-card text-foreground hover:bg-secondary/80"
              }`}
            >
              {Icon && <Icon className="h-4 w-4" />}
              <span className="text-sm font-medium">{cat.label}</span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryChips;
