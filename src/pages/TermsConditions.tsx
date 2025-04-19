import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet';

const TermsConditions = () => {
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
        <title>CREAI.DIGITAL | Terms & Conditions</title>
        <meta name="description" content="Terms and conditions for using CREAI.DIGITAL services." />
        <link rel="canonical" href="https://creai.digital/terms-conditions" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Navbar />
      
      <main className="mt-16">
        <div className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p>
                These Terms and Conditions ("Terms") govern your access to and use of CREAI.DIGITAL's website and services.
                By accessing or using our services, you agree to be bound by these Terms.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">2. Use of Services</h2>
              <p>
                Our services are provided for business and professional use. You agree to use our services only for lawful purposes
                and in accordance with these Terms.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">3. Privacy</h2>
              <p>
                Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms, explains how we collect, 
                use, and disclose information about you.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, and code,
                are owned by CREAI.DIGITAL and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">5. Disclaimers</h2>
              <p>
                Our services are provided "as is" without warranties of any kind, either express or implied.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
              <p>
                In no event shall CREAI.DIGITAL be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of any material changes.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at contact@creai.digital.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default TermsConditions;
