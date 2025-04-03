import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl overflow-hidden relative"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/10 rounded-full"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full"></div>
          </div>
          
          <div className="relative z-10 p-12 md:p-16 text-center">
            <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-white/20 text-white">
              GET STARTED TODAY
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white max-w-3xl mx-auto">
              Ready to Transform Your SaaS Content Strategy?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss your content needs and see how our AI-powered approach can help your SaaS business grow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="https://calendly.com/hyperscriber/free-introductory-call" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8 py-6 text-base shadow-lg">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
