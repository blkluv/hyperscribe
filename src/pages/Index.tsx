
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import ServicesSection from '@/components/services/ServicesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet';
import PricingBenefits from '@/components/pricing/PricingBenefits';
import TopBanner from '@/components/TopBanner';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>HyperScriber | AI-Powered Content Agency</title>
        <meta name="description" content="Leveraging AI to create high-converting content that drives growth for SaaS companies. Content that converts, at scale." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="canonical" href="https://hyperscriber.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <div id="workflow">
          <ServicesSection />
        </div>
        <PricingBenefits />
        <CTASection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
