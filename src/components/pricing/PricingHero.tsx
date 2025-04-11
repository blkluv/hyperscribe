
import { motion } from 'framer-motion';
import { CheckCircle, ArrowDown } from 'lucide-react';

const PricingHero = () => {
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
            PRICING
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Simple, <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">Transparent</span> Pricing
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Choose the package that fits your business needs and scale as you grow. All packages include our AI-powered content creation process.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 flex flex-wrap gap-3 justify-center"
          >
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <CheckCircle size={18} className="text-blue-500" />
              <span className="text-sm font-medium">No hidden fees</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <CheckCircle size={18} className="text-blue-500" />
              <span className="text-sm font-medium">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <CheckCircle size={18} className="text-blue-500" />
              <span className="text-sm font-medium">Free consultation</span>
            </div>
          </motion.div>
        </motion.div>
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
                  <span className="mb-2">See packages below</span>
                  <ArrowDown className="animate-bounce" />
                </a>
              </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;
