
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center z-30">
          <img 
            src="/hyperscriber_web.svg"
            alt="HyperScriber Logo" 
            className="h-auto w-auto object-contain"
            loading="eager"
            width={isMobile ? 150 : 180}
            height={isMobile ? 28 : 32}
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
          className="md:hidden text-primary p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed top-[56px] left-0 w-full h-[calc(100vh-56px)] bg-white/98 backdrop-blur-lg shadow-lg animate-fade-in overflow-auto z-50">
          <div className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'py-3 px-2 transition-colors text-base font-medium rounded-md',
                  location.pathname === link.path 
                    ? 'text-blue-700 bg-blue-50' 
                    : 'text-muted-foreground hover:bg-blue-50/50'
                )}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t">
              <a href="https://calendly.com/hyperscriber/free-introductory-call" target="_blank" rel="noopener noreferrer">
                <Button className="w-full rounded-full py-6 text-base bg-gradient-to-r from-blue-600 to-blue-700">
                  Book a Free Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
