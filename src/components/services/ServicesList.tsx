import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const services = [
  {
    id: "linkedin",
    icon: "💼", // LinkedIn emoji
    title: 'AI-Powered LinkedIn Ghostwriting for CRE',
    description: 'Dominate CRE conversations and attract high-value deals with AI-crafted thought leadership content.',
    details: [
      'Hyper-targeted posts for CRE niches (multifamily, industrial, REITs)',
      'AI-driven trend analysis of CRE markets',
      'Engagement scripts to spark investor conversations',
      'Performance dashboards tracking lead quality'
    ],
    benefits: [
      '5-10X more inbound deal inquiries',
      'Position as a "must-follow" industry voice',
      '60% time savings vs manual content creation',
      'Seamless brand alignment'
    ],
    process: [
      {
        title: "CRE Audience Decoding",
        icon: "🔍",
        description: "AI analyzes investor/broker networks and preferences"
      },
      {
        title: "AI Content Alchemy",
        icon: "🧪", 
        description: "Generates data-driven hooks and deal stories"
      },
      {
        title: "Deal-Focused Polish",
        icon: "✍️",
        description: "CRE veterans add transactional insights and CTAs"
      },
      {
        title: "Lead Harvesting",
        icon: "📊",
        description: "Track post-to-meeting conversions"
      }
    ],
    caseStudy: {
      client: "Industrial Brokerage",
      results: [
        "$8M in new deal flow (90 days)",
        "42% of posts generating investor DMs",
        "3x team visibility vs competitors"
      ]
    },
    color: 'from-blue-600 to-sky-500',
    bgLight: 'bg-blue-50'
  },
  {
    id: "blog",
    icon: "📝", 
    title: 'AI-Powered CRE Blog Engine',
    description: 'Dominate search results with data-driven articles that attract investors and brokers.',
    details: [
      'CRE-specific keyword clusters',
      'AI-generated 2,000+ word pillar pages',
      'Strategic internal linking for deals',
      'Monthly performance reports'
    ],
    benefits: [
      '3-5X more organic traffic',
      'Position as industry resource',
      '60% faster content production',
      'Higher-quality leads'
    ],
    process: [
      {
        title: "CRE Keyword Alchemy",
        icon: "🎯",
        description: "AI identifies high-intent search terms"
      },
      {
        title: "AI Content Forge",
        icon: "🔥", 
        description: "Generates long-form guides with market data"
      },
      {
        title: "Broker-Approved Polish",
        icon: "✍️",
        description: "Adds transactional insights and CTAs"
      },
      {
        title: "Deal Conversion Tracking",
        icon: "📈",
        description: "Monitor blog-to-meeting conversions"
      }
    ],
    caseStudy: {
      client: "Multifamily Developer",
      results: [
        "First page for 18 CRE keywords",
        "$3.2M pipeline from blog leads",
        "42% requesting asset tours"
      ]
    },
    color: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50'
  },
  {
    id: "video",
    icon: "🎥", 
    title: 'AI Video Ads for CRE',
    description: 'Stunning property showcases to attract investors and tenants 10x faster.',
    details: [
      'AI-generated video scripts',
      'Automated voiceovers',
      'Virtual staging/tours',
      'Platform-optimized videos'
    ],
    benefits: [
      '3-5X more engagement',
      '60% faster lease-up',
      'Cutting-edge positioning',
      'Scalable production'
    ],
    process: [
      {
        title: "Audience Profiling",
        icon: "👥",
        description: "Analyze buyer/tenant personas"
      },
      {
        title: "AI Video Generation",
        icon: "🤖", 
        description: "Automated scriptwriting + visuals"
      },
      {
        title: "Human Polish",
        icon: "✍️",
        description: "Refine pacing and CTAs"
      },
      {
        title: "Performance Tracking",
        icon: "📊",
        description: "Optimize for conversions"
      }
    ],
    caseStudy: {
      client: "Industrial REIT",
      results: [
        "28% higher tour conversions",
        "400% more social shares",
        "12 offers per video (72hrs)"
      ]
    },
    color: 'from-purple-500 to-fuchsia-500',
    bgLight: 'bg-purple-50'
  },
  {
    id: "ppc",
    icon: "🎯",  
    title: 'AI-Powered PPC for CRE',
    description: 'Hyper-targeted ads that drive qualified leads for investors and brokers.',
    details: [
      'AI-optimized Google/LinkedIn Ads',
      'Precision CRE targeting',
      'Automated bid strategies',
      'Real-time dashboards'
    ],
    benefits: [
      '3-5X more qualified leads',
      '30-50% lower CPA',
      'Faster sales cycles',
      'Competitive insights'
    ],
    process: [
      {
        title: "Audience Intelligence",
        icon: "🔎",
        description: "Analyze buyer personas"
      },
      {
        title: "Campaign Creation",
        icon: "✨", 
        description: "High-converting ad creatives"
      },
      {
        title: "Bid Optimization",
        icon: "⚖️",
        description: "Real-time bid adjustments"
      },
      {
        title: "Performance Tracking",
        icon: "📊",
        description: "Weekly optimizations"
      }
    ],
    caseStudy: {
      client: "Multifamily Developer",
      results: [
        "$1.2M pipeline (90 days)",
        "62% lower cost per lead",
        "28% ad-to-meeting rate"
      ]
    },
    color: 'from-red-500 to-orange-500',
    bgLight: 'bg-red-50'
  }
];

const ServicesList = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-3">AI-Powered CRE Growth Services</h2>
          <p className="text-lg text-muted-foreground">
            Cutting-edge marketing solutions tailored for commercial real estate
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
            >
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className={`lg:col-span-4 p-6 ${service.bgLight} relative`}>
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${service.color}`}></div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`text-3xl`}>{service.icon}</div>
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="mb-6">
                      {service.description}
                    </CardDescription>
                    
                    <Button
                      className={`rounded-full px-5 bg-gradient-to-r ${service.color} text-white`}
                      asChild
                    >
                      <Link to="/contact" className="flex items-center gap-1">
                        <span>Get Started</span>
                        <span>→</span>
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="lg:col-span-8 p-6 bg-white">
                    <div className="mb-6">
                      <h4 className="font-semibold mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span>✔️</span>
                            <span className="text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-4">Process</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.process.map((step, i) => (
                          <div key={i} className="flex gap-3">
                            <div className="text-xl">{step.icon}</div>
                            <div>
                              <h5 className="font-medium">{step.title}</h5>
                              <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`benefits-${service.id}`}>
                        <AccordionTrigger className="font-medium">
                          Key Benefits
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 pt-2">
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span>✅</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;