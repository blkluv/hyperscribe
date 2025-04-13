
import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react';
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
import ContactHero from '@/components/ContactHero';
import CTASection from '@/components/CTASection';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HyperScriber | Contact Us</title>
        <meta name="description" content="Have questions about our services or ready to transform your content strategy? We're here to help." />
        <link rel="canonical" href="https://hyperscriber.com/contact" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen mt-16">
        <ContactHero />
        
        {/* Redesigned Contact Form Section */}
        <section id="contact-form" className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form Card */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
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
                
                {/* Contact Info Cards */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="space-y-6"
                >
                  {/* Book a Consultation Card */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl shadow-lg text-white">
                    <h3 className="text-xl font-semibold mb-4">Book a Consultation</h3>
                    <p className="text-blue-50 mb-6">
                      Ready to discuss your content needs? Schedule a free 15-minute consultation with our team.
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

                  {/* Contact Cards */}
                  <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                    <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
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
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 text-blue-600">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <a href="tel:+447543469409" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                            UK +44 7543 469409 (WhatsApp Available)
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 text-blue-600">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <span className="text-blue-600 font-medium">Fully Remote</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* FAQ Teaser */}
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <h4 className="font-medium">Fast Turnaround Times</h4>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <h4 className="font-medium">Dedicated Account Manager</h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <h4 className="font-medium">Results-Driven Approach</h4>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section will be included here */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
