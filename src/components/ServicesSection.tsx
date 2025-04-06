import React from 'react';
import { ArrowRight, MessageSquare, FileText, Laptop, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'LinkedIn Ghostwriting',
    description: 'Build thought leadership and generate leads with professionally crafted LinkedIn content.',
    icon: <MessageSquare className="h-8 w-8" />,
    period: '/month',
    features: ['Daily posts', 'Audience growth', 'Performance metrics', 'Strategic planning'],
  },
  {
    title: 'SEO Blog Articles',
    description: 'Rank higher and drive more organic traffic with SEO-optimized blog content.',
    icon: <FileText className="h-8 w-8" />,
    period: '/month',
    features: ['Monthly articles', 'Keyword research', 'Competitive analysis', 'Internal linking'],
  },
  {
    title: 'Website Copywriting',
    description: 'Convert more visitors with persuasive website copy that communicates your value proposition.',
    icon: <Laptop className="h-8 w-8" />,
    period: '/project',
    features: ['Conversion-Focused Copy', 'Landing Page Copy', 'SEO Optimized Pages', 'Brand Voice Consistency'],
  },
  {
    title: 'Newsletter Creation',
    description: 'AI-assisted newsletters for SaaS brands to nurture leads and maintain customer engagement.',
    icon: <Mail className="h-8 w-8" />,
    period: '/month',
    features: ['Weekly newsletters', 'Audience segmentation', 'Analytics tracking', 'Strategic content planning'],
  }
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Content Solutions for Every SaaS Need
          </h2>
          <p className="text-muted-foreground text-lg">
            We blend AI efficiency with human creativity to deliver content that connects with your audience and drives business results.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={childVariants} className="hover-scale">
              <Card className="h-full flex flex-col border-0 bg-white shadow-md rounded-xl overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="mb-3 w-14 h-14 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-0 grow">
                  <div className="flex items-baseline mb-6">
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button 
                    variant="outline" 
                    className="w-full border-2 rounded-lg group"
                    size="lg"
                    asChild
                  >
                    <Link to="/services">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
          <Button 
            className="rounded-full px-8 py-6 shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            asChild
          >
            <Link to="/services" className="group-hover:opacity-100 transition-opacity hover:shadow-xl transition-all text-sm sm:text-base bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 relative overflow-hidden group">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
