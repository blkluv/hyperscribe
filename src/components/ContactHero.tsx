import { motion } from 'framer-motion';
import { CheckCircle, ArrowDown } from 'lucide-react';

const ContactHero = () => {
    return (
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center mb-6">
              <span className="inline-block py-1.5 px-4 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Start a <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">Conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about our services or ready to transform your content strategy?
              We're here to help.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle size={18} className="text-blue-500" />
                <span className="text-sm font-medium">Fast Response</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle size={18} className="text-blue-500" />
                <span className="text-sm font-medium">Expert Team</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle size={18} className="text-blue-500" />
                <span className="text-sm font-medium">Customized Solutions</span>
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
                    <span className="mb-2">Contact Us</span>
                    <ArrowDown className="animate-bounce" />
                  </a>
                </motion.div>
        </div>
      </section>
    );
  };

export default ContactHero;