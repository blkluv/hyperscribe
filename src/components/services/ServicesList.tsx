
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Laptop, Mail, ArrowRight, CheckCircle, BarChart, Users, Target, Lightbulb, PenTool } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const services = [
  {
    id: "linkedin",
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'LinkedIn Ghostwriting',
    description: 'Position yourself as a thought leader and attract qualified leads.',
    details: [
      'Custom posts that match your tone and expertise',
      'Strategic content calendar aligned with your goals',
      'Audience engagement to grow your network',
      'Performance analytics and optimization recommendations',
    ],
    benefits: [
      'Increased audience engagement and network growth',
      'Consistent brand voice that resonates with your target audience',
      'Strategic content that addresses your audience's pain points',
      'Thought leadership to position you as an industry expert'
    ],
    process: [
      {
        title: "AI Content Foundation",
        icon: <Lightbulb className="h-6 w-6 text-blue-500" />,
        description: "Our AI analyzes trending topics and your audience's preferences to create initial content outlines."
      },
      {
        title: "Expert Human Refinement",
        icon: <PenTool className="h-6 w-6 text-blue-500" />,
        description: "Skilled content specialists refine the AI outputs, adding industry expertise and creative elements."
      },
      {
        title: "Strategic Publishing",
        icon: <Target className="h-6 w-6 text-blue-500" />,
        description: "Content is published at optimal times for maximum engagement based on analytics."
      },
      {
        title: "Performance Analysis",
        icon: <BarChart className="h-6 w-6 text-blue-500" />,
        description: "Comprehensive metrics tracking engagement, reach, and conversions to refine future content."
      }
    ],
    caseStudy: {
      client: "SaaS Analytics Platform",
      results: [
        "250% increase in LinkedIn engagement",
        "35% growth in qualified leads from LinkedIn",
        "15 new partnership opportunities"
      ]
    },
    color: 'from-blue-500 to-indigo-600',
    bgLight: 'bg-blue-50'
  },
  {
    id: "blog",
    icon: <FileText className="h-8 w-8" />,
    title: 'SEO Blog Articles',
    description: 'Boost rankings and turn traffic into customers with conversion-focused blog content.',
    details: [
      'In-depth keyword & competitor research',
      '1,500+ word SEO-optimized articles',
      'Smart internal linking & on-page SEO',
      'Regular performance reporting'
    ],
    benefits: [
      'Higher search engine rankings for targeted keywords',
      'Increased organic traffic to your website',
      'Established authority in your industry',
      'Long-term content assets that continue to drive traffic'
    ],
    process: [
      {
        title: "Keyword Research",
        icon: <Target className="h-6 w-6 text-purple-500" />,
        description: "Strategic identification of high-value keywords with reasonable competition levels."
      },
      {
        title: "AI-Assisted Drafting",
        icon: <Lightbulb className="h-6 w-6 text-purple-500" />,
        description: "Our AI creates comprehensive, SEO-friendly article drafts based on research and keywords."
      },
      {
        title: "Expert Editing",
        icon: <PenTool className="h-6 w-6 text-purple-500" />,
        description: "Content specialists refine and enhance the articles with industry expertise and engaging elements."
      },
      {
        title: "Optimization & Analysis",
        icon: <BarChart className="h-6 w-6 text-purple-500" />,
        description: "Continuous monitoring of article performance with data-driven improvements."
      }
    ],
    caseStudy: {
      client: "B2B SaaS Platform",
      results: [
        "First page rankings for 12 target keywords",
        "127% increase in organic traffic",
        "35% decrease in cost per lead"
      ]
    },
    color: 'from-purple-500 to-indigo-600',
    bgLight: 'bg-purple-50'
  },
  {
    id: "website",
    icon: <Laptop className="h-8 w-8" />,
    title: 'Website Copywriting',
    description: 'Convert more visitors with persuasive website copy that clearly communicates your value proposition and drives action.',
    details: [
      'Strategic website content audit and strategy',
      'Conversion-focused homepage, product, and landing page copy',
      'UX writing for improved user experience',
      'SEO optimization for key pages',
      'A/B testing recommendations for continuous improvement'
    ],
    benefits: [
      'Higher conversion rates on landing pages',
      'Clearer communication of your unique value proposition',
      'Improved user experience through strategic copywriting',
      'Consistent brand voice across your digital presence'
    ],
    process: [
      {
        title: "Website Analysis",
        icon: <Target className="h-6 w-6 text-teal-500" />,
        description: "Comprehensive audit of current website content and conversion performance."
      },
      {
        title: "AI-Powered Drafting",
        icon: <Lightbulb className="h-6 w-6 text-teal-500" />,
        description: "AI creates conversion-focused copy drafts based on your value proposition and target audience."
      },
      {
        title: "Conversion Optimization",
        icon: <PenTool className="h-6 w-6 text-teal-500" />,
        description: "Expert copywriters refine messaging to maximize clarity and persuasiveness."
      },
      {
        title: "A/B Testing & Refinement",
        icon: <BarChart className="h-6 w-6 text-teal-500" />,
        description: "Data-driven testing to continuously improve conversion rates."
      }
    ],
    caseStudy: {
      client: "SaaS HR Platform",
      results: [
        "89% increase in demo requests",
        "42% improvement in page conversion rate",
        "25% reduction in bounce rate"
      ]
    },
    color: 'from-teal-500 to-blue-500',
    bgLight: 'bg-teal-50'
  },
  {
    id: "newsletter",
    icon: <Mail className="h-8 w-8" />,
    title: 'Newsletter Creation',
    description: 'AI-assisted newsletters for SaaS brands to nurture leads, maintain customer engagement, and drive recurring revenue.',
    details: [
      'Weekly or monthly newsletters tailored to your audience',
      'Audience segmentation for personalized messaging',
      'A/B testing subject lines and content formats',
      'Automated workflow setup and management',
      'Detailed analytics and performance optimization'
    ],
    benefits: [
      'Improved customer retention and engagement',
      'Higher lead nurturing effectiveness',
      'Increased recurring revenue through regular audience touchpoints',
      'Brand consistency throughout the customer journey'
    ],
    process: [
      {
        title: "Audience Segmentation",
        icon: <Users className="h-6 w-6 text-sky-500" />,
        description: "Strategic division of your audience for personalized messaging."
      },
      {
        title: "AI-Powered Content Creation",
        icon: <Lightbulb className="h-6 w-6 text-sky-500" />,
        description: "Our AI creates engaging newsletter content tailored to each audience segment."
      },
      {
        title: "Expert Editing & Design",
        icon: <PenTool className="h-6 w-6 text-sky-500" />,
        description: "Content specialists refine the content and apply professional design elements."
      },
      {
        title: "Performance Optimization",
        icon: <BarChart className="h-6 w-6 text-sky-500" />,
        description: "A/B testing and analytics to continuously improve open and click-through rates."
      }
    ],
    caseStudy: {
      client: "SaaS Customer Service Platform",
      results: [
        "42% average open rate (industry avg: 21%)",
        "12% click-through rate (industry avg: 2.5%)",
        "28% increase in user activation"
      ]
    },
    color: 'from-blue-500 to-sky-400',
    bgLight: 'bg-sky-50'
  }
];

