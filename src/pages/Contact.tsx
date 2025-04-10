import React, {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser'

interface ContactFormProps {
  className?: string;
}


const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <Helmet>
          <meta charSet="utf-8" />
          <title>HyperScriber | Contact Us</title>
          <meta name="description" content="Have questions about our services or ready to transform your content strategy? We're here to help." />
          <link rel="canonical" href="https://hyperscriber.com/contact" />
          <link rel="icon" href="/favicon.ico" />
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

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {

const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init('4COZc8xvshn3d5SLB');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) {
        throw new Error('Form reference not found');
      }

      // Send the contact form template
      const contactResult = await emailjs.sendForm(
        'service_k2fd7af',
        'template_5yet3ff',
        formRef.current,
        '4COZc8xvshn3d5SLB'
      );

      console.log('Contact EmailJS Result:', contactResult);

      // Send the auto-reply template
      const autoReplyResult = await emailjs.sendForm(
        'service_k2fd7af',
        'template_h1t6dko',
        formRef.current,
        '4COZc8xvshn3d5SLB'
      );

      console.log('Auto-reply EmailJS Result:', autoReplyResult);

      if (contactResult.status !== 200 || autoReplyResult.status !== 200) {
        throw new Error(`Failed to send message. Contact Status: ${contactResult.status}, Auto-reply Status: ${autoReplyResult.status}`);
      }

      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });

      formRef.current.reset();

    } catch (error) {
      console.error('EmailJS Error Details:', {
        error,
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      });

      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input 
                  id="name" 
                  name="name"
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
                  name="email"
                  type="email" 
                  placeholder="email@example.com" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
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
              <a href="https://calendly.com/hyperscriber/free-introductory-call" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="default"
                className="w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                Book a Call <Calendar className="ml-2 h-4 w-4" />
              </Button>
              </a>
            </div>

            {/* New Contact Details Section */}
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a href="mailto:info@hyperscriber.com" className="text-sm hover:text-blue-700 transition-colors">
                    info@hyperscriber.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <a href="tel:+447543469409" className="text-sm hover:text-blue-700 transition-colors">
                    UK +44 7543 469409 (Whatsapp Available)
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">Fully Remote & Global Team (we value work-life balance 😅)</span>
                </div>
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
