import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceProcess from '@/components/services/ServiceProcess';
import CTASection from '@/components/CTASection';
import { ArrowDown } from 'lucide-react';
import { Helmet } from 'react-helmet';

const HowItWorks = () => {
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
      <Navbar />
      <main className="mt-16">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-white">
          <Helmet>
            <meta charSet="utf-8" />
            <title>HyperScriber | How It Works</title>
            <meta name="description" content="Our streamlined AI + human workflow delivers exceptional content that drives real business results." />
            <link rel="canonical" href="https://hyperscriber.com/how-it-works" />
            <link rel="icon" href="/favicon.ico" />
          </Helmet>
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
                OUR PROCESS
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                How <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">HyperScriber</span> Works
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10">
                Our streamlined AI + human workflow delivers exceptional content that drives real business results.
              </p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex justify-center mt-12"
              >
                <a 
                  href="#workflow" 
                  className="flex flex-col items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span className="mb-2">See our workflow</span>
                  <ArrowDown className="animate-bounce" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Workflow Section - Using our existing component */}
        <div id="workflow">
          <ServiceProcess />
        </div>
        
        {/* Process Details Section - Using a modified version of ServiceProcess */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes Our Process Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine the efficiency of AI with human expertise to deliver content that stands out
            </p>
          </div>
          
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">3x Faster Production</h3>
                <p className="text-muted-foreground">Our AI-enhanced workflow allows us to produce high-quality content in one-third of the time compared to traditional agencies.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Human Quality Assurance</h3>
                <p className="text-muted-foreground">Every piece of content goes through our expert review process to ensure accuracy, brand voice consistency, and human touch.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Data-Driven Strategy</h3>
                <p className="text-muted-foreground">We analyze performance metrics to continuously refine your content strategy and maximize ROI.</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default HowItWorks;
