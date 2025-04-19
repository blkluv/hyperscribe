import React from 'react';
import { ArrowRight, MessageSquare, FileText, Laptop, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const services = [
  {
    id: "linkedin",
    icon: "💼",
    title: 'AI-Powered LinkedIn Ghostwriting',
    description: 'Dominate CRE conversations and attract high-value deals with AI-crafted content',
    period: '/month',
    features: [
      '8 hyper-targeted CRE posts',
      'Investor engagement scripts',
      'Deal-focused CTAs',
      '60% time savings vs manual content creation'
    ],
    color: 'from-blue-600 to-sky-500',
    bgLight: 'bg-blue-50'
  },
  {
    id: "blog",
    icon: "📝",
    title: 'AI CRE Blog Engine', 
    description: 'Rank for commercial real estate keywords and attract qualified leads',
    period: '/month',
    features: [
      '4 data-driven articles',
      '2,000+ word pillar content',
      'Market data visualizations',
      'CRE-specific keyword clusters'
    ],
    color: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50'
  },
  {
    id: "video",
    icon: "🎥",
    title: 'AI Property Videos',
    description: 'Showcase listings with AI-generated tours that convert 10x faster',
    period: '/project',
    features: [
      'AI-generated video scripts',
      'Automated voiceovers',
      'Create short reel ads',
      '3-5X more engagement'
    ],
    color: 'from-purple-500 to-fuchsia-500',
    bgLight: 'bg-purple-50'
  },
  {
    id: "ppc",
    icon: "🎯",
    title: 'AI CRE Ad Campaigns',
    description: 'Hyper-targeted paid media driving investor meetings, not just clicks',
    period: '/month',
    features: [
      'TikTok/Google/LinkedIn/Meta Ads',
      '$0 Set Up Cost',
      'CRE audience modeling',
      'Deal conversion tracking'
    ],
    color: 'from-red-500 to-orange-500',
    bgLight: 'bg-red-50'
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
            AI Content Solutions for Every CRE Need
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
            <motion.div key={index} variants={childVariants} className="group">
              <Card className="h-full flex flex-col border-0 bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                {/* Gradient top border */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`}></div>
                <CardHeader className="pb-4">
                  <div className={`mb-3 w-14 h-14 flex items-center justify-center rounded-lg ${service.bgLight} text-blue-600`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-0 grow">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="mr-2 p-0.5 rounded-full bg-green-100">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button 
                    variant="outline" 
                    className="w-full border border-blue-200 hover:bg-blue-50 text-blue-600 hover:text-blue-700 rounded-lg group"
                    size="sm"
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
            className="rounded-full px-8 py-6 shadow-md hover:shadow-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 group"
            asChild
          >
            <Link to="/services">
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
