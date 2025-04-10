import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesList from '@/components/services/ServicesList';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import CompletePackages from '@/components/services/CompletePackages';
import CTASection from '@/components/CTASection';
import { Helmet } from 'react-helmet';

const Services = () => {
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
        <title>HyperScriber | Services</title>
        <meta name="description" content="We combine AI efficiency with human creativity to deliver high-converting content that drives growth, engages audiences, and establishes thought leadership." />
        <link rel="canonical" href="https://hyperscriber.com/services" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Navbar />
      {/* Add main tag with top margin */}
      <main className="mt-16">
        <ServiceHero />
        <ServicesList />
        <ServiceProcess />
        <CompletePackages />
        <ServiceFAQ />
        <CTASection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Services;
