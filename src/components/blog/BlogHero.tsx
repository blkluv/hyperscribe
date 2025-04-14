
import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const BlogHero = () => {
  return (
    <section className="bg-blue-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6"
          >
            <FileText className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-medium text-sm">HyperScriber Blog</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Insights for SaaS Content Excellence
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Expert strategies, AI innovations, and content marketing tips to help your SaaS business grow through exceptional content.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
