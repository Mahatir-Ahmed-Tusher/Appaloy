import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import BottomNav from "@/components/BottomNav";
const PrivacyPage = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Information We Collect",
      content: `We collect information you provide directly to us, such as when you create an account, 
      download apps, or contact us for support. This may include your name, email address, and device information.`
    },
    {
      title: "How We Use Your Information",
      content: `We use the information we collect to provide, maintain, and improve our services, 
      to process transactions, send you technical notices and support messages, and respond to your comments and questions.`
    },
    {
      title: "Information Sharing",
      content: `We do not share your personal information with third parties except as described in this policy. 
      We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.`
    },
    {
      title: "Data Security",
      content: `We take reasonable measures to help protect information about you from loss, theft, misuse, 
      unauthorized access, disclosure, alteration, and destruction. All data is encrypted in transit and at rest.`
    },
    {
      title: "Your Rights",
      content: `You have the right to access, update, or delete your personal information at any time. 
      You can also opt out of receiving promotional communications from us by following the instructions in those messages.`
    },
    {
      title: "Contact Us",
      content: `If you have any questions about this Privacy Policy, please contact us at privacy@appaloy.com.`
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
          <h1 className="text-lg font-semibold text-foreground">Privacy Policy</h1>
        </div>
      </motion.header>

      <main className="px-4 py-6 safe-bottom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <p className="text-sm text-muted-foreground">
            Last updated: January 30, 2025
          </p>
        </motion.div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card rounded-2xl p-5"
            >
              <h2 className="text-base font-bold text-foreground mb-2">
                {section.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </motion.section>
          ))}
        </div>

        <div className="h-8" />
      </main>

      <BottomNav />
    </div>
  );
};

export default PrivacyPage;