const ServicesList = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
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
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Content Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From thought leadership to lead generation, we offer a full spectrum of content services designed specifically for SaaS companies.
          </p>
        </div>
        
        <Tabs defaultValue="services-list" className="w-full mb-12">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-12">
            <TabsTrigger value="services-list" className="text-sm md:text-base py-3">Service Cards</TabsTrigger>
            <TabsTrigger value="services-details" className="text-sm md:text-base py-3">Service Details</TabsTrigger>
          </TabsList>
          
          <TabsContent value="services-list">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants} 
                  className="group"
                >
                  <Card className="h-full flex flex-col rounded-xl overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg relative">
                    {/* Gradient top border */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`}></div>
                    
                    <CardHeader className="pb-4 relative">
                      <div className={`mb-5 w-14 h-14 flex items-center justify-center rounded-lg ${service.bgLight} text-blue-600`}>
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pb-4 grow">
                      <ul className="space-y-3 mb-6">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mt-1 mr-3 p-0.5 rounded-full bg-green-100">
                              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                            <span className="text-muted-foreground text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    
                    <CardFooter className="pt-2 pb-6">
                      <Button 
                        variant="outline"
                        className="w-full border border-blue-200 hover:bg-blue-50 text-blue-600 hover:text-blue-700 rounded-lg group"
                        onClick={() => document.getElementById(`services-details-tab`)?.click()}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="services-details">
            <Tabs defaultValue="linkedin" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10 w-full">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="flex items-center gap-2 py-3"
                    id={`${service.id}-tab`}
                  >
                    <div className={`w-6 h-6 flex items-center justify-center rounded-sm ${service.bgLight} text-blue-600`}>
                      {service.icon}
                    </div>
                    <span className="hidden md:inline">{service.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {services.map((service) => (
                <TabsContent key={service.id} value={service.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                  >
                    {/* Left Column - Service Overview */}
                    <div className="space-y-8">
                      <div>
                        <div className={`mb-6 w-16 h-16 flex items-center justify-center rounded-lg ${service.bgLight}`}>
                          {service.icon}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                        <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold mb-4">Key Benefits</h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <div className="flex items-center justify-center bg-blue-50 p-1 rounded-full">
                                <CheckCircle size={18} className="text-blue-500" />
                              </div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h4 className="text-xl font-semibold mb-4">Case Study Results</h4>
                        <p className="font-medium mb-3">{service.caseStudy.client}</p>
                        <ul className="space-y-2">
                          {service.caseStudy.results.map((result, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <div className="flex items-center justify-center bg-blue-50 p-1 rounded-full">
                                <CheckCircle size={16} className="text-blue-500" />
                              </div>
                              <span className="text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Right Column - Process & Features */}
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-semibold mb-6">Our Process</h4>
                        <div className="space-y-6">
                          {service.process.map((step, i) => (
                            <div key={i} className="flex gap-4">
                              <div className="shrink-0 mt-1">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                  {step.icon}
                                </div>
                                {i !== service.process.length - 1 && (
                                  <div className="w-0.5 h-10 bg-blue-100 mx-auto my-1"></div>
                                )}
                              </div>
                              <div>
                                <h5 className="font-semibold text-lg">{step.title}</h5>
                                <p className="text-muted-foreground">{step.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                        <h4 className="text-xl font-semibold mb-4">Included Features</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.details.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="flex items-center justify-center bg-white p-1 rounded-full mt-1">
                                <CheckCircle size={16} className="text-blue-500" />
                              </div>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>
        </Tabs>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/contact">
            <Button 
              className="rounded-full px-8 py-6 shadow-md hover:shadow-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 group"
            >
              <span>Request Custom Solution</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;
