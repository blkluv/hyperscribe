
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone, Instagram, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 border-t">
      <div className="max-w-7xl mx-auto pt-20 pb-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Company Info with improved typography */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img 
              src="/hyperscriber_web.svg" 
              alt="HyperScriber Logo" 
              className="mb-6 h-auto w-auto max-w-[180px]"
            />
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              AI-powered content agency for SaaS startups that delivers measurable growth and engagement.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <a 
                href="https://www.linkedin.com/company/hyperscriber" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors duration-200 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/hyperscriber" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors duration-200 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links with improved hover states */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6 text-slate-800">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' },
                { name: 'Terms & Conditions', path: '/terms-conditions' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-blue-600 transition-colors flex items-center group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 transition-all duration-200"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* All Services with improved visual style */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6 text-slate-800">All Services</h3>
            <ul className="space-y-4">
              {[
                'LinkedIn Ghostwriting',
                'SEO Blog Articles',
                'Website Copywriting',
                'Newsletter Creation'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-muted-foreground hover:text-blue-600 transition-colors flex items-center group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 transition-all duration-200"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact with improved visual hierarchy */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6 text-slate-800">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <Mail className="h-5 w-5 text-blue-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                <a 
                  href="mailto:info@hyperscriber.com" 
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  info@hyperscriber.com
                </a>
              </li>
              <li className="mt-6">
                <p className="text-sm text-slate-700 mb-3 font-medium">Ready to boost your content strategy?</p>
                <a 
                  href="https://calendly.com/hyperscriber/free-introductory-call" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button 
                    size="sm" 
                    className="w-full justify-between rounded-md bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-sm hover:shadow group"
                  >
                    Book a Free Call
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator with gradient */}
        <div className="mt-14 mb-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>

        {/* Copyright with improved styling */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HyperScriber. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Website by Lorenzo Filips <a href="https://github.com/Desk888" className="hover:text-blue-600 transition-colors inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
              (Desk888) <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
