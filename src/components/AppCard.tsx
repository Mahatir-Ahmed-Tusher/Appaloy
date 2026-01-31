import { Star, Download, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface AppCardProps {
  app: {
    id: number;
    name: string;
    developer: string;
    icon: string;
    rating: number;
    downloads: string;
    verified?: boolean;
    shortDescription?: string;
  };
  index?: number;
  variant?: "default" | "featured";
}

const AppCard = ({ app, index = 0, variant = "default" }: AppCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/app/${app.id}`);
  };

  if (variant === "featured") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        onClick={handleClick}
        className="flex-shrink-0 w-[280px] rounded-2xl glass-card p-4 card-shadow card-hover cursor-pointer"
      >
        <div className="flex items-start gap-4 mb-3">
          <img 
            src={app.icon} 
            alt={app.name}
            className="h-16 w-16 rounded-2xl object-cover card-shadow"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate">{app.name}</h3>
            <p className="text-sm text-muted-foreground truncate">{app.developer}</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                <span className="text-xs font-medium text-foreground">{app.rating}</span>
              </div>
              {app.verified && (
                <div className="flex items-center gap-0.5 text-success">
                  <Shield className="h-3 w-3" />
                  <span className="text-[10px] font-medium">Verified</span>
                </div>
              )}
            </div>
          </div>
        </div>
        {app.shortDescription && (
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
            {app.shortDescription}
          </p>
        )}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="w-full py-2.5 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold transition-transform active:scale-[0.98]"
        >
          View Details
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onClick={handleClick}
      className="flex items-center gap-3 p-3 rounded-2xl glass-card card-shadow card-hover cursor-pointer"
    >
      <img 
        src={app.icon} 
        alt={app.name}
        className="h-14 w-14 rounded-xl object-cover"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm text-foreground truncate">{app.name}</h3>
        <p className="text-xs text-muted-foreground truncate">{app.developer}</p>
        <div className="flex items-center gap-3 mt-1">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-primary text-primary" />
            <span className="text-xs text-muted-foreground">{app.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Download className="h-3 w-3" />
            <span className="text-xs">{app.downloads}</span>
          </div>
        </div>
      </div>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          handleClick();
        }}
        className="px-4 py-2 rounded-xl gradient-primary text-primary-foreground text-xs font-semibold transition-transform active:scale-[0.98]"
      >
        View
      </button>
    </motion.div>
  );
};

export default AppCard;
