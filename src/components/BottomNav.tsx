import { Home, Grid3X3, Search, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SearchDialog from "@/components/SearchDialog";

const navItems = [
  { icon: Home, label: "Home", id: "home", path: "/" },
  { icon: Grid3X3, label: "Categories", id: "categories", path: "/" },
  { icon: Search, label: "Search", id: "search", path: null },
  { icon: User, label: "Profile", id: "profile", path: "/profile" },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  // Determine active tab based on current route
  const getActiveTab = () => {
    if (location.pathname === "/profile") return "profile";
    if (location.pathname === "/") return "home";
    return "home";
  };

  const [activeTab, setActiveTab] = useState(getActiveTab);

  useEffect(() => {
    setActiveTab(getActiveTab());
  }, [location.pathname]);

  const handleTabClick = (id: string, path: string | null) => {
    if (id === "search") {
      setSearchOpen(true);
      return;
    }
    
    if (id === "categories") {
      // Navigate to home first if not there, then scroll to categories
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById("categories-section")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById("categories-section")?.scrollIntoView({ behavior: "smooth" });
      }
      setActiveTab("categories");
      return;
    }

    setActiveTab(id);
    if (path && location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-safe"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <div className="glass-nav mx-auto flex max-w-md items-center justify-around rounded-3xl px-2 py-2 glow-sm">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id, item.path)}
              className="relative flex flex-col items-center gap-0.5 px-5 py-2"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 gradient-primary rounded-2xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon 
                className={`relative z-10 h-5 w-5 transition-colors ${
                  isActive ? "text-primary-foreground" : "text-muted-foreground"
                }`} 
              />
              <span 
                className={`relative z-10 text-[10px] font-medium transition-colors ${
                  isActive ? "text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </motion.nav>
  );
};

export default BottomNav;
