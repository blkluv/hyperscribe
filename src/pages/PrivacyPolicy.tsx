import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>CREAI.DIGITAL | Privacy Policy</title>
        <meta name="description" content="Privacy policy for CREAI.DIGITAL services." />
        <link rel="canonical" href="https://creai.digital/privacy-policy" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Navbar />
      
      <main className="mt-16">
        <div className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, information we collect automatically when you use our services,
                and information we collect from third parties.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to communicate with you,
                and to comply with legal obligations.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">3. Sharing of Information</h2>
              <p>
                We may share your information with service providers, business partners, and other third parties in certain circumstances.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">4. Your Choices</h2>
              <p>
                You have certain choices about how we use your information, including opting out of marketing communications
                and accessing, updating, and deleting your information.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">5. Cookies and Similar Technologies</h2>
              <p>
                We use cookies and similar technologies to collect information about your browsing activities and preferences.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">6. Security</h2>
              <p>
                We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>
              <p>
                Our services are not intended for children under the age of 13, and we do not knowingly collect personal information
                from children under 13.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">8. Changes to this Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy
                on this page.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at contact@creai.digital.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default PrivacyPolicy;
