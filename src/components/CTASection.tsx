
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
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
              LIMITED TIME OFFER
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white max-w-3xl mx-auto">
              Ready to Transform Your SaaS Content Strategy?
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Book a free consultation today and get a custom content strategy plan worth $499, absolutely free.
            </p>
            
            {/* Social proof elements */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Check className="h-5 w-5 text-white" />
                <span className="text-white font-medium">No commitment required</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Check className="h-5 w-5 text-white" />
                <span className="text-white font-medium">30-minute strategy session</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Check className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Custom growth plan</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="https://calendly.com/hyperscriber/free-introductory-call" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8 py-6 text-base shadow-lg group">
                  Book Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
