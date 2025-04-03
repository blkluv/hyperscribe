
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-2 z-30">
          <img 
            src="/HyperScriber_Logo.svg"
            loading="lazy"
            alt="Social Stoic Logo" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary relative group',
                location.pathname === link.path 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              )}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}
          <a href="https://calendly.com/hyperscriber/free-introductory-call" target="_blank" rel="noopener noreferrer">
          <Button size="sm" className="ml-2 rounded-full px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
            Book a Call
          </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-primary"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full p-5 bg-white/95 backdrop-blur-lg shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'py-2 transition-colors text-base font-medium relative group',
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                )}
                onClick={closeMenu}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            ))}
            <a href="https://calendly.com/hyperscriber/free-introductory-call" target="_blank" rel="noopener noreferrer">
            <Button className="w-full mt-4 rounded-full">
              Book a Call
            </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
