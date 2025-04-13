
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import emailjs from '@emailjs/browser';
import ContactHero from '@/components/ContactHero';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

const Contact = () => {
  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init('4COZc8xvshn3d5SLB');
  }, []);

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
        
        {/* Redesigned Contact Form Section with improved spacing */}
        <section id="contact-form" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <ContactForm />
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
