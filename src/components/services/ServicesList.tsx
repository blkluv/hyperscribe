import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, FileText, DollarSign, BarChart, Laptop, Award, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'LinkedIn Ghostwriting',
    description: 'Position yourself as a thought leader and attract qualified leads.',
    details: [
      'Custom posts that match your tone and expertise',
      'Strategic content calendar aligned with your goals',
      'Audience engagement to grow your network',
      'Performance analytics and optimization recommendations',
    ],
    primary: true
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'SEO Blog Articles',
    description: 'Boost rankings and turn traffic into customers with conversion-focused blog content.',
    details: [
      'In-depth keyword & competitor research',
      '1,500+ word SEO-optimized articles',
      'Smart internal linking & on-page SEO',
      'Regular performance reporting'
    ],
    primary: false
  },
  {
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
    primary: false
  },
  {
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
    primary: false
  }
];

const ServicesList = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Content Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From thought leadership to lead generation, we offer a full spectrum of content services designed specifically for SaaS companies.
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
            <motion.div key={index} variants={itemVariants} className="hover-scale">
              <Card className={`h-full flex flex-col border-0 shadow-md rounded-xl overflow-hidden`}>
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
                  <ul className="space-y-2 mb-10">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;
