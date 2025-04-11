
import React, {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Calendar, CheckCircle, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-white to-slate-50">
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
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
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
            <div className="flex items-center gap-2 bg-blue-50/80 px-4 py-2 rounded-full">
              <Check size={16} className="text-green-600" />
              <span className="text-sm font-medium">Fast Response</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50/80 px-4 py-2 rounded-full">
              <Check size={16} className="text-green-600" />
              <span className="text-sm font-medium">Expert Team</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50/80 px-4 py-2 rounded-full">
              <Check size={16} className="text-green-600" />
              <span className="text-sm font-medium">Customized Solutions</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init('4COZc8xvshn3d5SLB');
  }, []);

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      // Create form data to send
      const formData = new FormData();
      for (const [key, value] of Object.entries(values)) {
        formData.append(key, value);
      }

      // Send the contact form template
      const contactResult = await emailjs.send(
        'service_k2fd7af',
        'template_5yet3ff',
        values,
        '4COZc8xvshn3d5SLB'
      );

      console.log('Contact EmailJS Result:', contactResult);

      // Send the auto-reply template
      const autoReplyResult = await emailjs.send(
        'service_k2fd7af',
        'template_h1t6dko',
        values,
        '4COZc8xvshn3d5SLB'
      );

      console.log('Auto-reply EmailJS Result:', autoReplyResult);

      if (contactResult.status !== 200 || autoReplyResult.status !== 200) {
        throw new Error(`Failed to send message. Contact Status: ${contactResult.status}, Auto-reply Status: ${autoReplyResult.status}`);
      }

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });

      form.reset();

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
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          className="rounded-lg focus:ring-blue-500" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="email@example.com" 
                          className="rounded-lg focus:ring-blue-500" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="rounded-lg min-h-32 focus:ring-blue-500" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full rounded-full py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Book a Consultation Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 shadow-md rounded-xl text-white">
              <h3 className="text-xl font-semibold mb-4">Book a Consultation</h3>
              <p className="text-blue-100 mb-6">
                Ready to discuss your content needs? Schedule a free 30-minute consultation with our team.
              </p>
              <a href="https://calendly.com/hyperscriber/free-introductory-call" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="default"
                className="w-full rounded-full py-6 bg-white hover:bg-blue-50 text-blue-700 transition-colors"
              >
                Book a Call <Calendar className="ml-2 h-4 w-4" />
              </Button>
              </a>
            </div>

            {/* Contact Details Cards */}
            <div className="grid gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500 hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 text-blue-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:info@hyperscriber.com" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                      info@hyperscriber.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500 hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-50 text-green-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+447543469409" className="text-green-600 font-medium hover:text-green-700 transition-colors">
                      UK +44 7543 469409 (Whatsapp Available)
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500 hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-50 text-purple-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <span className="text-purple-600 font-medium">Fully Remote & Global Team (we value work-life balance 😅)</span>
                  </div>
                </div>
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
      <main className="min-h-screen">
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
