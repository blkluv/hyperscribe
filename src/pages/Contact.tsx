
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet';

const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600/10 via-purple-500/15 to-blue-400/5">
      <div className="container mx-auto px-6">
        <Helmet>
          <meta charSet="utf-8" />
          <title>HyperScriber | Contact Us</title>
          <meta name="description" content="Have questions about our services or ready to transform your content strategy? We're here to help." />
          <link rel="canonical" href="https://hyperscriber.com/contact" />
        </Helmet>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start a <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">Conversation</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Have questions about our services or ready to transform your content strategy?
            We're here to help.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Your name" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="email@example.com" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company (Optional)
                </label>
                <Input 
                  id="company" 
                  type="text" 
                  placeholder="Your company" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="How can we help you?" 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  required
                />
              </div>
              
              <Button type="submit" className="rounded-full w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Book a Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Ready to discuss your content needs? Schedule a free 30-minute consultation with our team.
              </p>
              <Button 
                variant="default"
                className="w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                Book a Call <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
