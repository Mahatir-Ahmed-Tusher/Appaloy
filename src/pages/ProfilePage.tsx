import { User, Settings, Bell, Heart, Download, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const profileMenuItems = [
  { icon: Heart, label: "Favorites", path: "/favorites" },
  { icon: Download, label: "Downloads", path: "/downloads" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const ProfilePage = () => {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="gradient-primary px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <div className="h-24 w-24 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-4 glow-md">
            <User className="h-12 w-12 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-primary-foreground">Guest User</h1>
          <p className="text-primary-foreground/70 text-sm">Sign in to access all features</p>
        </motion.div>
      </div>

      {/* Menu Items */}
      <div className="p-4 space-y-2">
        {profileMenuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={item.path}
                className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:bg-secondary/50 transition-colors"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{item.label}</span>
              </Link>
            </motion.div>
          );
        })}

        {/* Sign Out Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:bg-destructive/10 transition-colors w-full mt-4"
        >
          <div className="h-10 w-10 rounded-xl bg-destructive/10 flex items-center justify-center">
            <LogOut className="h-5 w-5 text-destructive" />
          </div>
          <span className="font-medium text-destructive">Sign Out</span>
        </motion.button>
      </div>

      <BottomNav />
    </div>
  );
};

export default ProfilePage;
