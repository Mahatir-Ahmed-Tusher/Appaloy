import TopAppBar from "@/components/TopAppBar";
import BottomNav from "@/components/BottomNav";
import HeroSection from "@/components/HeroSection";
import CategoryChips from "@/components/CategoryChips";
import AppSection from "@/components/AppSection";
import MenuDrawer from "@/components/MenuDrawer";
import SearchDialog from "@/components/SearchDialog";
import { featuredApps, trendingApps, newApps, editorsChoice, musicApps, educationApps, gamesApps, entertainmentApps, customFeaturedApps, getAppsByCategory, getAllApps } from "@/data/mockApps";
import { useState, useMemo } from "react";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredApps = useMemo(() => {
    if (selectedCategory === "all") {
      return null; // Show default sections
    }
    return getAppsByCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <TopAppBar onMenuClick={() => setMenuOpen(true)} onSearchClick={() => setSearchOpen(true)} />
      <MenuDrawer open={menuOpen} onOpenChange={setMenuOpen} />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />

      <main className="safe-bottom">
        <HeroSection />

        <div id="categories-section">
          <CategoryChips
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {filteredApps ? (
          // Show filtered results
          <AppSection
            title={`${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Apps`}
            apps={filteredApps}
          />
        ) : (
          // Show default sections
          <>
            <AppSection
              title="Featured Apps"
              apps={customFeaturedApps}
              variant="featured"
              icon="sparkles"
            />

            <AppSection
              title="Entertainment"
              apps={entertainmentApps}
              icon="zap"
            />

            <AppSection
              title="Games"
              apps={gamesApps}
              icon="gamepad-2"
            />

            <AppSection
              title="Music Apps"
              apps={musicApps}
              icon="music"
            />

            <AppSection
              title="Education"
              apps={educationApps}
              icon="graduation-cap"
            />

            <AppSection
              title="Trending in Bangladesh"
              apps={trendingApps}
              icon="trending-up"
            />

            <AppSection
              title="New & Updated"
              apps={newApps}
              icon="zap"
            />

            <AppSection
              title="Editor's Picks"
              apps={editorsChoice}
              icon="award"
            />
          </>
        )}

        {/* Extra padding for bottom nav */}
        <div className="h-8" />
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
