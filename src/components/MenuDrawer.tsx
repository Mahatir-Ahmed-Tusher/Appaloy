import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Menu, Settings, Info, Shield, FileText, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import appaloyLogo from "@/assets/appaloy-logo-new.png";

const menuItems = [
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: Info, label: "About Us", path: "/about" },
  { icon: Shield, label: "Privacy Policy", path: "/privacy" },
  { icon: FileText, label: "Terms of Service", path: "/terms" },
];

interface MenuDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MenuDrawer = ({ open, onOpenChange }: MenuDrawerProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-80 glass-nav border-border/30 p-0">
        <div className="flex flex-col h-full">
          {/* Header - Logo only, compact */}
          <div className="px-6 py-4 gradient-primary flex items-center justify-center">
            <img 
              src={appaloyLogo} 
              alt="Appaloy" 
              className="h-16 w-16 object-contain"
            />
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-4">
            <div className="space-y-1">
              {menuItems.map((item, index) => {
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
                      onClick={() => onOpenChange(false)}
                      className="flex items-center justify-between p-4 rounded-xl glass-card hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{item.label}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border/30">
            <p className="text-xs text-muted-foreground text-center">
              Version 1.0.0 • © Appaloy. All Rights Reserved.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export const MenuButton = ({ onClick }: { onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-colors hover:bg-primary-foreground/25"
  >
    <Menu className="h-4 w-4" />
  </button>
);

export default MenuDrawer;
