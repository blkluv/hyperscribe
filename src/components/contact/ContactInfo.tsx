
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
