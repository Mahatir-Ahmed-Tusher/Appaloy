import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getAllApps, AppData } from "@/data/mockApps";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const allApps = useMemo(() => getAllApps(), []);

  const filteredApps = useMemo(() => {
    if (!query.trim()) return [];
    const searchTerm = query.toLowerCase();
    return allApps.filter(
      (app) =>
        app.name.toLowerCase().includes(searchTerm) ||
        app.developer.toLowerCase().includes(searchTerm) ||
        app.category?.toLowerCase().includes(searchTerm) ||
        app.shortDescription?.toLowerCase().includes(searchTerm)
    );
  }, [query, allApps]);

  const handleAppClick = (app: AppData) => {
    onOpenChange(false);
    setQuery("");
    navigate(`/app/${app.id}`);
  };

  const handleClose = () => {
    onOpenChange(false);
    setQuery("");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Dialog */}
      <div className="absolute left-1/2 top-20 w-[calc(100%-2rem)] max-w-md -translate-x-1/2">
        <div className="glass-card rounded-2xl border border-border/30 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/30">
            <h2 className="text-lg font-semibold text-foreground">Search Apps</h2>
            <button
              onClick={handleClose}
              className="h-8 w-8 flex items-center justify-center rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Search Input */}
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search apps, developers, categories..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full h-12 pl-10 pr-10 bg-secondary/50 border border-border/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-muted-foreground hover:text-muted transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="max-h-[50vh] overflow-y-auto px-4 pb-4">
            {query && filteredApps.length === 0 && (
              <div className="py-8 text-center">
                <p className="text-muted-foreground">No apps found for "{query}"</p>
              </div>
            )}

            {filteredApps.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground mb-3">
                  {filteredApps.length} result{filteredApps.length > 1 ? "s" : ""} found
                </p>
                {filteredApps.map((app) => (
                  <button
                    key={app.id}
                    onClick={() => handleAppClick(app)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors text-left"
                  >
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="h-12 w-12 rounded-xl object-contain bg-secondary/30"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-foreground truncate">
                        {app.name}
                      </h4>
                      <p className="text-xs text-muted-foreground truncate">
                        {app.developer}
                      </p>
                      {app.category && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-medium rounded-full bg-primary/10 text-primary capitalize">
                          {app.category}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {!query && (
              <div className="py-8 text-center">
                <Search className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground text-sm">Start typing to search apps</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDialog;
