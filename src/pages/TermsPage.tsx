import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import BottomNav from "@/components/BottomNav";
const TermsPage = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Acceptance of Terms",
      content: `By accessing and using Appaloy, you accept and agree to be bound by the terms and provisions of this agreement. 
      If you do not agree to abide by these terms, please do not use this service.`
    },
    {
      title: "Use of Service",
      content: `You agree to use Appaloy only for lawful purposes and in a way that does not infringe the rights of, 
      restrict, or inhibit anyone else's use and enjoyment of the service. You must not misuse our service by knowingly 
      introducing viruses, trojans, or other material that is malicious or technologically harmful.`
    },
    {
      title: "User Accounts",
      content: `When you create an account with us, you must provide accurate and complete information. 
      You are responsible for safeguarding the password and for all activities that occur under your account. 
      You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.`
    },
    {
      title: "App Downloads",
      content: `Apps available through Appaloy are provided by third-party developers. While we strive to ensure all apps 
      meet our quality standards, we are not responsible for the content, functionality, or any issues arising from 
      third-party applications. Download and use apps at your own discretion.`
    },
    {
      title: "Intellectual Property",
      content: `The service and its original content, features, and functionality are and will remain the exclusive property 
      of Appaloy and its licensors. Our trademarks and trade dress may not be used in connection with any product or 
      service without the prior written consent of Appaloy.`
    },
    {
      title: "Limitation of Liability",
      content: `In no event shall Appaloy, nor its directors, employees, partners, agents, suppliers, or affiliates, 
      be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
      loss of profits, data, use, goodwill, or other intangible losses.`
    },
    {
      title: "Changes to Terms",
      content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
      We will provide notice of any significant changes by posting the new Terms on this page. Your continued use 
      of the Service after any changes constitutes acceptance of the new Terms.`
    },
    {
      title: "Contact Us",
      content: `If you have any questions about these Terms, please contact us at legal@appaloy.com.`
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
          <h1 className="text-lg font-semibold text-foreground">Terms of Service</h1>
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

export default TermsPage;
