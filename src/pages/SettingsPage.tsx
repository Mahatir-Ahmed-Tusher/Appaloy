import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Bell, Moon, Globe, Shield, Trash2, ChevronRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import BottomNav from "@/components/BottomNav";
const SettingsPage = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(true);

  const settingsGroups = [
    {
      title: "Preferences",
      items: [
        {
          icon: Bell,
          label: "Notifications",
          description: "Get notified about updates",
          toggle: true,
          value: notifications,
          onChange: setNotifications,
        },
        {
          icon: Moon,
          label: "Dark Mode",
          description: "Use dark theme",
          toggle: true,
          value: darkMode,
          onChange: setDarkMode,
        },
        {
          icon: Globe,
          label: "Auto-update apps",
          description: "Update apps automatically",
          toggle: true,
          value: autoUpdate,
          onChange: setAutoUpdate,
        },
      ],
    },
    {
      title: "Privacy & Security",
      items: [
        {
          icon: Shield,
          label: "App Permissions",
          description: "Manage app permissions",
          link: true,
        },
        {
          icon: Trash2,
          label: "Clear Cache",
          description: "Free up storage space",
          action: true,
        },
      ],
    },
  ];

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
          <h1 className="text-lg font-semibold text-foreground">Settings</h1>
        </div>
      </motion.header>

      <main className="px-4 py-6 space-y-6 safe-bottom">
        {settingsGroups.map((group, groupIndex) => (
          <motion.section
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIndex * 0.1 }}
          >
            <h2 className="text-sm font-semibold text-muted-foreground mb-3 px-1">
              {group.title}
            </h2>
            <div className="glass-card rounded-2xl overflow-hidden">
              {group.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between p-4 ${
                      itemIndex !== group.items.length - 1 ? "border-b border-border/30" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    {item.toggle && (
                      <Switch
                        checked={item.value}
                        onCheckedChange={item.onChange}
                      />
                    )}
                    {item.link && (
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.section>
        ))}
        
        <div className="h-8" />
      </main>

      <BottomNav />
    </div>
  );
};

export default SettingsPage;
