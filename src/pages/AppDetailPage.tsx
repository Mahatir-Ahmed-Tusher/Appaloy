import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Download, Shield, Share2, ExternalLink, Check, Copy } from "lucide-react";
import { getAppById } from "@/data/mockApps";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";
import { useState } from "react";
import { toast } from "sonner";

const BASE_URL = "https://appaloy.vercel.app";

const AppDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const app = getAppById(Number(id));
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = `${BASE_URL}/app/${id}`;
    const shareData = {
      title: app?.name || "Check out this app",
      text: app?.shortDescription || "Download this amazing app on Appaloy!",
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        toast.success("Link copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      // User cancelled or error occurred, try clipboard fallback
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        toast.success("Link copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
      } catch {
        toast.error("Failed to share");
      }
    }
  };

  if (!app) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">App not found</h1>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
        <BottomNav />
      </div>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star key={i} className="h-4 w-4 fill-primary/50 text-primary" />
        );
      } else {
        stars.push(
          <Star key={i} className="h-4 w-4 text-muted-foreground/30" />
        );
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
          <h1 className="text-lg font-semibold text-foreground truncate flex-1">
            {app.name}
          </h1>
          <button 
            onClick={handleShare}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50 text-foreground transition-colors hover:bg-secondary"
          >
            {copied ? <Check className="h-5 w-5 text-success" /> : <Share2 className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <main className="safe-bottom">
        {/* App Info Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="px-4 py-6"
        >
          <div className="flex gap-4">
            <div className="h-28 w-28 flex-shrink-0 rounded-2xl bg-secondary/30 p-2 card-shadow">
              <img
                src={app.icon}
                alt={app.name}
                className="h-full w-full rounded-xl object-contain"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground">{app.name}</h2>
              <p className="text-sm text-primary font-medium">{app.developer}</p>
              
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1">
                  {renderStars(app.rating)}
                  <span className="text-sm font-semibold text-foreground ml-1">
                    {app.rating}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Download className="h-3.5 w-3.5" />
                  <span>{app.downloads}</span>
                </div>
                {app.verified && (
                  <div className="flex items-center gap-1 text-success">
                    <Shield className="h-3.5 w-3.5" />
                    <span className="text-xs font-medium">Verified</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.section>

        {/* App Info Cards (Metadata) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="px-4 py-2"
        >
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {app.version && (
              <div className="flex-shrink-0 glass-card rounded-xl px-4 py-3 text-center min-w-[100px]">
                <p className="text-xs text-muted-foreground">Version</p>
                <p className="text-sm font-semibold text-foreground">{app.version}</p>
              </div>
            )}
            {app.size && (
              <div className="flex-shrink-0 glass-card rounded-xl px-4 py-3 text-center min-w-[100px]">
                <p className="text-xs text-muted-foreground">Size</p>
                <p className="text-sm font-semibold text-foreground">{app.size}</p>
              </div>
            )}
            <div className="flex-shrink-0 glass-card rounded-xl px-4 py-3 text-center min-w-[100px]">
              <p className="text-xs text-muted-foreground">Rating</p>
              <p className="text-sm font-semibold text-foreground">{app.rating}/5</p>
            </div>
            <div className="flex-shrink-0 glass-card rounded-xl px-4 py-3 text-center min-w-[100px]">
              <p className="text-xs text-muted-foreground">Downloads</p>
              <p className="text-sm font-semibold text-foreground">{app.downloads}</p>
            </div>
          </div>
        </motion.section>

        {/* Download Button - Professional Style */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-4 py-4"
        >
          <a
            href={app.downloadUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative overflow-hidden rounded-2xl gradient-primary p-[1px]">
              <div className="relative flex items-center justify-center gap-3 rounded-2xl bg-background/10 backdrop-blur-sm px-6 py-4 transition-all hover:bg-background/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20">
                  <Download className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-bold text-primary-foreground">Download APK</p>
                  <p className="text-sm text-primary-foreground/80">
                    {app.size} • Version {app.version}
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 text-primary-foreground/60" />
              </div>
            </div>
          </a>
        </motion.section>

        {/* Short Description */}
        {app.shortDescription && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="px-4 pb-4"
          >
            <p className="text-muted-foreground">{app.shortDescription}</p>
          </motion.section>
        )}

        {/* Features */}
        {app.features && app.features.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="px-4 py-4"
          >
            <h3 className="text-lg font-bold text-foreground mb-3">Features</h3>
            <div className="glass-card rounded-xl p-4 space-y-2">
              {app.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Description */}
        {app.description && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="px-4 py-4"
          >
            <h3 className="text-lg font-bold text-foreground mb-3">About this app</h3>
            <div className="glass-card rounded-xl p-4">
              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {app.description}
              </p>
            </div>
          </motion.section>
        )}

        {/* Reviews */}
        {app.reviews && app.reviews.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="px-4 py-4"
          >
            <h3 className="text-lg font-bold text-foreground mb-3">
              Reviews ({app.reviews.length})
            </h3>
            <div className="space-y-3">
              {app.reviews.map((review) => (
                <div key={review.id} className="glass-card rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center">
                        <span className="text-xs font-bold text-primary-foreground">
                          {review.userName.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {review.userName}
                        </p>
                        <div className="flex items-center gap-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Extra padding for bottom nav */}
        <div className="h-8" />
      </main>

      <BottomNav />
    </div>
  );
};

export default AppDetailPage;
