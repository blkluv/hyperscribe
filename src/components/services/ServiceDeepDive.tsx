
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  FileText, 
  Laptop, 
  Mail, 
  BarChart, 
  Users, 
  Target, 
  Lightbulb,
  PenTool,
  Megaphone,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    id: "linkedin",
    title: "LinkedIn Ghostwriting",
    icon: <MessageSquare className="h-8 w-8" />,
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    summary: "Position yourself as a thought leader and generate qualified leads through strategic LinkedIn content.",
    benefits: [
      "Increased audience engagement and network growth",
      "Consistent brand voice that resonates with your target audience",
      "Strategic content that addresses your audience's pain points",
      "Thought leadership to position you as an industry expert"
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
    features: [
      "Custom posts that match your tone and expertise",
      "Strategic content calendar aligned with your goals",
      "Audience engagement to grow your network",
      "Performance analytics and optimization"
    ],
    caseStudy: {
      client: "SaaS Analytics Platform",
      results: [
        "250% increase in LinkedIn engagement",
        "35% growth in qualified leads from LinkedIn",
        "15 new partnership opportunities"
      ]
    }
  },
  {
    id: "blog",
    title: "SEO Blog Articles",
    icon: <FileText className="h-8 w-8" />,
    color: "from-purple-500 to-indigo-600",
    bgLight: "bg-purple-50",
    summary: "Drive organic traffic and convert visitors with SEO-optimized blog content tailored to your audience.",
    benefits: [
      "Higher search engine rankings for targeted keywords",
      "Increased organic traffic to your website",
      "Established authority in your industry",
      "Long-term content assets that continue to drive traffic"
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
    features: [
      "In-depth keyword & competitor research",
      "1,500+ word SEO-optimized articles",
      "Smart internal linking & on-page SEO",
      "Regular performance reporting"
    ],
    caseStudy: {
      client: "B2B SaaS Platform",
      results: [
        "First page rankings for 12 target keywords",
        "127% increase in organic traffic",
        "35% decrease in cost per lead"
      ]
    }
  },
  {
    id: "website",
    title: "Website Copywriting",
    icon: <Laptop className="h-8 w-8" />,
    color: "from-teal-500 to-blue-500",
    bgLight: "bg-teal-50",
    summary: "Convert more visitors with persuasive website copy that clearly communicates your value proposition.",
    benefits: [
      "Higher conversion rates on landing pages",
      "Clearer communication of your unique value proposition",
      "Improved user experience through strategic copywriting",
      "Consistent brand voice across your digital presence"
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
    features: [
      "Strategic website content audit and strategy",
      "Conversion-focused homepage and landing page copy",
      "UX writing for improved user experience",
      "SEO optimization for key pages"
    ],
    caseStudy: {
      client: "SaaS HR Platform",
      results: [
        "89% increase in demo requests",
        "42% improvement in page conversion rate",
        "25% reduction in bounce rate"
      ]
    }
  },
  {
    id: "newsletter",
    title: "Newsletter Creation",
    icon: <Mail className="h-8 w-8" />,
    color: "from-blue-500 to-sky-400",
    bgLight: "bg-sky-50",
    summary: "Nurture leads and drive customer engagement with AI-assisted newsletters tailored to your audience.",
    benefits: [
      "Improved customer retention and engagement",
      "Higher lead nurturing effectiveness",
      "Increased recurring revenue through regular audience touchpoints",
      "Brand consistency throughout the customer journey"
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
    features: [
      "Weekly or monthly newsletters tailored to your audience",
      "Audience segmentation for personalized messaging",
      "A/B testing subject lines and content formats",
      "Detailed analytics and performance optimization"
    ],
    caseStudy: {
      client: "SaaS Customer Service Platform",
      results: [
        "42% average open rate (industry avg: 21%)",
        "12% click-through rate (industry avg: 2.5%)",
        "28% increase in user activation"
      ]
    }
  }
];

const ServiceDeepDive = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600">
            OUR SERVICES IN DEPTH
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We Elevate Your Content Strategy
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our comprehensive service offerings and discover how our AI-powered, human-refined approach delivers exceptional results.
          </p>
        </div>
        
        <Tabs defaultValue="linkedin" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12 w-full">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="flex items-center gap-2 py-3"
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
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10"
              >
                {/* Left Column - Service Overview */}
                <motion.div variants={itemVariants} className="space-y-8">
                  <div>
                    <div className={`mb-6 w-16 h-16 flex items-center justify-center rounded-lg ${service.bgLight}`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{service.summary}</p>
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
                          <Megaphone size={16} className="text-green-500" />
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                {/* Right Column - Process & Features */}
                <motion.div variants={itemVariants} className="space-y-8">
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
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="flex items-center justify-center bg-white p-1 rounded-full mt-1">
                            <CheckCircle size={16} className="text-blue-500" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Link to="/contact">
                      <Button 
                        className="rounded-full px-8 py-6 shadow-md hover:shadow-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 group"
                      >
                        <span>Get Started with {service.title}</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServiceDeepDive;
