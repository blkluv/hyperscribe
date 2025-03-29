
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WorkflowSection from '@/components/WorkflowSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {
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
                <title>HyperScriber | Home</title>
                <meta name="description" content="Leveraging AI to create high-converting content that drives growth for SaaS companies. Content that converts, at scale." />
                <link rel="canonical" href="https://hyperscriber.com/" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WorkflowSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </motion.div>
  );
};

export default Index;
