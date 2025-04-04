
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 border-t">
      <div className="max-w-7xl mx-auto pt-20 pb-10 px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info with improved visuals */}
          <div className="col-span-1">
            <img 
              src="/hyperscriber_web.svg" 
              alt="HyperScriber Logo" 
              className="mb-4 h-8"
            />
            <p className="text-muted-foreground mb-6">
              AI-powered content agency for SaaS startups that delivers results.
            </p>
          </div>

          {/* Quick Links with improved hover states */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-slate-800">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-blue-600 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 transform -translate-x-2 transition-all duration-200"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-blue-600 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 transform -translate-x-2 transition-all duration-200"></span>
                  <span>Services</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/blog" className="text-muted-foreground hover:text-blue-600 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 transform -translate-x-2 transition-all duration-200"></span>
                  <span>Blog</span>
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-blue-600 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 transform -translate-x-2 transition-all duration-200"></span>
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-muted-foreground hover:text-blue-600 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 transform -translate-x-2 transition-all duration-200"></span>
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-blue-600 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 transform -translate-x-2 transition-all duration-200"></span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* All Services with improved visual style */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-slate-800">All Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-blue-600 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 transform -translate-x-2 transition-all duration-200"></span>
                  <span>LinkedIn Ghostwriting</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-blue-600 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 transform -translate-x-2 transition-all duration-200"></span>
                  <span>SEO Blog Articles</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-blue-600 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 transform -translate-x-2 transition-all duration-200"></span>
                  <span>Website Copywriting</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-blue-600 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 transform -translate-x-2 transition-all duration-200"></span>
                  <span>Newsletter Creation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact with improved visual hierarchy */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-slate-800">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <span className="text-muted-foreground">info@hyperscriber.com</span>
              </li>
              <li className="mt-6">
                <p className="text-sm text-slate-600 mb-3">Ready to boost your content strategy?</p>
                <a href="https://calendly.com/hyperscriber/free-introductory-call" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full justify-between rounded-md bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 group">
                    Book a Free Call
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright with improved styling */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} HyperScriber. All rights reserved. Website by Lorenzo Filips <a href="https://github.com/Desk888" className="hover:text-blue-600 transition-colors">(Desk888)</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
